'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Phone, CheckCircle2, ChevronRight, BookOpen, Compass, Users, Sparkles, Heart } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdmissionModal from '../../components/AdmissionModal';
import FAQSection from '../../components/FAQSection';
import { WhatsAppIcon } from '../../components/Icons';

export default function PreschoolPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('Preschool Playgroup');

  const openWithProgram = (prog) => {
    setSelectedProgram(prog);
    setIsModalOpen(true);
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://appykidz.in' },
    { name: 'Preschool in Kithaganur', url: 'https://appykidz.in/preschool-in-kithaganur' }
  ];

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" style={{ background: '#F1F5F9', padding: '10px 0', borderBottom: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B' }}>
          <Link href="/" style={{ color: '#0369A1', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#1E293B', fontWeight: 600 }}>Preschool in Kithaganur</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #FEF9C3 100%)', padding: '60px 0 50px', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ background: '#DCFCE7', color: '#15803D', marginBottom: '14px', display: 'inline-block' }}>
                Early Learning in Aduru, Kithaganur
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', color: '#1E293B', lineHeight: 1.25, marginBottom: '18px' }}>
                Preschool in Kithaganur for Curious Young Learners
              </h1>
              <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.7, marginBottom: '16px' }}>
                Your child’s first classroom should make learning feel inviting. <strong>Appy Kidz International Pre School</strong> in Kithaganur introduces young children to early learning through play, conversation, stories and practical activities.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.65, marginBottom: '28px' }}>
                Our campus in Phase 2, Aduru offers <strong>Playgroup, Nursery, Junior KG and Senior KG</strong>. Speak with our team to understand the programme that suits your child’s age, readiness and previous learning experience.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary-hero"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Calendar size={18} /> Visit Our Preschool
                </button>
                <a
                  href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20enquire%20about%20preschool%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-wa"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <WhatsAppIcon size={18} /> Enquire on WhatsApp
                </a>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.1)', border: '4px solid #FFFFFF' }}>
                <img
                  src="/assets/classroom-round-tables.jpg"
                  alt="Preschool children engaged in hands-on learning at Appy Kidz Kithaganur"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-15px', right: '15px', background: '#FFFFFF', padding: '12px 20px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 color="#559E18" size={24} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#1E293B' }}>Play-Way & Montessori</strong>
                  <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Ages 1.5 to 5.5 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Children Explore */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
            <span className="section-tag" style={{ background: '#FEF08A', color: '#854D0E' }}>Developmental Milestones</span>
            <h2 style={{ fontSize: '2.1rem', color: '#1E293B', margin: '10px 0' }}>What Children Explore at Preschool</h2>
            <p style={{ color: '#64748B', fontSize: '1rem' }}>
              Every day provides structured and guided opportunities for curiosity, expression, and collaboration.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#0284C7' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '10px' }}>Language & Expression</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                Rhymes, stories and conversations give children opportunities to listen, learn new words and express their ideas with growing confidence.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#D97706' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '10px' }}>Early Number Understanding</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                Counting, sorting, matching and recognising patterns introduce mathematical ideas through hands-on activities children can take part in.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#15803D' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '10px' }}>Movement & Coordination</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                Drawing, handling learning materials and practical activities support the motor skills children use for everyday tasks and later writing.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#DC2626' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '10px' }}>Social Confidence</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                Shared activities help children practise taking turns, communicating with peers and teachers, and becoming part of a supportive classroom group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Montessori & Play-Way Approach */}
      <section style={{ padding: '60px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ background: '#E0F2FE', color: '#0369A1', marginBottom: '12px', display: 'inline-block' }}>
                Pedagogy & Materials
              </span>
              <h2 style={{ fontSize: '2.1rem', color: '#1E293B', marginBottom: '18px' }}>
                Our Montessori and Play-Way Approach
              </h2>
              <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
                Children learn by exploring materials and trying things for themselves. Our Montessori and play-way approach combines hands-on experiences with opportunities for stories, creative expression and guided play.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                During your visit, ask our team to show you the learning materials and explain how activities differ across <strong>Playgroup, Nursery, Junior KG and Senior KG</strong>. This helps you understand what your child’s experience will look like in practice.
              </p>
              <button onClick={() => openWithProgram('Campus Walkthrough')} className="btn-about-visit">
                <Calendar size={16} /> Schedule Campus Walkthrough
              </button>
            </div>
            <div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}>
                <img
                  src="/assets/classroom-activity-tables.jpg"
                  alt="Montessori apparatus and sensory learning tables at Appy Kidz Kithaganur"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing a Play School in Kithaganur */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '2.1rem', color: '#1E293B', marginBottom: '14px' }}>
              Choosing a Play School in Kithaganur
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
              When comparing play schools, consider more than the programme name. Visit the campus, observe the learning environment and ask how the team helps children adjust to being away from home. Discuss class timings, parent communication and the daily journey from your home.
            </p>
            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7, marginTop: '14px' }}>
              At Appy Kidz, a campus visit is an opportunity to ask these questions before making your admission decision.
            </p>
          </div>

          <div style={{ background: '#FEF9C3', border: '1.5px solid #FACC15', borderRadius: '16px', padding: '28px', marginTop: '30px' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#854D0E', marginBottom: '12px' }}>
              Preschool Admission Enquiries
            </h3>
            <p style={{ color: '#713F12', lineHeight: 1.65, marginBottom: '18px' }}>
              Share your child’s age and the programme you are considering. Our team will discuss eligibility, current availability, timings, fees and the documents required for admission.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/nursery-school-in-kithaganur" style={{ color: '#0369A1', fontWeight: 700, textDecoration: 'underline' }}>
                &rarr; Looking specifically for pre-KG? Visit our Nursery page
              </Link>
              <Link href="/daycare-in-kithaganur" style={{ color: '#0369A1', fontWeight: 700, textDecoration: 'underline' }}>
                &rarr; Need childcare alongside early learning? Explore Daycare
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg, #164E63 0%, #0E3846 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Book a Visit to Appy Kidz Kithaganur</h2>
          <p style={{ fontSize: '1.08rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Speak with Appy Kidz Kithaganur about preschool, nursery or daycare. Call +91 70222 61013 or book an in-person walkthrough today.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
              <Calendar size={18} /> Book a School Visit
            </button>
            <a href="tel:+917022261013" className="btn-call-hero">
              <Phone size={16} /> Call +91 70222 61013
            </a>
          </div>
        </div>
      </section>

      {/* Relevant FAQs */}
      <FAQSection
        title="Preschool Admissions & Learning FAQs"
        subtitle="Frequently asked questions about playgroup, kindergarten, readiness, and visiting our Kithaganur campus."
      />

      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialProgram={selectedProgram} />
    </>
  );
}
