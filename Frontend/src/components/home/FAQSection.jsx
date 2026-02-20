import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/primitives";

const faqs = [
  {
    q: "Is my donation eligible for tax exemption?",
    a: "Yes All donations to Jagannath Darshan Charitable Trust are eligible for tax exemption under Section 80G of the Income Tax Act. You will receive an 80G receipt via email after your donation.",
  },
  {
    q: "How can I adopt a cow at the Gosala?",
    a: "You can adopt a cow by visiting our Donate page and selecting 'Gosala - Cow Protection'. We offer monthly adoption plans starting at ₹1,500/month. You'll receive regular updates and photos of your adopted cow.",
  },
  {
    q: "Where are the temples being constructed?",
    a: "We are currently building Jagannath temples across major cities in India including Delhi, Mumbai, Bengaluru, Kolkata, Hyderabad, Chennai, Ahmedabad, and Varanasi. Visit our 'Our Seva' page for detailed project updates.",
  },
  {
    q: "How is the donation money utilized?",
    a: "We maintain 100% transparency. Every donation is tracked and used exclusively for its designated purpose — cow care, meal distribution, or Jagannath temple construction. Annual audit reports are published publicly.",
  },
  {
    q: "Can I volunteer with the trust?",
    a: "Absolutely We welcome volunteers from all over India. You can help at our Gosala, assist in Mahaprasad preparation, or contribute to Jagannath temple construction projects. Contact us through the Contact page to register.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-trust mx-auto max-w-3xl">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto mb-10 h-1 w-16 rounded bg-accent" />
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-xl border border-border bg-card px-5 shadow-sm"
          >
            <AccordionTrigger className="py-4 font-body text-sm font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="pb-4 font-body text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
