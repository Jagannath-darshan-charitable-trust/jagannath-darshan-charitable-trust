import { Link } from "react-router-dom";
import { Users, Heart, MapPin, Sparkles } from "lucide-react";
import volunteersImage from "@/assets/Volunteers.webp";

const VolunteerSection = () => (
  <section className="section-padding">
    <div className="container-trust">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
        <div className="grid items-stretch md:grid-cols-2">
          {/* Image with gradient overlay */}
          <div className="relative min-h-[260px] md:min-h-[380px]">
            <img
              src={volunteersImage}
              alt="Trust volunteers and sevaks"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/40 md:from-transparent md:to-card/50" />
            
            {/* Floating stats badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-primary/90 px-4 py-2.5 text-primary-foreground shadow-lg backdrop-blur-sm">
              <Sparkles size={16} className="text-accent" />
              <div>
                <span className="block font-heading text-lg font-bold leading-tight">10,000+</span>
                <span className="block font-body text-[10px] font-medium uppercase tracking-wider opacity-80">Active Sevaks</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="mb-4 flex items-center gap-2">
              <Users className="text-cta" size={22} />
              <span className="font-body text-xs font-bold uppercase tracking-[0.15em] text-cta">
                Join Our Family
              </span>
            </div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Become a Volunteer Sevak
            </h2>
            <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether you can dedicate an hour or a lifetime, your hands and heart can make a difference.
              Join our growing family of sevaks who serve Gau Mata, cook Mahaprasad, and help build temples.
            </p>
            <div className="mb-7 flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-muted px-4 py-1.5 font-body text-xs font-medium text-muted-foreground">
                <Heart size={12} className="text-primary" /> Jagannath Gosala Volunteers
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-muted px-4 py-1.5 font-body text-xs font-medium text-muted-foreground">
                <MapPin size={12} className="text-primary" /> Available Pan-India
              </span>
            </div>
            <Link
              to="/contact"
              className="btn-glow inline-block self-start rounded-xl bg-cta px-7 py-3.5 font-body text-sm font-bold text-cta-foreground shadow-md transition-all hover:bg-cta/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Register as Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VolunteerSection;
