import { Card } from "@/components/ui/card";
import { Package, Sliders, PiggyBank, Heart } from "lucide-react";

export function ValueProposition() {
  const values = [
    {
      icon: Package,
      title: "Convenience",
      description: "We deliver everything you need to your doorstep"
    },
    {
      icon: Sliders,
      title: "Customization",
      description: "Tailored solutions for your unique workspace needs"
    },
    {
      icon: PiggyBank,
      title: "Affordability",
      description: "Flexible rental plans for every budget"
    },
    {
      icon: Heart,
      title: "Health & Productivity",
      description: "Ergonomic setups designed for comfort and efficiency"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="p-6">
              <value.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}