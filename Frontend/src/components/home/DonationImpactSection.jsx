import { Heart, Utensils, Landmark, Stethoscope } from "lucide-react";

const breakdownItems = [
  {
    icon: Heart,
    title: "Monthly Goshala Seva",
    description: "Support the ongoing care, food, and shelter for sacred cows in our Goshala throughout the month.",
    accent: "from-primary/20 to-primary/5",
    borderColor: "hover:border-primary/40",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Utensils,
    title: "Daily Annadanam",
    description: "Provides wholesome Mahaprasad meals to devotees and those in need, ensuring no one goes hungry.",
    accent: "from-accent/20 to-accent/5",
    borderColor: "hover:border-accent/40",
    iconBg: "bg-accent/10",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Landmark,
    title: "Seva through Construction",
    description: "Contribute to the foundation and structural development of new Jagannath temples across the nation.",
    accent: "from-secondary/20 to-secondary/5",
    borderColor: "hover:border-secondary/40",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Stethoscope,
    title: "Medical Care for Cows",
    description: "Covers essential veterinary treatments, medicines, and specialized health care for the cows in our Goshala.",
    accent: "from-impact/20 to-impact/5",
    borderColor: "hover:border-impact/40",
    iconBg: "bg-impact/10",
    iconColor: "text-impact",
  },
];

const DonationImpactSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-trust">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
        How Your Donation Helps
      </h2>
      <div className="section-divider">
        <span className="divider-icon">✦</span>
      </div>
      <p className="mx-auto mb-12 max-w-2xl text-center font-body text-sm text-muted-foreground md:text-base">
        Every rupee you donate is used with full transparency. Here's exactly how your contribution makes an impact:
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {breakdownItems.map((item) => (
          <div
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${item.borderColor}`}
          >
            {/* Subtle gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            
            <div className="relative">
              <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                <item.icon className={item.iconColor} size={28} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DonationImpactSection;
