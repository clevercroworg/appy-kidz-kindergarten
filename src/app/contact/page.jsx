'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Calendar, Mail, ExternalLink, CheckCircle2, RefreshCw } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FAQSection from '../../components/FAQSection';
import { WhatsAppIcon } from '../../components/Icons';

export default function ContactPage() {
  const [captchaCode, setCaptchaCode] = useState('AK49');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '',
    program: 'Playgroup (1.5 - 2.5 yrs)',
    preferredTime: 'Morning (9:30 AM - 12:00 PM)',
    message: ''
  });

  const refreshCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setUserCaptcha('');
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userCaptcha.trim().toUpperCase() !== captchaCode) {
      alert(`Please enter the matching verification code (${captchaCode}).`);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Dispatch email notification via backend Nodemailer route
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Contact Page Campus Visit Form',
        }),
      });
    } catch (err) {
      console.warn('Backend email notification notice:', err);
    } finally {
      setIsSubmitting(false);
    }

    // 2. Open WhatsApp for instant two-way chat
    const msg = `Hello Appy Kidz Kithaganur! I am booking a campus visit via the website contact page.%0A%0A*Parent Name:* ${encodeURIComponent(formData.parentName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Child Age:* ${encodeURIComponent(formData.childAge || 'Not specified')}%0A*Programme:* ${encodeURIComponent(formData.program)}%0A*Preferred Window:* ${encodeURIComponent(formData.preferredTime)}%0A*Questions:* ${encodeURIComponent(formData.message || 'Campus tour enquiry')}%0A*Campus:* Phase 2, Aduru, Kithaganur, Bengaluru - 560049`;
    window.open(`https://wa.me/917022261013?text=${msg}`, '_blank');

    setSubmitted(true);
  };

  return (
    <>
      <Navbar onOpenModal={() => {}} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" style={{ background: '#F1F5F9', padding: '10px 0', borderBottom: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B' }}>
          <Link href="/" style={{ color: '#0369A1', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#1E293B', fontWeight: 600 }}>Contact & Campus Visit</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #FEF9C3 100%)', padding: '60px 0 40px', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <span className="section-tag" style={{ background: '#DCFCE7', color: '#15803D', marginBottom: '14px', display: 'inline-block' }}>
            Campus Visit & Admissions
          </span>
          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 2.9rem)', color: '#1E293B', marginBottom: '16px', lineHeight: 1.25 }}>
            Visit Appy Kidz Kithaganur
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.7, marginBottom: '24px' }}>
            Come and explore our preschool and daycare campus in Phase 2, Aduru, Kithaganur. Book a visit to meet our team, see the learning environment and discuss the right programme for your child.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:+917022261013"
              className="btn-call-hero"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={16} /> Call the School (+91 70222 61013)
            </a>
            <a
              href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20plan%20a%20campus%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-wa"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <WhatsAppIcon size={18} /> Enquire on WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Appy+Kidz+International+Pre+School+Kithaganur+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-about-visit"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', color: '#1E293B', border: '1.5px solid #CBD5E1' }}
            >
              <ExternalLink size={16} /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Campus Details & Visit Booking Form */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'start' }}>
            {/* Left: Contact Info & Verified Hours */}
            <div>
              <div style={{ background: '#F8FAFC', padding: '32px', borderRadius: '18px', border: '1px solid #E2E8F0', marginBottom: '28px' }}>
                <h2 style={{ fontSize: '1.4rem', color: '#1E293B', marginBottom: '18px' }}>
                  Appy Kidz International Pre School & Day Care &mdash; Kithaganur
                </h2>

                <div style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
                  <MapPin size={22} color="#559E18" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', color: '#1E293B', marginBottom: '4px' }}>Campus Address:</strong>
                    <address style={{ fontStyle: 'normal', color: '#475569', lineHeight: 1.6 }}>
                      Phase 2, Aduru, Kithaganur,<br />
                      Bengaluru, Karnataka &ndash; 560049<br />
                      <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Conveniently accessible from TC Palya, Battarahalli, Aduru & KR Puram</span>
                    </address>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
                  <Phone size={20} color="#559E18" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', color: '#1E293B', marginBottom: '4px' }}>Telephone Enquiries:</strong>
                    <a href="tel:+917022261013" style={{ color: '#0369A1', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>
                      +91 70222 61013
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
                  <Clock size={20} color="#559E18" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', color: '#1E293B', marginBottom: '4px' }}>Verified Office & Enquiry Hours:</strong>
                    <span style={{ color: '#475569', display: 'block', fontSize: '0.94rem' }}>
                      Monday &ndash; Saturday: <strong>8:30 AM &ndash; 6:30 PM</strong>
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                      <em>(Note: Individual classroom and daycare session timings are discussed during your visit to match your child's age group.)</em>
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Interactive Map Embed */}
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #CBD5E1', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                <iframe
                  title="Appy Kidz Kithaganur Campus Location Map"
                  src="https://maps.google.com/maps?q=Appy+Kidz+International+Pre+School+Kithaganur+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: School Visit Booking Form */}
            <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '18px', border: '1.5px solid #E2E8F0', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#1E293B', marginBottom: '6px' }}>Book a School Walkthrough</h2>
                <p style={{ color: '#64748B', fontSize: '0.92rem' }}>
                  Tell us about your child to arrange an in-person tour of classrooms and facilities.
                </p>
              </div>

              {submitted ? (
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '30px', borderRadius: '14px', textAlign: 'center' }}>
                  <CheckCircle2 size={48} color="#16A34A" style={{ margin: '0 auto 12px' }} />
                  <h3 style={{ color: '#166534', marginBottom: '8px' }}>Walkthrough Request Initiated!</h3>
                  <p style={{ color: '#14532D', fontSize: '0.94rem', lineHeight: 1.6 }}>
                    WhatsApp has opened to confirm your appointment with our Kithaganur admissions team. We look forward to meeting you and your child!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Parent’s Full Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.parentName}
                      onChange={handleFormChange}
                      className="admission-input-styled"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="admission-input-styled"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        Child’s Age *
                      </label>
                      <input
                        type="text"
                        name="childAge"
                        required
                        placeholder="e.g. 2 years 8 months"
                        value={formData.childAge}
                        onChange={handleFormChange}
                        className="admission-input-styled"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="admission-input-styled"
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Programme Interested In
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleFormChange}
                      className="admission-select-styled"
                    >
                      <option value="Playgroup (1.5 - 2.5 yrs)">Playgroup (1.5 &ndash; 2.5 yrs)</option>
                      <option value="Nursery / Pre-KG (2.5 - 3.5 yrs)">Nursery / Pre-KG (2.5 &ndash; 3.5 yrs)</option>
                      <option value="Junior KG (3.5 - 4.5 yrs)">Junior KG (3.5 &ndash; 4.5 yrs)</option>
                      <option value="Senior KG (4.5 - 5.5 yrs)">Senior KG (4.5 &ndash; 5.5 yrs)</option>
                      <option value="Daycare in Kithaganur">Daycare in Kithaganur</option>
                      <option value="Combined Preschool & Daycare">Combined Preschool & Daycare</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Preferred Visit Window
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleFormChange}
                      className="admission-select-styled"
                    >
                      <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM &ndash; 12:00 PM)</option>
                      <option value="Afternoon (1:30 PM - 3:30 PM)">Afternoon (1:30 PM &ndash; 3:30 PM)</option>
                      <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM &ndash; 6:00 PM)</option>
                      <option value="Saturday Visit">Saturday Visit (Morning)</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Specific Questions or Notes
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="e.g. inquiries about daily routine, food arrangements, or transport from Battarahalli"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="admission-textarea-styled"
                    />
                  </div>

                  {/* Captcha */}
                  <div className="admission-captcha-row" style={{ marginBottom: '14px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Verification Code *"
                      value={userCaptcha}
                      onChange={(e) => setUserCaptcha(e.target.value)}
                      className="admission-input-styled captcha-field"
                    />
                    <div className="captcha-display-pill">
                      <span className="captcha-characters">{captchaCode}</span>
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        className="captcha-refresh-btn"
                        title="Refresh verification code"
                        aria-label="Refresh Captcha"
                      >
                        <RefreshCw size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Privacy Notice per Section 10 */}
                  <p style={{ fontSize: '0.74rem', color: '#64748B', marginBottom: '16px', lineHeight: 1.45 }}>
                    🔒 <strong>Privacy Notice:</strong> We respect your privacy. Contact details submitted here are used solely to schedule your school walkthrough and share requested admission information.
                  </p>

                  <button
                    type="submit"
                    className="admission-btn-submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1.02rem',
                      opacity: isSubmitting ? 0.75 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Confirm & Schedule Campus Visit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="School Visit & Location FAQs"
        subtitle="Helpful guidance regarding campus directions, parking, and scheduling your visit in Aduru, Kithaganur."
      />

      <Footer onOpenModal={() => {}} />
    </>
  );
}
