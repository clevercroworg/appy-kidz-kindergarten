'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Calendar, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="locations-footer-section" id="locations">
      <div className="container">
        {/* Main Kithaganur Branch Spotlight */}
        <div className="locations-header">
          <div>
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF', marginBottom: '8px' }}>
              Bengaluru Campus
            </span>
            <h2 className="locations-title">Appy Kidz International Pre School</h2>
          </div>
          <img
            src="/assets/official/logo-appy.png"
            alt="Appy Kidz International Pre School"
            className="locations-brand-logo"
            onError={(e) => { e.target.src = '/assets/logo.jpg'; }}
          />
        </div>

        {/* Primary Kithaganur Campus Card & Quick Programme Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '36px' }}>
          {/* Kithaganur Card */}
          <div className="location-card featured-bangalore" style={{ background: '#FFFFFF', color: '#1E293B', padding: '28px', borderRadius: '16px' }}>
            <span className="featured-pill" style={{ background: '#16A34A', color: '#FFFFFF', padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
              📍 PRIMARY BENGALURU CAMPUS
            </span>
            <h3 style={{ fontSize: '1.4rem', margin: '12px 0 6px', color: '#1E293B' }}>Kithaganur (Bengaluru)</h3>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
              Building No 30, Aryan Springz, Phase 2, Kithaganur,<br />
              Bangalore, Karnataka - 560049<br />
              <em style={{ fontSize: '0.85rem', color: '#64748B' }}>(Serving Kithaganur, Aduru &amp; nearby TC Palya, Battarahalli &amp; KR Puram)</em>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: '#1E293B', fontSize: '1.05rem', marginBottom: '16px' }}>
              <Phone size={18} color="#559E18" />
              <a href="tel:+917022261013" style={{ textDecoration: 'none', color: 'inherit' }}>+91 70222 61013</a>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenModal}
                className="location-link-btn"
                style={{ background: '#559E18', color: '#FFFFFF', border: 'none', padding: '10px 18px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
              >
                <Calendar size={15} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }} />
                Book School Visit
              </button>
              <a
                href="https://maps.google.com/?q=Appy+Kidz+International+Pre+School+Kithaganur+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link-btn"
                style={{ background: '#F1F5F9', color: '#1E293B', border: '1px solid #CBD5E1', padding: '10px 18px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Get Directions <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Quick Programme Links */}
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '28px', borderRadius: '16px', color: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '14px', color: '#FEF08A' }}>Programmes & Admissions</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.95, marginBottom: '16px' }}>
              Appy Kidz International Pre School & Day Care offers Playgroup, Nursery, Junior KG, Senior KG and Daycare at its Kithaganur campus in Bengaluru.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/preschool-in-kithaganur" style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 600 }}>
                  &rarr; Preschool Programmes (Playgroup & KG)
                </Link>
              </li>
              <li>
                <Link href="/nursery-school-in-kithaganur" style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 600 }}>
                  &rarr; Nursery / Pre-KG Admission
                </Link>
              </li>
              <li>
                <Link href="/daycare-in-kithaganur" style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 600 }}>
                  &rarr; Daycare & Childcare Facility
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 600 }}>
                  &rarr; Campus Visit, Map & Contact Details
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separate Section for Other Network Centres as specifically required by Developer Brief Section 8 */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '28px', marginBottom: '28px' }}>
          <h4 style={{ fontSize: '0.95rem', color: '#FEF08A', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
            Other Appy Kidz Network Centres (Tamil Nadu)
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            <div style={{ background: 'rgba(0,0,0,0.15)', padding: '14px 18px', borderRadius: '10px', fontSize: '0.85rem', color: '#FFFFFF' }}>
              <strong>Thirumullaivoyal, Chennai</strong>
              <p style={{ margin: '4px 0', opacity: 0.85 }}>Raghavan St, Saraswathi Nagar (600062)</p>
              <a href="tel:+919176477733" style={{ color: '#FEF08A', textDecoration: 'none', fontWeight: 700 }}>+91 91764 77733</a>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.15)', padding: '14px 18px', borderRadius: '10px', fontSize: '0.85rem', color: '#FFFFFF' }}>
              <strong>Avadi, Chennai</strong>
              <p style={{ margin: '4px 0', opacity: 0.85 }}>Nehru St, Ram Nagar (600071)</p>
              <a href="tel:+919176477733" style={{ color: '#FEF08A', textDecoration: 'none', fontWeight: 700 }}>+91 91764 77733</a>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.15)', padding: '14px 18px', borderRadius: '10px', fontSize: '0.85rem', color: '#FFFFFF' }}>
              <strong>Pattabiram, Chennai</strong>
              <p style={{ margin: '4px 0', opacity: 0.85 }}>CTH Road, beside Nilgiris (600072)</p>
              <a href="tel:+919176477733" style={{ color: '#FEF08A', textDecoration: 'none', fontWeight: 700 }}>+91 91764 77733</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>
          <div>
            &copy; {new Date().getFullYear()} Appy Kidz International Pre School &bull; Kithaganur Campus, Bengaluru. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/" style={{ color: '#FFFFFF' }}>Home</Link>
            <Link href="/preschool-in-kithaganur" style={{ color: '#FFFFFF' }}>Preschool</Link>
            <Link href="/nursery-school-in-kithaganur" style={{ color: '#FFFFFF' }}>Nursery</Link>
            <Link href="/daycare-in-kithaganur" style={{ color: '#FFFFFF' }}>Daycare</Link>
            <Link href="/contact" style={{ color: '#FFFFFF' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
