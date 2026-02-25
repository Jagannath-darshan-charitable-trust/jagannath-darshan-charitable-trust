import { ShieldCheck, Eye, Heart, Users, FileText, Download, Star, Globe, BookOpen } from "lucide-react";
import founderImage from "@/assets/Founder.webp";
import volunteersImage from "@/assets/Volunteers.webp";
import trustImage from "@/assets/Trust.webp";

const milestones = [
  { 
    year: "2023", 
    title: "The Foundation of Faith",
    event: "The Jagannath Darshan Charitable Trust was formally established in the holy land of Puri, with a core vision to bridge ancient spiritual traditions with modern-day institutional service." 
  },
  { 
    year: "2024", 
    title: "Gau Seva & Protection",
    event: "Established our first dedicated Goshala, focusing on the protection of indigenous cow breeds. This initiative ensures that pure dairy products are available for temple rituals and malnourished communities." 
  },
  { 
    year: "2024", 
    title: "The Annadan Movement",
    event: "Launched our Daily Mahaprasad Distribution program. What started as a small kitchen has now grown into a massive scale seva, serving thousands of devotees and underserved souls every single day." 
  },
  { 
    year: "2025", 
    title: "Expanding the Horizon",
    event: "Initiated temple construction projects and spiritual centers across India to spread the inclusive and egalitarian philosophy of Lord Jagannath beyond the borders of Odisha." 
  },
];

