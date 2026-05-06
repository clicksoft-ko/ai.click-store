"use client";
import Modal from "@/components/(shared)/modal";
import MTitle from "@/components/(shared)/m-title";
import { Textarea } from "@/components/ui/textarea";
import ButtonL from "@/components/ui/custom/button-l";
import { Products } from "@/db/queries/main-page.query";
import * as productSoldOutService from "@/db/services/product-sold-out.service";
import * as productNoticeService from "@/db/services/product-notice.service";
import { QKey } from "@/db/keys";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: Products;
  soldOut: boolean;
  onSoldOutChange: (next: boolean) => void;
  notice: string;
  onNoticeChange: (next: string) => void;
}

export default function AdminSettingsDialog({
  open,
  setOpen,
  product,
  soldOut,
  onSoldOutChange,
  notice,
  onNoticeChange,
}: Props) {
  const queryClient = useQueryClient();
  const [draft, setDraft] = useState(notice);
  const [soldOutLoading, setSoldOutLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    if (open) setDraft(notice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function invalidate() {
    queryClient.invalidateQueries({ queryKey: [QKey.fetchBunryuObjectList] });
  }

  async function handleToggleSoldOut() {
    setSoldOutLoading(true);
    try {
      const next = await productSoldOutService.toggleSoldOut(product.smCode);
      onSoldOutChange(next);
      invalidate();
      toast.success(next ? "품절 처리되었습니다." : "품절이 해제되었습니다.");
    } catch (error: any) {
      toast.error(error?.message ?? "품절 상태 변경 실패");
    } finally {
      setSoldOutLoading(false);
    }
  }

  async function handleSaveNotice() {
    setSaveLoading(true);
    try {
      const saved = await productNoticeService.saveNotice(product.smCode, draft);
      onNoticeChange(saved);
      invalidate();
      toast.success(saved ? "알림이 저장되었습니다." : "알림이 삭제되었습니다.");
    } catch (error: any) {
      toast.error(error?.message ?? "알림 저장 실패");
    } finally {
      setSaveLoading(false);
    }
  }

  async function handleDeleteNotice() {
    setDeleteLoading(true);
    try {
      await productNoticeService.deleteNotice(product.smCode);
      onNoticeChange("");
      setDraft("");
      invalidate();
      toast.success("알림이 삭제되었습니다.");
    } catch (error: any) {
      toast.error(error?.message ?? "알림 삭제 실패");
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex min-w-[20rem] max-w-[24rem] flex-col">
        <MTitle title="관리자 설정" className="w-full" />

        <section className="mx-2 mt-4 flex items-center justify-between gap-3 rounded border border-gray-200 px-3 py-2">
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-gray-700">품절 관리</div>
            <div className="text-xs text-gray-500">
              {soldOut ? "현재 품절 상태입니다." : "정상 판매 중입니다."}
            </div>
          </div>
          <ButtonL
            type="button"
            variant={soldOut ? "green" : "destructive"}
            isLoading={soldOutLoading}
            onClick={handleToggleSoldOut}
          >
            {soldOut ? "품절 해제" : "품절 처리"}
          </ButtonL>
        </section>

        <section className="mx-2 mt-3 flex flex-col gap-2 rounded border border-gray-200 px-3 py-2">
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-gray-700">알림 메시지</div>
            <div className="text-xs text-gray-500">
              저장된 문구는 모든 고객에게 주문 모달 하단에 표시됩니다.
            </div>
          </div>
          <Textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="고객에게 보일 알림 문구"
            rows={4}
          />
          <div className="flex justify-end gap-1">
            {notice && (
              <ButtonL
                type="button"
                variant="destructive"
                isLoading={deleteLoading}
                onClick={handleDeleteNotice}
              >
                삭제
              </ButtonL>
            )}
            <ButtonL
              type="button"
              isLoading={saveLoading}
              onClick={handleSaveNotice}
              disabled={draft.trim() === notice.trim()}
            >
              저장
            </ButtonL>
          </div>
        </section>

        <div className="mx-2 mt-4 flex justify-end">
          <ButtonL
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            닫기
          </ButtonL>
        </div>
      </div>
    </Modal>
  );
}
