import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c2d] text-white pt-14 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand & Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Timely Health Care
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Trusted healthcare services with care, safety, and compassion.
          </p>

          <p className="text-sm text-gray-300 mt-4">
            <span className="font-semibold text-white">Working Hours:</span><br />
            Monday – Saturday: 9:00 AM – 9:00 PM<br />
            <span className="font-semibold text-white">Emergency:</span> 24/7 Available
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "About Us", "Services", "Doctors", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-white hover:translate-x-1 inline-block transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>General Medicine</li>
            <li>Diagnostics</li>
            <li>Emergency Care</li>
            <li>Pharmacy</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 inline-block">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Get health tips & hospital updates
          </p>

          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-black text-sm w-full outline-none"
            />
            <button className="bg-[#1e90ff] px-4 py-2 text-white hover:bg-blue-600 transition">
              <FaPaperPlane />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-gray-300">
            <a className="hover:text-white transition" href="#"><FaFacebookF /></a>
            <a className="hover:text-white transition" href="#"><FaInstagram /></a>
            <a className="hover:text-white transition" href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-300">
        © 2026{" "}
        <span className="text-white font-semibold">
          Timely Health Care Hospital
        </span>
        . All rights reserved.
      </div>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/919999999999"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={22} />
      </a>
    </footer>
  );
}
