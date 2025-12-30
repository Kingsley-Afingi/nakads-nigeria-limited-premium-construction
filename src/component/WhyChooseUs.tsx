"use client";

import { useEffect, useState } from "react";

const reasons = [
  {
    title: "Quality Workmanship",
    desc: "We deliver top tier engineering and construction work with precision and integrity.",
    icon: "/images/project1.svg",
  },
  {
    title: "Professional Team",
    desc: "Our skilled experts guarantee timely and reliable execution on every project.",
    icon: "/images/project2.svg",
  },
  {
    title: "Reliable Support",
    desc: "We provide continuous support and communication through every step.",
    icon: "/images/project3.svg",
  },
  {
    title: "Safety Priority",
    desc: "Employing strict safety standards for workers and clients alike.",
    icon: "/images/project4.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c33]">
          Why Choose <span className="text-[#D4AF37] text-2xl">Us</span> 
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          We blend innovation, experience and integrity to deliver exceptional results for
          our clients on every project.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {reasons.map((reason, idx) => (
          <ReasonCard key={idx} reason={reason} delay={idx * 150} />
        ))}
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  delay,
}: {
  reason: { title: string; desc: string; icon: string };
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(reason.title);
    const handler = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [reason.title]);

  return (
    <div
      id={reason.title}
      className={`relative p-6 bg-white rounded-lg text-left shadow transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        animate-float hover:shadow-xl hover:animate-shake`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-[#d4a017] rounded-full flex items-center justify-center mb-4 mx-auto">
        <img src={reason.icon} alt={reason.title} className="w-8 h-8 object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-[#0b1c33] mb-2">
        {reason.title}
      </h3>
      <p className="text-gray-600">{reason.desc}</p>
    </div>
  );
}
