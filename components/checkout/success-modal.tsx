"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  orderNumber: string;
}

export function SuccessModal({
  open,
  onClose,
  orderNumber,
}: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center">
            Order Placed Successfully!
          </DialogTitle>
          <DialogDescription className="text-center">
            Thank you for your order. Your order number is #{orderNumber}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-center text-sm text-gray-600">
            We'll send you an email confirmation with order details and tracking
            information.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button asChild onClick={onClose}>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