const AboutTrust = () => {
  return (
    <div>
      {/* Refined Full-Width Vision & Mission Section */}
      <section className="relative overflow-hidden bg-card">
        <div className="relative h-[50vh] min-h-[400px] w-full md:h-[700px]">
          {/* Background Image */}
          <img 
            src={trustImage} 
            alt="Jagannath Darshan Trust Vision" 
            className="h-full w-full object-cover" 
          />
          
          {/* Gradient Overlay for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/60 to-transparent" />
          
          {/* Content Overlay */}
          <div className="container-trust absolute inset-0 flex items-center">
            <div className="max-w-2xl px-4 text-primary-foreground md:px-0">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 backdrop-blur-sm">
                <Eye size={18} className="text-cta" />
                <span className="font-heading text-xs font-bold tracking-widest uppercase">The Sacred Heritage</span>
              </div>
              
              <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-7xl">
                A Living <span className="text-cta">Tradition</span> <br /> 
                of Devotion
              </h1>
              
              <div className="mb-8 space-y-6 font-body text-base leading-relaxed opacity-95 md:text-lg">
                <p className="text-left md:text-justify">
                  Jagannath Darshan Charitable Trust, established in 2023, is more than an organization; it is a 
                  bridge between ancient tribal spirituality and classical Hindu devotion. Rooted in the noble 
                  <strong> Daitapati heritage</strong>, we uphold the inclusive philosophy of Lord Jagannath, 
                  where the deity is served not just as a stone symbol, but as living kin.
                </p>
                <p className="hidden text-left md:block md:text-justify">
                  Our mission is to safeguard <strong>Dharma</strong> through three sacred pillars: the construction 
                  of permanent temples as beacons of faith, the protection of <strong>Gau Mata</strong> as a source 
                  of cosmic purity, and the uninterrupted distribution of <strong>Mahaprasad</strong> to ensure no soul goes hungry.
                </p>
              </div>
              
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="group border-l-2 border-cta/50 pl-4 transition-colors hover:border-cta">
                  <h3 className="mb-1 font-heading text-xl font-bold text-cta">The Daitapati Legacy</h3>
                  <p className="font-body text-sm leading-relaxed opacity-80">
                    Descendants of the Sabara chief Vishwavasu, serving as the familial caretakers of the Lord.
                  </p>
                </div>
                <div className="group border-l-2 border-cta/50 pl-4 transition-colors hover:border-cta">
                  <h3 className="mb-1 font-heading text-xl font-bold text-cta">Sanatan Seva</h3>
                  <p className="font-body text-sm leading-relaxed opacity-80">
                    Transforming ancient Vedic principles into modern institutional responsibility for spiritual preservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Callout Section */}
      <section className="section-padding bg-background">
        <div className="container-trust">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="font-heading text-2xl font-light italic text-primary md:text-3xl">
              "Annam Vai Pranah - All life force emerges from food. At the core of Jagannath culture 
              lies the belief that serving the hungry is the ultimate path to the divine."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founder Detailed - Refined Alignment */}
      <section className="section-padding bg-muted/50">
        <div className="container-trust">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our Founder & Visionary
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 bg-primary" />
          </div>
          
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[320px_1fr]">
            <div className="flex flex-col items-center justify-center">
              <div className="group relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary/20 to-cta/20 blur-lg transition-opacity group-hover:opacity-100" />
                <div className="relative h-auto w-full max-w-[320px] aspect-square overflow-hidden rounded-2xl border-4 border-background shadow-2xl">
                  <img src={founderImage} alt="Sri Bhabani Prasad Das Mohapatra" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Sri Bhabani Prasad Das Mohapatra
                </h3>
                <p className="font-body text-lg font-medium text-primary">
                  Founder, Jagannath Darshan Charitable Trust
                </p>
              </div>
              
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
                <p>
                  Sri Bhabani Prasad Das Mohapatra Ji is a visionary rooted in the sacred soil of Puri. 
                  Driven by profound devotion to Lord Jagannath and a commitment to preserving Sanatan 
                  dharmic traditions, he established this trust to transform personal faith into 
                  enduring community institutions.
                </p>
                <p>
                  Tracing his roots to the illustrious Daitapati lineage, his leadership combines 
                  traditional wisdom with modern transparency. Under his guidance, the trust serves as 
                  a guardian of purity, ensuring that every cow in our Goshala and every grain 
                  distributed in our Annadan carries the blessing of selfless seva.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: Star, text: "Daitapati Heritage" },
                  { icon: Globe, text: "Pan-India Vision" },
                  { icon: BookOpen, text: "Vedic Guardian" }
                ].map((tag) => (
                  <span key={tag.text} className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary">
                    <tag.icon size={14} /> {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Standardized Grid */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
            <div className="mx-auto mt-2 h-1 w-20 bg-primary" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: "Pure Devotion", desc: "Every act of seva is a sacred offering. We serve with unconditional love and traditional mindfulness." },
              { icon: ShieldCheck, title: "Accountability", desc: "Trust is the foundation of our work. We maintain complete transparency in every rupee spent." },
              { icon: Users, title: "Loka Kalyan", desc: "Building a global family united by dharma, fostering compassion for all living beings." },
              { icon: Eye, title: "Visionary Seva", desc: "Not just immediate relief, but building enduring institutions that preserve our spiritual heritage." },
            ].map((v) => (
              <div key={v.title} className="flex flex-col rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <v.icon size={32} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{v.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline - Refined with Green Theme & CSS-driven responsive logic */}
      <section className="section-padding bg-impact/10">
        <div className="container-trust mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our Journey
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 bg-impact" />
            <p className="mt-4 font-body text-sm text-muted-foreground">The evolution of our devotion and service since inception.</p>
          </div>
          
          <div className="relative space-y-8 md:space-y-0">
            {/* Central Line for Desktop */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-impact/20 md:left-1/2 md:block md:-translate-x-1/2" />
            
            {/* Mobile Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-impact/20 md:hidden" />

            {milestones.map((m, i) => (
              <div key={i} className={`relative flex items-center justify-between md:mb-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden w-[45%] md:block">
                  {/* Spacer for alternating layout */}
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-impact ring-4 ring-impact/10 md:left-1/2">
                   <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* Content Card */}
                <div className={`w-full pl-12 md:w-[45%] md:pl-0 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`rounded-xl border border-impact/10 bg-background p-6 shadow-sm transition-all hover:shadow-md ${i % 2 === 0 ? 'md:rounded-l-2xl' : 'md:rounded-r-2xl'}`}>
                    <span className="font-heading text-xl font-bold text-impact">{m.year}</span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-foreground">{m.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground text-left md:text-justify">
                      {m.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glimpses of Tradition Placeholders */}
      <section className="section-padding bg-muted/30">
        <div className="container-trust">
          <h2 className="mb-3 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Glimpses of Tradition</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center font-body text-sm text-muted-foreground">
            Capturing the essence of Sanatan traditions, from the ancient rituals of Puri to our modern-day seva.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl bg-black/40 shadow-inner flex items-center justify-center">
                 <span className="font-heading text-xs text-white/40 uppercase tracking-widest">Ritual {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Volunteers */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border shadow-md">
            <div className="grid items-stretch md:grid-cols-2">
              <div className="relative min-h-[240px] md:min-h-[320px]">
                <img src={volunteersImage} alt="Our volunteers" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              </div>
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
                    We publish a detailed breakdown of how every donation is utilized - from cow feed and medical supplies
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
