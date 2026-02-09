import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  FaStethoscope,
  FaAmbulance,
  FaHeartbeat,
  FaBone,
  FaFemale,
  FaBaby,
  FaChevronDown,
  FaCheckCircle,
  FaUserMd,
  FaHospital,
  FaNotesMedical,
} from "react-icons/fa";

/* ================= IMAGES ================= */
import GMHero from "../assets/extraimg.jpg";
import GMInfo from "../assets/gminfo.jpg";

import EmergencyHero from "../assets/emergencyhero.jpg";
import EmergencyInfo from "../assets/emergencyinfo.jpg";

import CardioHero from "../assets/cardiohero.png";
import CardioInfo from "../assets/cardioinfo.png";

import OrthoHero from "../assets/orthoheroo.png";
import OrthoInfo from "../assets/orthoinfo.jpg";

import GynaeHero from "../assets/genohero.png";
import GynaeInfo from "../assets/gynoinfo.jpg";

import PediaHero from "../assets/pediahero.jpg";
import PediaInfo from "../assets/pediainfo.png";

/* ================= DATA ================= */
const servicesData = [
  {
    slug: "general-medicine",
    title: "General Medicine",
    icon: <FaStethoscope />,
    heroImage: GMHero,
    infoImage: GMInfo,
    overview:
      "General Medicine deals with overall health care, early diagnosis, and prevention of common and chronic diseases. It is usually the first medical consultation for patients.",
    causes: [
      "Lifestyle-related disorders such as diabetes & BP",
      "Viral & bacterial infections",
      "Stress and work-related health issues",
      "Long-term chronic illnesses",
    ],
    symptoms: [
      "Fever, cold & cough",
      "Weakness & fatigue",
      "Digestive and stomach issues",
      "Blood pressure or sugar imbalance",
    ],
    treatment: [
      "Complete health checkups & diagnosis",
      "Medication with lifestyle counseling",
      "Long-term chronic disease management",
      "Preventive healthcare guidance",
    ],
  },

  {
    slug: "emergency-care",
    title: "Emergency Care (24/7)",
    icon: <FaAmbulance />,
    heroImage: EmergencyHero,
    infoImage: EmergencyInfo,
    overview:
      "Emergency Care provides immediate medical treatment for life-threatening conditions. Our emergency unit operates 24/7 with advanced life-saving facilities.",
    causes: [
      "Road traffic accidents",
      "Heart attack or stroke",
      "Severe injuries & trauma",
      "Sudden medical emergencies",
    ],
    symptoms: [
      "Severe chest pain",
      "Heavy bleeding",
      "Loss of consciousness",
      "Breathing difficulty",
    ],
    treatment: [
      "Immediate medical stabilization",
      "Advanced cardiac & trauma support",
      "Emergency surgical intervention",
      "Continuous critical monitoring",
    ],
  },

  {
    slug: "cardiology",
    title: "Cardiology",
    icon: <FaHeartbeat />,
    heroImage: CardioHero,
    infoImage: CardioInfo,
    overview:
      "Cardiology focuses on diagnosis and treatment of heart-related conditions using advanced technology and experienced heart specialists.",
    causes: [
      "High blood pressure",
      "High cholesterol",
      "Smoking & unhealthy lifestyle",
      "Diabetes-related heart risks",
    ],
    symptoms: [
      "Chest discomfort or pain",
      "Shortness of breath",
      "Irregular heartbeat",
      "Fatigue during physical activity",
    ],
    treatment: [
      "ECG, Echo & heart monitoring",
      "Angiography & angioplasty",
      "Heart rehabilitation programs",
      "Lifestyle & diet counseling",
    ],
  },

  {
    slug: "orthopedics",
    title: "Orthopedics",
    icon: <FaBone />,
    heroImage: OrthoHero,
    infoImage: OrthoInfo,
    overview:
      "Orthopedics treats bone, joint, muscle, and spine-related conditions to restore mobility and improve quality of life.",
    causes: [
      "Bone fractures & trauma",
      "Arthritis and joint wear",
      "Sports injuries",
      "Age-related bone problems",
    ],
    symptoms: [
      "Joint or back pain",
      "Swelling & stiffness",
      "Difficulty in movement",
      "Muscle weakness",
    ],
    treatment: [
      "Fracture & injury management",
      "Joint replacement surgeries",
      "Physiotherapy & rehabilitation",
      "Pain management therapies",
    ],
  },

  {
    slug: "gynecology",
    title: "Gynecology",
    icon: <FaFemale />,
    heroImage: GynaeHero,
    infoImage: GynaeInfo,
    overview:
      "Gynecology offers complete healthcare solutions for women, covering reproductive health, pregnancy, and hormonal care.",
    causes: [
      "Hormonal imbalance",
      "PCOS & menstrual disorders",
      "Pregnancy-related complications",
    ],
    symptoms: [
      "Irregular periods",
      "Pelvic pain",
      "Hormonal changes",
      "Fertility concerns",
    ],
    treatment: [
      "Pregnancy & maternity care",
      "Hormonal & fertility treatment",
      "Gynecological procedures",
      "Women wellness programs",
    ],
  },

  {
    slug: "pediatrics",
    title: "Pediatrics",
    icon: <FaBaby />,
    heroImage: PediaHero,
    infoImage: PediaInfo,
    overview:
      "Pediatrics focuses on complete healthcare for infants, children, and adolescents ensuring healthy physical and mental development.",
    causes: [
      "Low immunity",
      "Seasonal infections",
      "Nutritional deficiencies",
    ],
    symptoms: [
      "Frequent fever or illness",
      "Delayed growth",
      "Poor appetite",
      "Weak immunity",
    ],
    treatment: [
      "Vaccination programs",
      "Growth & development monitoring",
      "Neonatal & child care",
      "Nutrition & immunity support",
    ],
  },
];

