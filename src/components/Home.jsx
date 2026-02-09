import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaUserMd, FaHospital } from "react-icons/fa";
import doctorImg from "../assets/frontdoc.jpg";
import heroBg from "../assets/hospitalhero.jpg";

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "General Medicine",
    slug: "general-medicine",
    desc: "Comprehensive primary healthcare for fever, infections, diabetes, blood pressure, and long-term health management with experienced physicians and modern diagnostic support.",
  },
  {
    title: "Emergency Care",
    slug: "emergency-care",
    desc: "24/7 emergency medical services with rapid response, advanced life-support systems, and trained emergency doctors for critical and urgent conditions.",
  },
  {
    title: "Cardiology",
    slug: "cardiology",
    desc: "Complete heart care including ECG, echocardiography, hypertension management, and cardiac consultations by experienced cardiologists.",
  },
  {
    title: "Orthopedics",
    slug: "orthopedics",
    desc: "Specialized treatment for bones, joints, fractures, arthritis, spine problems, and mobility issues using advanced orthopedic techniques.",
  },
  {
    title: "Gynecology",
    slug: "gynecology",
    desc: "Comprehensive women’s healthcare including pregnancy care, fertility guidance, menstrual disorders, and preventive gynecological treatments.",
  },
  {
    title: "Pediatrics",
    slug: "pediatrics",
    desc: "Dedicated child healthcare services including vaccinations, growth monitoring, nutrition advice, and pediatric consultations.",
  },
];


/* ================= WHO WE ARE ================= */

