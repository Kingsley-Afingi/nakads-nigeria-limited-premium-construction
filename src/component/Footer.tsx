import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">
            Nakads Nigeria Limited
          </h3>
          <p>
            Delivering engineering excellence across Nigeria.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>
          <p>📞 +234 XXX XXX XXXX</p>
          <p>✉ info@nakads.com</p>
          <p>📍 Nigeria</p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm">
        © {new Date().getFullYear()} Nakads Nigeria Limited. All rights reserved.
      </div>
    </footer>
  );
}
