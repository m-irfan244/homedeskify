import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BlogPreview() {
  const articles = [
    {
      title: "5 Must-Have Gadgets for Your Home Office",
      excerpt: "Discover the essential tech tools that can transform your productivity...",
      category: "Tech",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a"
    },
    {
      title: "The Ultimate Guide to Ergonomic Furniture",
      excerpt: "Learn how to choose the right ergonomic furniture for your needs...",
      category: "Ergonomics",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa"
    },
    {
      title: "How to Beat Work-from-Home Fatigue",
      excerpt: "Expert tips for maintaining energy and focus throughout your workday...",
      category: "Wellness",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1599045118108-bf9954418b76"
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {articles.map((article) => (
        <Card key={article.title} className="overflow-hidden">
          <div className="relative h-48">
            <img
              src={article.image}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 md:p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm text-primary font-medium">{article.category}</span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">{article.excerpt}</p>
            <Button variant="link" className="px-0" asChild>
              <Link href="#">Read More</Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}