import { Button } from "@/components/ui/button";
import { BlogPreview } from "@/components/sections/blog-preview";
import { VideoSection } from "@/components/sections/video-section";
import { GuidesList } from "@/components/sections/guides-list";
import { ResourceCard } from "@/components/sections/resource-card";
import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Work Smarter Hub
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our expert tips, guides, and resources to create the
              workspace you deserve and maximize your productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section - Moved to top */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Productivity Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ResourceCard
              title="Budget Calculator"
              description="Calculate the cost of your ideal home office setup"
              type="tool"
              href="/tools/budget-calculator"
            />
            <ResourceCard
              title="Workspace Planner"
              description="Interactive tool to plan your perfect home office layout"
              type="tool"
              href="/tools/workspace-planner"
            />
            <ResourceCard
              title="Setup Guide"
              description="Comprehensive guide to setting up your workspace"
              type="pdf"
              href="/guides/setup"
            />
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Latest Articles
          </h2>
          <BlogPreview />
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Video Tutorials
          </h2>
          <VideoSection />
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Free Guides
          </h2>
          <GuidesList />
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
                alt="Kulsoom's Workspace Transformation"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="py-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                "My productivity increased by 40% after redesigning my
                workspace"
              </h3>
              <p className="text-gray-600 mb-6">
                Kulsoom Shafa, a software engineer, revolutionized her
                work-from-home experience with our custom workspace solution.
              </p>
              <Button asChild>
                <Link href="/blog/kulsoom-workspace-transformation">
                  Read Full Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book a consultation with our experts and start your journey to a
            more productive workspace.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
