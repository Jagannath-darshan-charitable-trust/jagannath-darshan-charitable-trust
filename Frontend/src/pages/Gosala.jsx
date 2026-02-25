import { ArrowRight, Heart, MapPin, Clock, Calendar, HandHeart, CheckCircle2, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import gosalaImage from "@/assets/Gosala5.webp";
import gosala6 from "@/assets/Gosala6.webp";
import gosala7 from "@/assets/Gosala7.webp";
import gosala8 from "@/assets/Gosala8.webp";
import gosala9 from "@/assets/Gosala9.webp";
import gosala10 from "@/assets/Gosala10.webp";
import gosala11 from "@/assets/Gosala11.webp";
import gosala12 from "@/assets/Gosala12.webp";
import gosala13 from "@/assets/Gosala13.webp";
import gosala14 from "@/assets/Gosala14.webp";

const galleryImages = [
  { src: gosala6, alt: "Cows grazing in the Gosala", caption: "Open Grazing" },
  { src: gosala7, alt: "Feeding the cows", caption: "Daily Feeding" },
  { src: gosala8, alt: "Healthy cows at the shelter", caption: "Healthy & Happy" },
  { src: gosala9, alt: "Calves at the Gosala", caption: "Young Calves" },
  { src: gosala10, alt: "Veterinary care for cows", caption: "Medical Care" },
  { src: gosala11, alt: "Cow shed at Gosala", caption: "Safe Shelter" },
  { src: gosala12, alt: "Sevaks caring for cows", caption: "Seva in Action" },
  { src: gosala13, alt: "Cows resting peacefully", caption: "Peaceful Rest" },
  { src: gosala14, alt: "Evening Feeding at Gosala", caption: "Evening Feeding" },
];

const Gosala = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Gosala - Cow Protection
        </h1>
        <p className="mt-2 font-body text-primary-foreground/80">
          Serving Gau Mata with Love and Devotion
        </p>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={gosalaImage} alt="Gosala" className="h-96 w-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                A Sanctuary for Gau Mata
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground text-justify">
                Our Gosala is more than just a shelter; it is a home where abandoned, injured, and aging cows are cared for with dignity and love. In Sanatan Dharma, serving the cow is akin to serving the divine. We ensure that every cow receives nutritious food, proper medical attention, and a clean, safe environment.
              </p>
              <p className="mb-6 font-body text-base leading-relaxed text-muted-foreground text-justify">
                Currently, we are caring for over <strong className="text-foreground">1,200+ cows</strong> across our centers. Our dedicated team of sevaks works round the clock to ensure their well-being, treating them as part of our extended family.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-accent-foreground">
                  <Heart size={20} className="text-accent" />
                  <span className="font-heading font-semibold">Compassionate Care</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary">
                  <HandHeart size={20} />
                  <span className="font-heading font-semibold">Seva Bhava</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Daily Routine */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust text-center">
          <h2 className="mb-10 font-heading text-2xl font-bold text-foreground md:text-3xl">Daily Seva Routine</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Clock, title: "Morning Seva", time: "4:30 AM - 8:00 AM", desc: "Cleaning the shed, bathing cows, and offering fresh fodder and water." },
              { icon: Heart, title: "Medical Checkup", time: "10:00 AM - 12:00 PM", desc: "Veterinary doctors visit to check on sick or injured cows and provide treatment." },
              { icon: Utensils, title: "Evening Feeding", time: "4:00 PM - 6:00 PM", desc: "Nutritious evening meal mixed with jaggery and supplements, followed by Aarti." },
            ].map((item, index) => (
              <div key={index} className="rounded-xl bg-card p-6 shadow-sm border border-border">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mb-2 font-body text-xs font-medium text-cta">{item.time}</p>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-trust">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Glimpses of Gosala</h2>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-md">
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
          <h2 className="mb-10 font-heading text-2xl font-bold md:text-3xl">How You Can Support</h2>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-heading text-xl font-bold">Adopt a Cow</h3>
                <p className="mb-4 text-sm opacity-90">Cover the complete care of one cow for a month.</p>
                <p className="mb-6 text-2xl font-bold">₹1,500 <span className="text-sm font-normal">/ month</span></p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Adopt Now</Link>
             </div>
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm border-2 border-cta">
                <div className="mb-2 -mt-4 inline-block rounded bg-cta px-3 py-1 text-xs font-bold text-cta-foreground">Most Popular</div>
                <h3 className="mb-2 font-heading text-xl font-bold">Fodder Seva</h3>
                <p className="mb-4 text-sm opacity-90">Contribute towards daily green grass and fodder.</p>
                <p className="mb-6 text-2xl font-bold">₹500 <span className="text-xs font-normal">min. amount</span></p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Donate Fodder</Link>
             </div>
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-heading text-xl font-bold">Medical Care</h3>
                <p className="mb-4 text-sm opacity-90">Support treatments for injured and old cows.</p>
                <p className="mb-6 text-2xl font-bold">₹2,000 <span className="text-sm font-normal">/ unit</span></p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Support Medical</Link>
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
                <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Visit Our Gosala</h2>
                <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                  We welcome you to visit our Gosala and experience the joy of feeding and caring for Gau Mata personally. It is a spiritual experience that brings peace and merits.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0 text-primary" size={20} />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">Location</h4>
                      <p className="text-sm text-muted-foreground">Jagannath Darshan Gosala, Near Puri Temple, Odisha</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 shrink-0 text-primary" size={20} />
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">Visiting Hours</h4>
                      <p className="text-sm text-muted-foreground">Morning: 6:00 AM – 11:00 AM<br/>Evening: 4:00 PM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-xl bg-muted/30 p-6 text-center">
                 <h3 className="mb-2 font-heading text-xl font-bold text-foreground">Plan Your Visit or Donate</h3>
                 <p className="mb-6 font-body text-sm text-muted-foreground">Cannot visit in person? You can still be a part of this sacred mission.</p>
                 <Link to="/donate" className="mx-auto inline-flex items-center gap-2 rounded-lg bg-cta px-8 py-3 font-body text-sm font-semibold text-cta-foreground transition hover:bg-cta/90 shadow-md">
                   Sponsor a Cow <ArrowRight size={16} />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Gosala;
