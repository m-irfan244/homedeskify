import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              About Homedeskify
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A project by 4 Gene Technologies, transforming home offices into
              productive, comfortable, and inspiring workspaces.
            </p>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Homedeskify was born from 4 Gene Technologies' vision to
                revolutionize remote work environments. As a leading technology
                company, we recognized the growing need for professional-grade
                home office solutions.
              </p>
              <p className="text-gray-600">
                Backed by 4 Gene Technologies' expertise in innovation and
                technology, we combine ergonomic excellence with cutting-edge
                solutions to create workspaces that inspire productivity and
                well-being.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Modern office space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Gene Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Powered by 4 Gene Technologies
            </h2>
            <p className="text-gray-600 mb-8">
              As a project of 4 Gene Technologies, we leverage years of
              expertise in technology and innovation to deliver exceptional home
              office solutions. Our parent company's commitment to excellence
              drives everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of professionals who have elevated their home office
            experience with Homedeskify, a 4 Gene Technologies project.
          </p>
          <Button size="lg" variant="secondary">
            Book a Call Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
