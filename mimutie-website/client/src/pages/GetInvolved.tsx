import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, Briefcase, BookOpen } from "lucide-react";
import { toast } from "sonner";

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to the backend
    console.log("Form submitted:", formData);
    toast.success("Thank you for your interest! We will contact you soon.");
    setFormData({
      fullName: "",
      address: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Join us in empowering indigenous women and advancing their rights.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Ways to Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Donate",
                description: "Support our programs and initiatives through financial contributions.",
              },
              {
                icon: Users,
                title: "Volunteer",
                description: "Contribute your time and skills to support our community programs.",
              },
              {
                icon: Briefcase,
                title: "Partner with Us",
                description: "Collaborate with Mimutie to amplify our impact and reach.",
              },
              {
                icon: BookOpen,
                title: "Advocate",
                description: "Raise awareness about women's rights and our mission in your networks.",
              },
            ].map((way, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth">
                <way.icon className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {way.title}
                </h3>
                <p className="text-foreground/80">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">
            Express Your Interest
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Fill out the form below and let us know how you'd like to get involved. We'll be in touch soon!
          </p>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your address"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+255 XXX XXX XXX"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                What You Want to Say
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us how you'd like to get involved..."
              ></textarea>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Main Office
              </h3>
              <p className="text-lg text-foreground/80 mb-2">Arusha, Tanzania</p>
              <p className="text-lg text-foreground/80 mb-2">P.O. Box 12725</p>
              <p className="text-lg text-foreground/80 mb-2">
                Email: <a href="mailto:info@mimutie.or.tz" className="text-primary hover:underline">info@mimutie.or.tz</a>
              </p>
              <p className="text-lg text-foreground/80">
                Phone: <a href="tel:+255784182626" className="text-primary hover:underline">+255 784 182 626</a>
              </p>
            </div>
            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Branch Office
              </h3>
              <p className="text-lg text-foreground/80 mb-2">Loliondo, Ngorongoro</p>
              <p className="text-lg text-foreground/80">Arusha, Tanzania</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
