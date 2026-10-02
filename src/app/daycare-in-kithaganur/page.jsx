'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Phone, CheckCircle2, Clock, ShieldCheck, Heart, MapPin, Coffee, Moon } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdmissionModal from '../../components/AdmissionModal';
import FAQSection from '../../components/FAQSection';
import { WhatsAppIcon } from '../../components/Icons';

export default function DaycarePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" style={{ background: '#F1F5F9', padding: '10px 0', borderBottom: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B' }}>
          <Link href="/" style={{ color: '#0369A1', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#1E293B', fontWeight: 600 }}>Daycare in Kithaganur</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #E0F2FE 100%)', padding: '60px 0 50px', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ background: '#FEF08A', color: '#854D0E', marginBottom: '14px', display: 'inline-block' }}>
                Safe, Nurturing Childcare in Aduru
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', color: '#1E293B', lineHeight: 1.25, marginBottom: '18px' }}>
                Daycare in Kithaganur — Discuss Your Childcare Needs
              </h1>
              <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.7, marginBottom: '16px' }}>
                Finding daycare is about choosing a daily arrangement that works for your child and your family. <strong>Appy Kidz International Pre School &amp; Day Care</strong> at Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore welcomes enquiries from parents looking for local childcare.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.65, marginBottom: '28px' }}>
                Tell us your child’s age, the days you need care and your preferred drop-off and collection times. Our team can explain current availability and the arrangements offered at the campus.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary-hero"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Calendar size={18} /> Enquire About Daycare
                </button>
                <a
                  href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20discuss%20daycare%20timings%20and%20childcare%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-wa"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <WhatsAppIcon size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.1)', border: '4px solid #FFFFFF' }}>
                <img
                  src="/assets/play-area-foam-mats.jpg"
                  alt="Childcare play area with cushioned foam floor mats at Appy Kidz Kithaganur"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routine & Arrangements */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ background: '#DCFCE7', color: '#15803D' }}>Routine & Care Pillars</span>
            <h2 style={{ fontSize: '2.1rem', color: '#1E293B', margin: '10px 0' }}>Find Out How Daycare Fits Your Child’s Routine</h2>
            <p style={{ color: '#64748B', fontSize: '1.02rem', lineHeight: 1.65 }}>
              Every family has different needs. Before choosing a daycare programme, it helps to understand the schedule, activities and care arrangements in detail.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px', marginBottom: '36px' }}>
            <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <Moon size={28} color="#0284C7" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '8px' }}>Quiet Rest & Nap Suites</h3>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                Dedicated hygienic rest areas where toddlers can nap peacefully following their personalized circadian rhythm.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <Heart size={28} color="#E11D48" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '8px' }}>Engaging Play & Care</h3>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                Nurturing caregivers facilitating indoor activities, storytelling, creative expression and guided peer play in a warm environment.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <ShieldCheck size={28} color="#15803D" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.15rem', color: '#1E293B', marginBottom: '8px' }}>Supervised Collection</h3>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                Strict child pick-up authorization protocols with verified identity checks and continuous CCTV campus monitoring.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7, background: '#F1F5F9', padding: '20px 24px', borderRadius: '12px' }}>
            During your visit, discuss your child’s usual routine and ask about rest routines, supervision, hygiene, collection procedures and daily updates with parents. Our team will explain the arrangements available so you can decide whether they suit your child.
          </p>
        </div>
      </section>

      {/* Daycare Alongside Preschool */}
      <section style={{ padding: '60px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ background: '#E0F2FE', color: '#0369A1', marginBottom: '12px', display: 'inline-block' }}>
                Integrated Learning & Care
              </span>
              <h2 style={{ fontSize: '2rem', color: '#1E293B', marginBottom: '16px' }}>Daycare Alongside Preschool</h2>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                If you are considering both preschool and daycare, ask how the two programmes can work together. Confirm the preschool session, any additional childcare hours and whether the combined arrangement is available for your child’s age group.
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>
                You can also explore our <Link href="/preschool-in-kithaganur" style={{ color: '#0369A1', fontWeight: 700 }}>Preschool</Link> and <Link href="/nursery-school-in-kithaganur" style={{ color: '#0369A1', fontWeight: 700 }}>Nursery</Link> pages to learn about the early learning programmes at the Kithaganur campus.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="btn-about-visit">
                <Calendar size={16} /> Discuss Combined Schedule
              </button>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#1E293B', marginBottom: '14px' }}>Daycare Near Aduru and Kithaganur</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                Our campus is at Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore. Families travelling from nearby neighbourhoods can use our map to plan their daily journey and arrange a visit before choosing a childcare schedule.
              </p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#559E18', fontWeight: 800, textDecoration: 'none' }}>
                <MapPin size={16} /> View Kithaganur Campus Map & Directions &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enquire About Daycare Availability */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', color: '#1E293B', marginBottom: '14px' }}>
            Enquire About Daycare Availability
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '28px' }}>
            Call +91 70222 61013 or send a WhatsApp enquiry with your child’s age and preferred schedule. We will help you understand the next steps for a campus visit and admission discussion.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
              <Calendar size={18} /> Talk to Our Team About Daycare
            </button>
            <a href="tel:+917022261013" className="btn-call-hero">
              <Phone size={16} /> Call +91 70222 61013
            </a>
          </div>
        </div>
      </section>

      <FAQSection
        title="Daycare & Childcare FAQs"
        subtitle="Common parent questions regarding daycare schedules, supervision, and preschool combinations in Kithaganur."
      />

      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialProgram="Daycare in Kithaganur" />
    </>
  );
}
