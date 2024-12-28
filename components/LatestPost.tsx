import Link from "next/link";

const LatestPosts = () => {
  const latestPosts = [
    {
      title: "Understanding the Basics of Quantum Computing",
      excerpt: "A simple guide to understanding the principles behind quantum computing and how it's different from classical computing.",
      link: "/articles/quantum-computing-basics"
    },
    {
      title: "AI in Healthcare: A Game Changer",
      excerpt: "Explore how artificial intelligence is transforming healthcare systems, improving diagnostics, and more.",
      link: "/articles/ai-in-healthcare"
    },
    {
      title: "Exploring Mars: What's Next for Space Exploration?",
      excerpt: "Discover the latest Mars exploration missions and what the future holds for humanity's journey to the red planet.",
      link: "/articles/exploring-mars"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Latest Posts</h2>
        <p className="text-lg text-gray-600 mt-4">Read our most recent articles on technology, AI, and space exploration.</p>
      </div>

      <div className="space-y-6">
        {latestPosts.map((post, index) => (
          <div key={index} className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-800">{post.title}</h3>
            <p className="text-gray-600 mt-3">{post.excerpt}</p>
            <Link href={post.link} className="mt-4 inline-block text-black hover:underline transition-all duration-300">Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
