import { Heart, ShieldCheck, Users, Eye } from "lucide-react";
import whoWeAreImage from "@/assets/Who are We1.webp";

const WhoWeAre = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-14 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Who We Are
        </h1>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-trust mx-auto max-w-4xl space-y-6 px-4">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_300px]">
            <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
              The Jagannath Darshan Charitable Trust, established in 2023, is a spiritual and humanitarian lighthouse dedicated to the timeless legacy of Lord Sri Jagannath. Our foundation is built upon the Vedic principle of Seva (selfless service), aiming to bridge the gap between ancient spiritual wisdom and modern societal needs. Just as Lord Jagannath is the "Lord of the Universe" who embraces all without distinction of caste or creed, our trust operates on the pillars of universal brotherhood, equality, and compassion.
            </p>
            <img
              src={whoWeAreImage}
              alt="Jagannath Darshan Charitable Trust"
              className="w-full rounded-xl object-cover shadow-md"
              loading="lazy"
            />
          </div>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            Headquartered with a deep connection to the sacred soil of Puri, we strive to create a vibrant community where devotion to the Lord translates into tangible action for the upliftment of the underprivileged. Our activities are not limited to rituals; we are actively involved in building spiritual infrastructure, protecting the sacred mother cow, and ensuring that the divine gift of Prasadam reaches every hungry soul. We believe that spiritual growth is incomplete without social responsibility.
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            In the spirit of the Vrindavan tradition, we focus on fostering a "Simple Living, High Thinking" lifestyle. By integrating the cultural richness of the Jagannath tradition with organized charitable efforts, we invite seekers and donors alike to join a movement that nourishes the spirit and the community. Whether through our educational initiatives or our grand temple projects, every endeavor is an offering to the lotus feet of the Lord, aimed at creating a heaven on earth where peace and dharma prevail.
          </p>

          <div className="py-12">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">
              Our Core Values
              <span className="mx-auto mt-2 block h-1 w-20 bg-primary"></span>
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">Pure Devotion</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Every act of seva is a sacred offering. We serve with unconditional love and traditional mindfulness.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                  <ShieldCheck className="text-primary" size={32} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">Accountability</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Trust is the foundation of our work. We maintain complete transparency in every rupee spent.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">Loka Kalyan</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Building a global family united by dharma, fostering compassion for all living beings.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                  <Eye className="text-primary" size={32} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">Visionary Seva</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Not just immediate relief, but building enduring institutions that preserve our spiritual heritage.
                </p>
              </div>
            </div>
          </div>

          <blockquote className="mt-8 border-l-4 border-primary/40 py-4 px-6 text-center italic">
            <p className="font-heading text-lg leading-relaxed text-muted-foreground md:text-xl">
              "Annam Vai Pranah - All life force emerges from food. At the core of Jagannath culture lies the belief that serving the hungry is the ultimate path to the divine."
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
