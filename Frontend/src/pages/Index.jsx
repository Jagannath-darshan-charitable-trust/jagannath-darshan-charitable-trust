import { Link } from "react-router-dom";
import { Heart, Utensils, Landmark, Users } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import FounderSection from "@/components/home/FounderSection";
import SevaCardsSection from "@/components/home/SevaCardsSection";
import DonationImpactSection from "@/components/home/DonationImpactSection";
import GallerySection from "@/components/home/GallerySection";
import VolunteerSection from "@/components/home/VolunteerSection";
import FAQSection from "@/components/home/FAQSection";

const impactStats = [
  { number: "1,200+", label: "Cows Protected", icon: Heart },
  { number: "50,000+", label: "Meals Served Monthly", icon: Utensils },
  { number: "15", label: "Temples Under Construction", icon: Landmark },
  { number: "10,000+", label: "Sevaks Nationwide", icon: Users },
];

const testimonials = [
  {
    quote: "Donating to the Gosala project gave me immense peace. Knowing that Gau Mata is being taken care of fills my heart with joy.",
    name: "Smt. Radha Devi",
    location: "Bhubaneswar, Odisha",
  },
  {
    quote: "The Annabhandar seva is truly divine. I have seen thousands of people being fed Mahaprasad with such devotion and love.",
    name: "Sri Mohan Das",
    location: "Puri, Odisha",
  },
  {
    quote: "Contributing to the Jagannath Mandir Nirman project feels like building a bridge to the divine. Jai Jagannath!",
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
          <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Our Impact
          </h2>
          <div className="mx-auto mb-10 h-1 w-16 rounded bg-accent" />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {impactStats.map((stat, i) => (
              <div
                key={stat.label}
                className="animate-count-up rounded-xl border border-border bg-card p-6 text-center shadow-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <stat.icon className="mx-auto mb-3 text-impact" size={28} />
                <p className="font-heading text-2xl font-bold text-impact md:text-3xl">
                  {stat.number}
                </p>
                <p className="mt-1 font-body text-xs font-medium text-muted-foreground md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seva in Action Gallery */}
      <GallerySection />

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-trust text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-primary-foreground md:text-4xl">
            Become a Sevak Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-body text-base text-primary-foreground/80">
            Your small contribution can make a huge difference. Join thousands of devotees who are serving
            Gau Mata, feeding the hungry, and building temples for Lord Jagannath.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/donate"
              className="rounded-lg bg-cta px-8 py-3.5 font-body text-base font-semibold text-cta-foreground shadow-lg transition-all hover:bg-cta/90"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-primary-foreground/30 px-8 py-3.5 font-body text-base font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-trust">
          <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Words from Our Sevaks
          </h2>
          <div className="mx-auto mb-10 h-1 w-16 rounded bg-accent" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 text-2xl text-accent">"</div>
                <p className="mb-4 font-body text-sm italic leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div className="border-t border-border pt-3">
                  <p className="font-body text-sm font-semibold text-foreground">{testimonial.name}</p>
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
