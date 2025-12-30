
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/images/hero-bg.webp')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="opacity-0 hero-animate hero-delay-1 text-white text-[42px] md:text-[56px] leading-tight font-semibold mb-6">
          Building Nigeria’s{" "}
          <span className="text-[#D4AF37]">Future</span> Today
        </h1>

        {/* Paragraph */}
        <p className="opacity-0 hero-animate hero-delay-2 max-w-2xl mx-auto text-[16px] md:text-[18px] text-gray-200 mb-8">
          Delivering excellence in civil engineering, engineering services,
          and commercial cleaning across Nigeria.
        </p>

        {/* Buttons */}
        <div className="opacity-0 hero-animate hero-delay-3 flex justify-center gap-4 mb-12">
          <Link
            href="/projects"
            className="bg-white text-[#0b1c33] px-7 py-3 rounded font-semibold transition hover:bg-gray-100"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="border border-white text-white px-7 py-3 rounded font-semibold transition hover:bg-white hover:text-[#0b1c33]"
          >
            Get Started
          </Link>
        </div>

        {/* 🔽 SCROLL INDICATOR (EXACT BEHAVIOR) */}
        <div className="flex justify-center">
          <div className=" flex flex-col items-center">
            <span className=" border border-white h-16 rounded-full w-9">
            <div className="scroll-indicator  text-2xl font-extrabold text-white tracking-widest">
              . 
            </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
