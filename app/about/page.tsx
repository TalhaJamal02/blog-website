import NewsletterSubscription from '@/components/NewsletterSubscription';

const About = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 mt-12 bg-white rounded-lg shadow-md h-full">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">About Us</h1>
        <p className="text-gray-600 mt-4">
          Welcome to My Blog, a space dedicated to sharing insightful articles and news about technology, AI, space, quantum computing, and more.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4">
            Our mission is to provide high-quality content on various scientific and technological topics. We aim to engage readers with informative and thought-provoking articles written by experts in the field.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">What We Write About</h2>
          <ul className="mt-4 list-disc pl-6 text-gray-600">
            <li>AI and its applications in various industries</li>
            <li>Space exploration and discoveries</li>
            <li>Quantum computing and its future impact</li>
            <li>Emerging technologies and innovations</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">Join Our Community</h2>
          <p className="text-gray-600 mt-4">
            We welcome readers to join the conversation. Feel free to comment on our articles, share your thoughts, and stay updated with the latest trends and news.
          </p>
        </section>
      </div>
      <div className="mb-16">
        <NewsletterSubscription />
      </div>
    </>
  );
};

export default About;
