import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 rounded mb-4" />

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
