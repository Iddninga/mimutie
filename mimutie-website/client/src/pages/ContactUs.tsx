import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Get in touch with Mimutie Women Organization.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Main Office */}
            <div className="bg-cream p-8 rounded-lg">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                Main Office
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-foreground/80">Arusha, Tanzania</p>
                    <p className="text-foreground/80">P.O. Box 12725</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a href="mailto:info@mimutie.or.tz" className="text-primary hover:underline">
                      info@mimutie.or.tz
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a href="tel:+255784182626" className="text-primary hover:underline">
                      +255 784 182 626
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div className="bg-cream p-8 rounded-lg">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                Branch Office
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-foreground/80">Loliondo, Ngorongoro</p>
                    <p className="text-foreground/80">Arusha, Tanzania</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Follow Us
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Stay updated with our latest news and initiatives on social media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.instagram.com/mimutie.org.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg hover:shadow-lg transition-smooth flex items-center gap-4"
            >
              <Instagram className="text-primary flex-shrink-0" size={40} />
              <div>
                <h3 className="text-xl font-display font-bold text-primary">Instagram</h3>
                <p className="text-foreground/80">@mimutie.org.tz</p>
              </div>
            </a>
            <a
              href="https://www.facebook.com/mimutieorganisation/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg hover:shadow-lg transition-smooth flex items-center gap-4"
            >
              <Facebook className="text-primary flex-shrink-0" size={40} />
              <div>
                <h3 className="text-xl font-display font-bold text-primary">Facebook</h3>
                <p className="text-foreground/80">Mimutie Organisation</p>
              </div>
            </a>
            <a
              href="https://youtube.com/@mimutiewomen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg hover:shadow-lg transition-smooth flex items-center gap-4"
            >
              <Youtube className="text-primary flex-shrink-0" size={40} />
              <div>
                <h3 className="text-xl font-display font-bold text-primary">YouTube</h3>
                <p className="text-foreground/80">Mimutie Women</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">
            Office Hours
          </h2>
          <div className="bg-cream p-8 rounded-lg">
            <p className="text-lg text-foreground/80 mb-4">
              For inquiries, donations, or partnership opportunities, please reach out to us during business hours.
            </p>
            <p className="text-lg text-foreground/80">
              We are committed to responding to all inquiries promptly and look forward to connecting with you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
