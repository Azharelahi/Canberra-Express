import Link from "next/link";
import { ArrowUpRight, MessageCircleQuestion } from "lucide-react";

const faqData = [
  { question: "What services does OZLYFT offer?", answer: "We provide private rides, airport transfers, and Canberra to Sydney journeys. Choose the vehicle and trip details that suit your journey, then send a booking request for our team to confirm." },
  { question: "How do I request a booking?", answer: "Start with the booking form on the home page. Choose your pickup and drop-off, date, time, and vehicle, then add your contact details. We’ll follow up to confirm the request." },
  { question: "When is my booking confirmed?", answer: "Submitting a request lets our team know what you need. Your trip is confirmed after we contact you and agree the details." },
  { question: "Can I change my trip details?", answer: "Yes. Contact us as soon as possible by phone or email and share the name and travel details on your request. We’ll let you know what changes we can accommodate." },
  { question: "Can I book a same-day ride?", answer: "You can send a request, but same-day trips need availability confirmation from our team. For the quickest answer, call or WhatsApp us." },
  { question: "How do I get help with my trip?", answer: "Call +61 451 107 931 or email ozlyft@gmail.com. Include your route and travel date so we can help quickly." },
];

export default function FAQPage() {
  return (
    <main className="info-page faq-page">
      <div className="page-container">
        <header className="info-hero"><span className="eyebrow"><MessageCircleQuestion size={15} /> Helpful to know</span><h1>Questions, <em>answered.</em></h1><p>Everything you need to feel ready before your trip begins.</p></header>
        <section className="faq-list" aria-label="Frequently asked questions">
          {faqData.map((faq, index) => <details className="faq-item" key={faq.question}><summary><span className="faq-index">0{index + 1}</span><span>{faq.question}</span><span className="faq-plus" aria-hidden="true" /></summary><div className="faq-answer"><p>{faq.answer}</p></div></details>)}
        </section>
        <aside className="faq-contact"><div><span className="eyebrow">Still need a hand?</span><h2>We’re just a message away.</h2><p>Tell us about your trip and we’ll help you get booked.</p></div><Link href="/contact-us" className="button button-primary">Talk to our team <ArrowUpRight size={17} /></Link></aside>
      </div>
    </main>
  );
}
