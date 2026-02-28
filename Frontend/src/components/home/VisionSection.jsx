import { useState, useEffect, useRef } from "react";
import { Landmark, Heart, Utensils, Sparkles, BookOpen, Eye } from "lucide-react";

/* ── helper: fade-in on scroll ── */
const useFadeIn = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
};

/* ── three pillars data ── */
const pillars = [
  {
    icon: Landmark,
    title: "Jagannath Mandir Nirman",
    desc: "Building vibrant spiritual centers across Bharat where kirtan, seva, and scriptural wisdom unite communities in devotion.",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Heart,
    title: "Jagannath Gau Seva",
    desc: "Establishing well-organized Jagannath Gosala ensuring compassionate care, protection, and dignified living for Gau Mata.",
    gradient: "from-rose-500/20 to-rose-500/5",
  },
  {
    icon: Utensils,
    title: "Jagannath Annaprasad Seva",
    desc: "Distributing sanctified Mahaprasad prepared with devotion, alleviating hunger while nurturing spiritual consciousness.",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
];

const VisionSection = () => {
  const [headerRef, headerVis] = useFadeIn();
  const [missionRef, missionVis] = useFadeIn();
  const [visionRef, visionVis] = useFadeIn();
  const [pillarsRef, pillarsVis] = useFadeIn();

  return (
    <section className="section-padding relative overflow-hidden" id="vision">
      {/* ── subtle background ornament ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(168 21% 33%) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-trust relative">
        {/* ────────────────────── HEADER ────────────────────── */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${headerVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Jai Jagannath
          </p>
          <h2 className="mb-2 font-heading text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
            Who We Are
          </h2>
          <div className="section-divider">
            <span className="divider-icon">✦</span>
          </div>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Jagannath Darshan Charitable Trust, established in 2023, is a
            religious–spiritual trust devoted to preserving and strengthening
            the living traditions of Lord Jagannath - by building permanent
            temples, establishing a structured Goshala for cow protection and
            purity-centered practices, and sustaining Annadan as a sacred act
            of service.
          </p>
        </div>

        {/* ────────────────── OUR MISSION ────────────────── */}
        <div
          ref={missionRef}
          className={`mt-16 transition-all duration-700 delay-100 ${missionVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary shadow-xl">
            {/* decorative pattern */}
            <div className="vision-pattern" />

            <div className="relative grid md:grid-cols-[auto_1fr]">
              {/* accent strip */}
              <div className="hidden md:flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-accent/20 via-accent/10 to-transparent px-8 py-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 shadow-lg shadow-accent/10">
                  <BookOpen className="text-accent" size={30} />
                </div>
                <div className="h-24 w-px bg-gradient-to-b from-accent/40 to-transparent" />
                <Sparkles className="text-accent/50" size={18} />
              </div>

              {/* content */}
              <div className="p-8 md:py-10 md:pr-10 md:pl-4">
                <div className="mb-1 flex items-center gap-3 md:hidden">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                    <BookOpen className="text-accent" size={20} />
                  </div>
                </div>
                <h3 className="mt-3 md:mt-0 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
                  Our Mission
                </h3>
                <div className="mt-2 h-1 w-16 rounded-full bg-accent/50" />

                <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-primary-foreground/85 md:text-base">
                  <p>
                    Under the sacred grace of Sri Jagannath, our mission is to
                    revive and strengthen Sanatan spiritual culture through
                    temple construction, Jagannath Gau Seva, and Jagannath Annaprasad Seva as living
                    expressions of devotion. We are dedicated to building
                    temples that are not merely architectural structures but
                    vibrant spiritual centers where kirtan, seva, and scriptural
                    wisdom nourish the hearts of devotees.
                  </p>
                  <p>
                    Each mandir established under Sri Jagannath's blessings will
                    serve as a sanctuary of purity, discipline, and dharmic
                    education for future generations.
                  </p>
                  <p>
                    We are equally committed to establishing and sustaining
                    well-organized Jagannath Gosala that ensure compassionate care,
                    protection, and dignified living conditions for cows,
                    revered as sacred embodiments of selfless giving. Through
                    structured management, veterinary care, and community
                    participation, we aim to preserve the spiritual and
                    ecological importance of Gau Mata.
                  </p>
                  <p>
                    Annadan, offered in humility before Sri Jagannath, will
                    remain a core pillar of our service. By distributing
                    sanctified meals prepared with devotion, we strive to
                    alleviate hunger while nurturing spiritual consciousness.
                    Our mission is to transform service into devotion, devotion
                    into culture, and culture into a living legacy of Sri
                    Jagannath's mercy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────── OUR VISION ────────────────── */}
        <div
          ref={visionRef}
          className={`mt-10 transition-all duration-700 delay-200 ${visionVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-xl">
            {/* decorative pattern */}
            <div className="vision-pattern opacity-[0.04]" />

            <div className="relative grid md:grid-cols-[1fr_auto]">
              {/* content */}
              <div className="p-8 md:py-10 md:pl-10 md:pr-4">
                <div className="mb-1 flex items-center gap-3 md:hidden">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                    <Eye className="text-primary" size={20} />
                  </div>
                </div>
                <h3 className="mt-3 md:mt-0 font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Our Vision
                </h3>
                <div className="mt-2 h-1 w-16 rounded-full bg-accent/50" />

                <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-muted-foreground md:text-base">
                  <p>
                    Our vision is to establish a spiritually awakened Bharat
                    rooted in the divine grace and universal compassion of Sri
                    Jagannath. We envision a sacred movement dedicated to
                    Jagannath Mandir Nirman across all India, creating spiritual
                    centers where devotion, dharma, and community service
                    flourish together. These temples will not merely be places
                    of worship, but vibrant cultural hubs preserving Sanatan
                    traditions, promoting scriptural wisdom, and inspiring
                    generations toward righteous living.
                  </p>
                  <p>
                    We aspire to see every region of India blessed with a
                    Jagannath Mandir that nurtures bhakti, unity, and spiritual
                    education. Alongside temple construction, our vision
                    includes structured Jagannath Gosala for Jagannath Gau Seva, ensuring
                    protection, care, and dignity for cows as sacred embodiments
                    of compassion and selfless giving.
                  </p>
                  <p>
                    Annadan under the blessings of Sri Jagannath will be
                    sustained as a nationwide seva movement, ensuring that
                    sanctified meals (Mahaprasad) reach the needy with love and
                    equality. Through youth engagement, community participation,
                    and transparent service initiatives, we envision a
                    spiritually harmonious society where devotion is practiced
                    in daily life.
                  </p>
                  <p>
                    Our ultimate vision is a united India spiritually connected
                    through Jagannath devotion, where temples, Jagannath Gosala, and
                    Annadan become pillars of dharma, compassion, and cultural
                    revival.
                  </p>
                </div>
              </div>

              {/* accent strip */}
              <div className="hidden md:flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-primary/15 via-primary/8 to-transparent px-8 py-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 shadow-lg shadow-primary/10">
                  <Eye className="text-primary" size={30} />
                </div>
                <div className="h-24 w-px bg-gradient-to-b from-primary/30 to-transparent" />
                <Sparkles className="text-primary/40" size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* ────────────── THREE PILLARS STRIP ────────────── */}
        <div
          ref={pillarsRef}
          className={`mt-12 transition-all duration-700 delay-300 ${pillarsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="mb-6 text-center font-body text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Three Pillars of Our Seva
          </p>

          <div className="grid gap-5 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="text-primary" size={22} />
                  </div>
                  <h4 className="mb-2 font-heading text-lg font-bold text-foreground">
                    {p.title}
                  </h4>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