const WhoWeAre = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block group">
            Who{" "}
            <span className="text-blue-600 group-hover:text-blue-700 transition">
              We Are
            </span>
            <span
              className="absolute left-0 -bottom-2 h-[3px] w-full bg-blue-600
                         scale-x-0 group-hover:scale-x-100
                         transition-transform origin-left duration-300"
            />
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Compassionate care, advanced technology, and trusted medical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={doctorImg}
              alt="Patient Care"
              className="w-80 rounded-2xl shadow-lg
                         hover:scale-105 hover:shadow-2xl
                         transition duration-500"
            />
          </div>

          {/* Content */}
          <div
            className="md:col-span-2 bg-white p-10 rounded-2xl
                       shadow-lg hover:shadow-2xl
                       hover:-translate-y-1
                       transition-all duration-300
                       border border-transparent hover:border-blue-500"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-blue-600">
                Timely Health Care Hospital
              </span>{" "}
              is a trusted multi-specialty hospital delivering ethical,
              affordable, and patient-first healthcare.
            </p>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              We blend modern technology, expert doctors, and compassionate
              care to ensure faster recovery and complete patient satisfaction.
            </p>

            {/* Icons */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { icon: <FaHeart />, title: "Compassionate Care" },
                { icon: <FaUserMd />, title: "Expert Doctors" },
                { icon: <FaHospital />, title: "Modern Facilities" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl
                             bg-gray-50 hover:bg-blue-600
                             transition group"
                >
                  <div className="text-blue-600 text-xl group-hover:text-white">
                    {item.icon}
                  </div>
                  <p className="font-medium text-gray-700 group-hover:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Read More → About Page */}
            <button
              onClick={() => navigate("/about")}
              className="mt-8 px-7 py-3 rounded-full
                         border border-blue-600 text-blue-600 font-medium
                         hover:bg-blue-600 hover:text-white
                         hover:shadow-lg transition"
            >
              Read More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= HOME ================= */
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden pt-4">

      {/* HERO */}
      {/* <section className="py-16 px-4 bg-white"> */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 pb-14" >
          <div>
            <h1 className="text-5xl font-extrabold mb-5">
              Trusted Healthcare
              <span className="block text-blue-600">
                Just Around the Corner
              </span>
            </h1>
            <p className="text-gray-600 mb-6">
              Expert doctors and compassionate care closer to your home.
            </p>
            <a
              href="https://wa.me/919999999999"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg
                         font-semibold hover:bg-blue-700 transition"
            >
              Start a Consultation
            </a>
          </div>

          <img
            src={doctorImg}
            alt="Doctor"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      {/* </section> */}
      {/* ================= HERO SECTION ================= */}

{/* ================= HERO ================= */}
<section style={{paddingTop:'20px'}} className="relative min-h-screen flex items-center overflow-hidden pt-10">

  {/* BACKGROUND IMAGE */}
  <img style={{height:'550px'}}
    src={heroBg}
    alt="Hospital Background"
    className="absolute inset-0 w-full h-250 object-cover scale-105 animate-slowZoom"
  />

  {/* GRADIENT OVERLAY */}
  <div style={{height:'570px'}} className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

  {/* FLOATING SHAPES */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div className="text-white pb-10">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 ">
        Trusted Healthcare
        <span className="block text-blue-400">
          For Your Family
        </span>
      </h1>

      <p className="text-gray-200 text-lg max-w-xl mb-8">
        Advanced facilities, expert doctors & compassionate care —
        everything you need, close to home.
      </p>

      <button
        onClick={() => navigate("/contact")}
        className="bg-blue-600 hover:bg-blue-700
                   px-8 py-4 rounded-xl
                   text-white font-semibold
                   shadow-2xl hover:scale-105
                   transition-all duration-300"
      >
        Book Appointment →
      </button>
    </div>

    {/* RIGHT GLASS CARD */}
    <div className="hidden md:block bg-white/10 backdrop-blur-xl
                    border border-white/20
                    rounded-3xl p-8 text-white
                    shadow-2xl hover:-translate-y-2
                    transition-all duration-500">

      <h3 className="text-2xl font-bold mb-6">
        Why Choose Us?
      </h3>

      <ul className="space-y-4">
        <li>✅ 24×7 Emergency Support</li>
        <li>✅ Experienced Doctors</li>
        <li>✅ Modern Equipment</li>
        <li>✅ Patient First Approach</li>
      </ul>
    </div>

  </div>
</section>

      {/* WHO WE ARE */}
      <WhoWeAre />

      {/* SERVICES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white border p-8 rounded-2xl
                           shadow-sm hover:bg-blue-600 hover:shadow-2xl
                           transition"
              >
                <h3 className="text-lg font-bold mb-3
                               text-gray-800 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-blue-100">
                  {service.desc}
                </p>

                <button style={{alignItems:'center'}} 
                  onClick={() =>
                    navigate(`/services?service=${service.slug}`)
                  }
                  className="font-semibold text-blue-600 group-hover:text-white"
                >
                  Explore Services →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
            Our Process
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0
                            h-2 bg-blue-500 opacity-40 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 relative z-10">
              {[
                { step: "01", title: "Book Appointment", icon: "📅" },
                { step: "02", title: "Doctor Consultation", icon: "👨‍⚕️" },
                { step: "03", title: "Diagnosis & Tests", icon: "🧪" },
                { step: "04", title: "Treatment Plan", icon: "💊" },
                { step: "05", title: "Recovery & Follow-up", icon: "💙" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl text-center
                             shadow-md hover:bg-blue-600
                             hover:-translate-y-2 transition"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full
                                  bg-blue-600 text-white font-bold
                                  flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold group-hover:text-white">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= TESTIMONIALS ================= */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
      Real <span className="text-blue-600">Testimonials</span>
    </h2>

    {/* TESTIMONIAL CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

      {/* CARD 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg
                      hover:shadow-2xl hover:-translate-y-2
                      transition-all duration-300">
        <div className="text-yellow-400 text-xl mb-4">
          ★★★★★
        </div>
        <p className="text-gray-700 italic mb-6">
          “Our RWA worked with Timely Health for a health camp.
          Smooth execution, excellent doctor panel.”
        </p>
        <p className="font-semibold text-gray-900">
          — Shalini V., <span className="text-gray-500">RWA Secretary</span>
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg
                      hover:shadow-2xl hover:-translate-y-2
                      transition-all duration-300">
        <div className="text-yellow-400 text-xl mb-4">
          ★★★★★
        </div>
        <p className="text-gray-700 italic mb-6">
          “Timely Health helped my clinic reach 3× more patients —
          highly professional.”
        </p>
        <p className="font-semibold text-gray-900">
          — Dr. Anil M., <span className="text-gray-500">ENT Specialist</span>
        </p>
      </div>

    </div>

    {/* GOOGLE REVIEWS BOX */}
    <div className="flex justify-center">
      <div
        className="bg-orange-50 px-12 py-10 rounded-2xl text-center
                   shadow-lg hover:shadow-2xl
                   hover:scale-105 transition-all duration-300"
      >
        <h3 className="text-2xl font-bold mb-2">
          <span className="text-blue-600">Google</span>{" "}
          <span className="text-gray-900">Reviews</span>
        </h3>

        <div className="text-yellow-400 text-2xl mb-6">
          ★★★★★
        </div>

        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2
                     border-2 border-green-600 text-green-600
                     px-8 py-3 rounded-lg font-semibold
                     hover:bg-green-600 hover:text-white
                     transition-all"
        >
          👉 Give us a rating
        </a>
      </div>
    </div>

  </div>
</section>


    </div>
  );
};

export default Home;
