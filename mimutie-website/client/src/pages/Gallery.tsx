export default function Gallery() {
  const galleryImages = [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/hero-banner-HgX4nGboPvqvVMUmZ3dJvd.webp",
      alt: "Women Leaders",
      title: "Community Leaders",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/about-section-image-cLSXQZvk46itPN8CrywYfe.webp",
      alt: "Mentorship",
      title: "Mentorship Programs",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/impact-section-image-FvkweNubNkS6ArwoLXrZeb.webp",
      alt: "Community Celebration",
      title: "Community Celebration",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/girls-rescue-center-image-VaWF3yxZ2KuHhfBWBooFoW.webp",
      alt: "Girls Learning",
      title: "Girls Rescue Center",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/community-engagement-image-4uHVubNznG9CytXTtAya6s.webp",
      alt: "Community Engagement",
      title: "Community Engagement",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Gallery
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Visual stories of our work empowering indigenous women and girls.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-smooth cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                  <h3 className="text-white font-display font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Photos Coming */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">
            More Stories to Share
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Follow us on social media to see more photos and updates from our programs and community initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/mimutie.org.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-smooth"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/mimutieorganisation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-smooth"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
