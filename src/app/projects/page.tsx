import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow"
            >
              <div className="h-40 bg-gray-200 rounded mb-4" />

              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>

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
