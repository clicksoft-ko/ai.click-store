"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

interface HolidayNoticeDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function HolidayNoticeDialog({
  isOpen: controlledOpen,
  onClose,
}: HolidayNoticeDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 오늘 하루 보지 않기 localStorage 키
  const STORAGE_KEY = "hide-holiday-notice";

  useEffect(() => {
    // 2025년 10월 10일부터는 팝업 표시하지 않음
    const endDate = new Date('2025-10-10');
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
      <DialogContent className="w-fit max-w-sm">
        <DialogHeader className="text-center">
          2025년 추석연휴 안내
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/images/2025_banner.jpg"
            alt="2025년 추석연휴 안내"
            width={300}
            height={300}
            className="rounded-lg"
          />

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
