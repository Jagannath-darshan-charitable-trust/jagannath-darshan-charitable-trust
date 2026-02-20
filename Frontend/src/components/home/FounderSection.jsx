import founderImage from "@/assets/founder.jpg";

const FounderSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-trust">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
        Our Founder
      </h2>
      <div className="mx-auto mb-10 h-1 w-16 rounded bg-accent" />
      <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[280px_1fr]">
        <div className="mx-auto">
          <div className="h-64 w-64 overflow-hidden rounded-2xl border-4 border-accent/30 shadow-lg">
            <img
              src={founderImage}
              alt="Sri Bhabani Prasad Das Mohapatra"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h3 className="mb-1 font-heading text-xl font-bold text-foreground md:text-2xl">
            Sri Bhabani Prasad Das Mohapatra
          </h3>
          <p className="mb-4 font-body text-sm font-medium text-primary">
            Chief Daitapati, Jagannath Temple, Puri
          </p>
          <p className="mb-3 font-body text-sm leading-relaxed text-muted-foreground">
            Sri Bhabani Prasad Das Mohapatra Ji is the visionary founder of Jagannath Darshan Charitable Trust.
            Born into the ancient Daitapati lineage — the hereditary servitors of Lord Jagannath — he has
            dedicated his life to the divine service of Mahaprabhu Jagannath at the sacred temple in Puri.
          </p>
          <p className="mb-3 font-body text-sm leading-relaxed text-muted-foreground">
            Founded on the principles of devotion, purity, compassion, and responsibility, the trust exists to 
            transform faith into enduring institutions that safeguard dharma, nurture cultural continuity, and 
            create a lasting spiritual impact for generations.
          </p>
          <p className="font-body text-sm italic text-primary">
            "Seva is the highest form of worship. When we serve Gau Mata, feed the hungry, and build
            temples for the Lord, we fulfil our dharmic duty."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
