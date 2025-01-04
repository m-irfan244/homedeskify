"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/constants/office-items";

export interface CustomItem {
  name: string;
  description: string;
  category: string;
}

interface CustomItemFormProps {
  onSubmit: (item: CustomItem) => void;
}

export function CustomItemForm({ onSubmit }: CustomItemFormProps) {
  const [item, setItem] = useState<CustomItem>({
    name: "",
    description: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (item.name && item.category) {
      onSubmit(item);
      setItem({ name: "", description: "", category: "" });
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Request Custom Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={item.category}
            onValueChange={(value) => setItem({ ...item, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="name">Item Name</Label>
          <Input
            id="name"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
            placeholder="e.g., Custom Gaming Chair"
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Specifications/Requirements</Label>
          <Textarea
            id="description"
            value={item.description}
            onChange={(e) => setItem({ ...item, description: e.target.value })}
            placeholder="Describe your requirements, specifications, or preferences..."
            className="h-24"
          />
        </div>

        <Button type="submit" className="w-full">
          Request Quote
        </Button>
      </form>
    </Card>
  );
}
