import Image from "next/image";
import Link from "next/link";

const FeaturedArticles = () => {
  const articles = [
    {
      title: "The Future of Artificial Intelligence",
      excerpt: "Explore how AI is shaping the future, from automation to complex problem-solving. With advancements in machine learning.",
      image: "/images/ai-future.png",
      link: "/categories/ai"
    },
    {
      title: "Space Exploration: The Next Frontier",
      excerpt: "Discover the latest advancements in space technology and how humanity is reaching for the stars.",
      image: "/images/space-exploration.png",
      link: "/categories/space"
    },
    {
      title: "The Rise of Quantum Computing",
      excerpt: "Learn about the groundbreaking developments in quantum computing and its implications on tech industries.",
      image: "/images/quantum-computing.png",
      link: "/categories/quantum-computing"
    }
  ];

  return (
    <section className="p-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Featured Articles</h2>
        <p className="text-lg text-gray-600 mt-4">Stay ahead with our handpicked articles on AI, space, and technology.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all ">
            <Image src={article.image} alt={article.title} className="w-full h-56 object-cover" width={300} height={200} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{article.title}</h3>
              <p className="text-gray-600 mt-3">{article.excerpt}</p>
              <Link href={article.link} className="mt-4 inline-block text-black hover:underline transition-all duration-300">Explore More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
