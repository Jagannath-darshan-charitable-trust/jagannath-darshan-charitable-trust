import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/Gosala1.webp";
import heroImage2 from "@/assets/annabhandar.jpg";
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
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Stacked background images with crossfade */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Subtle zoom animation on the active image */}
      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" style={{ zIndex: 1 }} />

      <div className="relative z-10 px-4 text-center" style={{ zIndex: 2 }}>
        <p className="mb-4 animate-fade-in font-body text-sm font-medium uppercase tracking-[0.2em] text-accent">
           Jai Jagannath 
        </p>
        <h1 className="mx-auto max-w-4xl animate-fade-in-up font-heading text-3xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Seva to Gau Mata, Annavandar Seva & All India Jagannath Mandir Nirman for Sanatan Dharma
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl animate-fade-in-up font-body text-base text-primary-foreground/80 md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Inspired by Sri Bhabani Prasad Das Mohapatra, Chief Daitapati of Jagannath Temple, Puri
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/donate"
            className="animate-fade-in-up rounded-lg bg-cta px-8 py-3.5 font-body text-base font-semibold text-cta-foreground shadow-lg transition-all hover:bg-cta/90 hover:shadow-xl"
          >
            Donate Now
          </Link>
          <Link
            to="/our-seva"
            className="animate-fade-in-up rounded-lg border border-primary-foreground/30 px-8 py-3.5 font-body text-base font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Explore Our Seva
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === currentIndex ? "2rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: index === currentIndex ? "#d4a843" : "rgba(255,255,255,0.5)",
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
