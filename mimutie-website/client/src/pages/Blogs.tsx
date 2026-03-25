import { Calendar, User } from "lucide-react";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Gender-Based Violence in Pastoralist Communities",
      excerpt: "Exploring the unique challenges faced by women in pastoralist communities and how we're working to combat GBV.",
      date: "March 2026",
      author: "Mimutie Team",
      category: "Awareness",
    },
    {
      id: 2,
      title: "The Power of Women's Leadership: Stories from the Field",
      excerpt: "Meet the women leaders transforming their communities through courage and determination.",
      date: "February 2026",
      author: "Mimutie Team",
      category: "Leadership",
    },
    {
      id: 3,
      title: "Education as a Tool for Empowerment",
      excerpt: "How education is changing the lives of girls in indigenous communities.",
      date: "January 2026",
      author: "Mimutie Team",
      category: "Education",
    },
    {
      id: 4,
      title: "Economic Empowerment: Building Sustainable Livelihoods",
      excerpt: "Exploring entrepreneurship and economic independence for indigenous women.",
      date: "December 2025",
      author: "Mimutie Team",
      category: "Empowerment",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
            Blog
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Stories, insights, and updates from Mimutie Women Organization.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-cream p-8 rounded-lg hover:shadow-lg transition-smooth border-l-4 border-primary"
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-display font-bold text-primary mb-4 hover:text-primary/80 transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-foreground/60 border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary text-cream">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive updates on our work and new blog posts.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-cream"
              required
            />
            <button
              type="submit"
              className="bg-white hover:bg-cream text-primary px-8 py-3 rounded-lg font-semibold transition-smooth"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">
            More Content Coming Soon
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            We're working on more stories and insights to share. Check back soon for new blog posts and resources.
          </p>
        </div>
      </section>
    </div>
  );
}
