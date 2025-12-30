import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Next Project?
        </h2>

        <p className="mb-8">
          Contact Nakads Nigeria Limited today for professional services.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-6 py-3 rounded font-semibold"
          >
            Contact Us
          </Link>

          <Link
            href="/services"
            className="border border-white px-6 py-3 rounded"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
