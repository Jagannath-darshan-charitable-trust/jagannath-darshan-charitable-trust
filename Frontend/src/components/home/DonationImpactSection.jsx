import { Heart, Utensils, Landmark, Stethoscope } from "lucide-react";

const breakdownItems = [
  {
    icon: Heart,
    title: "₹1,500 / month",
    description: "Feeds & shelters one cow for a full month including fodder, water, and daily care.",
    color: "text-primary",
  },
  {
    icon: Utensils,
    title: "₹50 per meal",
    description: "Provides one wholesome Mahaprasad meal to a hungry person — rice, dal, sabzi, and sweets.",
    color: "text-accent-foreground",
  },
  {
    icon: Landmark,
    title: "₹501 per brick",
    description: "Contributes one brick to the construction of a new Jagannath temple in your name.",
    color: "text-secondary",
  },
  {
    icon: Stethoscope,
    title: "₹2,000 / treatment",
    description: "Covers veterinary care and medicine for one sick or injured cow at our Gosala.",
    color: "text-impact",
  },
];

const DonationImpactSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-trust">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
        How Your Donation Helps
      </h2>
      <div className="mx-auto mb-4 h-1 w-16 rounded bg-accent" />
      <p className="mx-auto mb-10 max-w-2xl text-center font-body text-sm text-muted-foreground">
        Every rupee you donate is used with full transparency. Here's exactly how your contribution makes an impact:
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {breakdownItems.map((item) => (
          <div
            key={item.title}
            className="group rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <item.icon className={item.color} size={26} />
            </div>
            <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{item.title}</h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DonationImpactSection;
