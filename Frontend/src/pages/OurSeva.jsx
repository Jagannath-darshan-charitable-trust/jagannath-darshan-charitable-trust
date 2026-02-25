import { Link } from "react-router-dom";
import { Heart, Utensils, Landmark, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import gosalaImage from "@/assets/Gosala5.webp";
import annabhandarImage from "@/assets/Annabhandar3.webp";
import mandirImage from "@/assets/Mandir6.webp";


const OurSeva = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
          Our Seva
        </h1>
        <p className="mt-2 px-4 font-body text-sm text-primary-foreground/80 md:text-base">
          Three pillars of selfless service for Sanatan Dharma
        </p>
      </section>

      {/* Quick Navigation */}
      <section className="border-b border-border bg-card py-4">
        <div className="container-trust flex flex-wrap items-center justify-center gap-4 px-4">
          {[
            { label: "Gosala", icon: Heart, href: "#gosala" },
            { label: "Annabhandar", icon: Utensils, href: "#annabhandar" },
            { label: "Jagannath Mandir Nirman", icon: Landmark, href: "#mandir" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2 font-body text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              <item.icon size={16} />
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Gosala Section */}
      <section id="gosala" className="section-padding scroll-mt-20">
        <div className="container-trust">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img src={gosalaImage} alt="Gosala - Cow Protection" className="h-96 w-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Heart className="text-primary" size={24} />
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Gosala</h2>
              </div>
              <p className="mb-1 font-body text-base font-medium text-primary">Cow Protection & Care</p>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground text-left md:text-justify">
                Our Gosala provides shelter, nutritious food, medical care, and a loving environment
                for abandoned, injured, and aging cows. Every life is sacred, and protecting Gau Mata
                is our dharmic duty. Currently caring for <strong className="text-foreground">1,200+ cows</strong> across multiple centers.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Cow Adoption Program - ₹1,500/month",
                  "Monthly Cow Care Donation",
                  "Transparent Expense Breakdown",
                  "Medical Care & Veterinary Support",
                  "Regular Photo & Video Updates",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle2 size={16} className="shrink-0 text-impact" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/our-seva/gosala"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 font-body text-sm font-semibold text-cta-foreground transition hover:bg-cta/90"
              >
                View Details <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Annabhandar Section */}
      <section id="annabhandar" className="section-padding scroll-mt-20 bg-muted/50">
        <div className="container-trust">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-3 flex items-center gap-2">
                <Utensils className="text-primary" size={24} />
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Annabhandar</h2>
              </div>
              <p className="mb-1 font-body text-base font-medium text-primary">Mahaprasad Distribution</p>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground text-left md:text-justify">
                Sacred Mahaprasad is distributed daily to thousands of devotees and underprivileged
                families. No one should go hungry - this is the essence of Anna Seva. Our kitchens 
                serve wholesome meals with love, devotion, and purity.
              </p>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between font-body text-sm">
                  <span className="text-muted-foreground">Daily Meals Served</span>
                  <span className="font-semibold text-impact">1,850 / 2,000</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-impact transition-all" style={{ width: "92.5%" }} />
                </div>
                <p className="mt-1 font-body text-xs text-muted-foreground">Help us reach our daily goal!</p>
              </div>

              <ul className="mb-6 space-y-2">
                {[
                  "Sponsor One Meal - ₹50",
                  "Sponsor One Day Meals - ₹5,000",
                  "Monthly Meal Sponsorship",
                  "Festival Special Bhandara",
                  "Corporate Sponsorship Options",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle2 size={16} className="shrink-0 text-impact" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/our-seva/annabhandar"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 font-body text-sm font-semibold text-cta-foreground transition hover:bg-cta/90"
              >
                View Details <ArrowRight size={14} />
              </Link>
            </div>
            <div className="order-1 overflow-hidden rounded-xl shadow-lg md:order-2">
              <img src={annabhandarImage} alt="Annabhandar - Food Distribution" className="h-96 w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Mandir Nirman Section */}
      <section id="mandir" className="section-padding scroll-mt-20">
        <div className="container-trust">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img src={mandirImage} alt="Jagannath Mandir Nirman" className="h-96 w-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Landmark className="text-primary" size={24} />
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Jagannath Mandir Nirman</h2>
              </div>
              <p className="mb-1 font-body text-base font-medium text-primary">Jagannath Temple Construction</p>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground text-left md:text-justify">
                We are building Jagannath temples across India to spread the divine message of Lord Jagannath.
                Each temple becomes a beacon of faith, culture, and community service. Currently 
                <strong className="text-foreground"> 15 temples</strong> are under construction across India.
              </p>

              {/* Proposed locations */}
              <div className="mb-6">
                <p className="mb-3 font-body text-sm font-semibold text-foreground">Proposed Temple Locations:</p>
                <div className="flex flex-wrap gap-2">
                  {["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Hyderabad", "Chennai", "Ahmedabad", "Varanasi"].map((city) => (
                    <span key={city} className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 font-body text-xs text-muted-foreground">
                      <MapPin size={12} className="text-primary" /> {city}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mb-6 space-y-2">
                {[
                  "Brick Donation - ₹501",
                  "Pillar Donation - ₹11,000",
                  "Construction Stage Updates",
                  "Naming Recognition for Major Donors",
                  "Monthly Progress Reports with Photos",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <CheckCircle2 size={16} className="shrink-0 text-impact" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/our-seva/mandir-nirman"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 font-body text-sm font-semibold text-cta-foreground transition hover:bg-cta/90"
              >
                View Details <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-primary">
        <div className="container-trust text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            Every Seva Counts
          </h2>
          <p className="mx-auto mb-6 max-w-2xl font-body text-sm text-primary-foreground/80">
            Whether you sponsor a cow, feed a hungry soul, or lay a brick for the Lord's temple - 
            your contribution creates ripples of blessings across generations.
          </p>
          <Link
            to="/donate"
            className="inline-block rounded-lg bg-cta px-8 py-3.5 font-body text-base font-semibold text-cta-foreground shadow-lg transition hover:bg-cta/90"
          >
            Start Your Seva Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurSeva;
