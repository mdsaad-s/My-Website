import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white">

      {/* ================= TOP CONTACT INFO + MAP ================= */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-600 mb-10">
              We’re here to help you with trusted healthcare services.
            </p>

            {/* INFO ITEMS */}
            <div className="space-y-6">

              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-full bg-blue-600 text-white
                                group-hover:scale-110 transition">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-600">
                    Timely Health Care Hospital,<br />
                    Near Main Road, Hyderabad,<br />
                    Telangana – 500001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-full bg-blue-600 text-white
                                group-hover:scale-110 transition">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-full bg-blue-600 text-white
                                group-hover:scale-110 transition">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-600">info@timelyhealthcare.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="rounded-2xl overflow-hidden shadow-lg
                          hover:shadow-2xl transition">
            <iframe
              title="map"
              className="w-full h-[420px]"
              src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-3">
              Let’s <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-gray-600">
              Your email address will not be published. Required fields are marked *
            </p>
          </div>

          <form
            className="bg-white p-10 rounded-2xl shadow-lg
                       hover:shadow-2xl transition"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name *"
                className="border p-4 rounded-lg focus:outline-none
                           focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email *"
                className="border p-4 rounded-lg focus:outline-none
                           focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone *"
                className="border p-4 rounded-lg focus:outline-none
                           focus:border-blue-600"
              />

              <select
                className="border p-4 rounded-lg focus:outline-none
                           focus:border-blue-600"
              >
                <option>Select Service *</option>
                <option>General Medicine</option>
                <option>Emergency Care</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Gynecology</option>
                <option>Pediatrics</option>
              </select>

            </div>

            <textarea
              rows="5"
              placeholder="Write Message *"
              className="border p-4 rounded-lg w-full mt-6
                         focus:outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className="mt-8 bg-blue-600 text-white
                         px-10 py-4 rounded-lg font-semibold
                         hover:bg-blue-700 hover:scale-105
                         transition"
            >
              SEND MESSAGE
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}
