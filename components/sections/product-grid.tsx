"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cart-store";
import { formatPrice } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Ergonomic Office Chair",
    price: 24999,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    category: "Chairs",
  },
  {
    id: 2,
    name: "Height Adjustable Desk",
    price: 49999,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c",
    category: "Desks",
  },
  {
    id: 3,
    name: "Monitor Stand",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1532014834043-c6dcba19ba50?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Desk Lamp",
    price: 3499,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38",
    category: "Lighting",
  },
];

export function ProductGrid() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <p className="text-lg font-bold text-primary mb-4">
              {formatPrice(product.price)}
            </p>
            <Button className="w-full" onClick={() => addItem(product)}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
