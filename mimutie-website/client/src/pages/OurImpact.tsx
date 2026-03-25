export default function OurImpact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Measurable change in the lives of indigenous women and girls across Tanzania.
          </p>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Historic Leadership Recognition",
                description: "Mimutie Women Organization has made history as the first organization in East Africa to establish a leadership system within the Maasai community that allows women to serve as traditional leaders, known as Engaigwanan. These women now actively participate in community decision-making meetings alongside men.",
              },
              {
                title: "Coalition for Indigenous People Against GBV",
                description: "Established a coalition bringing together NGOs, women-led entities, Maasai organizations, media outlets, and youth groups to comprehensively eliminate gender-based violence within indigenous communities.",
              },
              {
                title: "Survivor Support & Justice",
                description: "Rescued 500+ survivors of gender-based violence and provided support for 300+ cases through the court system, ensuring justice and protection for vulnerable women and girls.",
              },
              {
                title: "Community Education & Engagement",
                description: "Reached 9,800+ women with gender-based violence education and awareness programs, and engaged 6,000+ men in GBV prevention initiatives.",
              },
            ].map((achievement, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {achievement.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "GBV Survivors Rescued" },
              { number: "300+", label: "Court Cases Supported" },
              { number: "9,800+", label: "Women Reached with Education" },
              { number: "6,000+", label: "Men Engaged in Prevention" },
              { number: "50", label: "Traditional Leaders Recognized" },
              { number: "200+", label: "Girls in Rescue Center" },
              { number: "100+", label: "Girls Back in School" },
              { number: "1", label: "Historic Leadership System" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-display font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">
            Awards & Recognition
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Mimutie Women Organization has received various awards from the government, women's coalitions, and international organizations in recognition of its impactful work in advancing women's and Indigenous rights.
          </p>
          <div className="bg-white p-8 rounded-lg border-l-4 border-primary">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our commitment to excellence and unwavering dedication to the rights of indigenous women continues to be recognized by local, national, and international stakeholders. These accolades motivate us to continue our vital work in transforming lives and advancing social justice.
            </p>
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Stories of Change
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "From Survivor to Leader",
                description: "Girls rescued from gender-based violence have become community leaders, advocating for women's rights and supporting other survivors.",
              },
              {
                title: "Educational Transformation",
                description: "Over 100 girls have returned to school and progressed to secondary education, vocational training, and college programs.",
              },
              {
                title: "Economic Independence",
                description: "Through skills training and entrepreneurship programs, girls are generating income and building sustainable livelihoods.",
              },
              {
                title: "Community Transformation",
                description: "Women now participate in traditional leadership roles and community decision-making, changing centuries-old practices.",
              },
            ].map((story, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {story.title}
                </h3>
                <p className="text-foreground/80">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
