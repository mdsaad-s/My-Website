import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Timely Health Care Hospital
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            Timely Health Care Hospital is a multi-specialty healthcare center
            committed to ethical, affordable, and patient-focused medical care.
            We combine modern technology with compassionate treatment to ensure
            faster recovery and comfort.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
              <FaHeart />
            </div>
            <span className="font-semibold text-gray-700">
              Compassion • Care • Commitment
            </span>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-5">
          {/* IMAGE 1 */}
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
            alt="Hospital"
            className="rounded-2xl shadow-lg object-cover h-44 w-full
                       hover:scale-105 transition"
          />

          {/* IMAGE 2 */}
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
            alt="Doctors"
            className="rounded-2xl shadow-lg object-cover h-44 w-full
                       hover:scale-105 transition"
          />

          {/* IMAGE 3 – PATIENT CARE */}
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
            alt="Patient Care"
            className="rounded-2xl shadow-lg object-cover h-56 w-full col-span-2
                       hover:scale-105 transition"
          />
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* MISSION */}
        <div
          className="group bg-blue-50 p-8 rounded-3xl shadow-md
                     hover:bg-blue-600 hover:-translate-y-2
                     transition-all duration-300"
        >
          <div
            className="w-14 h-14 mb-4 rounded-full bg-blue-600 text-white
                       flex items-center justify-center text-2xl
                       group-hover:bg-white group-hover:text-blue-600 transition"
          >
            <FaBullseye />
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-white">
            Our Mission
          </h3>

          <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">
            To provide ethical, affordable, and high-quality healthcare services
            while ensuring patient safety, dignity, and trust.
          </p>
        </div>

        {/* VISION */}
        <div
          className="group bg-teal-50 p-8 rounded-3xl shadow-md
                     hover:bg-teal-600 hover:-translate-y-2
                     transition-all duration-300"
        >
          <div
            className="w-14 h-14 mb-4 rounded-full bg-teal-600 text-white
                       flex items-center justify-center text-2xl
                       group-hover:bg-white group-hover:text-teal-600 transition"
          >
            <FaEye />
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-white">
            Our Vision
          </h3>

          <p className="text-gray-600 group-hover:text-teal-100 leading-relaxed">
            To become a trusted healthcare partner for families by delivering
            excellence in medical care and a superior patient experience.
          </p>
        </div>

      </div>
    </section>
  );
}
