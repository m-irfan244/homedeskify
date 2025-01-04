import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/constants/blog-posts";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.slug);

  if (!post) {
    notFound();
  }

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
          <div className="flex items-center gap-4 text-sm text-primary mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>By {post.author.name}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">About the Author</h3>
          <p className="text-gray-600">
            {post.author.name} - {post.author.role}
          </p>
        </div>
      </article>
    </div>
  );
}
