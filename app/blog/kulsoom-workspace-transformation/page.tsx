import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SuccessStoryPage() {
  return (
    <div className="pt-24">
      <article className="max-w-3xl mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/learn" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Learn
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How Homedeskify Transformed My Content Creation Space
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>By Kulsoom Shafa</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
            alt="Kulsoom's Workspace"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            As a LinkedIn Content Creator and the top content creator in Gilgit
            Baltistan, having a professional and inspiring workspace is crucial
            for my creative process. Here's how Homedeskify helped me create the
            perfect content creation studio.
          </p>

          <h2>The Challenge</h2>
          <p>
            Before Homedeskify, I was working from a basic setup that wasn't
            optimized for content creation. I needed a space that would inspire
            creativity and provide the right environment for producing
            high-quality content.
          </p>

          <h2>The Solution</h2>
          <p>
            After consulting with Homedeskify's experts, we developed a
            comprehensive solution that included:
          </p>
          <ul>
            <li>Professional lighting setup for video content</li>
            <li>Ergonomic furniture for long content creation sessions</li>
            <li>High-quality camera and microphone setup</li>
            <li>Customized background design for professional video calls</li>
            <li>Advanced cable management system</li>
          </ul>

          <h2>The Results</h2>
          <p>
            The transformation has significantly improved my content creation
            process:
          </p>
          <ul>
            <li>40% increase in content production efficiency</li>
            <li>Enhanced video and audio quality for LinkedIn content</li>
            <li>Better work-life balance through improved organization</li>
            <li>Professional backdrop for video content and meetings</li>
          </ul>

          <blockquote>
            "The attention to detail in my workspace design has transformed not
            just how I create content, but how I connect with my audience. It's
            an investment that pays off in every piece of content I produce."
          </blockquote>

          <h2>The Impact</h2>
          <p>
            The transformation went beyond just physical changes. The new setup
            has helped me establish a more professional brand presence, improved
            my content quality, and created an inspiring environment that fuels
            my creativity as Gilgit Baltistan's leading content creator.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3>Ready to Transform Your Workspace?</h3>
            <p>
              Experience the same transformation in your content creation space.
              Book a consultation with our experts today.
            </p>
            <Button className="mt-4" asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}