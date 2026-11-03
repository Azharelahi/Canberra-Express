import Image from "next/image";
import {
  CarFront,
  CircleDollarSign,
  Clock3,
  Sparkles,
  ShieldCheck,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: CarFront,
    title: "Wide Fleet of Vehicles",
    description: "Choose from a variety of vehicles, from compact cars to luxury options, tailored for your travel needs in Canberra.",
  },
  {
    icon: CircleDollarSign,
    title: "Affordable Rates",
    description: "Get the best deals in Canberra with our competitive pricing and flexible hire options.",
  },
  {
    icon: Clock3,
    title: "24/7 Customer Support",
    description: "Our dedicated team is available anytime to help with your travel needs, ensuring a seamless experience.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Rentals",
    description: "All of our vehicles come fully insured, giving you peace of mind on your travels around Canberra.",
  },
  {
    icon: Star,
    title: "Trusted by Locals & Tourists",
    description: "Join hundreds of satisfied customers who trust us for their car hire needs, both local and visiting travelers.",
  },
];

export default function WhyChoose() {
  const renderBenefitCards = (copy = false) => benefits.map(({ icon: Icon, title, description }) => (
    <article className="benefit-card" key={`${copy ? "copy-" : ""}${title}`}>
      <Image className="benefit-card-brand" src="/assets/logo2.png" alt="" width={256} height={256} aria-hidden="true" />
      <span className="benefit-card-icon"><Icon size={22} strokeWidth={1.8} /></span>
      <div className="benefit-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  ));

  return (
    <section className="reasons-section" aria-labelledby="reasons-heading">
      <div className="page-container">
        <header className="section-heading benefits-heading">
          <span className="eyebrow"><Sparkles size={15} /> The OZLYFT difference</span>
          <h2 id="reasons-heading">Comfort on the road.<br /><em>Care at every step.</em></h2>
          <span className="benefits-heading-rule" aria-hidden="true" />
        </header>
        <div className="benefits-marquee" role="region" aria-label="Reasons to choose OZLYFT">
          <div className="benefits-track">
            <div className="benefits-group">{renderBenefitCards()}</div>
            <div className="benefits-group" aria-hidden="true">{renderBenefitCards(true)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
