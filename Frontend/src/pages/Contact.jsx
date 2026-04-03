import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Heart, HandHeart, Users, HelpCircle, ChevronDown, ChevronUp, Landmark, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import API_BASE_URL from "../config/api";

const faqs = [
  {
    q: "How can I volunteer with the trust?",
    a: "We welcome sevaks from all walks of life! You can join our daily Sri Jagannath Gosala seva, help with Sri Jagannath Annabhandar food preparation, assist in temple construction activities, or support our administrative work. Reach out via the form above or call us directly to get started.",
  },
  {
    q: "Are donations tax-exempt?",
    a: "Yes, all donations to Jagannath Darshan Charitable Trust are eligible for tax exemption under Section 80G of the Income Tax Act. You will receive an official donation receipt via email for your records.",
  },
  {
    q: "Can I visit the Sri Jagannath Gosala or temple construction sites?",
    a: "Absolutely! We encourage visitors to experience our seva first-hand. Our Sri Jagannath Gosala is open daily from 6:00 AM to 7:00 PM. For temple construction site visits, please contact us in advance so we can arrange a guided tour.",
  },
  {
    q: "How is my donation utilized?",
    a: "We maintain complete transparency - 35% goes to Sri Jagannath Gosala (cow feed & medical care), 30% to Sri Jagannath Annabhandar (daily Mahaprasad), 25% to Sri Jagannath Mandir Nirman (temple construction), and 10% to administration. Annual audit reports are publicly available.",
  },
];

const inquiryTypes = [
  { icon: HandHeart, title: "Volunteer", desc: "Join our seva family and make a hands-on impact in your community." },
  { icon: Heart, title: "Donate", desc: "Learn about donation options, recurring giving, and corporate partnerships." },
  { icon: Landmark, title: "Visit Us", desc: "Plan a visit to our Sri Jagannath Gosala, Sri Jagannath Annabhandar kitchen, or temple sites." },
  { icon: Users, title: "Partner", desc: "Explore collaboration opportunities for CSR, events, or outreach programs." },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: data.message, error: "" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ loading: false, success: "", error: data.message || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ loading: false, success: "", error: "Failed to send message. Please try again." });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">Contact Us</h1>
        <p className="mt-2 px-4 font-body text-sm text-primary-foreground/80 md:text-base">We'd love to hear from you</p>
      </section>

      {/* Contact Info + Form (unchanged layout) */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: "Address", text: "Office No: 307, 3rd Floor, Esplanade One Mall, Rasulgarh, Bhubaneswar, Odisha 751010" },
                  { icon: Phone, title: "Phone", text: "+91 79781 75438, +91 73809 6631" },
                  { icon: Mail, title: "Email", text: "jagannathdarshantrust.hq@gmail.com" },
                  { icon: Clock, title: "Office Hours", text: "Mon – Sat: 9:00 AM – 6:00 PM" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="font-body text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-6 border-t border-border pt-6">
                <p className="mb-3 font-body text-sm font-semibold text-foreground">Follow Us</p>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Facebook size={18} />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Send us a Message</h3>

              {status.success && (
                <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-3 text-sm text-green-700">
                  ✅ {status.success}
                </div>
              )}
              {status.error && (
                <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                  ❌ {status.error}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full rounded-lg bg-cta py-3 font-body text-sm font-semibold text-cta-foreground transition hover:bg-cta/90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust">
          <h2 className="mb-3 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">How Can We Help?</h2>
          <p className="mx-auto mb-10 max-w-xl text-center font-body text-sm text-muted-foreground">
            Whether you want to serve, support, or simply connect - we're here for you. Choose what best describes your inquiry:
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {inquiryTypes.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={28} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-trust mx-auto max-w-3xl">
          <HelpCircle className="mx-auto mb-4 text-primary" size={36} />
          <h2 className="mb-3 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Frequently Asked Questions</h2>
          <p className="mx-auto mb-10 max-w-xl text-center font-body text-sm text-muted-foreground">
            Quick answers to the questions we hear most often.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-body text-sm font-semibold text-foreground">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="shrink-0 text-primary" />
                  ) : (
                    <ChevronDown size={18} className="shrink-0 text-muted-foreground" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="border-t border-border px-5 pb-5 pt-3">
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust">
          <h2 className="mb-3 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Find Us on the Map</h2>
          <p className="mx-auto mb-8 max-w-xl text-center font-body text-sm text-muted-foreground">
            Located on the sacred Grand Road in Puri, just minutes from the Jagannath Temple.
          </p>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border shadow-md">
            <iframe
              title="Jagannath Darshan Charitable Trust Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d85.831!3d19.805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPuri%2C+Odisha!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-trust mx-auto max-w-2xl text-center">
          <MessageCircle className="mx-auto mb-4" size={36} />
          <h2 className="mb-3 font-heading text-2xl font-bold md:text-3xl">We Value Your Voice</h2>
          <p className="mx-auto mb-4 max-w-lg font-body text-sm leading-relaxed opacity-90">
            Every message matters to us - whether it's a question, a suggestion, or words of encouragement. Our team typically responds within 24 hours. Your seva and support keep this mission alive.
          </p>
          <p className="font-body text-xs italic opacity-80">
            "सेवा ही सबसे बड़ी पूजा है" - Service is the highest form of worship.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
