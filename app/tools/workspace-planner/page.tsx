"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WorkspacePlannerPage() {
  return (
    <div className="pt-24">
      <div className="container">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/learn" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Learn
            </Link>
          </Button>
        </div>

        {/* Main Content */}
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-6">Workspace Planner</h1>
          <p className="text-gray-600 mb-4">
            Our interactive workspace planner is currently under development.
            Soon, you'll be able to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Design your workspace layout in 3D</li>
            <li>Try different furniture arrangements</li>
            <li>Get ergonomic recommendations</li>
            <li>Save and share your designs</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Get Notified When Ready</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
