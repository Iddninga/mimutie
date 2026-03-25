import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Programs", href: "/programs" },
    { label: "Our Projects", href: "/projects" },
    { label: "Girls Rescue Center", href: "/girls-rescue-center" },
    { label: "Our Impact", href: "/impact" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/MIMUTOELOGO26_52e351b0.webp"
              alt="Mimutie Women Organization"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link href="/donate">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-cream transition-smooth rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/donate">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
