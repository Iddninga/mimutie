import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent text-cream mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/MIMUTOELOGO26_52e351b0.webp"
              alt="Mimutie Women Organization"
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm text-cream/90">
              Empowering indigenous women and girls in Tanzania through education, advocacy, and economic empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition-smooth">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="hover:text-white transition-smooth">Our Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/impact">
                  <a className="hover:text-white transition-smooth">Our Impact</a>
                </Link>
              </li>
              <li>
                <Link href="/get-involved">
                  <a className="hover:text-white transition-smooth">Get Involved</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Main Office</p>
                  <p className="text-cream/90">Arusha, Tanzania</p>
                  <p className="font-semibold mt-2">Branch Office</p>
                  <p className="text-cream/90">Loliondo, Ngorongoro</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@mimutie.or.tz" className="hover:text-white transition-smooth">
                  info@mimutie.or.tz
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+255784182626" className="hover:text-white transition-smooth">
                  +255 784 182 626
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mimutie.org.tz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-smooth"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/mimutieorganisation/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-smooth"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://youtube.com/@mimutiewomen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-smooth"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-cream/80">
            <p>&copy; 2026 Mimutie Women Organization. All rights reserved.</p>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
