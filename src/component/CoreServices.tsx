
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Civil Engineering",
    desc: "We provide high-quality civil engineering solutions including road, bridge, and infrastructure projects designed for durability and impact.",
    icon: "/images/engineer1.svg",
    href: "/services/Civil-Engineering",
  },
  {
    title: "Engineering Services",
    desc: "Comprehensive mechanical, electrical, and project management services for all scale projects.",
    icon: "/images/icon-engineering-services.svg",
    href: "/services/engineering-services",
  },
  {
    title: "Commercial Cleaning",
    desc: "Professional cleaning services for commercial spaces designed for safety and efficiency.",
    icon: "/images/icon-commercial-cleaning.svg",
    href: "/services/commercial-cleaning",
  },
];

export default function CoreServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c33] mb-10">
          Our Core <span className="text-[#D4AF37]">Services</span> 
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: { title: string; desc: string; icon: string; href: string };
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll animation trigger
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(service.title);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [service.title]);

  return (
    <div
      id={service.title}
      className={`service-card p-6 bg-gray-100 rounded-lg transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:shadow-xl hover:animate-shake
        animate-float`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={service.icon}
        alt={service.title}
        className="mx-auto mb-4 w-16 h-16 bg-yellow-800 rounded-md p-4 transition-transform duration-300 hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-[#0b1c33] mb-2">
        {service.title}
      </h3>
      <p className="text-gray-700 mb-4">{service.desc}</p>
      <Link
  href={service.href}
  className="inline-flex items-center mt-2 px-5 py-2 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition-colors"
>
  Learn More
  <span className="ml-2 arrow-animate">→</span>
</Link>

    </div>
  );
}
