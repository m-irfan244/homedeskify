import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogPost } from "@/lib/constants/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-sm text-primary font-medium">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <Button variant="link" className="px-0" asChild>
          <Link href={`/blog/${post.id}`}>Read More</Link>
        </Button>
      </div>
    </Card>
  );
}
