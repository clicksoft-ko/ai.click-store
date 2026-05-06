"use client";
import Modal from "@/components/(shared)/modal";
import { ModalProps } from "@/lib/props/modal.props";
import React, { useEffect, useState } from "react";
import OrderLabeledItem from "./order-labeled-item";
import { Products } from "@/db/queries/main-page.query";
import IntUpAndDown from "@/components/(shared)/int-up-and-down";
import MTitle from "@/components/(shared)/m-title";
import { toast } from "react-toastify";
import useCartStore from "@/store/cart.store";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import * as cartService from "@/db/services/cart.service";
import CheckBoxL from "@/components/ui/custom/check-box-l";
import ButtonL from "@/components/ui/custom/button-l";
import ServiceButton from "./service-button";
import useSvrCookie from "@/lib/hooks/use-svr-cookie";
import { Settings } from "lucide-react";
import AdminSettingsDialog from "./admin-settings-dialog";

interface Props extends ModalProps {
  product: Products;
  canFit: boolean;
}
export default function ProductModal(props: Props) {
  const { product, canFit } = props;
  const { user } = useSvrCookie();
  const isAdmin = !!user?.admin;
  const {
    fitChecked,
    handleFitChange,
    minCount,
    open,
    setOpen,
    quantity,
    setQuantity,
    saveCart,
    soldOut,
    setSoldOut,
    notice,
    setNotice,
    adminOpen,
    setAdminOpen,
  } = useProductModal(props);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (soldOut) {
      toast.error("품절된 상품입니다.");
      return;
    }
    saveCart();
  }

  async function handleAddAndToCart() {
    if (soldOut) {
      toast.error("품절된 상품입니다.");
      return;
    }
    saveCart({ toCartView: true });
  }

  function handleClose(): void {
    setOpen(false);
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <form
        className="relative flex min-h-[20rem] min-w-[18rem] flex-col items-center pb-2.5"
        onSubmit={handleSubmit}
      >
        <MTitle title="주문하기" className="w-full" />
        {isAdmin && (
          <button
            type="button"
            onClick={() => setAdminOpen(true)}
            aria-label="관리자 설정"
            className="absolute right-3 top-2.5 inline-flex h-7 w-7 items-center justify-center rounded text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
          >
            <Settings className="h-4 w-4" />
          </button>
        )}
        <div className="h-full w-full flex-1">
          <div className="mx-8 my-4 flex flex-col gap-3">
            <OrderLabeledItem title="주문명칭" text={product.smMyung} />
            <OrderLabeledItem title="단위" text={product.danwi} />
            <OrderLabeledItem
              title="금액"
              text={product.danga?.toLocaleString() + " 원"}
            />
            <OrderLabeledItem title="수량">
              <IntUpAndDown
                value={quantity}
                step={product.step}
                min={minCount}
                onChange={setQuantity}
              />
            </OrderLabeledItem>
            <OrderLabeledItem
              title="총 금액"
              text={(quantity * product.danga).toLocaleString() + " 원"}
            />
            {canFit && (
              <CheckBoxL
                className="min-h-[2rem] text-base"
                label="맞춤주문"
                checked={fitChecked}
                onCheckedChange={handleFitChange}
              />
            )}
            {soldOut && (
              <div className="rounded bg-rose-50 px-3 py-2 text-center text-sm font-semibold text-rose-600">
                품절된 상품입니다.
              </div>
            )}
            {notice && (
              <div className="whitespace-pre-wrap rounded border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                <div className="mb-1 text-xs font-semibold text-amber-700">
                  알림
                </div>
                {notice}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-1">
          <ButtonL
            className="w-20 py-6"
            type="button"
            variant="green"
            onClick={handleAddAndToCart}
            disabled={soldOut}
          >
            장바구니
            <br />
            바로가기
          </ButtonL>
          <ButtonL className="w-20 py-6" type="submit" disabled={soldOut}>
            장바구니
            <br />
            담기
          </ButtonL>
          <ButtonL
            className="w-20 py-6"
            variant="destructive"
            onClick={handleClose}
          >
            취소
          </ButtonL>
        </div>
      </form>
      <ServiceButton />
      {isAdmin && (
        <AdminSettingsDialog
          open={adminOpen}
          setOpen={setAdminOpen}
          product={product}
          soldOut={soldOut}
          onSoldOutChange={setSoldOut}
          notice={notice}
          onNoticeChange={setNotice}
        />
      )}
    </Modal>
  );
}

const useProductModal = ({ open, setOpen, product }: Props) => {
  const [quantity, setQuantity] = useState(product.step);
  const [fitChecked, setFitChecked] = useState<boolean>(false);
  const [soldOut, setSoldOut] = useState<boolean>(!!product.soldOut);
  const [notice, setNotice] = useState<string>(product.notice ?? "");
  const [adminOpen, setAdminOpen] = useState<boolean>(false);
  const { push } = useRouter();
  const toggleItemsCountChanged = useCartStore(
    (state) => state.toggleItemsCountChanged,
  );

  const minCount = fitChecked ? 6 : product.step;

  useEffect(() => {
    setFitChecked(product.fit);
  }, [product.fit]);

  useEffect(() => {
    setSoldOut(!!product.soldOut);
  }, [product.soldOut]);

  useEffect(() => {
    setNotice(product.notice ?? "");
  }, [product.notice]);

  useEffect(() => {
    setQuantity(minCount);
  }, [fitChecked, minCount]);

  function handleFitChange(): void {
    setFitChecked((prevFit) => !prevFit);
  }

  function saveCart({ toCartView }: { toCartView?: boolean } = {}) {
    cartService
      .saveCart({
        code: product.smCode,
        fit: fitChecked,
        quantity,
      })
      .then((_) => {
        toggleItemsCountChanged();
        setOpen(false);
        if (toCartView) {
          push(paths.cartView());
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return {
    fitChecked,
    minCount,
    open,
    setOpen,
    quantity,
    setQuantity,
    handleFitChange,
    saveCart,
    soldOut,
    setSoldOut,
    notice,
    setNotice,
    adminOpen,
    setAdminOpen,
  };
};
