import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            About Mimutie
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Empowering indigenous women and girls in Tanzania through education, advocacy, and economic empowerment.
          </p>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Mimutie Women Organization (MWO) is a non-governmental organization based in northern Tanzania. It is duly registered under the Ministry of Community Development, Gender, Women and Special Group, with Registration No. 00NGO/R1/00964.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                The organization operates across mainland Tanzania and is based in Arusha region and Ngorongoro District, where it works closely with marginalized pastoralist communities, particularly women and girls who face systemic barriers to education.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Founded and led by a visionary Maasai woman whose determination to create change goes beyond formal educational limitations, Mimutie focuses on combating gender-based violence, promoting sexual and reproductive health, strengthening leadership, advancing economic empowerment, and addressing climate change and justice.
              </p>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/community-engagement-image-4uHVubNznG9CytXTtAya6s.webp"
              alt="Community"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-display font-bold text-primary mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A society where indigenous women are given their space to actualize their full human potential for socio-economic development with full respect for human rights and gender equality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-display font-bold text-primary mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To provide education and socio-economic empowerment for indigenous women in Tanzania through capacity building and active participation and management of their own development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Our Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Combat and end gender-based violence against women, girls, and children",
              "Establish a women's platform to coordinate and address issues affecting women",
              "Advocate for the rights of pastoralist women in line with democratic principles",
              "Promote a society where women have equal opportunities for economic, social, and political development",
              "Eliminate female genital mutilation (FGM) and child marriage, ensuring girls have access to quality education",
              "Promote Sexual and Reproductive Health and Rights (SRHR)",
              "Promote women's rights and recognize their roles across various social sectors",
              "Provide women with entrepreneurship education to reduce poverty and create economic empowerment opportunities",
              "Educate indigenous communities on environmental conservation and sustainable practices",
              "Mobilize communities and build movements that advance women's rights and social justice",
            ].map((objective, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-lg text-foreground/80 pt-1">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Support Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us empower indigenous women and advance their rights in Tanzania.
          </p>
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
