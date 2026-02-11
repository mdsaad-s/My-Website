import { FaBullseye, FaEye, FaHeart, FaUserMd, FaAmbulance, FaHospital } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">

      {/* ================= TOP SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Timely Health Care Hospital
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Timely Health Care Hospital is a multi-specialty healthcare center
            committed to ethical, affordable, and patient-focused medical care.
            We combine modern technology with compassionate treatment to ensure
            faster recovery and comfort.
          </p>

          {/* FEATURE ICONS (Interactive) */}
          <div className="grid grid-cols-3 gap-4 mt-6">

            <div className="bg-blue-50 p-4 rounded-2xl text-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
              <FaHeart className="mx-auto text-2xl mb-2" />
              <p className="text-sm font-semibold">Compassion</p>
            </div>

            <div className="bg-teal-50 p-4 rounded-2xl text-center hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-md">
              <FaHospital className="mx-auto text-2xl mb-2" />
              <p className="text-sm font-semibold">Advanced Care</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-2xl text-center hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md">
              <FaAmbulance className="mx-auto text-2xl mb-2" />
              <p className="text-sm font-semibold">24/7 Support</p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-5">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
            alt="Hospital"
            className="rounded-2xl shadow-lg object-cover h-44 w-full hover:scale-105 transition"
          />

          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
            alt="Doctors"
            className="rounded-2xl shadow-lg object-cover h-44 w-full hover:scale-105 transition"
          />

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
            alt="Patient Care"
            className="rounded-2xl shadow-lg object-cover h-56 w-full col-span-2 hover:scale-105 transition"
          />
        </div>
      </div>

      {/* ================= MISSION & VISION ================= */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">

        <div className="group bg-blue-50 p-8 rounded-3xl shadow-md hover:bg-blue-600 hover:-translate-y-2 transition-all duration-300">
          <div className="w-14 h-14 mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-blue-600 transition">
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

        <div className="group bg-teal-50 p-8 rounded-3xl shadow-md hover:bg-teal-600 hover:-translate-y-2 transition-all duration-300">
          <div className="w-14 h-14 mb-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-teal-600 transition">
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

      {/* ================= DOCTORS SECTION ================= */}

      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
          Meet Our Specialists
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our expert doctors are committed to delivering compassionate and
          advanced medical care with years of experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Doctor 1 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
            alt="Dr Rajesh"
            className="h-72 w-full object-cover object-top"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Dr. Rajesh Kumar</h3>
            <p className="text-blue-600 font-semibold mb-2">Senior ENT Specialist</p>
            <p className="text-gray-600 text-sm">
              12+ years of experience in advanced ENT treatments and minimally invasive surgeries.
            </p>
          </div>
        </div>

        {/* Doctor 2 (Face Fixed) */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group">
          <img
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80"
            alt="Dr Priya"
            className="h-72 w-full object-cover object-top"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Dr. Priya Sharma</h3>
            <p className="text-teal-600 font-semibold mb-2">Pediatric Specialist</p>
            <p className="text-gray-600 text-sm">
              Dedicated to providing child-friendly and compassionate pediatric healthcare solutions.
            </p>
          </div>
        </div>

        {/* Doctor 3 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
            alt="Dr Amit"
            className="h-72 w-full object-cover object-top"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Dr. Amit Verma</h3>
            <p className="text-indigo-600 font-semibold mb-2">General Physician</p>
            <p className="text-gray-600 text-sm">
              Focused on preventive healthcare and accurate diagnosis for long-term wellness.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
