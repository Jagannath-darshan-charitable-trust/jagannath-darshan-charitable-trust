import { ArrowRight, Utensils, MapPin, Clock, Calendar, Heart, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import annabhandarImage from "@/assets/annabhandar.jpg";
import galleryAnnabhandar from "@/assets/gallery-annabhandar.jpg";

// Reusing existing images for now
const galleryImages = [
  { src: galleryAnnabhandar, alt: "Serving Mahaprasad", caption: "Serving Devotees" },
  { src: annabhandarImage, alt: "Community Kitchen", caption: "Community Kitchen" },
  // Placeholder for more images
];

const Annabhandar = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Annabhandar - Mahaprasad Seva
        </h1>
        <p className="mt-2 font-body text-primary-foreground/80">
          Feeding the Hungry with Love and Devotion
        </p>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                No One Should Go Hungry
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground text-justify">
                In our culture, donating food (Anna Daan) is considered the highest form of charity. Our Annabhandar initiative ensures that thousands of devotees, sadhus, and underprivileged families receive fresh, nutritious, and satvik Mahaprasad every day.
              </p>
              <p className="mb-6 font-body text-base leading-relaxed text-muted-foreground text-justify">
                We believe that food is not just nourishment for the body but also for the soul. That is why every meal is prepared with purity and offered to the Lord before distribution. Currently, we serve over <strong className="text-foreground">2,000+ meals daily</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-accent-foreground">
                  <Utensils size={20} className="text-accent" />
                  <span className="font-heading font-semibold">Satvik Bhojan</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary">
                  <Heart size={20} />
                  <span className="font-heading font-semibold">Served with Love</span>
                </div>
              </div>
            </div>
            <div className="order-1 space-y-4 md:order-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={annabhandarImage} alt="Annabhandar" className="h-64 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats / Daily Routine */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust text-center">
           <h2 className="mb-8 font-heading text-2xl font-bold text-foreground md:text-3xl">Our Daily Impact</h2>
           <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Utensils, title: "Meals Served", value: "2,000+", desc: "Fresh meals served daily to devotees and the needy." },
              { icon: Calendar, title: "Days Active", value: "365", desc: "Our kitchen runs every single day of the year." },
              { icon: MapPin, title: "Distribution Spots", value: "5+", desc: "Serving at key locations near temples and shelters." },
            ].map((item, index) => (
               <div key={index} className="rounded-xl bg-card p-6 shadow-sm border border-border">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-1 font-heading text-2xl font-bold text-foreground">{item.value}</h3>
                <p className="mb-2 font-heading text-sm font-medium text-cta">{item.title}</p>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
           </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-trust">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Glimpses of Anna Seva</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
             {/* Using a placeholder repetition for gallery effect */}
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-md">
                <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 font-heading text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">{img.caption}</p>
              </div>
            ))}
             {/* Duplicating for layout demo */}
            {galleryImages.map((img, i) => (
               <div key={`dup-${i}`} className="group relative overflow-hidden rounded-xl shadow-md hidden md:block">
                <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 font-heading text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-trust text-center">
          <h2 className="mb-10 font-heading text-2xl font-bold md:text-3xl">Support Anna Seva</h2>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-heading text-xl font-bold">Sponsor One Meal</h3>
                <p className="mb-4 text-sm opacity-90">Feed a hungry soul with a customized meal.</p>
                <p className="mb-6 text-2xl font-bold">₹50 <span className="text-sm font-normal">/ meal</span></p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Donate Now</Link>
             </div>
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm border-2 border-cta">
                <div className="mb-2 -mt-4 inline-block rounded bg-cta px-3 py-1 text-xs font-bold text-cta-foreground">Most Popular</div>
                <h3 className="mb-2 font-heading text-xl font-bold">Sponsor a Day</h3>
                <p className="mb-4 text-sm opacity-90">Cover the cost of meals for an entire day.</p>
                <p className="mb-6 text-2xl font-bold">₹5,000 <span className="text-xs font-normal">/ day</span></p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Sponsor Full Day</Link>
             </div>
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-heading text-xl font-bold">Monthly Seva</h3>
                <p className="mb-4 text-sm opacity-90">Become a monthly donor for Annabhandar.</p>
                <p className="mb-6 text-2xl font-bold">Any Amount</p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Donate Monthly</Link>
             </div>
          </div>
        </div>
      </section>

      {/* Visitor Info & CTA */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Volunteer With Us</h2>
                <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                  Experience the joy of serving food with your own hands. We welcome volunteers to join us in cooking and distributing Mahaprasad.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0 text-primary" size={20} />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">Kitchen Location</h4>
                      <p className="text-sm text-muted-foreground">Jagannath Darshan Annabhandar, Near Gundicha Temple, Puri</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 shrink-0 text-primary" size={20} />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">Serving Times</h4>
                      <p className="text-sm text-muted-foreground">Lunch: 12:00 PM – 2:00 PM<br/>Dinner: 7:00 PM – 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-xl bg-muted/30 p-6 text-center">
                 <h3 className="mb-2 font-heading text-xl font-bold text-foreground">Help Us Feed More</h3>
                 <p className="mb-6 font-body text-sm text-muted-foreground">Your contribution ensures that no devotee goes hungry.</p>
                 <Link to="/donate" className="mx-auto inline-flex items-center gap-2 rounded-lg bg-cta px-8 py-3 font-body text-sm font-semibold text-cta-foreground transition hover:bg-cta/90 shadow-md">
                   Donate for Food <ArrowRight size={16} />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Annabhandar;
