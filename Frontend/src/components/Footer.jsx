import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container-trust px-4 pt-16 pb-6 md:px-8 lg:px-16 lg:pt-24 lg:pb-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Trust Info */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-accent">
              Jagannath Darshan Charitable Trust
            </h3>
            <p className="mb-4 font-body text-sm leading-relaxed text-secondary-foreground/80">
              Seva to Gau Mata, Annavandar Seva & All India Jagannath Mandir Nirman for Sanatan Dharma
              <br />
              Inspired by Sri Bhabani Prasad Das Mohapatra, Chief Daitapati of Jagannath Temple, Puri
            </p>
            <div className="flex items-center gap-1 text-sm text-secondary-foreground/70">
              <span>Serving Sanatan Dharma</span>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Our Seva", path: "/our-seva" },
                { label: "About Trust", path: "/about" },
                { label: "Donate", path: "/donate" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-secondary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Contact Us
            </h4>
            <ul className="space-y-3 font-body text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Puri, Odisha, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>info@jaganathsevatrust.org</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-foreground/10 text-secondary-foreground/70 transition-colors hover:bg-accent hover:text-secondary">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-foreground/10 text-secondary-foreground/70 transition-colors hover:bg-accent hover:text-secondary">
                <Facebook size={16} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-foreground/10 text-secondary-foreground/70 transition-colors hover:bg-accent hover:text-secondary">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-secondary-foreground/10 pt-6 text-center font-body text-xs text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Jagannath Darshan Charitable Trust. All rights reserved.</p>
          <p className="mt-1">🙏 Jai Jagannath 🙏</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
