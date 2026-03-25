export default function OurTeam() {
  const team = [
    { name: "Rose Njilo", role: "Founder and Executive Director", bio: "Visionary Maasai woman leading the organization with determination and passion for women's rights." },
    { name: "Kiranda Saning'o", role: "Communication and Advocacy Officer", bio: "" },
    { name: "Happy Laizer", role: "Gender Coordination and Safety Guidance Officer", bio: "" },
    { name: "Martin Oltimbau", role: "Coordinator", bio: "" },
    { name: "Idd Ninga", role: "Executive Secretary", bio: "" },
  ];

  const board = [
    { name: "Naisho Kaipai", role: "Chairperson of The Board" },
    { name: "Rose Njilo", role: "Secretary of the Board" },
    { name: "Norkiango Mbariyo", role: "Board Member" },
    { name: "Kijolu Kamuye", role: "Board Member" },
    { name: "Meshuko Senet", role: "Board Member" },
    { name: "Kijolu Ng'uyo", role: "Board Member" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Our Team & Board
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Meet the dedicated individuals leading Mimutie's mission to empower indigenous women.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-lg font-accent text-accent mb-4">{member.role}</p>
                {member.bio && <p className="text-foreground/80">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {board.map((member, i) => (
              <div key={i} className="bg-white p-8 rounded-lg hover:shadow-lg transition-smooth border-l-4 border-primary">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-lg font-accent text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in working with us? Get in touch to learn about opportunities.
          </p>
          <a href="mailto:info@mimutie.or.tz" className="inline-block bg-white hover:bg-cream text-primary px-8 py-3 rounded-lg font-semibold transition-smooth">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
