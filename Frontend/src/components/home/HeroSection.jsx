import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/Gosala1.webp";
import heroImage2 from "@/assets/Annabhandar4.webp";
import heroImage3 from "@/assets/Mandir11.webp";

const heroImages = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Stacked background images with smooth crossfade + Ken Burns zoom */}
      {heroImages.map((img, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: "opacity 2s ease-in-out",
              zIndex: 0,
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                animation: isActive ? "heroZoom 8s ease-out forwards" : "none",
                transform: isActive ? undefined : "scale(1)",
              }}
            />
          </div>
        );
      })}

      {/* Deep overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(20,35,30,0.55) 0%, rgba(20,35,30,0.35) 40%, rgba(20,35,30,0.70) 100%)",
          zIndex: 1,
        }}
      />

      {/* Decorative floating particles */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        {/* Floating circles */}
        <div className="animate-float absolute top-[15%] left-[10%] h-2 w-2 rounded-full bg-accent/20" style={{ animationDelay: "0s" }} />
        <div className="animate-float absolute top-[25%] right-[15%] h-3 w-3 rounded-full bg-accent/15" style={{ animationDelay: "1s" }} />
        <div className="animate-float absolute bottom-[30%] left-[20%] h-1.5 w-1.5 rounded-full bg-accent/25" style={{ animationDelay: "2s" }} />
        <div className="animate-float absolute top-[60%] right-[25%] h-2 w-2 rounded-full bg-primary-foreground/10" style={{ animationDelay: "1.5s" }} />
        <div className="animate-float absolute bottom-[20%] right-[10%] h-2.5 w-2.5 rounded-full bg-accent/15" style={{ animationDelay: "0.5s" }} />

        {/* Large decorative ring */}
        <div
          className="animate-spin-slow absolute -right-32 -top-32 h-64 w-64 rounded-full border border-accent/10 md:h-96 md:w-96"
          style={{ animationDuration: "40s" }}
        />
        <div
          className="animate-spin-slow absolute -left-20 -bottom-20 h-48 w-48 rounded-full border border-primary-foreground/5 md:h-72 md:w-72"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative px-4 text-center" style={{ zIndex: 10 }}>
        {/* Tagline with shimmer */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60 md:w-12" />
          <p className="animate-fade-in font-body text-sm font-semibold uppercase tracking-[0.25em] text-accent md:text-base">
            ॐ Jai Jagannath ॐ
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60 md:w-12" />
        </div>

        <h1 className="mx-auto max-w-4xl animate-fade-in-up font-heading text-2xl font-bold leading-tight text-primary-foreground sm:text-3xl md:text-5xl lg:text-6xl">
          Seva to{" "}
          <span className="text-gradient-gold">Gau Mata</span>
          ,{" "}
          <span className="text-gradient-gold">Annavandar Seva</span>
          {" "} &{" "}
          <span className="text-gradient-gold">Jagannath Mandir Nirman</span>
          {" "}for Sanatan Dharma
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl animate-fade-in-up font-body text-base leading-relaxed text-primary-foreground/80 md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Inspired by Sri Bhabani Prasad Das Mohapatra, Chief Daitapati of Jagannath Temple, Puri
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            to="/donate"
            className="btn-glow rounded-xl bg-cta px-8 py-4 font-body text-base font-bold text-cta-foreground shadow-lg transition-all hover:bg-cta/90 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
          <Link
            to="/our-seva"
            className="rounded-xl border-2 border-primary-foreground/25 px-8 py-4 font-body text-base font-semibold text-primary-foreground transition-all hover:border-accent/50 hover:bg-primary-foreground/10 hover:-translate-y-0.5"
          >
            Explore Our Seva
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="transition-all duration-400"
              style={{
                width: index === currentIndex ? "2.5rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: index === currentIndex ? "hsl(43, 100%, 50%)" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: "linear-gradient(to top, hsl(82, 28%, 92%), transparent)",
          zIndex: 5,
        }}
      />
    </section>
  );
};

export default HeroSection;
