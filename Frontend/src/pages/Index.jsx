import { Link } from "react-router-dom";
import { Heart, Utensils, Landmark, Users, Quote } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import FounderSection from "@/components/home/FounderSection";
import SevaCardsSection from "@/components/home/SevaCardsSection";
import DonationImpactSection from "@/components/home/DonationImpactSection";
import GallerySection from "@/components/home/GallerySection";
import VolunteerSection from "@/components/home/VolunteerSection";
import FAQSection from "@/components/home/FAQSection";

const impactStats = [
  { number: "1,200+", label: "Cows Protected", icon: Heart, gradient: "from-rose-500/20 to-rose-500/5" },
  { number: "50,000+", label: "Bhog Served Monthly", icon: Utensils, gradient: "from-amber-500/20 to-amber-500/5" },
  { number: "15", label: "Temples Under Construction", icon: Landmark, gradient: "from-emerald-500/20 to-emerald-500/5" },
  { number: "10,000+", label: "Sevaks Nationwide", icon: Users, gradient: "from-blue-500/20 to-blue-500/5" },
];

const testimonials = [
  {
    quote: "Donating to the Sri Jagannath Gosala project gave me immense peace. Knowing that Gau Mata is being taken care of fills my heart with joy.",
    name: "Smt. Radha Devi",
    location: "Bhubaneswar, Odisha",
  },
  {
    quote: "The Sri Jagannath Annabhandar seva is truly divine. I have seen thousands of people being fed Mahaprasad with such devotion and love.",
    name: "Sri Mohan Das",
    location: "Puri, Odisha",
  },
  {
    quote: "Contributing to the Sri Jagannath Mandir Nirman project feels like building a bridge to the divine. Jai Jagannath!",
    name: "Sri Ramesh Panda",
    location: "Cuttack, Odisha",
  },
];

const Index = () => {
  return (
    <div>
      <HeroSection />
      <VisionSection />
      <FounderSection />
      <SevaCardsSection />

      {/* How Your Donation Helps */}
      <DonationImpactSection />

      {/* Impact Stats */}
      <section className="section-padding">
        <div className="container-trust">
          <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Our Impact
          </h2>
          <div className="section-divider">
            <span className="divider-icon">✦</span>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {impactStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${stat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="text-impact" size={28} />
                  </div>
                  <p className="font-heading text-3xl font-bold text-impact md:text-4xl">
                    {stat.number}
                  </p>
                  <p className="mt-2 font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seva in Action Gallery */}
      <GallerySection />

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden bg-primary">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-primary-foreground/10" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-primary-foreground/5" />

        <div className="container-trust relative text-center">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Be Part of the Change
          </p>
          <h2 className="mb-4 font-heading text-2xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Become a Sevak Today
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Your small contribution can make a huge difference. Join thousands of devotees who are serving
            Gau Mata, feeding the hungry, and building temples for Lord Jagannath.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/donate"
              className="btn-glow rounded-xl bg-cta px-10 py-4 font-body text-base font-bold text-cta-foreground shadow-lg transition-all hover:bg-cta/90 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border-2 border-primary-foreground/25 px-10 py-4 font-body text-base font-semibold text-primary-foreground transition-all hover:border-accent/50 hover:bg-primary-foreground/10 hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-trust">
          <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Words from Our Sevaks
          </h2>
          <div className="section-divider">
            <span className="divider-icon">✦</span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="group relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Accent left border */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-accent/40 transition-all duration-300 group-hover:bg-accent" />
                
                {/* Large decorative quote mark */}
                <div className="mb-4 flex items-center gap-2">
                  <Quote className="text-accent/40" size={24} />
                </div>

                <p className="mb-5 font-body text-sm italic leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-body text-sm font-bold text-foreground">{testimonial.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <VolunteerSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Index;