/* ================= COMPONENT ================= */
const Services = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const service = servicesData.find(
    (s) => s.slug === searchParams.get("service")
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Please select a service
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-12">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={service.heroImage} className="rounded-2xl" alt="" />
          <div>
            <div className="flex items-center gap-3 text-blue-600 text-2xl">
              {service.icon}
              <h1 className="font-bold">{service.title}</h1>
            </div>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              {service.overview}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-blue-50 rounded-xl">
                <FaUserMd className="text-3xl mx-auto text-blue-600" />
                <p className="mt-2 font-semibold">Expert Doctors</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <FaHospital className="text-3xl mx-auto text-green-600" />
                <p className="mt-2 font-semibold">Modern Facility</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl">
                <FaNotesMedical className="text-3xl mx-auto text-purple-600" />
                <p className="mt-2 font-semibold">Advanced Care</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT IS */}
        <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              What is {service.title}?
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {service.overview} Our hospital ensures patient-focused care with
              accurate diagnosis, modern treatment methods, and compassionate
              medical support for faster recovery.
            </p>
          </div>
          <img src={service.infoImage} className="rounded-2xl" alt="" />
        </div>

        {/* CAUSES & SYMPTOMS */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div>
            <h4 className="text-2xl font-bold mb-6 text-blue-600">
              Common Causes
            </h4>
            {service.causes.map((c, i) => (
              <p key={i} className="flex gap-3 text-gray-700 mb-3">
                <FaCheckCircle className="text-blue-500 mt-1" /> {c}
              </p>
            ))}
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 text-green-600">
              Symptoms
            </h4>
            {service.symptoms.map((s, i) => (
              <p key={i} className="flex gap-3 text-gray-700 mb-3">
                <FaCheckCircle className="text-green-500 mt-1" /> {s}
              </p>
            ))}
          </div>
        </div>
        {/* TREATMENT */}
        <div className="mt-20">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center p-6 bg-gray-100 rounded-2xl font-semibold text-lg"
          >
            Treatment & Care Approach
            <FaChevronDown
              className={`transition ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <ul className="mt-6 space-y-4">
              {service.treatment.map((t, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-lg">
                  <FaCheckCircle className="text-blue-600 mt-1" /> {t}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-blue-50 p-12 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">
            Get Expert Medical Care Today
          </h3>
          <p className="text-gray-700 mb-6">
            Our specialists are ready to provide you with the best treatment and
            personalized care.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 text-white px-12 py-4 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
