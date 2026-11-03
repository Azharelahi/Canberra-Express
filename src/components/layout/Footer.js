import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services & prices", href: "/price-page" },
  { label: "Our story", href: "/about-us" },
  { label: "Frequently asked", href: "/faq-page" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-container">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand"><span className="brand-mark">O</span><span className="brand-copy"><strong>OZLYFT</strong><small>Move with confidence</small></span></Link>
          <p>Good journeys start with feeling looked after. We make getting there feel easy.</p>
          <a className="footer-email" href="mailto:ozlyft@gmail.com"><Mail size={16} /> ozlyft@gmail.com <ArrowUpRight size={14} /></a>
        </div>
        <div className="footer-links-block"><h2>Explore</h2>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}<ArrowUpRight size={13} /></Link>)}</div>
        <div className="footer-contact-block"><h2>Here when you need us</h2><a href="tel:+61451107931"><Phone size={16} /><span><small>Call our team</small>+61 451 107 931</span></a><div><MapPin size={16} /><span><small>Our home base</small>Canberra, ACT</span></div><Link href="/contact-us" className="footer-contact-cta">Get in touch <ArrowUpRight size={15} /></Link></div>
      </div>
      <div className="footer-bottom page-container"><span>© {new Date().getFullYear()} OZLYFT. All rights reserved.</span><div><Link href="/privacy-page">Privacy</Link><Link href="/terms-of-services">Terms</Link><span>Made for the road ahead.</span></div></div>
    </footer>
  );
}
