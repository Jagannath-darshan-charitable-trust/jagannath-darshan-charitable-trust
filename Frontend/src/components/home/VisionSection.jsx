import { ShieldCheck, FileText, Users } from "lucide-react";

const VisionSection = () => (
  <section className="section-padding">
    <div className="container-trust text-center">
      <h2 className="mb-2 font-heading text-2xl font-bold text-primary md:text-3xl">
        Our Vision
      </h2>
      <div className="mx-auto mb-6 h-1 w-16 rounded bg-accent" />
      <p className="mx-auto max-w-3xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
        Jagannath Darshan Charitable Trust, established in 2023, is a religious–spiritual trust devoted to preserving and strengthening the living traditions of Lord Jagannath - by building permanent temples, establishing a structured Goshala for cow protection and purity-centered practices, and sustaining Annadan as a sacred act of service.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2 md:text-left">
        <div className="rounded-xl border border-primary/20 bg-primary p-5 shadow-sm">
          <h3 className="mb-2 font-heading text-lg font-semibold text-primary-foreground">Our Mission</h3>
          <p className="font-body text-base text-justify leading-relaxed text-primary-foreground/90">
            To actively preserve and practice the sacred traditions of Lord Jagannath by establishing temples, protecting and caring for cows, and sustaining Annadan as a continuous act of seva, ensuring that purity, devotion, and dharmic values remain alive in everyday life.
          </p>
        </div>
        <div className="rounded-xl border border-primary/20 bg-primary p-5 shadow-sm">
          <h3 className="mb-2 font-heading text-lg font-semibold text-primary-foreground">Our Vision</h3>
          <p className="font-body text-base text-justify leading-relaxed text-primary-foreground/90">
            To build a future where spiritual heritage is not merely remembered but lived, where authentic temple culture thrives, cow protection is responsibly sustained, and acts of compassion like Annadan become enduring pillars of society, inspiring generations to remain rooted in dharma.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default VisionSection;
