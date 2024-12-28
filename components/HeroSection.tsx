import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center">
      <Image
        src={"/images/hero.png"}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-black opacity-75 z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-6 ">
          <h1 className="text-5xl md:text-7xl font-extrabold">Welcome to Bloggr</h1>
          <p className="text-lg md:text-2xl mt-4 text-gray-200">Stay updated with the latest in technology, AI, and science.</p>
          <button className="mt-6 px-8 py-4 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 text-white rounded-xl text-xl transition transform hover:scale-105">
            Explore Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
