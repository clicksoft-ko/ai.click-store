"use server";
import db from "@/db/db";
import { requireAdmin } from "@/lib/utils/user.util";

export async function getSoldOutCodes(): Promise<string[]> {
  const list = await db.productSoldOut.findMany({
    where: { soldOut: true },
    select: { smCode: true },
  });
  return list.map((p) => p.smCode);
}

export async function toggleSoldOut(smCode: string): Promise<boolean> {
  await requireAdmin();
  if (!smCode) {
    throw new Error("상품코드가 없습니다.");
  }

  const existing = await db.productSoldOut.findUnique({
    where: { smCode },
  });

  if (existing) {
    const updated = await db.productSoldOut.update({
      where: { smCode },
      data: { soldOut: !existing.soldOut },
    });
    return updated.soldOut;
  }

  const created = await db.productSoldOut.create({
    data: { smCode, soldOut: true },
  });
  return created.soldOut;
}
