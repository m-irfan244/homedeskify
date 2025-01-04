"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const categories = [
    { id: "chairs", label: "Chairs" },
    { id: "desks", label: "Desks" },
    { id: "accessories", label: "Accessories" },
    { id: "lighting", label: "Lighting" },
    { id: "storage", label: "Storage" },
  ];

  return (
    <Card className="p-6">
      <div className="space-y-8">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={category.id} />
                <Label htmlFor={category.id}>{category.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-4">Price Range</h3>
          <Slider
            defaultValue={[0, 100000]}
            max={100000}
            step={1000}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>PKR {priceRange[0].toLocaleString()}</span>
            <span>PKR {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}