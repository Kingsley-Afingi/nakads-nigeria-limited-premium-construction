export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Contact Us
        </h1>

        <form className="space-y-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-3 rounded"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-3 rounded"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border px-4 py-3 rounded"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border px-4 py-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
