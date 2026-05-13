"use server";
import db from "@/db/db";
import { requireAdmin } from "@/lib/utils/user.util";
import { resultWrapper2 } from "@/lib/utils/callback.util";

export async function getSoldOutCodes(): Promise<string[]> {
  const list = await db.productSoldOut.findMany({
    where: { soldOut: true },
    select: { smCode: true },
  });
  return list.map((p) => p.smCode);
}

export async function getSoldOutMessage(
  codes: string[],
): Promise<string | null> {
  const { errorMessage } = await resultWrapper2(assertNotSoldOut(codes));
  return errorMessage ?? null;
}

export async function assertNotSoldOut(codes: string[]): Promise<void> {
  const uniqueCodes = Array.from(new Set(codes.filter(Boolean)));
  if (uniqueCodes.length === 0) return;

  const soldOutList = await db.productSoldOut.findMany({
    where: { smCode: { in: uniqueCodes }, soldOut: true },
    select: { smCode: true },
  });
  if (soldOutList.length === 0) return;

  const names = await db.productListSub.findMany({
    where: { smCode: { in: soldOutList.map((s) => s.smCode) } },
    select: { smCode: true, smMyung: true },
  });
  const nameMap = new Map(names.map((n) => [n.smCode, n.smMyung]));
  const labels = soldOutList.map((s) => nameMap.get(s.smCode) ?? s.smCode);
  throw new Error(`품절된 상품이 포함되어 있어 진행할 수 없습니다: ${labels.join(", ")}`);
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
