"use client";
import React, { useState } from "react";
import { Products } from "@/db/queries/main-page.query";
import Image from "next/image";
import ProductModal from "./product-modal/product-modal";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import { cn } from "@/lib/utils/shadcn.util";

interface Props extends BunryuObjectProps {
  product: Products;
  canFit: boolean;
}

export default function ProductItem({ product, canFit }: Props) {
  const { danga, danwi, smMyung, src, soldOut } = product;
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <ProductModal
        open={open}
        setOpen={setOpen}
        product={product}
        canFit={canFit}
      />
      <li
        className={cn(
          "mw-48 relative m-2 flex max-h-80 w-auto flex-col items-center justify-between rounded px-2 py-3 shadow transition-transform duration-100 hover:scale-105",
          soldOut && "opacity-60",
        )}
        onClick={handleClick}
      >
        <Image
          className={cn(
            "w-auto flex-1 overflow-hidden rounded object-scale-down object-left-top pb-1",
            soldOut && "grayscale",
          )}
          src={src}
          alt="상품 이미지"
          width={300}
          height={500}
        />

        {soldOut && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="rounded bg-rose-600/90 px-3 py-1 text-base font-bold text-white shadow">
              품절
            </span>
          </div>
        )}

        <div className="flex w-full flex-col items-start">
          <div className="text-base text-blue-900">{smMyung}</div>
          <div className="text-xs text-gray-500">{danwi}</div>
          <div className="text-base font-bold text-rose-500">
            {danga.toLocaleString()}원
          </div>
        </div>
      </li>
    </>
  );
}
