import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Kulsoom Shafa",
      role: "LinkedIn Content Creator",
      content:
        "As Gilgit Baltistan's top content creator, Homedeskify transformed my content creation space into a professional studio. The setup has significantly improved my content quality!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      content:
        "The custom solution perfectly fits my space and workflow. Their team really understood my needs as a creative professional.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Remote Team Lead",
      content:
        "98% productivity improvement since switching to Homedeskify. The premium setup was worth every penny.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
