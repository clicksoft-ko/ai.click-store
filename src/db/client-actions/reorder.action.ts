"use server";
import { PaymentItem } from "../models/payment-item";
import { saveCart } from "../services/cart.service";
import { assertNotSoldOut } from "../services/product-sold-out.service";
import { resultWrapper2 } from "@/lib/utils/callback.util";

export async function reorderAction(
  paymentItems: PaymentItem[],
): Promise<{ errors?: string[] }> {
  const { errorMessage } = await resultWrapper2(
    (async () => {
      await assertNotSoldOut(paymentItems.map((item) => item.code));
      for (const item of paymentItems) {
        await saveCart(
          { code: item.code, fit: item.fit, quantity: item.quantity },
          { skipSoldOutCheck: true },
        );
      }
    })(),
  );

  return errorMessage ? { errors: [errorMessage] } : {};
}
