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
                transform: "scale(1)",
              }}
            />
          </div>
        );
      })}



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
          <span className="text-gradient-gold">Sri Jagannath Mandir Nirman</span>
          {" "}for Sanatan Dharma
        </h1>

        <div
          className="mx-auto mt-8 flex max-w-2xl justify-center animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="rounded-full bg-primary/40 inline-block px-8 py-2.5 font-body text-sm font-medium leading-relaxed text-primary-foreground backdrop-blur-md md:text-base border border-primary-foreground/10">
            Inspired by Sri Bhabani Prasad Das Mohapatra, Chief Daitapati of Jagannath Temple, Puri
          </p>
        </div>
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
            className="btn-glow rounded-xl bg-emerald-600 px-8 py-4 font-body text-base font-bold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-2xl hover:-translate-y-0.5"
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

    </section>
  );
};

export default HeroSection;
