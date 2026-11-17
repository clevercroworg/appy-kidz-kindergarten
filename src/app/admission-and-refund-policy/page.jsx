'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CreditCard, CheckCircle2, AlertCircle, Calendar, Phone, Mail, HelpCircle, FileText } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AdmissionModal from '../../components/AdmissionModal';
import { WhatsAppIcon } from '../../components/Icons';

export default function AdmissionAndRefundPolicyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" style={{ background: '#F1F5F9', padding: '10px 0', borderBottom: '1px solid #E2E8F0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#64748B' }}>
          <Link href="/" style={{ color: '#0369A1', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: '#1E293B', fontWeight: 600 }}>Admission &amp; Refund Policy</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section style={{ background: 'linear-gradient(135deg, #DCFCE7 0%, #E0F2FE 100%)', padding: '50px 0 40px', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '880px', textAlign: 'center' }}>
          <span className="section-tag" style={{ background: '#DCFCE7', color: '#166534', marginBottom: '14px', display: 'inline-block' }}>
            <CreditCard size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} />
            Fee Transparency &amp; Guidelines
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#0F172A', marginBottom: '14px', lineHeight: 1.25 }}>
            Admission &amp; Refund Policy
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto' }}>
            Transparent guidance on eligibility criteria, enrollment procedures, fee structures, and withdrawal terms for preschool and daycare programs at Appy Kidz Kithaganur.
          </p>
          <div style={{ marginTop: '16px', fontSize: '0.85rem', color: '#64748B' }}>
            Academic Year 2026-27 &bull; Last Updated: October 2026
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ padding: '50px 0 70px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          
          <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '16px', padding: '24px 28px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#166534', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} color="#16A34A" /> Fair &amp; Transparent Admissions
            </h2>
            <p style={{ fontSize: '0.96rem', color: '#14532D', lineHeight: 1.65, margin: 0 }}>
              At Appy Kidz, we maintain a welcoming, non-discriminatory admission policy based on age readiness and developmental suitability. We believe parents should have complete clarity regarding all academic commitments, materials, daycare charges, and cancellation terms before enrolling.
            </p>
          </div>

          <div className="legal-article" style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Section 1 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                1. Age Eligibility &amp; Program Placement
              </h2>
              <p>
                Admissions for the Academic Year 2026-27 are open for early childhood programs based on the following general age benchmarks (as on June 1st of the academic year):
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', margin: '16px 0' }}>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                  <strong style={{ color: '#0284C7', display: 'block', marginBottom: '4px' }}>Playgroup</strong>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>Age: 1.5 to 2.5 Years</span>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                  <strong style={{ color: '#D97706', display: 'block', marginBottom: '4px' }}>Nursery / Pre-KG</strong>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>Age: 2.5 to 3.5 Years</span>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                  <strong style={{ color: '#16A34A', display: 'block', marginBottom: '4px' }}>Junior KG / LKG</strong>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>Age: 3.5 to 4.5 Years</span>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                  <strong style={{ color: '#9333EA', display: 'block', marginBottom: '4px' }}>Senior KG / UKG</strong>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>Age: 4.5 to 5.5 Years</span>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                  <strong style={{ color: '#EA580C', display: 'block', marginBottom: '4px' }}>Daycare Facility</strong>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>Age: 1.5+ Years &bull; 8:30 AM – 6:30 PM</span>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                2. Step-by-Step Admission Procedure
              </h2>
              <ol style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>
                  <strong>Inquiry &amp; Campus Tour:</strong> Parents can submit an online inquiry, call +91 70222 61013, or message on WhatsApp to schedule a walkthrough of our campus at Building No 30, Aryan Springz, Phase 2, Kithaganur.
                </li>
                <li>
                  <strong>Parent-Child Interaction:</strong> An informal, relaxed interaction with our academic coordinator to observe the child's readiness, answer parent questions, and introduce the Montessori and play-way curriculum.
                </li>
                <li>
                  <strong>Application &amp; Documentation:</strong> Submission of the formal admission form along with supporting documents:
                  <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                    <li>Copy of Child's Birth Certificate</li>
                    <li>Passport-size photographs of the child and parents</li>
                    <li>Immunization / Vaccination record copy</li>
                    <li>Address proof of parents/guardian</li>
                  </ul>
                </li>
                <li>
                  <strong>Seat Confirmation:</strong> Admission is formally secured upon payment of the registration fee and relevant term fee instalment, followed by an official receipt and admission kit handover.
                </li>
              </ol>
            </section>

            {/* Section 3 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                3. Fee Structure &amp; Inclusions
              </h2>
              <p>
                The school fee schedule is shared transparently during the campus visit and comprises:
              </p>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>One-Time Admission / Registration Fee:</strong> Covers processing, administrative setup, and student records management.</li>
                <li><strong>Tuition Fee:</strong> Billed term-wise or annually, covering academic instruction, Montessori sensorial activities, physical education, art, and festival celebrations.</li>
                <li><strong>Annual Activity Kit &amp; Learning Materials:</strong> Covers individual student workbooks, craft supplies, theme-based Montessori kits, and school uniform items.</li>
                <li><strong>Daycare Charges (Optional):</strong> Billed monthly or quarterly based on chosen daily hours (half-day or full-day care).</li>
              </ul>
              <p style={{ marginTop: '10px' }}>
                <strong>Accepted Payment Methods:</strong> UPI (Google Pay, PhonePe, Paytm), Net Banking / IMPS / NEFT, Bank Cheque, or Direct Debit. Official stamped receipts are issued for all payments.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                4. Cancellation &amp; Refund Policy
              </h2>
              <p>
                Because school infrastructure, teacher allocation, class size limits, and educational materials are prepared well in advance of batch commencement, the following refund terms apply:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '14px 0' }}>
                <div style={{ background: '#F8FAFC', borderLeft: '4px solid #E11D48', padding: '14px 18px', borderRadius: '4px' }}>
                  <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>
                    Registration &amp; Application Fee:
                  </strong>
                  <span style={{ fontSize: '0.94rem', color: '#475569' }}>
                    The one-time admission/registration processing fee is <strong>strictly non-refundable</strong> under any circumstances once paid, as it covers immediate administrative overheads and seat reservation.
                  </span>
                </div>

                <div style={{ background: '#F8FAFC', borderLeft: '4px solid #D97706', padding: '14px 18px', borderRadius: '4px' }}>
                  <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>
                    Withdrawal Prior to Batch Commencement:
                  </strong>
                  <span style={{ fontSize: '0.94rem', color: '#475569' }}>
                    If a parent requests cancellation in writing at least <strong>15 days prior</strong> to the scheduled academic session start date, tuition fees paid may be refunded after deducting a nominal administrative handling fee.
                  </span>
                </div>

                <div style={{ background: '#F8FAFC', borderLeft: '4px solid #64748B', padding: '14px 18px', borderRadius: '4px' }}>
                  <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>
                    Withdrawal After Session Commencement:
                  </strong>
                  <span style={{ fontSize: '0.94rem', color: '#475569' }}>
                    Once a child attends class or the academic term has commenced, the tuition fee for that ongoing term is <strong>non-refundable</strong>. For subsequent terms, parents must provide a minimum <strong>30 days written notice</strong> of relocation or withdrawal.
                  </span>
                </div>

                <div style={{ background: '#F8FAFC', borderLeft: '4px solid #0284C7', padding: '14px 18px', borderRadius: '4px' }}>
                  <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>
                    Uniform &amp; Educational Activity Kits:
                  </strong>
                  <span style={{ fontSize: '0.94rem', color: '#475569' }}>
                    Fees for learning kits, workbooks, stationery, and uniforms are non-refundable once the physical materials have been unpacked or distributed.
                  </span>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                5. Daycare Withdrawal &amp; Leave Policy
              </h2>
              <ul style={{ paddingLeft: '22px', margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Withdrawal Notice:</strong> Discontinuation of daycare services requires a minimum of <strong>15 days written notice</strong> prior to the start of the next billing cycle.</li>
                <li><strong>Temporary Absences &amp; Vacations:</strong> Monthly daycare charges cannot be prorated or refunded for voluntary leaves, family vacations, or short-term medical absences, as the caregiver seat and staff coverage remain reserved for your child.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                6. Force Majeure &amp; Unforeseen Closures
              </h2>
              <p>
                In the event of unforeseen school closures mandated by government orders, local district health emergencies, extreme weather, or natural calamities (force majeure), the school will make reasonable arrangements to provide remote early learning guidance and compensate missed developmental sessions where feasible. Fees paid for ongoing terms are non-refundable in such emergency circumstances.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px' }}>
                7. Contact Admissions Desk
              </h2>
              <p>
                Our admissions team is available to explain current fee schedules, payment timelines, and seat availability for your child:
              </p>
              <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '12px', padding: '20px', marginTop: '14px' }}>
                <p style={{ margin: '0 0 6px', fontWeight: 700, color: '#1E293B' }}>Appy Kidz Admissions Desk</p>
                <p style={{ margin: '0 0 6px', color: '#475569' }}>Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049</p>
                <p style={{ margin: '0 0 6px' }}>Phone: <a href="tel:+917022261013" style={{ color: '#0284C7', fontWeight: 600 }}>+91 70222 61013</a></p>
                <p style={{ margin: '0 0 6px' }}>Email: <a href="mailto:appykidzbangalore@gmail.com" style={{ color: '#0284C7', fontWeight: 600 }}>appykidzbangalore@gmail.com</a></p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748B' }}>Timings: Monday to Saturday, 8:30 AM to 6:30 PM</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20know%20about%20admissions%20and%20fees."
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
