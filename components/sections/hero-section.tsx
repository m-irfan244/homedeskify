import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Home into the Ultimate Work Haven!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Homedeskify offers everything you need to create the perfect home office – from ergonomic furniture to tech setups, 
            tailored for remote workers and freelancers.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="#book-call">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">
                Explore Packages
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}