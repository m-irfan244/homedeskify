import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function GuidesList() {
  const guides = [
    {
      title: "The Freelancer's Checklist for Home Office Setup",
      description: "A comprehensive guide to creating the perfect workspace for freelancers.",
      type: "PDF Guide",
      pages: 12
    },
    {
      title: "Remote Work Essentials vs. Nice-to-Haves",
      description: "Learn what equipment you really need for an effective home office.",
      type: "Interactive Guide",
      pages: 8
    },
    {
      title: "The Science of Ergonomics",
      description: "Understanding proper posture and equipment positioning for optimal health.",
      type: "PDF Guide",
      pages: 15
    }
  ];

  return (
    <div className="space-y-6">
      {guides.map((guide) => (
        <Card key={guide.title} className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{guide.type}</span>
                <span>{guide.pages} pages</span>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}