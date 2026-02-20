import { ShieldCheck, Eye, Heart, Users, FileText, Download, Star, Globe, BookOpen } from "lucide-react";
import founderImage from "@/assets/founder.jpg";
import volunteersImage from "@/assets/volunteers.jpg";

const milestones = [
  { year: "2023", event: "Trust founded — devoted to preserving the living traditions of Lord Jagannath" },
  { year: "2024", event: "Goshala established for cow protection and purity-centered practices" },
  { year: "2024", event: "Annadan seva launched — daily Mahaprasad distribution begins" },
  { year: "2025", event: "Jagannath Temple construction projects initiated across India" },
];

const AboutTrust = () => {
  return (
    <div>
      <section className="bg-primary py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">About the Trust</h1>
        <p className="mt-2 font-body text-primary-foreground/80">Our Mission, Vision & Values</p>
      </section>

      {/* Vision */}
      <section className="section-padding">
        <div className="container-trust mx-auto max-w-3xl text-center">
          <Eye className="mx-auto mb-4 text-primary" size={36} />
          <h2 className="mb-4 font-heading text-2xl font-bold text-primary md:text-3xl">Our Vision</h2>
          <p className="font-body text-base text-justify leading-relaxed text-muted-foreground">
            Jagannath Darshan Charitable Trust, established in 2023, is a religious–spiritual trust devoted to
            preserving and strengthening the living traditions of Lord Jagannath by building permanent temples,
            establishing a structured Goshala for cow protection and purity-centered practices, and sustaining
            Annadan as a sacred act of service.
          </p>
          <p className="mt-4 font-body text-base text-justify leading-relaxed text-muted-foreground">
            Founded on the principles of devotion, purity, compassion, and responsibility, the trust exists
            to transform faith into enduring institutions that safeguard dharma, nurture cultural continuity,
            and create a lasting spiritual impact for generations.
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 md:grid-cols-2 md:text-left">
            <div className="rounded-xl border border-primary/20 bg-primary p-5 shadow-sm">
              <h3 className="mb-2 font-heading text-lg font-semibold text-primary-foreground">Mission</h3>
              <p className="font-body text-base text-justify leading-relaxed text-primary-foreground/90">
                To actively preserve and practice the sacred traditions of Lord Jagannath by establishing temples,
                protecting and caring for cows, and sustaining Annadan as a continuous act of seva.
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary p-5 shadow-sm">
              <h3 className="mb-2 font-heading text-lg font-semibold text-primary-foreground">Vision</h3>
              <p className="font-body text-base text-justify leading-relaxed text-primary-foreground/90">
                To build a future where spiritual heritage is not merely remembered but lived — where authentic
                temple culture thrives, cow protection is responsibly sustained, and Annadan becomes an enduring
                pillar of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Detailed */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Our Founder & Visionary
          </h2>
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[300px_1fr]">
            <div className="mx-auto">
              <div className="h-72 w-72 overflow-hidden rounded-2xl border-4 border-accent/30 shadow-xl">
                <img src={founderImage} alt="Sri Bhabani Prasad Das Mohapatra" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <h3 className="mb-1 font-heading text-xl font-bold text-foreground md:text-2xl">
                Sri Bhabani Prasad Das Mohapatra
              </h3>
              <p className="mb-4 font-body text-sm font-medium text-primary">
                Founder, Jagannath Darshan Charitable Trust
              </p>
              <p className="mb-3 font-body text-sm leading-relaxed text-muted-foreground">
                Sri Bhabani Prasad Das Mohapatra Ji is the visionary founder of Jagannath Darshan Charitable Trust. 
                Driven by deep devotion to Lord Jagannath and a commitment to preserving Sanatan dharmic traditions, 
                he established this trust in 2023 to transform faith into enduring institutions.
              </p>
              <p className="mb-3 font-body text-sm leading-relaxed text-muted-foreground">
                Under his guidance, the trust is building permanent temples, establishing structured Goshalas 
                for cow protection, and sustaining Annadan as a sacred act of service, ensuring that purity, 
                devotion, and dharmic values remain alive for generations to come.
              </p>
              <p className="mb-4 font-body text-sm italic text-primary">
                "The Lord doesn't need our temples, we need them. They are not just buildings of stone; 
                they are beacons of hope, faith, and dharma for generations to come."
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
                  <Star size={12} /> Daitapati Heritage
                </span>
                <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
                  <Globe size={12} /> Pan-India Vision
                </span>
                <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
                  <BookOpen size={12} /> Vedic Scholar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-trust">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: "Devotion", desc: "Every act of seva is an offering to the divine. We serve with love and sincerity." },
              { icon: ShieldCheck, title: "Transparency", desc: "Complete accountability in every rupee spent. Public audit reports and open finances." },
              { icon: Users, title: "Community", desc: "Building a nationwide family of 10,000+ sevaks united by dharma and compassion." },
              { icon: Eye, title: "Compassion", desc: "Serving all beings with love and empathy — from Gau Mata to the underprivileged." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <v.icon className="mx-auto mb-3 text-primary" size={28} />
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Our Journey
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xs font-bold text-primary-foreground">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border" />}
                </div>
                <div className="pb-8">
                  <p className="font-heading text-sm font-bold text-primary">{m.year}</p>
                  <p className="font-body text-sm text-muted-foreground">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Volunteers */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border shadow-md">
            <div className="grid md:grid-cols-2">
              <img src={volunteersImage} alt="Our volunteers" className="h-64 w-full object-cover md:h-full" loading="lazy" />
              <div className="flex flex-col justify-center p-8">
                <h2 className="mb-3 font-heading text-2xl font-bold text-foreground">Our Sevak Family</h2>
                <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                  From dedicated volunteers in Puri to supporters across India, our trust is powered by a 
                  passionate community of 10,000+ sevaks. They cook meals, care for cows, manage construction 
                  sites, and spread the message of Lord Jagannath.
                </p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Every sevak is a pillar of strength. Together, we are building a movement that will endure 
                  for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-foreground">Transparency & Trust</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 shrink-0 text-primary" size={20} />
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground">Annual Audit Reports</h4>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    Our financial records are audited annually by certified auditors and made available for public review.
                  </p>
                  <button className="mt-2 flex items-center gap-1 font-body text-sm font-medium text-cta hover:text-cta/80">
                    <Download size={14} /> Download Latest Report (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-impact" size={20} />
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground">80G & 12A Certification</h4>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
                    Our 12A registration ensures that the trust income is utilized solely for charitable purposes.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 shrink-0 text-cta" size={20} />
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground">Donation Usage Transparency</h4>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    We publish a detailed breakdown of how every donation is utilized — from cow feed and medical supplies
                    to construction materials and food ingredients. You always know where your money goes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTrust;
