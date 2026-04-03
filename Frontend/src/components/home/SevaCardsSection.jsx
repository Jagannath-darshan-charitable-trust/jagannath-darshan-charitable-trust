import { Link } from "react-router-dom";
import { Heart, Utensils, Landmark, ArrowRight } from "lucide-react";
import gosalaImage from "@/assets/Gosala2.webp";
import annabhandarImage from "@/assets/Annabhandar2.webp";
import mandirImage from "@/assets/Mandir2.webp";

const sevaCards = [
  {
    title: "Sri Jagannath Gosala",
    subtitle: "Cow Protection & Care",
    description: "Provide shelter, food, and medical care to abandoned and injured cows. Adopt a cow or sponsor monthly care.",
    image: gosalaImage,
    icon: Heart,
    link: "/our-seva/gosala",
    num: "01",
  },
  {
    title: "Sri Jagannath Annabhandar",
    subtitle: "Mahaprasad Distribution",
    description: "Feed the hungry with sacred Mahaprasad. Sponsor Bhog for devotees and the underprivileged every day.",
    image: annabhandarImage,
    icon: Utensils,
    link: "/our-seva/annabhandar",
    num: "02",
  },
  {
    title: "Sri Jagannath Mandir Nirman",
    subtitle: "Jagannath Temple Construction",
    description: "Help build Jagannath temples across India. Donate a brick, sponsor a pillar, and spread Sanatan Dharma.",
    image: mandirImage,
    icon: Landmark,
    link: "/our-seva/mandir-nirman",
    num: "03",
  },
];

const SevaCardsSection = () => (
  <section className="section-padding">
    <div className="container-trust">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
        Our Three Pillars of Seva
      </h2>
      <div className="section-divider">
        <span className="divider-icon">✦</span>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {sevaCards.map((card) => (
          <Link
            key={card.title}
            to={card.link}
            className="gradient-border-card group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image with overlay badge and number */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />

              {/* Number badge */}
              <span className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/90 font-heading text-xs font-bold text-accent-foreground shadow-md">
                {card.num}
              </span>

              {/* Category pill */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-primary/90 px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-md backdrop-blur-sm">
                <card.icon size={14} />
                {card.subtitle}
              </div>
            </div>

            {/* Card content */}
            <div className="p-6">
              <h3 className="mb-2 font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                {card.title}
              </h3>
              <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-cta transition-all group-hover:gap-3">
                Learn More <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default SevaCardsSection;
