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
            How Homedeskify Transformed My Work-From-Home Experience
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
            As a software engineer working remotely, I struggled with maintaining productivity and comfort in my makeshift home office. Here's how Homedeskify helped me create the perfect workspace that boosted my productivity by 40%.
          </p>

          <h2>The Challenge</h2>
          <p>
            Before Homedeskify, I was working from a basic desk and chair setup that wasn't designed for long hours of coding. I experienced frequent back pain, and my productivity suffered due to discomfort and poor organization.
          </p>

          <h2>The Solution</h2>
          <p>
            After consulting with Homedeskify's experts, we developed a comprehensive solution that included:
          </p>
          <ul>
            <li>An electric height-adjustable desk for flexibility between sitting and standing</li>
            <li>An ergonomic chair with proper lumbar support</li>
            <li>Dual monitor setup with adjustable monitor arms</li>
            <li>Customized lighting solution to reduce eye strain</li>
            <li>Advanced cable management system</li>
          </ul>

          <h2>The Results</h2>
          <p>
            Within weeks of implementing the new setup, I noticed significant improvements:
          </p>
          <ul>
            <li>40% increase in productivity through better organization and comfort</li>
            <li>Eliminated back pain and reduced eye strain</li>
            <li>Better work-life balance due to improved workspace efficiency</li>
            <li>Enhanced video call setup for better remote collaboration</li>
          </ul>

          <blockquote>
            "The attention to detail in my workspace design has transformed not just how I work, but how I feel about work. It's an investment that pays off every single day."
          </blockquote>

          <h2>The Impact</h2>
          <p>
            The transformation went beyond just physical changes. The new setup helped me establish better work routines, improved my posture, and created a more professional environment for client meetings. The investment in my home office has proven invaluable for my career growth and well-being.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3>Ready to Transform Your Workspace?</h3>
            <p>
              Experience the same transformation in your home office. Book a consultation with our experts today.
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