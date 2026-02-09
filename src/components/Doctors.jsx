export default function Doctors() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Why Choose Us
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          "Experienced & Certified Doctors",
          "24/7 Emergency Services",
          "Modern Medical Equipment",
          "Clean & Safe Environment",
          "Affordable Treatment Costs",
          "Patient-Centered Care",
        ].map(item => (
          <div key={item} className="bg-white p-6 rounded shadow text-center">
            <i className="fas fa-user-md text-secondary mb-2"></i>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
