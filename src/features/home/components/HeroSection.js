"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export default function HeroSection({ bookingFormRef }) {
  const scrollToBooking = () => bookingFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="hero-shell">
      <div className="hero-photo" role="img" aria-label="A premium vehicle ready for a road trip" />
      <div className="hero-shade" />
      <div className="hero-grain" />
      <div className="hero-content page-container">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="status-dot" /> Canberra rides, made personal</div>
          <h1>Go further.<br /><span>Feel right at home.</span></h1>
          <p>Thoughtful rides and reliable transfers for the journeys that matter — across Canberra, to Sydney, and beyond.</p>
          <div className="hero-actions">
            <button type="button" className="button button-primary button-large" onClick={scrollToBooking}>Book a ride <ArrowUpRight size={18} /></button>
            <Link href="/price-page" className="hero-secondary">Explore our services <ArrowDown size={16} /></Link>
          </div>
          <div className="hero-proof">
            <div className="proof-icon"><ShieldCheck size={19} /></div>
            <div><strong>Ride with peace of mind</strong><span>Clear details. Friendly local support.</span></div>
          </div>
        </div>
        <div className="hero-side-note"><span>01</span><i /> Built around your journey</div>
      </div>
      <div className="hero-bottom page-container">
        <span><MapPin size={15} /> Canberra <span className="hero-route-line" /> Sydney</span>
        <span><Sparkles size={15} /> Your trip, your way</span>
        <button type="button" className="hero-scroll" onClick={scrollToBooking}>Start booking <ArrowDown size={14} /></button>
      </div>
      <div className="hero-float-card"><span className="float-icon"><Check size={17} /></span><span><strong>Easy from the first step</strong><small>Tell us where you’re headed</small></span></div>
    </section>
  );
}
