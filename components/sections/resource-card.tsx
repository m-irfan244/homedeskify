import { Card } from "@/components/ui/card";
import { Download, Layout, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  type: "tool" | "pdf" | "spreadsheet";
  href: string;
}

export function ResourceCard({ title, description, type, href }: ResourceCardProps) {
  const icons = {
    tool: Layout,
    pdf: Download,
    spreadsheet: Calculator
  };

  const Icon = icons[type];

  return (
    <Card className="p-6">
      <Icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" asChild>
        <Link href={href}>
          Access Resource
        </Link>
      </Button>
    </Card>
  );
}