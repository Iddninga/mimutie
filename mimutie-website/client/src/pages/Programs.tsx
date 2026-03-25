export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Comprehensive initiatives designed to empower indigenous women and girls.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {[
              {
                title: "Gender-Based Violence Prevention",
                description: "Combat and end gender-based violence through community engagement, awareness programs, legal support, and survivor assistance.",
              },
              {
                title: "Education & Skills Training",
                description: "Provide access to quality education from primary to higher education, vocational training, and skills development programs including English, ICT, sewing, and entrepreneurship.",
              },
              {
                title: "Economic Empowerment",
                description: "Support women's economic independence through entrepreneurship education, savings groups, income-generating activities, and business development training.",
              },
              {
                title: "Leadership Development",
                description: "Strengthen women's leadership capabilities and promote their participation in community decision-making at all levels.",
              },
              {
                title: "Sexual & Reproductive Health",
                description: "Promote sexual and reproductive health rights through education, awareness, and access to essential health services.",
              },
              {
                title: "Environmental Conservation",
                description: "Educate indigenous communities on environmental conservation, sustainable practices, and climate change adaptation in accordance with national laws.",
              },
            ].map((program, i) => (
              <div key={i} className="border-l-4 border-primary pl-8">
                <h3 className="text-3xl font-display font-bold text-primary mb-4">
                  {program.title}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Program Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Women & Girls Directly Served" },
              { number: "15,000+", label: "Community Members Reached" },
              { number: "50", label: "Traditional Leaders Recognized" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-lg text-center shadow-md">
                <div className="text-5xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-lg text-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
