'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Calendar, Menu, X } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from './Icons';

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. TOP BAR */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <a href="tel:+917022261013" className="topbar-item topbar-phone" title="Call Appy Kidz Kithaganur">
              <Phone size={13} /> <span>+91 70222 61013</span>
            </a>
            <span className="topbar-item topbar-address desktop-only" title="Campus Location">
              <MapPin size={13} /> <span>Phase 2, Aduru, Kithaganur, Bengaluru - 560049</span>
            </span>
            <span className="topbar-item topbar-hours desktop-only" title="Enquiry & Office Hours">
              <Clock size={13} /> <span>Mon - Sat: 8:30 AM - 6:30 PM</span>
            </span>
          </div>

          <div className="topbar-right">
            <div className="social-links" aria-label="Social Media Links">
              <a
                href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn social-wa"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={13} />
              </a>
              <a
                href="https://www.facebook.com/appykidzkithaganur"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn social-fb"
                title="Appy Kidz on Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon size={12} />
              </a>
              <a
                href="https://www.instagram.com/appykidzkithaganur?igsh=NTZjYjBnaDBpZXRk"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn social-ig"
                title="Appy Kidz on Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon size={13} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCON-pGKMUYeFqDKmIdBpp7Q"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn social-yt"
                title="Appy Kidz on YouTube"
                aria-label="YouTube"
              >
                <YouTubeIcon size={13} />
              </a>
            </div>

            <button
              onClick={onOpenModal}
              className="topbar-enquiry-link"
              title="Click for Admission Enquiry"
            >
              Admission Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* 2. REFINED NAVBAR */}
      <header className="header-nav">
        <div className="container header-container">
          <Link href="/" className="brand-logo-wrap">
            <img
              src="/assets/official/logo-appy.png"
              alt="Appy Kidz International Pre School Kithaganur"
              className="brand-logo-img"
              onError={(e) => { e.target.src = '/assets/logo.jpg'; }}
            />
            <div className="brand-text">
              <span className="brand-title">APPY KIDZ</span>
              <span className="brand-subtitle">KITHAGANUR, BENGALURU</span>
            </div>
          </Link>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li><Link href="/" className="nav-pill">Home</Link></li>
              <li><Link href="/#about" className="nav-pill">About</Link></li>
              <li><Link href="/preschool-in-kithaganur" className="nav-pill">Preschool</Link></li>
              <li><Link href="/nursery-school-in-kithaganur" className="nav-pill">Nursery</Link></li>
              <li><Link href="/daycare-in-kithaganur" className="nav-pill">Daycare</Link></li>
              <li><Link href="/contact" className="nav-pill">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-right-actions">
            <button onClick={onOpenModal} className="nav-cta-btn">
              <Calendar size={16} /> Book a School Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle Navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div style={{ background: '#3F7511', padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Home</Link>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>About Us</Link>
              <Link href="/preschool-in-kithaganur" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FEF08A', fontWeight: 'bold' }}>Preschool Programmes</Link>
              <Link href="/nursery-school-in-kithaganur" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FEF08A', fontWeight: 'bold' }}>Nursery / Pre-KG</Link>
              <Link href="/daycare-in-kithaganur" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FEF08A', fontWeight: 'bold' }}>Daycare Facility</Link>
              <Link href="/#proud-moments" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Awards & Recognition</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Contact & Directions</Link>
              <button
                onClick={() => { onOpenModal(); setMobileMenuOpen(false); }}
                className="nav-cta-btn"
                style={{ justifyContent: 'center', marginTop: '10px' }}
              >
                <Calendar size={16} /> Book a School Visit
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
