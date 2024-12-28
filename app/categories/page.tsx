import Link from "next/link";

const Categories = () => {
  const categories = [
    {
      name: "Artificial Intelligence",
      description: "Explore the latest developments in AI, from machine learning to neural networks.",
      link: "/categories/ai"
    },
    {
      name: "Space Exploration",
      description: "Stay updated on space missions, Mars exploration, and the future of space travel.",
      link: "/categories/space"
    },
    {
      name: "Quantum Computing",
      description: "Dive into the world of quantum computing and its potential to revolutionize technology.",
      link: "/categories/quantum-computing"
    },
  ];

  return (
    <section className="p-12 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Browse by Category</h2>
        <p className="text-lg text-gray-600 mt-4">Explore articles in different categories to dive deeper into the topics you love.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
            <p className="text-gray-600 mt-2">{category.description}</p>
            <Link href={category.link} className="mt-4 inline-block text-blue-800 hover:underline">Explore {category.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
