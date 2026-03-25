import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Briefcase, Home } from "lucide-react";

export default function GirlsRescueCenter() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Mimutie Girls Rescue Center
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Transforming lives through protection, education, and empowerment.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/girls-rescue-center-image-VaWF3yxZ2KuHhfBWBooFoW.webp"
              alt="Girls Rescue Center"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                A Safe Haven for Girls
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                The Mimutie Girls Rescue Centre, established in 2023, is dedicated to protecting, empowering, and uplifting indigenous girls in Maasai land, Arusha, Tanzania. The Centre addresses critical issues such as gender-based violence, early marriages, female genital mutilation (FGM), and lack of educational and economic opportunities.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Since its establishment, the Centre has successfully rescued over 200 girls. Many have been supported to return to primary and secondary school, while others have progressed to college and vocational training programs, helping them build independent and sustainable futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Services We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Home,
                title: "Safe Shelter",
                description: "Secure and sustainable accommodation for rescued girls in a safe, nurturing environment.",
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "Access to quality education at all levels from primary to higher education and vocational training.",
              },
              {
                icon: Heart,
                title: "Medical & Psychosocial Support",
                description: "Medical treatment, legal support, and comprehensive psychosocial care for trauma recovery.",
              },
              {
                icon: Briefcase,
                title: "Skills Training",
                description: "English, ICT, sewing, and entrepreneurship programs for income generation and independence.",
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-smooth">
                <service.icon className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "200+", label: "Girls Rescued" },
              { number: "100+", label: "Back in School" },
              { number: "50+", label: "In Vocational Training" },
            ].map((stat, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg text-center">
                <div className="text-5xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-lg text-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">
            Future Plans
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Looking ahead, the Centre aims to expand by constructing a fully equipped Girls Rescue Centre, which will include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "A formal school for comprehensive education",
              "Vocational training facilities for skills development",
              "Safe and sustainable accommodation for rescued girls",
            ].map((plan, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border-l-4 border-primary">
                <p className="text-lg text-foreground/80">{plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-8">
            Support the Centre
          </h2>
          <p className="text-xl mb-8 max-w-2xl">
            You can help transform the lives of vulnerable girls by supporting the Centre through donations.
          </p>
          <div className="bg-white/10 p-8 rounded-lg mb-8 max-w-2xl">
            <h3 className="text-2xl font-display font-bold mb-6">Bank Details</h3>
            <div className="space-y-3 text-lg">
              <p><span className="font-semibold">Bank Name:</span> KCB Bank</p>
              <p><span className="font-semibold">Branch:</span> Arusha</p>
              <p><span className="font-semibold">Country:</span> Tanzania</p>
              <p><span className="font-semibold">Account Number:</span> 3301296963</p>
              <p><span className="font-semibold">SWIFT Code:</span> KCBLTZTZ</p>
            </div>
          </div>
          <Link href="/donate">
            <Button className="bg-white hover:bg-cream text-primary px-8 py-6 text-lg">
              Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
