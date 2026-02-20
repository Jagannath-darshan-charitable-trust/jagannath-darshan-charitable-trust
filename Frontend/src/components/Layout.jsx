import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Footer from "./Footer";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Our Seva", path: "/our-seva" },
  { label: "About Trust", path: "/about" },
  { label: "Donate", path: "/donate" },
  { label: "Contact", path: "/contact" },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="container-trust flex items-center justify-between px-4 py-3 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold text-primary md:text-xl">
              🙏 Jagannath Darshan Charitable Trust
            </span>
          </Link>
          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`rounded-md px-4 py-2 font-body text-sm font-medium transition-colors hover:bg-muted ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/donate"
                className="ml-2 rounded-md bg-cta px-5 py-2 font-body text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta/90"
              >
                Donate Now
              </Link>
            </li>
          </ul>
          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-4 py-2.5 font-body text-sm font-medium transition-colors hover:bg-muted ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-md bg-cta px-5 py-2.5 text-center font-body text-sm font-semibold text-cta-foreground"
                >
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
