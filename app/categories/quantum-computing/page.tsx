import Link from "next/link";

const QuantumComputingCategory = () => {
  const quantumArticles = [
    {
      title: "The Basics of Quantum Computing: A Beginner's Guide",
      excerpt: "An introduction to quantum computing, explaining the principles behind quantum mechanics and quantum bits.",
      link: "/articles/quantum-computing-basics"
    },
    {
      title: "How Quantum Computers Will Change the World",
      excerpt: "Discover the transformative potential of quantum computers in fields like cryptography and artificial intelligence.",
      link: "/articles/how-quantum-computers-will-change-world"
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Quantum Computing</h2>
        <p className="text-lg text-gray-600 mt-4">Read articles on quantum computing and its revolutionary impact on technology.</p>
      </div>

      <div className="space-y-6">
        {quantumArticles.map((article, index) => (
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

export default QuantumComputingCategory;
