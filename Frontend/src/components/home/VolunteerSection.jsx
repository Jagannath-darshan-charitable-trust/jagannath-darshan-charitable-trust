import { Link } from "react-router-dom";
import { Users, Heart, MapPin } from "lucide-react";
import volunteersImage from "@/assets/volunteers.jpg";

const VolunteerSection = () => (
  <section className="section-padding">
    <div className="container-trust">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
        <div className="grid items-center md:grid-cols-2">
          <div className="h-64 md:h-full">
            <img
              src={volunteersImage}
              alt="Trust volunteers and sevaks"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-10">
            <div className="mb-3 flex items-center gap-2">
              <Users className="text-cta" size={22} />
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-cta">
                Join Our Family
              </span>
            </div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Become a Volunteer Sevak
            </h2>
            <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
              Whether you can dedicate an hour or a lifetime, your hands and heart can make a difference.
              Join our growing family of 10,000+ sevaks who serve Gau Mata, cook Mahaprasad, and help build temples.
            </p>
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 font-body text-xs text-muted-foreground">
                <Heart size={12} className="text-primary" /> Gosala Volunteers
              </span>
              <span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 font-body text-xs text-muted-foreground">
                <MapPin size={12} className="text-primary" /> Available Pan-India
              </span>
            </div>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-cta px-6 py-3 font-body text-sm font-semibold text-cta-foreground transition hover:bg-cta/90"
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
