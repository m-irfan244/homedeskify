export interface OfficeItem {
  id: string;
  category: string;
  name: string;
  price: number;
  essential: boolean;
  description: string;
}

export const officeItems: OfficeItem[] = [
  {
    id: "chair-basic",
    category: "Chairs",
    name: "Basic Ergonomic Chair",
    price: 24999,
    essential: true,
    description: "Entry-level ergonomic office chair with basic adjustments",
  },
  {
    id: "chair-premium",
    category: "Chairs",
    name: "Premium Ergonomic Chair",
    price: 49999,
    essential: true,
    description:
      "High-end ergonomic chair with advanced adjustments and premium materials",
  },
  {
    id: "desk-basic",
    category: "Desks",
    name: "Basic Standing Desk",
    price: 39999,
    essential: true,
    description: "Manual height-adjustable desk",
  },
  {
    id: "desk-premium",
    category: "Desks",
    name: "Premium Electric Desk",
    price: 79999,
    essential: true,
    description: "Electric height-adjustable desk with memory settings",
  },
  {
    id: "monitor-single",
    category: "Monitors",
    name: '27" Monitor',
    price: 34999,
    essential: true,
    description: "27-inch 4K monitor with ergonomic stand",
  },
  {
    id: "monitor-dual",
    category: "Monitors",
    name: 'Dual 27" Monitors',
    price: 69999,
    essential: false,
    description: "Two 27-inch 4K monitors with mounting arm",
  },
  {
    id: "lighting-basic",
    category: "Lighting",
    name: "Basic Desk Lamp",
    price: 4999,
    essential: true,
    description: "Adjustable LED desk lamp",
  },
  {
    id: "lighting-premium",
    category: "Lighting",
    name: "Premium Lighting Kit",
    price: 14999,
    essential: false,
    description: "Professional lighting setup with multiple light sources",
  },
];

export const categories = Array.from(
  new Set(officeItems.map((item) => item.category))
);
