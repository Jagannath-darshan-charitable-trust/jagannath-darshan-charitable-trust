import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart, Utensils, Landmark, ArrowRight } from "lucide-react";
import Footer from "./Footer";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Our Seva",
    path: "/our-seva",
    children: [
      { label: "Gosala", subtitle: "Cow Protection & Care", path: "/our-seva/gosala", icon: Heart },
      { label: "Annabhandar", subtitle: "Mahaprasad Distribution", path: "/our-seva/annabhandar", icon: Utensils },
      { label: "Mandir Nirman", subtitle: "Temple Construction", path: "/our-seva/mandir-nirman", icon: Landmark },
    ],
  },
  { label: "About Trust", path: "/about" },
  { label: "Donate", path: "/donate" },
  { label: "Contact", path: "/contact" },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      <header
        className={`sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-primary/5" : ""
        }`}
      >
        <nav className="container-trust flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="font-heading text-base font-bold leading-tight text-primary md:text-lg">
                Jagannath Darshan
              </span>
              <span className="font-body text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Charitable Trust
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <li key={item.path} className={item.children ? "relative dropdown-trigger" : ""}>
                {item.children ? (
                  <>
                    {/* Parent link with dropdown */}
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1.5 rounded-lg px-4 py-2 font-body text-sm font-medium transition-all duration-200 hover:bg-muted ${
                        isActive(item.path)
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </Link>

                    {/* Dropdown panel */}
                    <div className="dropdown-panel">
                      <div className="dropdown-inner">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="dropdown-item"
                          >
                            <span className="dropdown-item-icon">
                              <child.icon size={16} />
                            </span>
                            <div>
                              <span className="block text-sm font-semibold">{child.label}</span>
                              <span className="block text-xs text-muted-foreground">{child.subtitle}</span>
                            </div>
                          </Link>
                        ))}
                        <div className="mt-1 border-t border-border pt-1">
                          <Link
                            to={item.path}
                            className="dropdown-item text-primary"
                          >
                            <ArrowRight size={14} />
                            <span className="text-sm font-semibold">View All Sevas</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`rounded-lg px-4 py-2 font-body text-sm font-medium transition-all duration-200 hover:bg-muted ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/donate"
                className="ml-3 rounded-lg bg-cta px-5 py-2.5 font-body text-sm font-semibold text-cta-foreground shadow-md transition-all hover:bg-cta/90 hover:shadow-lg btn-glow"
              >
                Donate Now
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="animate-slide-down border-t border-border bg-background px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  {item.children ? (
                    <div>
                      {/* Accordion trigger */}
                      <button
                        onClick={() =>
                          setMobileDropdown(mobileDropdown === item.path ? null : item.path)
                        }
                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 font-body text-sm font-medium transition-colors hover:bg-muted ${
                          isActive(item.path)
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            mobileDropdown === item.path ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Accordion content */}
                      {mobileDropdown === item.path && (
                        <div className="ml-4 mt-1 animate-slide-down space-y-1 border-l-2 border-accent/30 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-primary"
                            >
                              <child.icon size={14} className="text-primary" />
                              <div>
                                <span className="block font-medium">{child.label}</span>
                                <span className="block text-xs text-muted-foreground">{child.subtitle}</span>
                              </div>
                            </Link>
                          ))}
                          <Link
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 font-body text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                          >
                            <ArrowRight size={14} />
                            View All Sevas
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-4 py-3 font-body text-sm font-medium transition-colors hover:bg-muted ${
                        isActive(item.path)
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-lg bg-cta px-5 py-3 text-center font-body text-sm font-semibold text-cta-foreground shadow-md"
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
