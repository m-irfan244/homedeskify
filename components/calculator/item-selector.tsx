"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OfficeItem } from "@/lib/constants/office-items";
import { formatPrice } from "@/lib/utils";

interface ItemSelectorProps {
  items: OfficeItem[];
  selectedItems: string[];
  onItemToggle: (itemId: string) => void;
  category: string;
}

export function ItemSelector({
  items,
  selectedItems,
  onItemToggle,
  category,
}: ItemSelectorProps) {
  const categoryItems = items.filter((item) => item.category === category);

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <div className="space-y-4">
        {categoryItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-3">
            <Checkbox
              id={item.id}
              checked={selectedItems.includes(item.id)}
              onCheckedChange={() => onItemToggle(item.id)}
            />
            <div className="flex-1">
              <Label htmlFor={item.id} className="font-medium">
                {item.name}
                {item.essential && (
                  <span className="ml-2 text-sm text-primary">
                    (Recommended)
                  </span>
                )}
              </Label>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm font-medium mt-1">
                {formatPrice(item.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
