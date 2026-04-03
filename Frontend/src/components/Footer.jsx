import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Utensils, Landmark, ArrowUpRight } from "lucide-react";
import footerLogo from "@/assets/Logo_2.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-secondary text-secondary-foreground">
      {/* Decorative top border - wave-like gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, hsl(168 21% 33%), hsl(43 100% 50%), hsl(168 21% 33%), hsl(43 100% 50%), hsl(168 21% 33%))",
        }}
      />

      <div className="container-trust px-4 pt-16 pb-6 md:px-8 lg:px-16 lg:pt-24 lg:pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Trust Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={footerLogo}
                alt="Jagannath Darshan Charitable Trust"
                className="h-14 w-auto"
              />
            </div>
            <p className="mb-5 font-body text-sm leading-relaxed text-secondary-foreground/75">
              Seva to Gau Mata, Annavandar Seva & All India Sri Jagannath Mandir Nirman for Sanatan Dharma.
              <br />
              Inspired by Sri Bhabani Prasad Das Mohapatra, Chief Daitapati of Jagannath Temple, Puri.
            </p>
            <p className="font-body text-xs font-medium italic text-accent/70">
              ॐ Serving Sanatan Dharma ॐ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Our Seva", path: "/our-seva" },
                { label: "About Trust", path: "/about/who-we-are" },
                { label: "Donate", path: "/donate" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1 text-secondary-foreground/65 transition-colors hover:text-accent hover:translate-x-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Seva Links */}
          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Our Seva
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              <li>
                <Link to="/our-seva/gosala" className="inline-flex items-center gap-2 text-secondary-foreground/65 transition-colors hover:text-accent">
                  <Heart size={13} className="text-accent/50" /> Gosala
                </Link>
              </li>
              <li>
                <Link to="/our-seva/annabhandar" className="inline-flex items-center gap-2 text-secondary-foreground/65 transition-colors hover:text-accent">
                  <Utensils size={13} className="text-accent/50" /> Sri Jagannath Annabhandar
                </Link>
              </li>
              <li>
                <Link to="/our-seva/mandir-nirman" className="inline-flex items-center gap-2 text-secondary-foreground/65 transition-colors hover:text-accent">
                  <Landmark size={13} className="text-accent/50" /> Sri Jagannath Mandir Nirman
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Contact Us
            </h4>
            <ul className="space-y-3 font-body text-sm text-secondary-foreground/65">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-accent/60" />
                <span>Office No: 307, 3rd Floor, Esplanade One Mall, Rasulgarh, Bhubaneswar, Odisha 751010</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-accent/60" />
                <span>+91 79781 75438<br />+91 73809 6631</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-accent/60" />
                <span>jagannathdarshantrust.hq@gmail.com</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-5 flex gap-2.5">
              {[
                { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
                { icon: Twitter, href: "https://www.twitter.com", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary-foreground/10 text-secondary-foreground/60 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-secondary-foreground/10 pt-7 text-center">
          <p className="font-body text-xs text-secondary-foreground/45">
            © {new Date().getFullYear()} Jagannath Darshan Charitable Trust. All rights reserved.
          </p>
          <p className="mt-2 font-body text-sm font-medium text-accent/60">
            ॐ Jai Jagannath ॐ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
