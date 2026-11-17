'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileCheck, ShieldAlert, BookOpen, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdmissionModal from '../../components/AdmissionModal';
import { WhatsAppIcon } from '../../components/Icons';

export default function TermsAndConditionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" style={{ background: '#F1F5F9', padding: '10px 0', borderBottom: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B' }}>
          <Link href="/" style={{ color: '#0369A1', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#1E293B', fontWeight: 600 }}>Terms and Conditions</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section style={{ background: 'linear-gradient(135deg, #FEF9C3 0%, #DCFCE7 100%)', padding: '50px 0 40px', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '880px', textAlign: 'center' }}>
          <span className="section-tag" style={{ background: '#FEF08A', color: '#854D0E', marginBottom: '14px', display: 'inline-block' }}>
            <FileCheck size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} />
            Institutional Terms of Use
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#1E293B', marginBottom: '14px', lineHeight: 1.25 }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto' }}>
            These terms govern your use of the Appy Kidz website, our admission inquiry channels, and parent walkthroughs at our campus in Kithaganur, Bengaluru.
          </p>
          <div style={{ marginTop: '16px', fontSize: '0.85rem', color: '#64748B' }}>
            Last Updated &amp; Effective Date: October 2026 &bull; Jurisdiction: Bengaluru, Karnataka, India
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ padding: '50px 0 70px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          
          <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '16px', padding: '24px 28px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#92400E', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={20} color="#D97706" /> Welcome to Appy Kidz
            </h2>
            <p style={{ fontSize: '0.96rem', color: '#78350F', lineHeight: 1.65, margin: 0 }}>
              Please review these Terms and Conditions carefully. By accessing our website (https://appykidz.in), booking a school visit, or submitting an admission inquiry, you agree to comply with and be bound by the following institutional terms.
            </p>
          </div>

          <div className="legal-article" style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Section 1 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                1. Institutional Ownership &amp; Operating Entity
              </h2>
              <p>
                The website <strong>https://appykidz.in</strong> is owned and operated by <strong>Appy Kidz International Pre School &amp; Day Care</strong>, located at Building No 30, Aryan Springz, Phase 2, Kithaganur, Bengaluru, Karnataka - 560049.
              </p>
              <p>
                References to "the School", "Appy Kidz", "we", "us", or "our" refer to Appy Kidz International Pre School &amp; Day Care and its authorized administrative representatives. References to "you", "user", "parent", or "guardian" refer to any individual accessing our digital services or seeking admission for a prospective child.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                2. Admission Inquiries &amp; School Visits
              </h2>
              <p>
                Our digital forms allow parents to request campus walkthroughs, enquire about seat availability, and discuss curriculum details:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>No Guaranteed Admission:</strong> Submitting an inquiry or booking a campus walkthrough does not constitute formal enrollment or guarantee seat reservation.</li>
                <li><strong>Admission Evaluation:</strong> Final admission is confirmed only after in-person interaction, submission of age verification documents, payment of registration fees, and receipt of written confirmation from the school administration.</li>
                <li><strong>Age Eligibility:</strong> Children must satisfy minimum age guidelines as specified by early education guidelines (e.g., Playgroup from 1.5 years, Nursery from 2.5 years, LKG from 3.5 years, UKG from 4.5 years).</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                3. Intellectual Property Rights
              </h2>
              <p>
                All creative and digital assets on this website are the proprietary property of Appy Kidz International Pre School:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>The brand name "Appy Kidz", the school logo, and the official trademark character <strong>"Appy the Bookworm"</strong> mascot are protected by intellectual property laws.</li>
                <li>All campus photographs, hero banners, activity depictions, learning curriculum outlines, and written materials may not be reproduced, copied, republished, downloaded, or distributed for commercial purposes without prior written consent from the school management.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                4. Acceptable Website Use
              </h2>
              <p>
                When interacting with our website, you agree not to:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Submit false, fraudulent, defamatory, or misleading information through the inquiry or contact forms.</li>
                <li>Attempt to compromise, disrupt, scrape, inject malicious scripts, or reverse engineer any software powering the portal.</li>
                <li>Misuse contact numbers or communication lines for unsolicited spam or promotional marketing.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                5. Campus Walkthrough &amp; Visitor Code of Conduct
              </h2>
              <p>
                To preserve a peaceful, nurturing, and safe environment for all young children on campus:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Visitors must sign in at the school reception upon arrival and adhere to our child-safe guidelines.</li>
                <li>Unauthorized photography or video recording of other enrolled students without explicit staff permission is strictly prohibited.</li>
                <li>Parents and visitors are expected to maintain courteous, respectful behavior towards educators, caregivers, support staff, and fellow parents.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                6. Health, Medical &amp; Safety Protocols
              </h2>
              <p>
                The health and well-being of every child is our highest priority:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Parents must fully disclose any existing allergies, chronic medical conditions, or special developmental requirements during registration.</li>
                <li>Children showing active symptoms of contagious illnesses (fever, flu, hand-foot-and-mouth, conjunctivitis) must rest at home until medically cleared to avoid cross-infection among peers.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                7. Program Information &amp; Schedule Adjustments
              </h2>
              <p>
                While we make every effort to maintain accurate information on this website, school timings, academic calendars, fee components, and curriculum enrichment activities may be updated periodically to accommodate educational enhancements or governmental advisories. Confirmed details are shared directly with enrolled families through official school circulars.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                8. Limitation of Liability &amp; Disclaimers
              </h2>
              <p>
                This website and its digital content are provided on an "as is" and "as available" basis. While we maintain modern security measures, Appy Kidz cannot guarantee uninterrupted or error-free access to digital networks at all times.
              </p>
              <p>
                To the fullest extent permitted by Indian law, Appy Kidz International Pre School shall not be liable for any indirect, incidental, or consequential damages resulting from website downtime, delays in email delivery, or reliance on preliminary web content.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                9. Governing Law &amp; Dispute Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of <strong>India</strong>. Any dispute, claim, or legal controversy arising out of or in connection with these terms or enrollment at Appy Kidz shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bengaluru, Karnataka, India</strong>.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                10. Contacting School Administration
              </h2>
              <p>
                For any clarifications regarding these Terms and Conditions or our operational policies, please reach out to us:
              </p>
              <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '12px', padding: '20px', marginTop: '14px' }}>
                <p style={{ margin: '0 0 6px', fontWeight: 700, color: '#1E293B' }}>School Administration Desk</p>
                <p style={{ margin: '0 0 6px', color: '#475569' }}>Appy Kidz International Pre School &amp; Day Care</p>
                <p style={{ margin: '0 0 6px', color: '#475569' }}>Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049</p>
                <p style={{ margin: '0 0 6px' }}>Phone: <a href="tel:+917022261013" style={{ color: '#0284C7', fontWeight: 600 }}>+91 70222 61013</a></p>
                <p style={{ margin: 0 }}>Email: <a href="mailto:appykidzbangalore@gmail.com" style={{ color: '#0284C7', fontWeight: 600 }}>appykidzbangalore@gmail.com</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20have%20a%20question%20regarding%20school%20policies."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat With Us on WhatsApp"
      >
        <WhatsAppIcon size={26} />
        <span>Chat With Us</span>
      </a>

      {/* Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram="General Enquiry"
      />
    </>
  );
}
