"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Banknote } from "lucide-react";

interface PaymentOptionsProps {
  selectedMethod: string;
  onMethodChange: (value: string) => void;
}

export function PaymentOptions({
  selectedMethod,
  onMethodChange,
}: PaymentOptionsProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Payment Method</h3>
      <RadioGroup value={selectedMethod} onValueChange={onMethodChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="cod" id="cod" />
          <Label htmlFor="cod" className="flex items-center gap-2">
            <Banknote className="h-4 w-4" />
            Cash on Delivery
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Card Payment
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
