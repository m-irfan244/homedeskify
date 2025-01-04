import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Video, Download } from "lucide-react";
import Link from "next/link";

export function ResourcesPreview() {
  const resources = [
    {
      title: "Expert Guides",
      description: "Access our comprehensive guides on workspace optimization",
      icon: BookOpen,
      count: "15+ Guides"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step tutorials on office setup and ergonomics",
      icon: Video,
      count: "20+ Videos"
    },
    {
      title: "Free Templates",
      description: "Download workspace planning and productivity templates",
      icon: Download,
      count: "10+ Templates"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Free Resources
          </h2>
          <p className="text-lg text-gray-600">
            Explore our collection of guides, tutorials, and tools to optimize your workspace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {resources.map((resource) => (
            <Card key={resource.title} className="p-6">
              <resource.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <p className="text-sm text-primary font-medium">{resource.count}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/learn" className="flex items-center gap-2">
              Explore All Resources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}