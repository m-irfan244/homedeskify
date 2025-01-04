"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ItemSelector } from "@/components/calculator/item-selector";
import { BudgetSummary } from "@/components/calculator/budget-summary";
import { categories, officeItems } from "@/lib/constants/office-items";
import {
  CustomItemForm,
  CustomItem,
} from "@/components/calculator/custom-item-form";
import { QuoteList } from "@/components/calculator/quote-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BudgetCalculatorPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [customItems, setCustomItems] = useState<CustomItem[]>([]);

  const handleItemToggle = (itemId: string) => {
    setSelectedItems((current) =>
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId]
    );
  };

  const handleCustomItemSubmit = (item: CustomItem) => {
    setCustomItems((current) => [...current, item]);
  };

  const totalCost = selectedItems.reduce((sum, itemId) => {
    const item = officeItems.find((i) => i.id === itemId);
    return sum + (item?.price || 0);
  }, 0);

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/learn" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Learn
            </Link>
          </Button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Budget Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate your home office setup cost or request custom quotes for
            specific items.
          </p>

          <Tabs defaultValue="preset" className="mb-8">
            <TabsList>
              <TabsTrigger value="preset">Preset Items</TabsTrigger>
              <TabsTrigger value="custom">Custom Quote</TabsTrigger>
            </TabsList>

            <TabsContent value="preset">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  {categories.map((category) => (
                    <ItemSelector
                      key={category}
                      category={category}
                      items={officeItems}
                      selectedItems={selectedItems}
                      onItemToggle={handleItemToggle}
                    />
                  ))}
                </div>
                <div className="md:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    <BudgetSummary
                      selectedItems={selectedItems}
                      totalCost={totalCost}
                    />
                    <CustomItemForm onSubmit={handleCustomItemSubmit} />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <QuoteList items={customItems} />
                </div>
                <div className="md:col-span-1">
                  <CustomItemForm onSubmit={handleCustomItemSubmit} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
