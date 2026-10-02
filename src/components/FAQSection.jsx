'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export const allFaqs = [
  {
    id: 'where-located',
    q: 'Where is Appy Kidz in Kithaganur?',
    a: 'Our Bengaluru campus is located in Phase 2, Aduru, Kithaganur, Bengaluru, Karnataka 560049. Use the directions link on our Contact page to plan your visit.'
  },
  {
    id: 'programmes-available',
    q: 'Which programmes are available at Appy Kidz Kithaganur?',
    a: 'The campus offers Playgroup, Nursery / Pre-KG, Junior KG, Senior KG and Daycare. Contact our team to confirm age eligibility, timings and current availability for your child.'
  },
  {
    id: 'daycare-available',
    q: 'Does Appy Kidz offer daycare in Kithaganur?',
    a: 'Yes. Contact the Kithaganur campus to discuss your child’s age, preferred schedule and current daycare arrangements.'
  },
  {
    id: 'difference-preschool-daycare',
    q: 'What is the difference between preschool and daycare?',
    a: 'Preschool focuses on early learning through an age-appropriate programme. Daycare provides childcare for an agreed schedule. If you need both, ask our team how the available programmes can fit together.'
  },
  {
    id: 'enquire-nursery',
    q: 'How do I enquire about nursery admission?',
    a: 'Call +91 70222 61013 or send a WhatsApp message with your child’s age. Our team will explain current admission availability and help arrange a campus visit.'
  },
  {
    id: 'visit-school-before',
    q: 'Can I visit the school before enrolling my child?',
    a: 'Yes. Book a school visit to explore the campus, meet our team and discuss the programme, timings, fees and admission process.'
  },
  {
    id: 'fees-structure',
    q: 'What are the preschool and daycare fees?',
    a: 'Contact our team for the current fee schedule for your chosen programme. Ask about registration, tuition, daycare charges and any additional items before enrolling.'
  },
  {
    id: 'families-tc-palya',
    q: 'Is the campus an option for families near TC Palya or Battarahalli?',
    a: 'Our campus is in Kithaganur. Families from TC Palya, Battarahalli and nearby neighbourhoods can check the directions and visit to decide whether the journey suits their daily routine.'
  }
];

export default function FAQSection({ faqs = allFaqs, title = "Frequently Asked Questions", subtitle = "Helpful answers to guide your child's preschool and daycare journey in Kithaganur." }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" style={{ padding: '60px 0', background: '#F8FAFC' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="section-tag" style={{ background: '#E0F2FE', color: '#0369A1' }}>
            <HelpCircle size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} />
            Parent Guidance
          </span>
          <h2 style={{ fontSize: '2rem', color: '#1E293B', margin: '8px 0' }}>{title}</h2>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>{subtitle}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id || idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: isOpen ? '1.5px solid #559E18' : '1px solid #E2E8F0',
                  boxShadow: isOpen ? '0 4px 15px rgba(85, 158, 24, 0.08)' : '0 2px 6px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '12px'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isOpen ? '#3F7511' : '#1E293B' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    color={isOpen ? '#3F7511' : '#94A3B8'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px', color: '#475569', fontSize: '0.96rem', lineHeight: 1.65 }}>
                    <p style={{ margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px', background: '#FFFFFF', padding: '20px 24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ textAlign: 'left' }}>
            <strong style={{ display: 'block', color: '#1E293B', fontSize: '1.05rem' }}>Have more questions about admissions?</strong>
            <span style={{ color: '#64748B', fontSize: '0.88rem' }}>Speak directly with our admissions counselor in Kithaganur.</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="tel:+917022261013"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F1F5F9', color: '#1E293B', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.88rem' }}
            >
              <Phone size={15} /> Call School
            </a>
            <a
              href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20have%20a%20question%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#25D366', color: '#FFFFFF', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.88rem' }}
            >
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
