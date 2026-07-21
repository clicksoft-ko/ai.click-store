"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface PriceNoticeDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function PriceNoticeDialog({
  isOpen: controlledOpen,
  onClose,
}: PriceNoticeDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 오늘 하루 보지 않기 localStorage 키
  const STORAGE_KEY = "hide-price-notice-202608";

  useEffect(() => {
    // 2026년 8월 8일부터는 팝업 표시하지 않음 (8월 7일까지 표시)
    const endDate = new Date(2026, 7, 8);
    const currentDate = new Date();

    if (currentDate >= endDate) {
      return; // 종료 날짜 이후에는 팝업을 표시하지 않음
    }

    // localStorage에서 오늘 날짜와 비교하여 표시 여부 결정
    const today = new Date().toDateString();
    const hiddenDate = localStorage.getItem(STORAGE_KEY);

    if (hiddenDate !== today) {
      // 외부에서 제어하지 않는 경우에만 자동으로 열기
      if (controlledOpen === undefined) {
        setIsOpen(true);
      }
    }
  }, [controlledOpen]);

  // 외부에서 제어하는 경우 해당 값 사용
  const dialogOpen = controlledOpen !== undefined ? controlledOpen : isOpen;

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleConfirm = () => {
    handleClose();
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center font-semibold">
          [공지] 8월 1일 자 제품 판매 가격 인상 안내
        </DialogHeader>

        <div className="flex flex-col space-y-4">
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <p>
              최근 원부자재 및 물품 업체의 공급가 인상으로 인해 부득이하게 용지
              제품의 판매 가격이 인상됩니다.
            </p>
            <p>양해 부탁드립니다.</p>
            <p>
              <span className="font-semibold">인상 일시:</span> 2026년 8월 1일
              주문 건부터 적용
            </p>
            <p>
              <span className="font-semibold">참고사항:</span> 가격 인상 전(7월
              말까지) 주문 건에 대해서는 기존 가격이 유지되오니, 제품 주문 시
              일정을 참고해 주시기 바랍니다.
            </p>
            <p>감사합니다.</p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="hide-today"
              onCheckedChange={(checked) => {
                if (checked) {
                  const today = new Date().toDateString();
                  localStorage.setItem(STORAGE_KEY, today);
                }
                handleClose();
              }}
            />
            <label
              htmlFor="hide-today"
              className="cursor-pointer text-sm text-gray-600"
            >
              오늘 하루 보지 않기
            </label>
          </div>

          <Button onClick={handleConfirm} className="w-full">
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
