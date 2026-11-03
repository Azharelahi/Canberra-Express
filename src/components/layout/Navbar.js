"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services & prices", href: "/price-page" },
  { name: "About", href: "/about-us" },
  { name: "FAQs", href: "/faq-page" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  const handleBookingClick = (event, closeMenu = false) => {
    if (closeMenu) setIsOpen(false);
    if (pathname !== "/") return;

    event.preventDefault();
    window.setTimeout(() => {
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <div className="reading-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="brand" aria-label="OZLYFT home">
            <span className="brand-mark">O</span>
            <span className="brand-copy"><strong>OZLYFT</strong><small>Move with confidence</small></span>
          </Link>
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={pathname === link.href ? "nav-link active" : "nav-link"}>{link.name}</Link>
            ))}
          </div>
          <Link href="/#book" onClick={handleBookingClick} className="nav-cta">Book a ride <ArrowUpRight size={16} /></Link>
          <button className="menu-toggle" type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobile-navigation" aria-hidden={!isOpen}>
        <div className="mobile-menu-inner">
          <button className="mobile-menu-close" type="button" tabIndex={isOpen ? 0 : -1} aria-label="Close menu" onClick={() => setIsOpen(false)}><X size={20} /></button>
          <p className="eyebrow">Explore OZLYFT</p>
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} aria-current={pathname === link.href ? "page" : undefined} className={pathname === link.href ? "mobile-link active" : "mobile-link"}>
              <span>0{index + 1}</span>{link.name}<ArrowUpRight size={17} />
            </Link>
          ))}
          <Link href="/#book" onClick={(event) => handleBookingClick(event, true)} tabIndex={isOpen ? 0 : -1} className="button button-primary mobile-book">Book a ride <ArrowUpRight size={17} /></Link>
          <p className="mobile-menu-note">Local rides, airport transfers &amp; Canberra to Sydney trips.</p>
        </div>
      </div>
      {isOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setIsOpen(false)} />}
    </>
  );
}
