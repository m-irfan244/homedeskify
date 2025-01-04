import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How long does delivery and installation take?",
      answer: "We typically complete delivery and installation within 5-7 business days from order confirmation. For custom setups, this may take 10-14 days."
    },
    {
      question: "What's included in the warranty?",
      answer: "All our products come with a standard 1-year warranty covering manufacturing defects and mechanical issues. Premium packages include extended warranty options."
    },
    {
      question: "Can I modify my setup after installation?",
      answer: "Yes! We offer flexible modification options and our team can help you adjust or upgrade your setup as your needs change."
    },
    {
      question: "What if I need to return something?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, we'll handle the return and provide a full refund."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}