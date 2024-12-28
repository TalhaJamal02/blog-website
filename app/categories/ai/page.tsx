import Link from "next/link";

const AICategory = () => {
  const aiArticles = [
    {
      title: "How AI is Shaping the Future of Healthcare",
      excerpt: "Discover how artificial intelligence is revolutionizing healthcare by improving diagnostics, treatment plans, and patient outcomes.",
      link: "/articles/ai-in-healthcare"
    },
    {
      title: "The Ethics of AI: What We Need to Know",
      excerpt: "Explore the ethical implications of AI and its impact on society, privacy, and job markets.",
      link: "/articles/ai-ethics"
    },
    {
      title: "AI and Machine Learning: A Beginner's Guide",
      excerpt: "Learn the fundamentals of artificial intelligence and machine learning and how these technologies are transforming various industries.",
      link: "/articles/ai-machine-learning"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 h-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Artificial Intelligence</h2>
        <p className="text-lg text-gray-600 mt-4">Dive into the world of AI, its applications, and how its shaping the future.</p>
      </div>

      <div className="space-y-6">
        {aiArticles.map((article, index) => (
          <div key={index} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-800">{article.title}</h3>
            <p className="text-gray-600 mt-3">{article.excerpt}</p>
            <Link href={article.link} className="mt-4 inline-block text-blue-800 hover:underline">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AICategory;
