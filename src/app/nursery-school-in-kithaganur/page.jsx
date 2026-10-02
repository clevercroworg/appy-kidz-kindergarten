'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Phone, CheckCircle2, BookOpen, Palette, Sparkles, Smile, ShieldCheck } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdmissionModal from '../../components/AdmissionModal';
import FAQSection from '../../components/FAQSection';
import { WhatsAppIcon } from '../../components/Icons';

export default function NurseryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" style={{ background: '#F1F5F9', padding: '10px 0', borderBottom: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B' }}>
          <Link href="/" style={{ color: '#0369A1', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#1E293B', fontWeight: 600 }}>Nursery School in Kithaganur</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #DCFCE7 100%)', padding: '60px 0 50px', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ background: '#FEF3C7', color: '#B45309', marginBottom: '14px', display: 'inline-block' }}>
                Pre-KG Programme &bull; Ages 2.5 - 3.5 Years
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', color: '#1E293B', lineHeight: 1.25, marginBottom: '18px' }}>
                Nursery School in Kithaganur for a Confident Beginning
              </h1>
              <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.7, marginBottom: '16px' }}>
                Nursery is a time for children to explore, communicate and become familiar with learning alongside others. At <strong>Appy Kidz in Kithaganur</strong>, our Nursery / Pre-KG programme introduces early learning through stories, rhymes, creative activities and practical discovery.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.65, marginBottom: '28px' }}>
                Visit our campus at Building No 30, Aryan Springz, Phase 2, Kithaganur to learn about the programme and discuss whether it suits your child’s age and readiness.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary-hero"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Calendar size={18} /> Enquire About Nursery Admission
                </button>
                <a
                  href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20enquire%20about%20Nursery%20Pre-KG%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-wa"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <WhatsAppIcon size={18} /> WhatsApp Enquiry
                </a>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.1)', border: '4px solid #FFFFFF' }}>
                <img
                  src="/assets/classroom-green-desks.jpg"
                  alt="Nursery classroom environment at Appy Kidz Kithaganur"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Children Explore in Nursery */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
            <span className="section-tag" style={{ background: '#DCFCE7', color: '#15803D' }}>Nursery Curriculum</span>
            <h2 style={{ fontSize: '2.1rem', color: '#1E293B', margin: '10px 0' }}>What Children Explore in Nursery</h2>
            <p style={{ color: '#64748B', fontSize: '1rem' }}>
              Four foundational pillars designed to nurture curiosity, speech fluency, and fine motor skills.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#0284C7' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '10px' }}>Listening & Language</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                Stories, songs and simple conversations encourage children to listen, learn vocabulary and express themselves clearly.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#D97706' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '10px' }}>Numbers, Colours & Shapes</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                Matching, sorting, counting and identifying familiar objects introduce early mathematical concepts in an engaging, tactile way.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#15803D' }}>
                <Palette size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '10px' }}>Creative Expression</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                Drawing, art and hands-on sensory activities give children rich opportunities to explore ideas and practise motor coordination.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '28px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#DC2626' }}>
                <Smile size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '10px' }}>Everyday Independence</h3>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                Classroom routines help children practise participating in activities, caring for materials and doing small tasks with gentle support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Readiness & Admission */}
      <section style={{ padding: '60px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '2.1rem', color: '#1E293B', marginBottom: '14px' }}>
              Understanding Your Child’s Readiness
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
              Children begin nursery with different experiences and levels of confidence. Tell our team about your child’s age, previous playgroup experience and any questions you have about starting preschool.
            </p>
            <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7, marginTop: '14px' }}>
              We can explain the current nursery eligibility criteria and help you understand the classroom routine before you decide. Ask how children are introduced to the programme and what parents can do to prepare for their first days.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#1E293B', marginBottom: '12px' }}>
              Nursery Admission in Kithaganur
            </h3>
            <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>
              To begin, contact the school with your child’s age and the admission period you are considering. Arrange a visit, discuss programme timings and fees, and confirm the documents required to enrol.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid #F1F5F9', paddingTop: '18px' }}>
              <Link href="/preschool-in-kithaganur" style={{ color: '#0369A1', fontWeight: 700, textDecoration: 'underline' }}>
                &rarr; For younger children: Ask about Playgroup
              </Link>
              <Link href="/preschool-in-kithaganur" style={{ color: '#0369A1', fontWeight: 700, textDecoration: 'underline' }}>
                &rarr; Next stage: Explore Junior KG & Senior KG
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg, #559E18 0%, #3F7511 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Visit Appy Kidz Nursery in Kithaganur</h2>
          <p style={{ fontSize: '1.08rem', opacity: 0.95, maxWidth: '650px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Arrange an interactive classroom walkthrough to see our Montessori learning environment and meet our caring teachers.
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

      <FAQSection
        title="Nursery & Pre-KG Admission FAQs"
        subtitle="Answers to common questions about starting Nursery in Kithaganur, age cutoffs, and settling in."
      />

      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialProgram="Nursery / Pre-KG (2.5 - 3.5 yrs)" />
    </>
  );
}
