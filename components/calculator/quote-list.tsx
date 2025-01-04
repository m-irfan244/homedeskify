"use client";

import { Card } from "@/components/ui/card";
import { CustomItem } from "./custom-item-form";

interface QuoteListProps {
  items: CustomItem[];
}

export function QuoteList({ items }: QuoteListProps) {
  if (items.length === 0) return null;

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Custom Quote Requests</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
              <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                Quote Pending
              </span>
            </div>
            {item.description && (
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
