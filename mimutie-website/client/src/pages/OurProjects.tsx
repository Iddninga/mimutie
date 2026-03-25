import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function OurProjects() {
  const projects = [
    {
      title: "Linking the Chain to End GBV Against Women and Girls in Pastoralist Communities",
      description: "This project was supported by Women Fund Trust Tanzania and aimed to combat gender-based violence within the Maasai pastoralist community. Implemented in Ngorongoro District, Arusha Region, the project achieved significant impact within the Maasai community and its leadership structures. As a result of the interventions, pastoralist women are now able to actively participate in decision-making meetings at the community level, strengthening their voice and role in leadership and governance.",
    },
    {
      title: "Mimutie Girls Rescue Center",
      description: "A transformative project dedicated to protecting, empowering, and uplifting indigenous girls in Maasai land, Arusha, Tanzania. The Centre addresses critical issues such as gender-based violence, early marriages, female genital mutilation (FGM), and lack of educational and economic opportunities. Since its establishment in 2023, the Centre has successfully rescued over 200 girls, many of whom have been supported to return to primary and secondary school, while others have progressed to college and vocational training programs.",
    },
    {
      title: "Her Future: End Gender Based Violence Through Empowerment and Leadership Support",
      description: "Implemented in indigenous communities where the rights of women and girls are often not fully respected. The project responds to the urgent need to address gender-based violence by creating safe spaces, raising awareness, and strengthening community systems that protect and support women and girls. Through community engagement, education, and empowerment programs, the project seeks to amplify the voices of women and girls, promote their rights, and foster a culture of respect, protection, and equality.",
    },
    {
      title: "Power of Change (PoC): Combating Gender Based Violence Within Climate Change Context",
      description: "Implemented in Tanzania focusing on indigenous communities in northern regions, including pastoralist communities like the Maasai. The project developed effective climate change mitigation strategies through participatory approaches involving the communities. These strategies focused on environmental conservation, watershed protection and management, and the adoption of innovative renewable energy solutions such as 'mkaa-poa'. The project nurtured leadership potential among women and girls and improved access to information through both traditional and modern communication channels.",
    },
    {
      title: "Strengthening the Capacity of UNDP-SGP Grantees in Project Design & Management",
      description: "This project aimed to support the UNDP Guarantee by strengthening knowledge, expertise, and enhancing the skills and experience of 70 personnel managing GEF/SGP funds and other donor-supported projects in Tanzania. The training focused on improving their capacity in effective project implementation, internal contractual and financial management, project reporting, and compliance with taxation, regulatory, and policy requirements.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Strategic initiatives transforming lives and advancing women's rights in indigenous communities.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth border-l-4 border-primary">
                <h3 className="text-3xl font-display font-bold text-primary mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Girls Rescue Center Highlight */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Mimutie Girls Rescue Center
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Our flagship project established in 2023, the Girls Rescue Centre provides comprehensive support to survivors of gender-based violence. With the generous support of Women Fund Trust Tanzania, the Irish Embassy, and FIMI, we have established sewing and livelihood programs where girls produce handbags and liquid soap.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                The Centre welcomes both local and international volunteers to contribute to its programs and support the girls' development.
              </p>
              <Link href="/girls-rescue-center">
                <Button className="bg-white hover:bg-cream text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393521734/7yhZJE5bcq9U2sRX4eAAb9/girls-rescue-center-image-VaWF3yxZ2KuHhfBWBooFoW.webp"
              alt="Girls Rescue Center"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
