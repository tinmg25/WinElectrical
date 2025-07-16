import Image from "next/image";

const Home = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left side: Header + About text */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-6xl font-extrabold text-blue-700 leading-tight mb-2">
            Win
          </h1>
          <h2 className="text-2xl font-light text-gray-300 mb-6">
            Electrical and Solar Installation
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            I’ve worked in the electrical industry for over 30 years — from
            household wiring and industrial electrical systems to solar
            installations in remote areas. My journey has taken me across the
            country, solving electrical challenges in cities, villages, and
            business sites.
            <br />
            <br />
            Today, at <strong>Win Solar & Electrical</strong>, I bring that
            experience to offer clients modern, energy-efficient solar solutions
            paired with reliable electrical expertise. Every job we do is rooted
            in trust, quality, and a passion for helping Myanmar move toward a
            cleaner energy future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Request a Quote
          </a>
        </div>

        {/* Right side: Photo */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/satoru-gojo.png"
            alt="Win Solar & Electrical Owner"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
