import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border rounded-lg p-6"
            >
              <p className="italic text-gray-600 mb-4">
                “{t.message}”
              </p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
