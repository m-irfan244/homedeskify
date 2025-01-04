import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Helper function to format PKR amounts
function formatPKR(amount: number) {
  return new Intl.NumberFormat("ur-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: 79999,
      description: "Perfect for getting started with a basic home office setup",
      features: [
        "Ergonomic desk chair",
        "Basic height-adjustable desk",
        "Essential cable management",
        "Basic lighting solution",
      ],
    },
    {
      name: "Professional",
      price: 159999,
      description: "Complete solution for the dedicated remote worker",
      features: [
        "Premium ergonomic chair",
        "Electric height-adjustable desk",
        "Advanced cable management",
        "Professional lighting kit",
        "Dual monitor setup",
        "Ergonomic accessories pack",
      ],
    },
    {
      name: "Executive",
      price: 249999,
      description: "The ultimate home office experience",
      features: [
        "Top-tier ergonomic chair",
        "Premium electric desk",
        "Complete cable solution",
        "Professional lighting system",
        "Triple monitor setup",
        "Premium accessories pack",
        "Sound treatment",
        "1-year warranty",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect package for your home office needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {formatPKR(plan.price)}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">{plan.description}</p>
              </div>
              <div className="px-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8">Get Started</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
