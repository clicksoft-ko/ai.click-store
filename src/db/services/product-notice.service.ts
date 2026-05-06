"use server";
import db from "@/db/db";
import { requireAdmin } from "@/lib/utils/user.util";

export async function getNoticeMap(): Promise<Record<string, string>> {
  const list = await db.productNotice.findMany({
    select: { smCode: true, message: true },
  });
  return list.reduce<Record<string, string>>((acc, cur) => {
    if (cur.message) acc[cur.smCode] = cur.message;
    return acc;
  }, {});
}

export async function saveNotice(
  smCode: string,
  message: string,
): Promise<string> {
  await requireAdmin();
  if (!smCode) {
    throw new Error("상품코드가 없습니다.");
  }

  const trimmed = message.trim();

  if (!trimmed) {
    await db.productNotice.deleteMany({ where: { smCode } });
    return "";
  }

  const upserted = await db.productNotice.upsert({
    where: { smCode },
    update: { message: trimmed },
    create: { smCode, message: trimmed },
  });
  return upserted.message;
}

export async function deleteNotice(smCode: string): Promise<void> {
  await requireAdmin();
  if (!smCode) {
    throw new Error("상품코드가 없습니다.");
  }
  await db.productNotice.deleteMany({ where: { smCode } });
}
