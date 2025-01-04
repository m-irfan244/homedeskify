"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/store/cart-store";
import { useEffect, useState, forwardRef } from "react";

export const CartButton = forwardRef<HTMLButtonElement>((props, ref) => {
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className="relative"
      {...props}
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems()}
        </span>
      )}
    </Button>
  );
})

CartButton.displayName = "CartButton";