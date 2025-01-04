"use client";

import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";

interface BudgetSummaryProps {
  selectedItems: string[];
  totalCost: number;
}

export function BudgetSummary({
  selectedItems,
  totalCost,
}: BudgetSummaryProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Summary</h3>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Selected Items:</span>
          <span>{selectedItems.length}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total Cost:</span>
          <span className="text-primary">{formatPrice(totalCost)}</span>
        </div>
      </div>
    </Card>
  );
}
