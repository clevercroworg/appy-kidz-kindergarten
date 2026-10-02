'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, RefreshCw } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function AdmissionModal({ isOpen, onClose, initialProgram = 'Pre School Playgroup' }) {
  const [captchaCode, setCaptchaCode] = useState('AK72');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '',
    program: initialProgram,
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
      alert(`Please enter the matching verification code shown (${captchaCode}).`);
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
          source: 'School Visit Modal',
        }),
      });
    } catch (err) {
      console.warn('Backend email notification notice:', err);
    } finally {
      setIsSubmitting(false);
    }

    // 2. Redirect to dedicated Thank You confirmation page
    onClose();
    window.location.href = '/thank-you';
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="admission-enquiry-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="admission-modal-header">
          <div className="admission-header-left">
            <img
              src="/assets/official/worm-mascot.png"
              alt="Appy Kidz Mascot"
              className="admission-worm-mascot"
            />
            <div>
              <h3 id="modalTitle" className="admission-modal-title">Book a School Visit</h3>
              <p style={{ fontSize: '0.8rem', color: '#64748B', margin: 0 }}>
                Appy Kidz International Pre School &bull; Building No 30, Aryan Springz, Phase 2, Kithaganur
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="admission-modal-close-btn"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {formSubmitted ? (
          <div className="admission-success-box">
            <CheckCircle2 size={48} color="#16A34A" />
            <h4>Thank You! Connecting With Admissions...</h4>
            <p>Opening WhatsApp to confirm your campus visit with our Kithaganur team.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="admission-form-body">
            <div className="admission-input-wrap">
              <input
                type="text"
                name="parentName"
                required
                placeholder="Parent's Name *"
                value={formData.parentName}
                onChange={handleFormChange}
                className="admission-input-styled"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div className="admission-input-wrap">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="admission-input-styled"
                />
              </div>
              <div className="admission-input-wrap">
                <input
                  type="text"
                  name="childAge"
                  placeholder="Child's Age (e.g. 2.5 yrs)"
                  value={formData.childAge}
                  onChange={handleFormChange}
                  className="admission-input-styled"
                />
              </div>
            </div>

            <div className="admission-input-wrap">
              <input
                type="email"
                name="email"
                placeholder="Email Address (Optional)"
                value={formData.email}
                onChange={handleFormChange}
                className="admission-input-styled"
              />
            </div>

            <div className="admission-select-block">
              <label className="admission-select-label">Programme Interested In</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleFormChange}
                className="admission-select-styled"
              >
                <option value="Playgroup (1.5 - 2.5 yrs)">Playgroup (1.5 - 2.5 yrs)</option>
                <option value="Nursery / Pre-KG (2.5 - 3.5 yrs)">Nursery / Pre-KG (2.5 - 3.5 yrs)</option>
                <option value="Junior KG (3.5 - 4.5 yrs)">Junior KG (3.5 - 4.5 yrs)</option>
                <option value="Senior KG (4.5 - 5.5 yrs)">Senior KG (4.5 - 5.5 yrs)</option>
                <option value="Daycare in Kithaganur">Daycare in Kithaganur</option>
                <option value="Combined Preschool & Daycare">Combined Preschool & Daycare</option>
              </select>
            </div>

            <div className="admission-select-block">
              <label className="admission-select-label">Preferred Visit Window</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleFormChange}
                className="admission-select-styled"
              >
                <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                <option value="Afternoon (1:30 PM - 3:30 PM)">Afternoon (1:30 PM - 3:30 PM)</option>
                <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                <option value="Saturday Visit">Saturday Visit (Morning)</option>
              </select>
            </div>

            <div className="admission-input-wrap">
              <textarea
                name="message"
                rows={2}
                placeholder="Any specific questions (e.g. timings, transport from TC Palya / Battarahalli)?"
                value={formData.message}
                onChange={handleFormChange}
                className="admission-textarea-styled"
              />
            </div>

            {/* Captcha Verification */}
            <div className="admission-captcha-row">
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
                  title="Refresh code"
                  aria-label="Refresh Captcha"
                >
                  <RefreshCw size={14} />
                </button>
              </div>
            </div>

            {/* Privacy notice complying with Developer Brief Section 10 */}
            <p style={{ fontSize: '0.72rem', color: '#64748B', margin: '4px 0 8px', lineHeight: 1.4 }}>
              🔒 <strong>Privacy Notice:</strong> Your information is kept strictly confidential and used solely to arrange your campus walkthrough and provide admission details.
            </p>

            <div className="admission-submit-wrap">
              <button
                type="submit"
                className="admission-btn-submit"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Sending Request...' : 'Confirm & Book School Visit'}
              </button>
            </div>

            <div className="admission-wa-direct-row">
              <a
                href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20enquire%20about%20preschool%20and%20daycare%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="admission-wa-direct-link"
              >
                <WhatsAppIcon size={16} /> Direct WhatsApp Enquiry (+91 70222 61013)
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
