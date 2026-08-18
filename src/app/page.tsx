export default function Home() {
  const posts = [
    {
      title: "Building Modern Web Apps with Next.js 15",
      excerpt: "Learn how to build fast, scalable, and SEO-friendly web applications using App Router.",
      date: "Aug 18, 2026",
      category: "Web Dev"
    },
    {
      title: "Getting Started with Python Automation",
      excerpt: "Automate your daily boring tasks using Python scripts and modern workflows.",
      date: "Aug 15, 2026",
      category: "Automation"
    },
    {
      title: "Mastering Tailwind CSS Grid & Flexbox",
      excerpt: "Design responsive and beautiful user interfaces effortlessly with Tailwind CSS utilities.",
      date: "Aug 10, 2026",
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            My Tech Blog
          </h1>
          <nav className="space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Articles</a>
            <a href="#" className="hover:text-white transition">About</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Insights & Tutorials
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Exploring full-stack web development, software engineering, and digital automation.
          </p>
        </section>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-900/50 text-blue-400 border border-blue-800">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2 hover:text-blue-400 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500">
                {post.date}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
