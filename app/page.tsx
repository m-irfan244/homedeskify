import { HeroSection } from "@/components/sections/hero-section";
import { ValueProposition } from "@/components/sections/value-proposition";
import { FeaturesSection } from "@/components/sections/features-section";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ResourcesPreview } from "@/components/sections/resources-preview";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <FeaturesSection />

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Setup",
                description: "Select from our curated packages or customize your own solution"
              },
              {
                step: "2",
                title: "We Deliver & Install",
                description: "Professional delivery and installation at your convenience"
              },
              {
                step: "3",
                title: "Start Working Better",
                description: "Enjoy your optimized workspace and increased productivity"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResourcesPreview />
      <Testimonials />
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of satisfied professionals who have elevated their home office experience
          </p>
          <Button size="lg" variant="secondary">
            Book a Call Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}