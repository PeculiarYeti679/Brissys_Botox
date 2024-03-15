import Faqs from "../components/FaqCard";

export default function Faq() {
  return (
    <main className="min-h-screen bg-rosequartz">
      <h1 className="p-10 grid justify-items-center text-5xl font-serif">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center">
  <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl px-4 py-2">
    <Faqs
      question="Aesthetic q"
      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />
    <Faqs question="Aesthetic q" answer="Aesthetic a" />
    <Faqs question="Aesthetic q" answer="Aesthetic a" />
  </div>
</div>

    </main>
  );
}
