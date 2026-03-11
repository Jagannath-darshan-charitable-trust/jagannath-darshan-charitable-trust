import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import mandirImage from "@/assets/Mandir6.webp";
import mandirHeaderBg from "@/assets/Mandir12.webp";
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
      {/* Header / Hero */}
      <section className="bg-primary py-36 text-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img src={mandirHeaderBg} alt="" className="h-full w-full object-cover" />
        </div>
        
        <div className="container-trust relative z-10">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Jagannath Mandir Nirman
          </h1>
          <p className="mt-4 font-body text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Building sacred abodes across the nation to preserve our timeless Sanatan Dharma.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img src={mandirImage} alt="Mandir Nirman" className="h-96 w-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                A Divine Mission
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
                Temples are the heart of our culture and spirituality. The Jagannath Darshan Charitable Trust is dedicated to constructing Lord Jagannath temples across India to provide spiritual centers for devotees. Each temple will serve as a hub for cultural education, annadanam, and community service.
              </p>
              <p className="mb-6 font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
                Our vision is to build <strong className="text-foreground">grand temples</strong> in the coming years. Currently, construction is underway at <strong className="text-foreground">multiple locations</strong>, thanks to the generous support of devotees like you.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-lg bg-accent/10 px-4 py-2 text-accent-foreground">
                  <span className="font-heading font-semibold">Divine Architecture</span>
                </div>
                <div className="rounded-lg bg-primary/10 px-4 py-2 text-primary">
                  <span className="font-heading font-semibold">Community Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="section-padding bg-background">
        <div className="container-trust">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
              The Grand Vision: All India Jagannath Mandir Nirman
            </h2>
            <div className="space-y-8 font-body text-base leading-relaxed text-muted-foreground text-justify">
              <p>
                Lord Jagannath, the "Lord of the Universe," is not just a deity residing in the coastal city of Puri; He is the soul of Sanatan Dharma, the symbol of equality, and the embodiment of divine love. The "All India Jagannath Mandir Nirman" initiative by the Jagannath Darshan Charitable Trust is a sacred endeavor to manifest this universal presence across the length and breadth of our vast nation. Our vision is to establish grand temples-each a sanctuary of peace, a beacon of spiritual wisdom, and a testament to our rich heritage.
              </p>
              <p>
                These temples are envisioned not merely as structures of stone and mortar, but as vibrant spiritual ecosystems. In our tradition, establishing such centers holds profound cosmic significance, representing the completion of a spiritual journey. By establishing these centers, we aim to ensure that the transformative energy of the Jagannath Rath Yatra and the sanctity of the Mahaprasad are accessible to every devotee, regardless of their geographical location. We believe that bringing the Lord closer to the people is the highest service we can perform for the preservation of our cultural and spiritual roots.
              </p>
              <p>
                The architectural philosophy of these temples draws inspiration from the majestic Kalinga style, characterized by its towering "Rekha Deulas" and intricate stone carvings. Every temple will be constructed following the strict principles of ancient Vastu Shastra and Shilpa Shastra, ensuring that they become conduits for positive cosmic energy. The use of traditional materials-granite, sandstone, and wood-processed by skilled artisans whose families have served the Lord for generations, ensures that each structure is both a work of art and a timeless monument to faith.
              </p>
              <p>
                However, the "All India Jagannath Mandir Nirman" project goes far beyond the construction of shrines. Each temple complex is designed to be a comprehensive community hub. Adjacent to the main sanctum, we are establishing Veda Pathshalas to revive the ancient oral traditions of our scriptures, ensuring that our youth remain connected to their identity. Furthermore, every location will feature an "Annabhandar" (community kitchen) to provide free Satvik meals to thousands, a "Seva Kendra" to offer basic healthcare to the underprivileged, and spaces for traditional arts and music to flourish.
              </p>
              <p>
                This is a historic mission that calls for the collective strength of the global devotee community. Building a temple is considered a sacred endeavor-an eternal legacy a person can leave behind. It is a rare opportunity to contribute to a cause that will continue to nourish souls and serve humanity for hundreds of years to come. Whether through the donation of a single brick, the sponsorship of a pillar, or the offering of your time and skills, your involvement in this Nirman Seva is a direct participation in the Lord’s own work. Together, let us build these abodes of light and ensure that the legacy of Jagannath Mahaprabhu continues to guide future generations toward a life of dharma, compassion, and unity.
              </p>
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
                <div key={city} className="rounded-lg border border-border bg-card p-4 text-center transition hover:shadow-md">
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
                <p className="mb-6 text-sm opacity-90 text-justify">Become a symbolic part of the temple's foundation by donating a brick.</p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Donate Brick</Link>
             </div>
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm border-2 border-cta">
                <div className="mb-2 -mt-4 inline-block rounded bg-cta px-3 py-1 text-xs font-bold text-cta-foreground">Most Popular</div>
                <h3 className="mb-2 font-heading text-xl font-bold">General Donation</h3>
                <p className="mb-6 text-sm opacity-90 text-justify">Support the ongoing Mandir Nirman work and the mission.</p>
                <Link to="/donate" className="inline-block w-full rounded-lg bg-cta px-4 py-2 font-body text-sm font-bold text-cta-foreground hover:bg-cta/90">Donate Now</Link>
             </div>
             <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-heading text-xl font-bold">Sponsor a Pillar</h3>
                <p className="mb-6 text-sm opacity-90 text-justify">Grace a temple pillar with your support and have your contribution honored.</p>
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
             <p className="mx-auto mb-8 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground text-left md:text-center">
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
