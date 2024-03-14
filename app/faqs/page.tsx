import Faqs from "../components/FaqCard";

export default function Faq() {
    return (
      <main className="min-h-screen bg-rosequartz">
        <h1 className="p-10 grid justify-items-center">Frequently Asked Questions</h1>
        <section className="px-20">
        <div className="p-4 bg-coral rounded-lg">
      <Faqs
        title="Aesthetic q"
        answer="Aesthetic a"
      />
      <Faqs
        title="Aesthetic q"
        answer="Aesthetic a"
      />
      <Faqs title="Aesthetic q"
        answer="Aesthetic a"/>
    </div>
        </section>
        
    </main>
    );
  }
  