"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Lagos Highway Project",
    category: "Civil Engineering",
    image: "/images/project1.webp",
    href: "/projects/lagos-highway",
  },
  {
    title: "Corporate Office Complex",
    category: "Engineering Services",
    image: "/images/project2.webp",
    href: "/projects/corporate-office",
  },
  {
    title: "Industrial Facility",
    category: "Commercial Cleaning",
    image: "/images/project3.webp",
    href: "/projects/industrial-facility",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c33]">
          Our Projects
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} delay={idx * 150} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  delay,
}: {
  project: { title: string; category: string; image: string; href: string };
  delay: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(project.title);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, [project.title]);

  return (
    <Link
      href={project.href}
      id={project.title}
      className={`relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Project Image */}
      <div className="w-full h-56 bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-[#0b1c33]">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.category}</p>

        {/* Learn More Button */}
        <div className="inline-flex items-center text-[#0b1c33] font-semibold group-hover:underline">
          <span>View Project</span>
          <span className="ml-2 arrow-slide-animation">→</span>
        </div>
      </div>
    </Link>
  );
}
