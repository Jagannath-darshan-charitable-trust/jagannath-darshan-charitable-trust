import galleryGosala from "@/assets/Gosala4.webp";
import galleryAnnabhandar from "@/assets/Annabhandar5.webp";
import galleryMandir from "@/assets/Mandir3.webp";
import gosalaImage from "@/assets/Gosala3.webp";
import annabhandarImage from "@/assets/Annabhandar6.webp";
import mandirImage from "@/assets/Mandir5.webp";

const photos = [
  { src: galleryGosala, alt: "Seva at Gosala - Caring for Gau Mata", label: "Gosala Seva", span: true },
  { src: galleryAnnabhandar, alt: "Mahaprasad distribution to devotees", label: "Annabhandar Seva" },
  { src: galleryMandir, alt: "Jagannath Temple construction in progress", label: "Jagannath Mandir Nirman" },
  { src: gosalaImage, alt: "Cows at our Gosala", label: "Gau Mata" },
  { src: annabhandarImage, alt: "Community meals", label: "Bhandara", span: true },
  { src: mandirImage, alt: "Jagannath Mandir", label: "Jagannath Mandir" },
];

const GallerySection = () => (
  <section className="section-padding">
    <div className="container-trust">
      <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
        Seva in Action
      </h2>
      <div className="section-divider">
        <span className="divider-icon">✦</span>
      </div>
      <p className="mx-auto mb-12 max-w-2xl text-center font-body text-sm text-muted-foreground md:text-base">
        A glimpse into our daily seva activities across Gosala, Annabhandar, and Jagannath Mandir Nirman projects.
      </p>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {photos.map((photo) => (
          <div
            key={photo.label}
            className={`group relative overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl ${
              photo.span ? "col-span-1 md:col-span-1 md:row-span-1" : ""
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Permanent subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-foreground/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Label - always visible at bottom */}
            <span className="absolute bottom-3 left-3 rounded-full bg-primary/85 px-3.5 py-1.5 font-body text-xs font-semibold text-primary-foreground shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
              {photo.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
