"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

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
    // 2026년 9월 1일부터는 팝업 표시하지 않음 (8월 31일까지 표시)
    const endDate = new Date(2026, 8, 1);
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
      <DialogContent className="top-[calc(50dvh_+_(var(--header-height)_+_var(--main-nav-height,0px))/2)] flex max-h-[calc(100dvh_-_var(--header-height)_-_var(--main-nav-height,0px)_-_2rem)] w-[calc(100%-2rem)] max-w-md flex-col rounded-lg">
        <DialogHeader className="text-center font-semibold">
          [공지] 8월 1일 자 제품 판매 가격 인상 안내
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <Image
            src="/images/notice.jpg"
            alt="[공지] 8월 1일 자 제품 판매 가격 인상 안내"
            width={400}
            height={600}
            className="mx-auto h-auto w-auto max-w-full rounded-lg"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex shrink-0 items-center space-x-2">
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
              className="cursor-pointer whitespace-nowrap text-sm text-gray-600"
            >
              오늘 하루 보지 않기
            </label>
          </div>

          <Button onClick={handleConfirm} className="flex-1">
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
