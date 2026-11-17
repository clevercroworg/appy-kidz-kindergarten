'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdmissionModal from '../../components/AdmissionModal';
import { WhatsAppIcon } from '../../components/Icons';

export default function PrivacyPolicyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" style={{ background: '#F1F5F9', padding: '10px 0', borderBottom: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B' }}>
          <Link href="/" style={{ color: '#0369A1', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#1E293B', fontWeight: 600 }}>Privacy Policy</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #FEF9C3 100%)', padding: '50px 0 40px', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '880px', textAlign: 'center' }}>
          <span className="section-tag" style={{ background: '#DCFCE7', color: '#15803D', marginBottom: '14px', display: 'inline-block' }}>
            <ShieldCheck size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} />
            Transparency &amp; Data Safeguards
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#1E293B', marginBottom: '14px', lineHeight: 1.25 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto' }}>
            At <strong>Appy Kidz International Pre School &amp; Day Care</strong>, we take the safety, privacy, and confidentiality of our young learners and their families with the highest sense of responsibility.
          </p>
          <div style={{ marginTop: '16px', fontSize: '0.85rem', color: '#64748B' }}>
            Last Updated &amp; Effective Date: October 2026 &bull; Compliant with Indian IT Act 2000 &amp; DPDPA 2023
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <main style={{ padding: '50px 0 70px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '24px 28px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={20} color="#15803D" /> Summary Commitment to Parents
            </h2>
            <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.65, margin: 0 }}>
              We collect only the essential information needed to schedule school tours, review admission applications, communicate academic updates, and maintain child safety on campus. <strong>We strictly never sell, rent, monetize, or trade parent or student data with third-party advertising companies.</strong>
            </p>
          </div>

          <div className="legal-article" style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Section 1 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                1. Institutional Identity &amp; Scope
              </h2>
              <p>
                This Privacy Policy applies to the official website (<strong>https://appykidz.in</strong>), online admission forms, visit booking systems, and on-campus administration managed by:
              </p>
              <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '16px 20px', margin: '14px 0', fontSize: '0.92rem' }}>
                <strong>Appy Kidz International Pre School &amp; Day Care</strong><br />
                Building No 30, Aryan Springz, Phase 2, Kithaganur,<br />
                Bengaluru, Karnataka - 560049, India.<br />
                Admissions Phone: <a href="tel:+917022261013" style={{ color: '#0284C7', fontWeight: 600 }}>+91 70222 61013</a><br />
                Official Email: <a href="mailto:appykidzbangalore@gmail.com" style={{ color: '#0284C7', fontWeight: 600 }}>appykidzbangalore@gmail.com</a>
              </div>
              <p>
                By accessing our website, submitting an admission inquiry, or scheduling a school visit, parents and legal guardians acknowledge the practices described in this policy.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                2. Information We Collect
              </h2>
              <p>
                To provide tailored early childhood education and childcare services, we collect information in the following categories:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>Parent &amp; Guardian Information:</strong> Full names, primary mobile contact numbers, WhatsApp numbers, email addresses, residential address, and relationship to the child.
                </li>
                <li>
                  <strong>Child &amp; Student Information:</strong> Child's legal name, date of birth / age, preferred programme (Playgroup, Nursery, LKG, UKG, or Daycare), spoken languages at home, dietary preferences, and any specific health, allergy, or developmental guidance shared by parents.
                </li>
                <li>
                  <strong>Campus Visit &amp; Inquiry Records:</strong> Preferred walkthrough dates, preferred morning/afternoon timings, previous schooling history, and specific questions submitted through our website forms.
                </li>
                <li>
                  <strong>Technical &amp; Log Data:</strong> Device type, browser type, anonymous IP addresses, and page navigation metrics used strictly to maintain website security, prevent spam, and improve usability.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                3. Purpose and Lawful Use of Information
              </h2>
              <p>
                All collected information is processed solely for legitimate educational and administrative purposes:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Scheduling campus walkthroughs and parent consultations with our academic coordinator.</li>
                <li>Providing authentic fee schedules, eligibility guidelines, and admission requirements.</li>
                <li>Communicating admission confirmation, uniform/kit collection, and orientation schedules.</li>
                <li>Safeguarding child welfare and addressing medical or emergency situations while on campus.</li>
                <li>Complying with local educational regulations and child safety standards in Karnataka, India.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                4. Child Safety &amp; Protection of Minor Data
              </h2>
              <p>
                In strict accordance with the <em>Digital Personal Data Protection Act (DPDPA), 2023</em> and applicable child protection guidelines:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>We collect children's details solely with the verifiable consent of their parents or legal guardians.</li>
                <li>We do not profile children, engage in targeted behavioral advertising directed at minors, or allow unauthorized third-party access to student records.</li>
                <li>All health, emergency, and developmental notes provided by parents are accessible strictly to authorized educators and caregivers on a need-to-know basis.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                5. Campus CCTV &amp; Security Surveillance
              </h2>
              <p>
                To maintain our child-proofed campus and ensure highest safety standards, the classrooms, play zones, corridors, and entrance gates at our Kithaganur campus are monitored via <strong>closed-circuit television (CCTV) cameras</strong>.
              </p>
              <p>
                CCTV footage is retained on secure, access-controlled on-site storage systems strictly for premises safety, emergency incident review, and institutional security. It is never broadcast publicly or shared with unauthorized entities.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                6. Photography, Video &amp; Campus Media
              </h2>
              <p>
                From time to time, photographs or short videos may be documented during school activities, festivals, celebrations, and annual day events to celebrate children's developmental milestones and share memories with parents.
              </p>
              <p>
                Such documentation is conducted respectfully with parental consent. If any parent or guardian prefers that their child's likeness not be featured in school yearbooks, brochures, or social channels, they may communicate this preference in writing to the school office at any time, and we will immediately honor their request.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                7. Information Sharing &amp; Third Parties
              </h2>
              <p>
                We do not sell, rent, trade, or commercialize personal information under any circumstance. We only share information with trusted service providers under confidentiality agreements when strictly necessary to operate our school systems:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Transactional Notification Infrastructure:</strong> Secure enterprise email servers (Nodemailer / SMTP) for delivering admission notifications to our desk.</li>
                <li><strong>Direct Communication:</strong> Official WhatsApp Business API channels when parents voluntarily choose WhatsApp chat.</li>
                <li><strong>Statutory Authorities:</strong> Law enforcement or emergency health providers if required by law or to protect life and safety.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                8. Data Storage &amp; Retention
              </h2>
              <p>
                Admission inquiry data is retained only for as long as necessary to complete the academic enrollment cycle or answer parent queries. Enrolled student records are securely stored throughout the child's academic journey at Appy Kidz and archived in accordance with Indian educational record-keeping guidelines.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                9. Parental Rights &amp; Choices
              </h2>
              <p>
                Parents and legal guardians retain full rights over their personal information:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Right to Review:</strong> Request a copy of the personal information stored in your child's inquiry or admission file.</li>
                <li><strong>Right to Rectify:</strong> Update incorrect phone numbers, addresses, or medical directives at any time.</li>
                <li><strong>Right to Withdraw / Erasure:</strong> If you do not proceed with enrollment, you may request the deletion of your inquiry details by emailing our admissions desk.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                10. Grievance Officer &amp; Privacy Contact
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or how your family's personal data is handled, please contact our designated coordinator:
              </p>
              <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '12px', padding: '20px', marginTop: '14px' }}>
                <p style={{ margin: '0 0 6px', fontWeight: 700, color: '#1E293B' }}>Admissions &amp; Data Coordinator</p>
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
        href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20have%20a%20question%20regarding%20preschool%20and%20daycare%20admissions."
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
