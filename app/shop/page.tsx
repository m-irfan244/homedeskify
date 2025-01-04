import { ProductGrid } from "@/components/sections/product-grid";
import { ProductFilters } from "@/components/sections/product-filters";
import { useState } from "react";

export default function ShopPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Shop Home Office Essentials
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our curated collection of ergonomic furniture and accessories
            </p>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductFilters />
            </div>
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}