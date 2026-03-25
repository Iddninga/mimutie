import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/hero-banner-HgX4nGboPvqvVMUmZ3dJvd.webp"
          alt="Mimutie Women"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Empowering Indigenous Women
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream">
            Fighting gender-based violence, advancing rights, and building sustainable futures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Learn More
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Mimutie Women Organization provides education and socio-economic empowerment for indigenous women in Tanzania through capacity building and active participation in their own development process.
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                We combat gender-based violence, promote sexual and reproductive health, strengthen leadership, advance economic empowerment, and address climate change and justice.
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Discover Our Story <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/about-section-image-cLSXQZvk46itPN8CrywYfe.webp"
              alt="Mentorship"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-primary mb-16">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Combat GBV",
                description: "Fighting gender-based violence against women and children through community engagement and legal support.",
              },
              {
                icon: Users,
                title: "Empower Women",
                description: "Strengthening leadership and economic empowerment through skills training and entrepreneurship programs.",
              },
              {
                icon: Zap,
                title: "Advance Rights",
                description: "Advocating for indigenous women's rights and promoting sexual and reproductive health awareness.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth">
                <item.icon className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "GBV Survivors Rescued" },
              { number: "300+", label: "Court Cases Supported" },
              { number: "9,800+", label: "Women Reached with Education" },
              { number: "6,000+", label: "Men Engaged in Prevention" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-primary mb-16">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Mimutie Girls Rescue Center
              </h3>
              <p className="text-foreground/80 mb-6">
                Dedicated to protecting, empowering, and uplifting indigenous girls in Maasai land. We provide shelter, education, medical treatment, legal support, and psychosocial care to survivors of gender-based violence.
              </p>
              <Link href="/girls-rescue-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Her Future Project
              </h3>
              <p className="text-foreground/80 mb-6">
                End Gender Based Violence Through Empowerment and Leadership Support. Creating safe spaces, raising awareness, and strengthening community systems to protect and support women and girls.
              </p>
              <Link href="/projects">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Support Mimutie Women Organization in empowering indigenous women and advancing their rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button className="bg-white hover:bg-cream text-accent px-8 py-6 text-lg">
                Donate
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
