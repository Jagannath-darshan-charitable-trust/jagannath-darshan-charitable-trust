import founderImage from "@/assets/Founder.webp";
import { Quote } from "lucide-react";

const FounderSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-trust">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
        Our Founder
      </h2>
      <div className="section-divider">
        <span className="divider-icon">✦</span>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl items-center gap-10 md:grid-cols-[300px_1fr]">
        {/* Image with ornamental ring */}
        <div className="mx-auto">
          <div className="relative">
            {/* Outer decorative ring */}
            <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-accent/30" />
            {/* Inner glow ring */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20" />
            <div className="relative h-auto w-full max-w-[280px] aspect-square overflow-hidden rounded-2xl border-4 border-accent/40 shadow-xl">
              <img
                src={founderImage}
                alt="Sri Bhabani Prasad Das Mohapatra"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div>
          <h3 className="mb-1 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Sri Bhabani Prasad Das Mohapatra
          </h3>
          <p className="mb-5 font-body text-sm font-semibold uppercase tracking-wider text-primary">
            Chief Daitapati, Jagannath Temple, Puri
          </p>
          <p className="mb-3 font-body text-sm leading-relaxed text-muted-foreground">
            Sri Bhabani Prasad Das Mohapatra Ji is the visionary founder of Jagannath Darshan Charitable Trust.
            Born into the ancient Daitapati lineage - the hereditary servitors of Lord Jagannath - he has
            dedicated his life to the divine service of Mahaprabhu Jagannath at the sacred temple in Puri.
          </p>
          <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">
            Founded on the principles of devotion, purity, compassion, and responsibility, the trust exists to 
            transform faith into enduring institutions that safeguard dharma, nurture cultural continuity, and 
            create a lasting spiritual impact for generations.
          </p>

          {/* Styled quote */}
          <div className="relative rounded-xl border-l-4 border-accent bg-card/80 p-5 shadow-sm">
            <Quote className="absolute -top-2 -left-1 text-accent/30" size={28} />
            <p className="pl-2 font-body text-sm italic leading-relaxed text-primary">
              "Seva is the highest form of worship. When we serve Gau Mata, feed the hungry, and build
              temples for the Lord, we fulfil our dharmic duty."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
