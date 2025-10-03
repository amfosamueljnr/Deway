import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Shipping time depends on destination and service type. Typically 3–7 business days.",
  },
  {
    question: "Do you offer door-to-door delivery?",
    answer: "Yes, we provide convenient door-to-door pickup and delivery options.",
  },
  {
    question: "Can I track my package?",
    answer: "Absolutely. You can track your shipment anytime via our DHL tracking integration.",
  },
  {
    question: "What items are restricted?",
    answer: "Hazardous materials, illegal goods, and prohibited items per customs regulations.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Title with Icon */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-primary">
                <HelpCircle className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Get answers to common questions about our services
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4 animate-scale-in">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none bg-card rounded-xl shadow-sm hover:shadow-hover transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                  <span className="font-bold text-lg group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
