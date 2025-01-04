import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/lib/constants/blog-posts";

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Our Blog</h1>
            <p className="text-lg text-gray-600">
              Insights, guides, and expert tips for creating the perfect home
              office environment
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
