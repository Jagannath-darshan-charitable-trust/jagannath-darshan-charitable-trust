import founderImage from "@/assets/Founder.webp";

const OurFounder = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-14 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Our Founder
        </h1>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-trust mx-auto max-w-4xl space-y-6 px-4">
          {/* Founder Image */}
          <div className="mx-auto w-64 h-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg md:w-80 md:h-80">
            <img src={founderImage} alt="Sri Bhabani Prasad Das Mohapatra" className="h-full w-full object-cover" />
          </div>

          <h2 className="text-center font-heading text-2xl font-bold text-foreground">
            Sri Bhabani Prasad Das Mohapatra
          </h2>
          <p className="text-center font-body text-sm font-medium text-primary">
            Founder, Jagannath Darshan Charitable Trust
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            Sri Bhabani Prasad Das Mohapatra Ji is a visionary rooted in the sacred soil of Puri, Odisha. Born into a family deeply connected to the Jagannath tradition, his spiritual journey began at a young age, nurtured by the rituals, festivals, and devotional practices that form the backbone of life in the holy city. His early exposure to the grand traditions of the Jagannath Temple and the selfless spirit of seva that pervades every aspect of Puri's culture planted the seeds of a lifelong mission - to extend the blessings of Lord Jagannath to every corner of India.
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            Tracing his roots to the illustrious Daitapati lineage - descendants of the tribal chief Vishwavasu who first discovered and worshipped Lord Jagannath - Sri Bhabani Das Mohapatra Ji carries within him a profound sense of responsibility toward the Lord and His devotees. The Daitapati tradition is unique in that it bridges the ancient tribal worship of Lord Jagannath with the classical temple traditions, and Sri Bhabani Das Mohapatra Ji embodies this harmonious blend of heritage and humility in his daily life and leadership.
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            Driven by profound devotion to Lord Jagannath and a steadfast commitment to preserving Sanatan dharmic traditions, he established the Jagannath Darshan Charitable Trust in 2023. What began as a personal calling quickly grew into an organized movement, attracting sevaks, donors, and well-wishers from across the country. Under his guidance, the trust has established dedicated Jagannath Gosala for the protection of indigenous cow breeds, launched daily Mahaprasad distribution programs feeding thousands, and initiated ambitious temple construction projects aimed at creating spiritual centers in underserved regions.
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            Sri Bhabani Das Mohapatra Ji's leadership style is defined by transparency, personal involvement, and an unwavering focus on the mission. He personally oversees the daily operations of the Jagannath Gosala, visits the Annabhandar kitchens, and inspects temple construction sites. His hands-on approach has earned the trust of thousands of donors and volunteers who see in him not a distant administrator, but a fellow sevak walking the same path of devotion and sacrifice.
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            His vision extends far beyond the present. He dreams of a pan-India network of Jagannath temples, Jagannath Gosala, and community kitchens - a dharmic infrastructure that can withstand the test of time and continue to serve future generations. He often says, "We are not building for today; we are building for the next five hundred years. Every brick we lay, every cow we feed, and every meal we serve is an investment in dharma that will yield spiritual dividends for centuries to come."
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            Under his compassionate and visionary leadership, the Jagannath Darshan Charitable Trust continues to grow, touching lives and transforming communities across India. His story is not one of personal glory but of surrendered service - a life lived entirely at the lotus feet of Lord Jagannath, dedicated to the welfare of all His children.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurFounder;
