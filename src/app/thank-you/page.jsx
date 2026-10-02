'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Phone, MapPin, Clock, Home, ExternalLink } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { WhatsAppIcon } from '../../components/Icons';

export default function ThankYouPage() {
  return (
    <>
      <Navbar onOpenModal={() => {}} />

      <main style={{ minHeight: '80vh', background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)', padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
          
          {/* Success Check Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #22C55E 0%, #15803D 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            boxShadow: '0 10px 30px rgba(34, 197, 94, 0.35)'
          }}>
            <CheckCircle2 size={44} />
          </div>

          <span className="section-tag" style={{ background: '#DCFCE7', color: '#166534', marginBottom: '14px', display: 'inline-block' }}>
            Enquiry Received Successfully
          </span>

          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', color: '#0F172A', fontWeight: 900, lineHeight: 1.25, marginBottom: '14px' }}>
            Thank You for Reaching Out!
          </h1>

          <p style={{ fontSize: '1.12rem', color: '#334155', lineHeight: 1.7, marginBottom: '12px' }}>
            We have received your admission enquiry for <strong>Appy Kidz International Pre School &amp; Day Care</strong>.
          </p>

          <p style={{ fontSize: '0.98rem', color: '#64748B', lineHeight: 1.65, maxWidth: '620px', margin: '0 auto 36px' }}>
            A confirmation email has been dispatched to your email address. Our admissions coordinator will contact you shortly to schedule your campus visit, introduce our Montessori curriculum, and answer all your questions.
          </p>

          {/* Campus Details Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '32px 28px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 12px 35px rgba(0,0,0,0.06)',
            textAlign: 'left',
            marginBottom: '36px'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '18px', fontWeight: 800, borderBottom: '1px solid #F1F5F9', paddingBottom: '12px' }}>
              📍 Campus Visit &amp; Contact Details
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ background: '#EFF6FF', padding: '10px', borderRadius: '12px', color: '#0284C7', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0F172A', marginBottom: '3px' }}>Location</strong>
                  <span style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5 }}>
                    Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ background: '#F0FDF4', padding: '10px', borderRadius: '12px', color: '#16A34A', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: '#0F172A', marginBottom: '3px' }}>Admissions Phone</strong>
                  <a href="tel:+917022261013" style={{ fontSize: '0.95rem', color: '#559E18', fontWeight: 800, textDecoration: 'none' }}>
                    +91 70222 61013
                  </a>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8' }}>Monday – Saturday: 8:30 AM – 6:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#559E18',
                color: '#FFFFFF',
                padding: '13px 26px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.96rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(85, 158, 24, 0.4)',
                transition: 'all 0.2s ease'
              }}
            >
              <Home size={18} /> Return to Home
            </Link>

            <a
              href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20have%20submitted%20an%20admission%20enquiry%20and%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#25D366',
                color: '#FFFFFF',
                padding: '13px 24px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.96rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
              }}
            >
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>

            <a
              href="https://maps.google.com/?q=Appy+Kidz+International+Pre+School+Kithaganur+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#F1F5F9',
                color: '#1E293B',
                padding: '13px 22px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.92rem',
                border: '1px solid #CBD5E1',
                textDecoration: 'none'
              }}
            >
              <ExternalLink size={16} /> Campus Directions
            </a>
          </div>

        </div>
      </main>

      <Footer onOpenModal={() => {}} />
    </>
  );
}
