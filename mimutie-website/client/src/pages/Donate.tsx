import { Heart, MapPin, DollarSign } from "lucide-react";

export default function Donate() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl max-w-3xl">
            Your donation directly supports the empowerment of indigenous women and girls in Tanzania.
          </p>
        </div>
      </section>

      {/* Impact of Donations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                amount: "$25",
                impact: "Provides a week of meals for a girl at the Rescue Center",
              },
              {
                amount: "$50",
                impact: "Supports one girl's vocational training program",
              },
              {
                amount: "$100",
                impact: "Provides medical care and legal support for a GBV survivor",
              },
              {
                amount: "$250",
                impact: "Funds a month of education for multiple girls",
              },
              {
                amount: "$500",
                impact: "Supports community awareness and prevention programs",
              },
              {
                amount: "$1,000+",
                impact: "Enables comprehensive support for a girl's full recovery and education",
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth">
                <div className="text-4xl font-display font-bold text-primary mb-4">
                  {item.amount}
                </div>
                <p className="text-lg text-foreground/80">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Why Support Mimutie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Direct Impact",
                description: "Every donation directly supports women and girls in need.",
              },
              {
                icon: MapPin,
                title: "Local Expertise",
                description: "We understand the unique challenges of indigenous communities.",
              },
              {
                icon: DollarSign,
                title: "Transparency",
                description: "We are committed to accountability and transparent use of funds.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg hover:shadow-lg transition-smooth">
                <item.icon className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">
            Bank Transfer Details
          </h2>
          <div className="bg-cream p-8 rounded-lg border-l-4 border-primary mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Bank Name</h3>
                <p className="text-lg text-foreground/80">KCB Bank</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Branch</h3>
                <p className="text-lg text-foreground/80">Arusha</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Country</h3>
                <p className="text-lg text-foreground/80">Tanzania</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Account Number</h3>
                <p className="text-lg text-foreground/80 font-mono">3301296963</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">SWIFT Code</h3>
                <p className="text-lg text-foreground/80 font-mono">KCBLTZTZ</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Please include your name and email address with your transfer so we can send you a receipt and impact report.
          </p>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Other Ways to Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Become a Monthly Donor",
                description: "Set up a recurring monthly donation to provide consistent support for our programs.",
              },
              {
                title: "Corporate Sponsorship",
                description: "Partner with Mimutie as a corporate sponsor and support our mission.",
              },
              {
                title: "Fundraise for Us",
                description: "Organize a fundraising event or campaign to support our initiatives.",
              },
              {
                title: "In-Kind Donations",
                description: "Donate goods or services that support our programs and operations.",
              },
            ].map((way, i) => (
              <div key={i} className="bg-white p-8 rounded-lg hover:shadow-lg transition-smooth">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {way.title}
                </h3>
                <p className="text-foreground/80">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Questions About Donating?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for more information about donation options or to discuss partnership opportunities.
          </p>
          <a href="mailto:info@mimutie.or.tz" className="inline-block bg-white hover:bg-cream text-primary px-8 py-3 rounded-lg font-semibold transition-smooth">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
