export default function Testimonials() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Patient Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded">
          <p className="italic">
            "Excellent service and caring doctors. The staff treated me like family."
          </p>
          <h4 className="font-semibold mt-2">Ramesh Kumar</h4>
        </div>

        <div className="bg-blue-50 p-6 rounded">
          <p className="italic">
            "Very clean hospital and well-experienced doctors. My treatment was smooth."
          </p>
          <h4 className="font-semibold mt-2">Anjali Sharma</h4>
        </div>

        <div className="bg-blue-50 p-6 rounded">
          <p className="italic">
            "Quick emergency response and professional care."
          </p>
          <h4 className="font-semibold mt-2">Suresh Patel</h4>
        </div>
      </div>
    </section>
  );
}
