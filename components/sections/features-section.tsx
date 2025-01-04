import { Card } from "@/components/ui/card";
import { Monitor, Sun, Layout } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Homedeskify?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the perfect blend of comfort, productivity, and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Monitor className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ergonomic Excellence</h3>
            <p className="text-gray-600">
              Scientifically designed setups that prioritize your health and productivity
            </p>
          </Card>
          <Card className="p-6">
            <Layout className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
            <p className="text-gray-600">
              Tailored workspace designs that fit your unique needs and space
            </p>
          </Card>
          <Card className="p-6">
            <Sun className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Professional consultation to create your perfect work environment
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}