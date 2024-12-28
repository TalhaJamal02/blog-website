import CommentSection from "@/components/CommentFeature";
import Link from "next/link";

const ArtemisMission = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12">
      <h1 className="text-4xl font-semibold text-gray-800">NASA's Artemis Mission: A New Era of Space Travel</h1>
      <p className="text-gray-600 mt-4">Posted on December 28, 2024</p>

      <div className="mt-6 space-y-4">
        <p>
          NASA's Artemis program marks the dawn of a new era in space exploration, aiming to return astronauts to the Moon and eventually pave the way for human exploration of Mars. Named after the twin sister of Apollo in Greek mythology, the Artemis program represents a bold vision for humanity's future beyond Earth.
        </p>
        <p>
          The Artemis program is built on three primary missions: Artemis I, Artemis II, and Artemis III. The first mission, Artemis I, was an uncrewed test flight of NASA's Space Launch System (SLS) rocket and the Orion spacecraft, designed to ensure the systems are ready for future crewed missions. This mission successfully demonstrated the capabilities of both the rocket and spacecraft.
        </p>
        <p>
          Artemis II will take the next step by sending astronauts around the Moon. This mission will test life-support systems, communication, and other critical technologies needed for extended human space travel. It will also be a precursor to Artemis III, the mission that will land the first woman and the next man on the lunar surface.
        </p>
        <p>
          The Moon will serve as more than just a destination; it will be a testing ground for technologies needed to sustain human life on Mars. Through the Artemis program, NASA plans to establish a sustainable human presence on the Moon by building the Lunar Gateway, a space station orbiting the Moon. The Gateway will support long-term lunar exploration and act as a hub for missions deeper into the solar system.
        </p>
        <p>
          Artemis is also a collaborative effort. NASA is partnering with international space agencies and private companies to develop the tools and infrastructure needed for these missions. Companies like SpaceX are playing a key role in developing lunar landers and other components of the program, emphasizing the importance of global and commercial cooperation in space exploration.
        </p>
        <p>
          The Artemis program is not just about science and exploration; it's about inspiring humanity. By returning to the Moon and looking toward Mars, Artemis embodies the spirit of adventure, innovation, and perseverance. It serves as a reminder of what we can achieve when we aim for the stars.
        </p>
        <p>
          As NASA moves forward with the Artemis program, the dream of establishing a human presence on another celestial body is becoming a reality. This monumental effort represents a giant leap for humanity, igniting a new chapter in our exploration of the cosmos.
        </p>
      </div>

      <Link href="/categories/space" className="text-blue-700 hover:text-blue-800 mt-6 block">
        Back to Space Category
      </Link>
      <CommentSection />
    </div>
  );
};

export default ArtemisMission;
