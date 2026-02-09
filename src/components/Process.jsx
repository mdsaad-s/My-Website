const steps = [
  "Appointment Booking",
  "Doctor Consultation",
  "Diagnosis & Tests",
  "Treatment & Care",
  "Recovery & Follow-up",
];

export default function Process() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Our Process
      </h2>

      <div className="grid md:grid-cols-5 gap-4 text-center">
        {steps.map(step => (
          <div key={step} className="bg-blue-50 p-4 rounded">
            <i className="fas fa-check-circle text-primary mb-2"></i>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
