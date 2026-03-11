import jagannathImage from "@/assets/Jagannath1.webp";
import jagannathImage2 from "@/assets/Jagannath2.webp";
import jagannathImage3 from "@/assets/Jagannath3.webp";
import jagannathHeaderBg from "@/assets/Jagannath4.webp";

const JagannathLegacy = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-48 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ 
            backgroundImage: `url(${jagannathHeaderBg})`,
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/60" />
        
        <div className="relative z-20 container-trust px-4">
          <h1 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl animate-fade-in-up">
            Lord Jagannath's Legacy
          </h1>
          <div className="mt-6 mx-auto h-1.5 w-32 bg-accent rounded-full animate-fade-in" style={{ animationDelay: "0.4s" }} />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-trust mx-auto max-w-4xl space-y-6 px-4">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_300px]">
            <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
              Lord Jagannath, the "Lord of the Universe," is one of the most revered deities in the Hindu tradition. Worshipped primarily at the Jagannath Temple in Puri, Odisha - one of the four sacred Char Dhams of India - His legacy is a testament to the power of inclusive devotion. Unlike many other Hindu traditions, the Jagannath culture is rooted in the revolutionary idea that the divine belongs to everyone, regardless of caste, creed, gender, or social standing. The Lord's Mahaprasad, prepared in the world's largest kitchen, is served to all without discrimination, embodying the principle that in the eyes of God, all are equal.
            </p>
            <img
              src={jagannathImage}
              alt="Lord Jagannath"
              className="w-full rounded-xl object-cover shadow-md"
              loading="lazy"
            />
          </div>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            The origins of Lord Jagannath's worship trace back to ancient tribal traditions. According to sacred lore, the deity was originally worshipped by the Sabara tribal chief Vishwavasu in the dense forests of Nilachal. When the deity was later enshrined in the grand temple, the tribal connection was not severed but honored - the Daitapati sevaks, descendants of Vishwavasu's lineage, continue to serve as the familial caretakers of the Lord to this day. This unique blending of tribal and Brahminical traditions makes the Jagannath culture a living symbol of cultural harmony and spiritual democracy.
          </p>

          <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
            The annual Rath Yatra, one of the oldest and grandest festival processions in the world, is a magnificent expression of Lord Jagannath's inclusive philosophy. During this festival, the Lord leaves His sanctum sanctorum and comes out to the streets for all to see, touch, and worship. It is a powerful statement that the divine is not confined within temple walls; it moves among the people, accessible to the poorest and the most marginalized. The Rath Yatra has inspired millions across centuries and has become a global phenomenon, celebrated in cities around the world.
          </p>

          <div className="grid gap-8 md:grid-cols-[1fr_300px]">
            <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
              The Jagannath tradition also places immense importance on the concept of Mahaprasad - food offered to the Lord and then distributed to devotees. This is not ordinary food; it is considered the direct grace of the Lord, carrying His blessings. The tradition of Annadan (food distribution) at Puri serves lakhs of people daily, making it the largest community feeding program rooted in spiritual tradition. Our Jagannath Annabhandar seva is a humble continuation of this eternal tradition, ensuring that no soul goes hungry in the Lord's domain.
            </p>
            <img
              src={jagannathImage2}
              alt="Lord Jagannath Tradition"
              className="w-full rounded-xl object-cover shadow-md"
              loading="lazy"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
                The philosophy of Lord Jagannath teaches us that true devotion is expressed not through rituals alone but through service to all living beings. The cow, considered sacred in Vedic culture, holds a special place in this tradition. Gau Seva is seen as an act of worship, a way of expressing gratitude to the divine mother who nourishes all. Our Jagannath Gosala initiative is inspired by this very principle - to protect, care for, and honor the sacred cow as an integral part of our spiritual ecosystem.
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground text-left md:text-justify">
                At the Jagannath Darshan Charitable Trust, we consider ourselves humble custodians of this extraordinary legacy. Every temple we build, every cow we protect, and every meal we serve is an offering at the lotus feet of Lord Jagannath. We invite you to become a part of this eternal tradition - a tradition that has stood the test of centuries and continues to illuminate the path of dharma, compassion, and universal love.
              </p>
            </div>
            <img
              src={jagannathImage3}
              alt="Jagannath Gau Seva"
              className="w-full rounded-xl object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JagannathLegacy;
