// pages/categories/space.js

import Link from "next/link";

const SpaceCategory = () => {
  const spaceArticles = [
    {
      title: "Exploring Mars: What's Next for Space Exploration?",
      excerpt: "Discover the latest Mars exploration missions and what the future holds for humanity's journey to the red planet.",
      link: "/articles/exploring-mars"
    },
    {
      title: "NASA's Artemis Mission: A New Era of Space Travel",
      excerpt: "Learn about NASA's Artemis program, aiming to return astronauts to the moon and beyond.",
      link: "/articles/nasa-artemis-moon"
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Space Exploration</h2>
        <p className="text-lg text-gray-600 mt-4">Read articles related to space missions, exploration, and the future of space travel.</p>
      </div>

      <div className="space-y-6">
        {spaceArticles.map((article, index) => (
          <div key={index} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-800">{article.title}</h3>
            <p className="text-gray-600 mt-3">{article.excerpt}</p>
            <Link href={article.link} className="mt-4 inline-block text-blue-600 hover:text-blue-800">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceCategory;
