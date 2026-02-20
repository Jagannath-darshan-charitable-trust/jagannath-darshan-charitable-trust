import { Link } from "react-router-dom";
import { Heart, Utensils, Landmark, ArrowRight } from "lucide-react";
import gosalaImage from "@/assets/gosala.jpg";
import annabhandarImage from "@/assets/annabhandar.jpg";
import mandirImage from "@/assets/Mandir2.webp";

const sevaCards = [
  {
    title: "Gosala",
    subtitle: "Cow Protection & Care",
    description: "Provide shelter, food, and medical care to abandoned and injured cows. Adopt a cow or sponsor monthly care.",
    image: gosalaImage,
    icon: Heart,
    link: "/our-seva",
  },
  {
    title: "Annabhandar",
    subtitle: "Mahaprasad Distribution",
    description: "Feed the hungry with sacred Mahaprasad. Sponsor meals for devotees and the underprivileged every day.",
    image: annabhandarImage,
    icon: Utensils,
    link: "/our-seva",
  },
  {
    title: "Jagannath Mandir Nirman",
    subtitle: "Jagannath Temple Construction",
    description: "Help build Jagannath temples across India. Donate a brick, sponsor a pillar, and spread Sanatan Dharma.",
    image: mandirImage,
    icon: Landmark,
    link: "/our-seva",
  },
];

const SevaCardsSection = () => (
  <section className="section-padding">
    <div className="container-trust">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
        Our Three Pillars of Seva
      </h2>
      <div className="mx-auto mb-10 h-1 w-16 rounded bg-accent" />
      <div className="grid gap-8 md:grid-cols-3">
        {sevaCards.map((card) => (
          <Link
            key={card.title}
            to={card.link}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                <card.icon size={14} />
                {card.subtitle}
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-cta transition-colors group-hover:text-cta/80">
                Learn More <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default SevaCardsSection;
