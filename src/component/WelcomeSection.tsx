import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Textual Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c33]">
            Welcome to <span className="text-[#D4AF37]">Nakads Nigeria Limited</span>
          </h2>

          <p className="text-lg text-gray-700">
            With over 15 years of excellence in the construction and engineering
            industry, Nakads Nigeria Limited (NNL) stands as a beacon of quality,
            innovation, and reliability in Nigeria’s infrastructure development.
          </p>

          <p className="text-lg text-gray-700">
            We are committed to transforming visions into reality through our
            comprehensive range of services, from civil engineering and
            construction to specialized engineering services and commercial
            cleaning solutions.
          </p>

          <Link
            href="/about"
            className="inline-block bg-[#0b1c33] text-white px-6 py-3 rounded font-semibold hover:bg-[#162c4a] transition"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Right Column: Visual/Image */}
        <div className="relative">
          <img
            src="/images/welcome.webp"
            alt="Welcome to Nakads Nigeria Limited"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
