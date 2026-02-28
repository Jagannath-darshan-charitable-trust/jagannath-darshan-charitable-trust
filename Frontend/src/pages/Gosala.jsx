import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gosalaImage from "@/assets/Gosala5.webp";
import gosala6 from "@/assets/Gosala6.webp";
import gosala7 from "@/assets/Gosala7.webp";
import gosala8 from "@/assets/Gosala8.webp";
import gosala9 from "@/assets/Gosala9.webp";
import gosala10 from "@/assets/Gosala10.webp";
import gosala11 from "@/assets/Gosala11.webp";
import gosala12 from "@/assets/Gosala12.webp";
import gosala13 from "@/assets/Gosala13.webp";
import gosala14 from "@/assets/Gosala14.webp";

const galleryImages = [
  { src: gosala6, alt: "Cows grazing in the Jagannath Gosala", caption: "Open Grazing" },
  { src: gosala7, alt: "Feeding the cows", caption: "Daily Feeding" },
  { src: gosala8, alt: "Healthy cows at the shelter", caption: "Healthy & Happy" },
  { src: gosala9, alt: "Calves at the Jagannath Gosala", caption: "Young Calves" },
  { src: gosala10, alt: "Veterinary care for cows", caption: "Medical Care" },
  { src: gosala11, alt: "Cow shed at Jagannath Gosala", caption: "Safe Shelter" },
  { src: gosala12, alt: "Sevaks caring for cows", caption: "Seva in Action" },
  { src: gosala13, alt: "Cows resting peacefully", caption: "Peaceful Rest" },
  { src: gosala14, alt: "Evening Feeding at Jagannath Gosala", caption: "Evening Feeding" },
];
const Gosala = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={gosalaImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-trust relative z-10">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Jagannath Gosala
          </h1>
          <p className="mt-4 font-body text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Restoring the Divine Bond between Sri Jagannath and Gau Mata through Compassionate Service.
          </p>
        </div>
      </section>

      {/* Philosophy & Divine Connection */}
      <section className="section-padding overflow-hidden">
        <div className="container-trust">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img src={gosalaImage} alt="Lord Jagannath's Beloved Cows" className="h-[500px] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-cta p-6 text-white shadow-xl hidden md:block">
                <p className="font-heading text-2xl font-bold">1,200+</p>
                <p className="text-sm">Cows Protected</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                The Divine Connection: Sri Jagannath and Gau Mata
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground text-justify">
                <p>
                  In the sacred traditions of Puri, the relationship between Lord Jagannath and the cow (Gau Mata) is deeply intertwined, echoing the eternal pastimes of Jagannath as Krishna, the divine cowherd 'Gopala'. The cow is not merely an animal in the Jagannath culture; she is a mother, a sustainer of life, and a symbol of Earth’s fertility and peace.
                </p>
                <p>
                  It is said that in the presence of cows, the Lord finds His greatest joy. The Jagannath Gosala is established with the vision that serving a cow is equivalent to serving Mahaprabhu Himself. According to ancient scriptures, the cow is the abode of all devatas, and by protecting her, we protect the very foundations of Sanatana Dharma. Our mission is to restore this ancient bond, ensuring that every cow in our care is treated with the same reverence as the deities in the temple.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="rounded-full bg-accent/10 px-6 py-2 text-accent-foreground border border-accent/20">
                  <span className="font-heading font-semibold text-sm">Sacred Bond</span>
                </div>
                <div className="rounded-full bg-primary/10 px-6 py-2 text-primary border border-primary/20">
                  <span className="font-heading font-semibold text-sm">Divine Seva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Significance & Daily Life */}
      <section className="section-padding bg-muted/30">
        <div className="container-trust">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-foreground">The Spiritual Significance of Go-Seva</h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground text-justify">
                  Go-Seva, or the service to cows, is considered one of the highest forms of 'Punya' (merit) in our tradition. It is believed that 'Gomata' carries the essence of the divine, and her presence brings prosperity, health, and spiritual upliftment to the surroundings. In the context of Sri Jagannath’s Mahaprasad, the role of cows is pivotal, as pure ghee and milk are essential components of many offerings.
                </p>
                <p className="font-body text-base leading-relaxed text-muted-foreground text-justify">
                  By maintaining the Jagannath Gosala, we ensure that the principles of 'Ahimsa' (non-violence) and compassion are practiced daily. Every morning, as the sun rises over the horizon, the air in our Gosala is filled with the chanting of Vedic mantras, creating a vibration that heals both the animals and the sevaks. This spiritual atmosphere reinforces our belief that cow protection is not just a social duty but a path to liberation.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-foreground">A Haven for the Abandoned</h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground text-justify">
                  Our Gosala serves as a sanctuary for those who have nowhere else to go. Many of the cows in our care are rescued from situations of neglect, abandonment, or potential harm. We provide a lifetime of care for 'Vridha' (aging) cows, bull calves, and those who are no longer productive in a commercial sense.
                </p>
                <p className="font-body text-base leading-relaxed text-muted-foreground text-justify">
                  At Jagannath Gosala, we believe that a cow's value is not measured by her milk yield but by her intrinsic divinity. Our facilities are designed to provide ample space for grazing, clean water sources, and specialized medical areas for the injured and sick. We focus on 'Satvik' care, ensuring that the cows are happy, stress-free, and healthy. This mission is sustained by the faith of devotees who understand that every Gau-Mata rescued is a victory for humanity.
                </p>
              </div>
            </div>

            {/* Daily Routine Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h4 className="mb-6 font-heading text-xl font-bold text-foreground flex items-center gap-2">
                  Daily Seva Routine
                </h4>
                <div className="space-y-6">
                  {[
                    { title: "Morning Seva", time: "4:30 AM", desc: "Mantra chanting, bathing, and fresh fodder offering." },
                    { title: "Medical Checkup", time: "10:00 AM", desc: "Veterinary inspection and treatment for the aging." },
                    { title: "Evening Aarti", time: "5:30 PM", desc: "Spiritual offering and evening feeding with jaggery." },
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <p className="font-heading text-sm font-bold text-foreground">{item.title} <span className="ml-2 font-normal text-cta text-xs">{item.time}</span></p>
                      <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <h4 className="mb-2 font-heading text-lg font-bold">Visit for Seva</h4>
                <p className="text-sm opacity-90 mb-4">Experience the joy of serving Gau Mata personally at our Puri center.</p>
                <div className="space-y-3 text-xs opacity-80">
                  <p>• Near Puri Temple, Odisha</p>
                  <p>• Open Everyday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panchagavya & Sustainability */}
      <section className="section-padding pb-0">
        <div className="container-trust">
          <div className="rounded-3xl bg-neutral-900 p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
               <img src={gosala8} alt="" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="relative z-10 grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-bold md:text-4xl text-cta">Traditional Healing & Sustainability</h2>
                <div className="space-y-4 font-body text-base leading-relaxed opacity-90 text-justify">
                  <p>
                    Drawing inspiration from the 'Panchagavya' traditions, our Gosala focuses on the holistic benefits of cow-related products. In the path of Sri Jagannath, everything is seen as 'Prasada' (mercy). The products derived from our indigenous (Desi) cows are used to create eco-friendly items like organic fertilizers, herbal soaps, and medicinal 'Ghee'.
                  </p>
                  <p>
                    We are committed to preserving the indigenous breeds of cows, known for their resilience and the high 'Satvik' quality of their milk. By promoting these products, we aim to educate the community about the immense economic and health benefits of maintaining a vibrant, cow-based ecosystem.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                    <p className="font-heading font-bold text-cta">Ahimsa Ghee</p>
                    <p className="text-xs opacity-70">Prepared using Vedic methods</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                    <p className="font-heading font-bold text-cta">Organic Fertilizer</p>
                    <p className="text-xs opacity-70">Supporting natural farming</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <img src={gosala6} alt="Indigenous Cow" className="rounded-2xl h-full w-full object-cover aspect-square" />
                  <img src={gosala10} alt="Traditional Care" className="rounded-2xl h-full w-full object-cover aspect-square mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground">Glimpses of Jagannath Gosala</h2>
            <p className="mt-2 text-muted-foreground">Witness the peaceful life of the Lord's cows.</p>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-md aspect-square">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
                  <p className="font-heading text-sm font-medium text-white">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container-trust relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold md:text-4xl mb-4">Join Mahaprabhu’s Mission</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Every cow protected is a victory for humanity. Participate in this sacred mission and earn the eternal blessings of Sri Jagannath.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
             {[
               { title: "Adopt a Cow", price: "₹1,500", freq: "/ month", desc: "Cover the complete care, fodder, and shelter for one healthy cow." },
               { title: "Fodder Seva", price: "₹500", freq: "min. amount", desc: "Contribute towards daily green grass, hay, and nutritious supplements.", popular: true },
               { title: "Medical Care", price: "₹2,000", freq: "/ unit", desc: "Support specialized treatments for injured, sick, and aging cows." }
             ].map((plan, i) => (
               <div key={i} className={`relative rounded-3xl p-8 transition-transform hover:-translate-y-2 ${plan.popular ? 'bg-white text-primary ring-4 ring-cta/30' : 'bg-white/10 backdrop-blur-md'}`}>
                 {plan.popular && (
                   <span className="absolute top-0 right-8 -translate-y-1/2 bg-cta px-4 py-1 rounded-full text-xs font-bold text-cta-foreground">Most Blessed</span>
                 )}
                 <h3 className="mb-2 font-heading text-2xl font-bold">{plan.title}</h3>
                 <p className={`mb-6 text-sm ${plan.popular ? 'text-muted-foreground' : 'opacity-80'}`}>{plan.desc}</p>
                 <div className="mb-8">
                   <span className="text-3xl font-bold">{plan.price}</span>
                   <span className="text-sm opacity-70 ml-1">{plan.freq}</span>
                 </div>
                 <Link to="/donate" className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-heading font-bold transition ${plan.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-cta text-cta-foreground hover:bg-cta/90'}`}>
                   Contribute Now <ArrowRight size={18} />
                 </Link>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Visitor Info Section */}
      <section className="section-padding">
        <div className="container-trust">
          <div className="rounded-[2.5rem] bg-accent/5 p-8 md:p-16 border border-accent/10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">A Spiritual Pilgrimage</h2>
                <div className="space-y-6">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    We invite you to visit our Jagannath Gosala and experience the joy of feeding and caring for Gau Mata personally. It is a spiritual experience that brings profound peace and merits. Witnessing the tranquility of the cows and their connection to the Lord's land is a soul-stirring experience for any devotee.
                  </p>
                  <div className="space-y-4">
                    <div className="h-12 flex items-center gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Main Center</p>
                        <p className="font-heading font-semibold">Near Puri Temple, Odisha</p>
                      </div>
                    </div>
                    <div className="h-12 flex items-center gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Visiting Hours</p>
                        <p className="font-heading font-semibold">6:00 AM – 11:00 AM | 4:00 PM – 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-border text-center space-y-6">
                <h3 className="font-heading text-2xl font-bold">Cannot Visit?</h3>
                <p className="text-muted-foreground">You can still be a vital part of this sacred mission by sponsoring a cow or fodder remotely.</p>
                <Link to="/donate" className="inline-flex items-center gap-2 text-cta font-bold hover:gap-3 transition-all">
                   Support Remotely <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};
export default Gosala;
