import galleryGosala from "@/assets/Gosala4.webp";
import galleryAnnabhandar from "@/assets/gallery-annabhandar.jpg";
import galleryMandir from "@/assets/Mandir3.webp";
import gosalaImage from "@/assets/Gosala3.webp";
import annabhandarImage from "@/assets/annabhandar.jpg";
import mandirImage from "@/assets/Mandir5.webp";

const photos = [
  { src: galleryGosala, alt: "Seva at Gosala — Caring for Gau Mata", label: "Gosala Seva" },
  { src: galleryAnnabhandar, alt: "Mahaprasad distribution to devotees", label: "Annabhandar Seva" },
  { src: galleryMandir, alt: "Jagannath Temple construction in progress", label: "Jagannath Mandir Nirman" },
  { src: gosalaImage, alt: "Cows at our Gosala", label: "Gau Mata" },
  { src: annabhandarImage, alt: "Community meals", label: "Bhandara" },
  { src: mandirImage, alt: "Jagannath Mandir", label: "Jagannath Mandir" },
];

const GallerySection = () => (
  <section className="section-padding">
    <div className="container-trust">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
        Seva in Action
      </h2>
      <div className="mx-auto mb-4 h-1 w-16 rounded bg-accent" />
      <p className="mx-auto mb-10 max-w-2xl text-center font-body text-sm text-muted-foreground">
        A glimpse into our daily seva activities across Gosala, Annabhandar, and Jagannath Mandir Nirman projects.
      </p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((photo) => (
          <div key={photo.label} className="group relative overflow-hidden rounded-xl shadow-sm">
            <img
              src={photo.src}
              alt={photo.alt}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 rounded-full bg-primary/80 px-3 py-1 font-body text-xs font-medium text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {photo.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
