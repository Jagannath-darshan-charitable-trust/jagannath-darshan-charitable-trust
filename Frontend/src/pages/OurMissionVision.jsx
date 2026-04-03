const milestones = [
  { 
    year: "2023", 
    title: "The Foundation of Faith",
    event: "The Jagannath Darshan Charitable Trust was formally established in the holy land of Puri, with a core vision to bridge ancient spiritual traditions with modern-day institutional service." 
  },
  { 
    year: "2024", 
    title: "Jagannath Gau Seva & Protection",
    event: "Established our first dedicated Sri Jagannath Gosala, focusing on the protection of indigenous cow breeds. This initiative ensures that pure dairy products are available for temple rituals and malnourished communities." 
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

const OurMissionVision = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-14 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Our Mission & Vision
        </h1>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-trust mx-auto max-w-4xl space-y-6 px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center md:text-3xl">Our Mission</h2>

          <p className="font-body text-lg leading-relaxed text-muted-foreground text-left md:text-justify">
            Under the sacred grace of Sri Jagannath, our mission is to revive and strengthen Sanatan spiritual culture through temple construction, Gau Seva, and Annaprasad Seva as living expressions of devotion. We are dedicated to building temples that are not merely architectural structures but vibrant spiritual centers where kirtan, seva, and scriptural wisdom nourish the hearts of devotees. Each mandir established under Sri Jagannath's blessings serves as a sanctuary of purity, discipline, and dharmic education for future generations.
          </p>

          <p className="font-body text-lg leading-relaxed text-muted-foreground text-left md:text-justify">
            We are equally committed to establishing and sustaining well-organized Sri Jagannath Gosala that ensure compassionate care, protection, and dignified living conditions for cows, revered as sacred embodiments of selfless giving. Through structured management, veterinary care, and community participation, we aim to preserve the spiritual and ecological importance of Gau Mata in a world that is rapidly losing touch with this ancient bond.
          </p>

          <p className="font-body text-lg leading-relaxed text-muted-foreground text-left md:text-justify">
            Annadan, offered in humility before Sri Jagannath, remains a core pillar of our service. We operate community kitchens that prepare and distribute satvik Mahaprasad to thousands of devotees, pilgrims, sadhus, and underprivileged families every single day. This sacred act of feeding the hungry is not merely charity; it is an act of worship, a means of connecting the giver and the receiver through the divine medium of food blessed by the Lord Himself.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground text-center md:text-3xl pt-4">Our Vision</h2>

          <p className="font-body text-lg leading-relaxed text-muted-foreground text-left md:text-justify">
            We aspire to see every region of India blessed with a Jagannath Mandir that nurtures bhakti, unity, and spiritual education. Alongside temple construction, our vision includes structured Sri Jagannath Gosala for Gau Seva, ensuring protection, care, and dignity for cows as sacred embodiments of compassion and selfless giving. Our long-term dream is to create a nationwide network of spiritual and humanitarian centers that serve as beacons of hope for the spiritually inclined and the materially deprived alike.
          </p>

          <p className="font-body text-lg leading-relaxed text-muted-foreground text-left md:text-justify">
            We envision a society where the ancient Vedic values of truth, non-violence, austerity, and cleanliness are not confined to scriptures but are actively practiced in daily life. A society where no person goes to sleep hungry, no cow is abandoned, and no child is deprived of spiritual education. Through our collective efforts, we aim to build a dharmic infrastructure that outlasts generations - a legacy of love, service, and unwavering faith in the divine plan of Lord Jagannath.
          </p>

          <p className="font-body text-lg leading-relaxed text-muted-foreground text-left md:text-justify">
            As the philosophy of Lord Jagannath transcends all boundaries, so does our vision. We welcome people from every background, every community, and every part of the world to join hands in this sacred endeavor. Together, we shall create a heaven on earth - not through grand proclamations, but through small, sincere acts of seva performed with a pure heart and a surrendered spirit.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-impact/5">
        <div className="container-trust mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-center">
              Our Journey
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 bg-impact" />
            <p className="mt-4 font-body text-base text-muted-foreground text-center">The evolution of our devotion and service since inception.</p>
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
                    <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
                      {m.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMissionVision;
