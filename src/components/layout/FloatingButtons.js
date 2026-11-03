"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Headphones, MessageCircle, Phone, X } from "lucide-react";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappMessage = encodeURIComponent("Hello OZLYFT team, I would like to book a ride. Could you please share availability?");

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="help-dock">
      {isOpen && (
        <div className="help-popover" id="quick-help-panel">
          <div className="help-popover-heading"><span className="help-avatar"><Headphones size={17} /></span><span><strong>We are here to help</strong><small>Choose how you would like to reach us</small></span></div>
          <a href={`https://wa.me/61433441275?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="help-option"><MessageCircle size={17} /><span><strong>WhatsApp</strong><small>Send us your trip details</small></span><ArrowUpRight size={15} aria-hidden="true" /></a>
          <a href="tel:+61433441275" className="help-option"><Phone size={17} /><span><strong>Call our team</strong><small>Speak with someone directly</small></span><ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      )}
      <button type="button" className="help-toggle" aria-expanded={isOpen} aria-controls={isOpen ? "quick-help-panel" : undefined} aria-label={isOpen ? "Close contact options" : "Open contact options"} onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <X size={20} /> : <><MessageCircle size={19} /><span>Need a hand?</span></>}
      </button>
    </div>
  );
}
