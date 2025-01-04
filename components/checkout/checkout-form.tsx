"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useCartStore } from "@/lib/store/cart-store";
import { PaymentOptions } from "./payment-options";
import { SuccessModal } from "./success-modal";

interface CheckoutFormProps {
  onSuccess: () => void;
}

export function CheckoutForm({ onSuccess }: CheckoutFormProps) {
  const clearCart = useCartStore((state) => state.clearCart);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate a random order number
    const newOrderNumber = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
    setOrderNumber(newOrderNumber);

    clearCart();
    setShowSuccess(true);
    setLoading(false);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onSuccess();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" required />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" required />
          </div>

          <div>
            <Label htmlFor="address">Delivery Address</Label>
            <Textarea id="address" required className="resize-none" />
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" required />
          </div>

          <div>
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input id="postalCode" required />
          </div>

          <PaymentOptions
            selectedMethod={paymentMethod}
            onMethodChange={setPaymentMethod}
          />

          <div>
            <Label htmlFor="notes">Order Notes (Optional)</Label>
            <Textarea id="notes" className="resize-none" />
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Processing..." : "Place Order"}
        </Button>
      </form>

      <SuccessModal
        open={showSuccess}
        onClose={handleSuccessClose}
        orderNumber={orderNumber}
      />
    </>
  );
}
