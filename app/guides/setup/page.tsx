"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function SetupGuidePage() {
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
          <h1 className="text-3xl font-bold mb-6">Workspace Setup Guide</h1>
          <p className="text-gray-600 mb-4">
            Our comprehensive workspace setup guide is currently being
            finalized. It will include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Step-by-step setup instructions</li>
            <li>Ergonomic best practices</li>
            <li>Equipment recommendations</li>
            <li>Maintenance tips</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Get Notified When Ready</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
