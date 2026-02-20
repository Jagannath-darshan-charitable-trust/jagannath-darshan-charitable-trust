import { ArrowRight, Landmark, MapPin, Hammer, Users, Heart, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import mandirImage from "@/assets/Mandir6.webp";
import galleryMandir7 from "@/assets/Mandir7.webp";
import galleryMandir8 from "@/assets/Mandir8.webp";
import galleryMandir9 from "@/assets/Mandir9.webp";
import galleryMandir10 from "@/assets/Mandir10.webp";
import galleryMandir1 from "@/assets/Mandir1.webp";
import galleryMandir4 from "@/assets/Mandir4.webp";



// Gallery images for construction updates
const galleryImages = [
  { src: galleryMandir7, alt: "Temple Construction", caption: "Construction in Progress" },
  { src: galleryMandir8, alt: "Temple Structure", caption: "Temple Structure" },
  { src: galleryMandir9, alt: "Temple Design", caption: "Temple Design" },
  { src: galleryMandir10, alt: "Proposed Temple Model", caption: "Vision of the Temple" },
  { src: galleryMandir1, alt: "Temple Foundation", caption: "Temple Foundation" },
  { src: galleryMandir4, alt: "Temple Foundation", caption: "Temple Renovation" },
];

const MandirNirman = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Jagannath Mandir Nirman
        </h1>
        <p className="mt-2 font-body text-primary-foreground/80">
          Building Abodes for the Lord to preserve Sanatan Dharma
        </p>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={mandirImage} alt="Mandir Nirman" className="h-86 w-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                A Divine Mission
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground text-justify">
                Temples are the heart of our culture and spirituality. The Jagannath Darshan Charitable Trust is dedicated to constructing Lord Jagannath temples across India to provide spiritual centers for devotees. Each temple will serve as a hub for cultural education, annadanam, and community service.
              </p>
              <p className="mb-6 font-body text-base leading-relaxed text-muted-foreground text-justify">
                Our vision is to build <strong className="text-foreground">108 temples</strong> in the coming years. Currently, construction is underway at 15 locations, thanks to the generous support of devotees like you.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-accent-foreground">
                  <Landmark size={20} className="text-accent" />
                  <span className="font-heading font-semibold">Divine Architecture</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary">
                  <Users size={20} />
                  <span className="font-heading font-semibold">Community Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust">
           <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Active Projects & Locations</h2>
           <p className="mx-auto mb-10 max-w-2xl text-center font-body text-sm text-muted-foreground">
             We are currently working on securing land and starting construction in the following cities.
           </p>
           
           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
             {["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Hyderabad", "Chennai", "Ahmedabad", "Varanasi"].map((city) => (
                <div key={city} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition hover:shadow-md">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin size={20} />
                   </div>
                   <span className="font-heading font-medium text-foreground">{city}</span>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-trust">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Construction Updates</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
             {/* Using a placeholder repetition for gallery effect */}
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
          <h2 className="mb-10 font-heading text-2xl font-bold md:text-3xl">Be a Part of History</h2>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-heading text-xl font-bold">Donate a Brick</h3>
                <p className="mb-4 text-sm opacity-90">Symbolic donation for temple foundation.</p>
                <p className="mb-6 text-2xl font-bold">₹501 <span className="text-sm font-normal">/ brick</span></p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Donate Brick</Link>
             </div>
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm border-2 border-cta">
                <div className="mb-2 -mt-4 inline-block rounded bg-cta px-3 py-1 text-xs font-bold text-cta-foreground">Most Popular</div>
                <h3 className="mb-2 font-heading text-xl font-bold">General Donation</h3>
                <p className="mb-4 text-sm opacity-90">Support the ongoing construction work.</p>
                <p className="mb-6 text-2xl font-bold">Any Amount</p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Donate Now</Link>
             </div>
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-heading text-xl font-bold">Sponsor a Pillar</h3>
                <p className="mb-4 text-sm opacity-90">Have your name inscribed on a temple pillar.</p>
                <p className="mb-6 text-2xl font-bold">₹11,000 <span className="text-sm font-normal">/ pillar</span></p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Sponsor Pillar</Link>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12 text-center">
             <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Leave a Legacy</h2>
             <p className="mx-auto mb-8 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
               Your contribution to the temple construction is a service to God and humanity. It is an opportunity to be part of something that will last for centuries.
             </p>
             <Link to="/donate" className="inline-flex items-center gap-2 rounded-lg bg-cta px-8 py-3 font-body text-sm font-semibold text-cta-foreground transition hover:bg-cta/90 shadow-md">
               Contribute to Mandir Nirman <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MandirNirman;
