"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CheckoutForm } from "./checkout-form";
import { OrderSummary } from "./order-summary";
import { useCartStore } from "@/lib/store/cart-store";

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CheckoutModal({ open, onOpenChange }: CheckoutModalProps) {
  const { items, totalPrice } = useCartStore();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Checkout</SheetTitle>
          <SheetDescription>
            Complete your order by providing your details below.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          <OrderSummary items={items} total={totalPrice()} />
          <CheckoutForm onSuccess={() => onOpenChange(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
