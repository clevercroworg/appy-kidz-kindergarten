'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Heart,
  Baby,
  BookOpen,
  GraduationCap,
  Users,
  CheckCircle2,
  X,
  ChevronRight,
  ExternalLink,
  ChevronLeft,
  Star,
  Check
} from 'lucide-react';

import { WhatsAppIcon } from '../components/Icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdmissionModal from '../components/AdmissionModal';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAwardPhoto, setActiveAwardPhoto] = useState('stage');
  const [lightboxImg, setLightboxImg] = useState(null);
  
  // Hero Banner Slider State
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isBannerPaused, setIsBannerPaused] = useState(false);

  // Mobile Carousel state for Events Gallery
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  // Testimonials Showcase State (10 Authentic Reviews)
  const [activeTestiIndex, setActiveTestiIndex] = useState(0);
  const [isTestiPaused, setIsTestiPaused] = useState(false);

  // 4 Regenerated Themed Full-Width Banners
  const heroBanners = [
    {
      id: 1,
      tag: '🎓 Admissions Open 2026-27',
      shortTitle: 'Admissions 2026-27',
      imageSrc: '/assets/banners/banner-1-admissions-open.jpg?v=20261002',
      imageAlt: 'Appy Kidz International Pre School Admissions Open 2026-27 Banner',
      title: 'Admissions Open for Academic Year 2026-27',
      subtitle: 'Playgroup • Nursery Pre-KG • Junior KG • Senior KG • Daycare in Kithaganur, Bangalore'
    },
    {
      id: 2,
      tag: '⭐ 17+ Years Network Legacy',
      shortTitle: '17+ Years Legacy',
      imageSrc: '/assets/banners/banner-2-talent-excellence.jpg?v=20261002',
      imageAlt: "Appy Kidz 17+ Years of Educational Excellence Nurturing Every Child's Talent Banner",
      title: "17+ Years of Educational Excellence",
      subtitle: "Nurturing Every Child's Talent, Creative Arts, Stage Confidence & Joyful Discovery"
    },
    {
      id: 3,
      tag: '🐛 Safe Campus & Mascot',
      shortTitle: 'Safe Campus',
      imageSrc: '/assets/banners/banner-3-safe-mascot.jpg?v=20261002',
      imageAlt: 'Appy Kidz Safe Loving Campus and Official Mascot Banner',
      title: 'A Safe, Loving & Great Place to Grow',
      subtitle: 'Child Proofed Campus • Official Trademark Mascot Appy The Bookworm'
    },
    {
      id: 4,
      tag: '🏆 Best Pre School Startup',
      shortTitle: 'Award Winner',
      imageSrc: '/assets/banners/banner-4-awards.jpg?v=20261002',
      imageAlt: 'Appy Kidz Award-Winning Preschool Indian School Awards Banner',
      title: 'Award-Winning Preschool Excellence',
      subtitle: 'Honored as Best Pre School Startup at 30th Edition Indian School Awards Bangalore'
    }
  ];

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  const goToBanner = (idx) => {
    setCurrentBanner(idx);
  };

  // Auto rotate hero banner every 3.5 seconds unless paused
  useEffect(() => {
    if (isBannerPaused) return;
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isBannerPaused, heroBanners.length]);

  const awardPhotos = {
    stage: {
      src: '/assets/award-stage.jpg',
      label: 'Ceremony Stage',
      desc: 'Appy Kidz leadership receiving the honor on stage at the prestigious 30th Edition Indian School Awards, Bangalore Chapter.'
    },
    trophy: {
      src: '/assets/award-trophy.jpg',
      label: 'Trophy Plaque',
      desc: 'Official "Best Pre School Startup" Trophy Plaque presented to Appy Kidz at the 30th Edition Indian School Awards.'
    },
    certificate: {
      src: '/assets/award-certificate.jpg',
      label: 'Official Certificate',
      desc: 'Authenticated Indian School Awards Certificate honoring Appy Kidz as the Best Pre School Startup.'
    },
    full: {
      src: '/assets/award-full.jpg',
      label: 'Original Archive',
      desc: 'Full photographic asset of the trophy and certificate presentation.'
    }
  };

  // Custom vector icons for programs
  const PlaygroupIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pgBoyGrad" x1="12" y1="20" x2="30" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="pgGirlGrad" x1="34" y1="20" x2="52" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
        <linearGradient id="pgStarGrad" x1="26" y1="4" x2="38" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <circle cx="21" cy="20" r="6" fill="#FBBF24" />
      <path d="M21 27C16 27 12 31 12 36V48H22L21 38L24 48H30V36C30 31 26 27 21 27Z" fill="url(#pgBoyGrad)" />
      <circle cx="43" cy="20" r="6" fill="#FBBF24" />
      <path d="M43 27C38 27 34 31 34 36L31 48H41L43 38L45 48H55L52 36C52 31 48 27 43 27Z" fill="url(#pgGirlGrad)" />
      <path d="M32 4L34.5 11.5L42 12L36 17L38 24L32 20L26 24L28 17L22 12L29.5 11.5L32 4Z" fill="url(#pgStarGrad)" />
    </svg>
  );

  const NurseryIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nursGirlGrad" x1="18" y1="22" x2="38" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="22" r="7" fill="#FBBF24" />
      <path d="M28 30C21 30 17 34 16 40L14 54H42L40 40C39 34 35 30 28 30Z" fill="url(#nursGirlGrad)" />
      <circle cx="48" cy="18" r="6" fill="#3B82F6" />
      <circle cx="51" cy="16" r="1.5" fill="#FFFFFF" />
      <rect x="42" y="32" width="14" height="18" rx="2" fill="#F59E0B" />
      <rect x="45" y="35" width="8" height="2.5" rx="1" fill="#FFFFFF" />
    </svg>
  );

  const JrKgIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jrBoyGrad" x1="16" y1="20" x2="48" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="20" r="7" fill="#FBBF24" />
      <path d="M32 28C24 28 20 32 19 38L18 54H46L45 38C44 32 40 28 32 28Z" fill="url(#jrBoyGrad)" />
      <path d="M20 40L32 36L44 40L32 44L20 40Z" fill="#FDE047" />
    </svg>
  );

  const SrKgIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="srCapGrad" x1="18" y1="4" x2="46" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="srPeerCenter" x1="24" y1="22" x2="40" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="25" r="6" fill="#FBBF24" />
      <polygon points="32,10 16,16 32,22 48,16" fill="url(#srCapGrad)" />
      <path d="M32 32C25 32 21 36 20 41L21 53H43L44 41C43 36 39 32 32 32Z" fill="url(#srPeerCenter)" />
    </svg>
  );

  const DaycareIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dcCaregiverGrad" x1="16" y1="20" x2="34" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>
        <linearGradient id="dcToddlerGrad" x1="36" y1="30" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="22" r="5.5" fill="#FBBF24" />
      <path d="M24 29C20 29 18 31 17 34L13 54H33L29 34C28 31 27 29 24 29Z" fill="url(#dcCaregiverGrad)" />
      <circle cx="43" cy="31" r="5" fill="#FBBF24" />
      <path d="M43 37C39 37 37 39 37 42V51C37 52.5 38.5 53 40 53H46C47.5 53 49 52.5 49 51V42C49 39 47 37 43 37Z" fill="url(#dcToddlerGrad)" />
    </svg>
  );

  const events = [
    {
      title: 'The Thirsty Crow',
      category: 'Storytelling & Language',
      badgeClass: 'badge-story',
      img: '/assets/official/event-thirsty-crow.jpg',
      desc: 'Classic moral storytelling using interactive puppet theatre and clay pitcher props to spark imagination and language fluency.'
    },
    {
      title: 'Montessori Knob Cylinder',
      category: 'Sensory & Motor Precision',
      badgeClass: 'badge-montessori',
      img: '/assets/official/event-knob-cylinder.jpg',
      desc: 'Developing fine motor pincher grips, dimensional discernment (height vs diameter), and self-correction through authentic apparatus.'
    },
    {
      title: 'Vinayagar Chaturthi',
      category: 'Cultural Celebrations',
      badgeClass: 'badge-culture',
      img: '/assets/official/event-vinayagar.jpg',
      desc: 'Joyful festival immersion celebrating diversity, traditional rangoli patterns, teamwork, and festive music appreciation.'
    },
    {
      title: 'Nature Field Trip',
      category: 'Outdoor Discovery',
      badgeClass: 'badge-outdoor',
      img: '/assets/official/event-field-trip.jpg',
      desc: 'Guided farm & botanical garden excursions where children connect with nature, observe flora and fauna, and build eco-awareness.'
    },
    {
      title: 'Bathing Activity Playgroup',
      category: 'Sensory Water Fun',
      badgeClass: 'badge-sensory',
      img: '/assets/official/event-bathing.jpg',
      desc: 'Delightful splash and water sensory play teaching basic personal hygiene, bubbles observation, water pouring, and coordination.'
    },
    {
      title: 'Rolling the Mat Pre-KG',
      category: 'Montessori Order & Grace',
      badgeClass: 'badge-life',
      img: '/assets/official/event-rolling-mat.jpg',
      desc: 'Inculcating habits of mindfulness, care for equipment, physical equilibrium, and respecting personal work spaces.'
    }
  ];

  const safetyItems = [
    {
      img: '/assets/safety-stairs-netting-1.jpg',
      badge: 'Child Proofed',
      title: 'Floor-to-Ceiling Safety Nets',
      desc: 'Protective netting enclosing stairwells and balconies to ensure security for energetic young learners.'
    },
    {
      img: '/assets/hygiene-washroom.jpg',
      badge: 'Sanitary Standards',
      title: 'Child-Height Washrooms',
      desc: 'Ergonomic mini wash basins and child-sized sanitized toilets fostering independence, hygiene, and potty training confidence.'
    },
    {
      img: '/assets/play-area-foam-mats.jpg',
      badge: 'Impact Absorption',
      title: 'High-Density Foam Play Surfaces',
      desc: 'High-density EVA interlocking safety mats and soft play corners that cushion falls during active gross motor play.'
    },
    {
      img: '/assets/classroom-activity-tables.jpg',
      badge: 'Ergonomic Design',
      title: 'Round Non-Toxic Activity Tables',
      desc: 'Rounded corner furniture with zero sharp edges, non-toxic lead-free paint finishes, and bright daylight ventilation.'
    }
  ];

  const parentTestimonials = [
    {
      id: 'sai-thanvikha',
      studentName: 'Sai Thanvikha R.',
      grade: 'Sr. KG',
      parentRole: 'Parent of Sai Thanvikha',
      image: '/assets/testimonials/Sai-Thanvikha_Sr.KG_.jpg',
      quote: "One of the best preschools! At just 5 years old, my daughter is reading full sentences fluently. The teachers make mathematical and practical concepts easy to understand. Highly recommended!"
    },
    {
      id: 'ashwin-i',
      studentName: 'Ashwin I.',
      grade: 'Graduate',
      parentRole: 'Father of Ashwin I.',
      image: '/assets/testimonials/ASHWIN-I.jpg',
      quote: "Appy Kidz has been vital in moulding my boy to be his best. They don’t just focus on academics, but nurture extra-curriculars, stage confidence, and strong discipline."
    },
    {
      id: 'shananthika',
      studentName: 'Shananthika K. S.',
      grade: 'Since 2015',
      parentRole: 'Mother of 3 Enrolled Siblings',
      image: '/assets/testimonials/SHANANTHIKA-K-S.jpg',
      quote: "My two daughters studied here and now my son is continuing — our bonding dates back to 2015! A wonderful preschool giving equal importance to joyful studies and activities."
    },
    {
      id: 'g-kathiran',
      studentName: 'G. Kathiran',
      grade: 'Kindergarten',
      parentRole: 'Parent of Kathiran (2+ Yrs)',
      image: '/assets/testimonials/G-Kathiran.png',
      quote: "Been associated with Appy Kidz for 2+ years and the journey has been fantastic. The faculty and staff treat every child with genuine patience, warmth, and individualized care."
    },
    {
      id: 'nushaan',
      studentName: 'Nushaan Konduru',
      grade: 'Pre-KG',
      parentRole: 'Parents of Nushaan',
      image: '/assets/testimonials/NUSHAAN-KONDURU.jpg',
      quote: "When Nushaan joined at age 3, he could barely speak words. With the patient guidance and speech activities from his teachers, he made a remarkable breakthrough and now speaks joyfully!"
    },
    {
      id: 'd-shaanvi',
      studentName: 'D. Shaanvi',
      grade: 'Jr. KG',
      parentRole: 'Parent of D. Shaanvi',
      image: '/assets/testimonials/D.-Shaanvi.jpg',
      quote: "Appy Kidz is an excellent school for KG students. Their teaching methodology is superb, and the teachers are wonderfully friendly and attentive to each child's learning pace."
    },
    {
      id: 'rohitvel',
      studentName: 'Rohitvel',
      grade: 'Jr. KG',
      parentRole: 'Mother of Rohitvel',
      image: '/assets/testimonials/ROHITVEL.jpg',
      quote: "My son Rohit joined here and we noticed wonderful positive changes immediately. The staff are extremely good and organize great celebrations that children love!"
    },
    {
      id: 'b-rithvik',
      studentName: 'B. Rithvik',
      grade: 'Playgroup',
      parentRole: 'Parents of B. Rithvik',
      image: '/assets/testimonials/B-RITHVIK.jpg',
      quote: "Excellent quality education, very disciplined, and truly focused on the child's future. Super staff — deeply caring, professional, and well organized!"
    },
    {
      id: 'nr-kailash',
      studentName: 'N. R. Kailash',
      grade: 'Kindergarten',
      parentRole: 'Father of N. R. Kailash',
      image: '/assets/testimonials/N.R.KAILASH-scaled.jpg',
      quote: "I am very happy that I chose Appy Kidz for my son. The playful, creative activities make children excited to attend school and learn effortlessly every day."
    },
    {
      id: 'tharun-karthik',
      studentName: 'Tharun Karthik Kadari',
      grade: 'Sr. KG',
      parentRole: 'Parents of Tharun Karthik',
      image: '/assets/testimonials/KADARI-THARUN-KARTHIK.jpg',
      quote: "We are fortunate to have our child at Appy Kidz. The teachers make every session engaging and interactive. The dedication put in by the team is truly exceptional!"
    }
  ];

  const avatarScrollerRef = useRef(null);

  useEffect(() => {
    if (isTestiPaused) return;
    const timer = setInterval(() => {
      setActiveTestiIndex((prev) => (prev + 1) % parentTestimonials.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [isTestiPaused, parentTestimonials.length]);

  useEffect(() => {
    const scroller = avatarScrollerRef.current;
    if (scroller) {
      const activeEl = scroller.querySelector('.testi-avatar-chip.active');
      if (activeEl) {
        const scrollerRect = scroller.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        const targetScrollLeft = scroller.scrollLeft + (activeRect.left - scrollerRect.left) - (scroller.clientWidth / 2) + (activeEl.clientWidth / 2);
        scroller.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [activeTestiIndex]);

  const nextTesti = () => {
    setActiveTestiIndex((prev) => (prev + 1) % parentTestimonials.length);
  };

  const prevTesti = () => {
    setActiveTestiIndex((prev) => (prev - 1 + parentTestimonials.length) % parentTestimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % events.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [events.length]);

  return (
    <>
      {/* 1. SHARED GLOBAL NAVBAR */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* 2. HERO BANNER SLIDER & BRIEF-COMPLIANT HERO INTRO */}
      <section
        className="fullwidth-hero-section"
        id="hero"
        onMouseEnter={() => setIsBannerPaused(true)}
        onMouseLeave={() => setIsBannerPaused(false)}
      >
        {/* Full-Width Slider Stage (Aspect Ratio: 1920 / 600) */}
        <div className="fullwidth-slider-stage">
          {heroBanners.map((banner, idx) => (
            <div
              key={banner.id}
              className={`fullwidth-banner-slide ${idx === currentBanner ? 'active' : ''}`}
              onClick={() => setIsModalOpen(true)}
              title="Click to enquire about admissions"
            >
              <img
                src={banner.imageSrc}
                alt={banner.imageAlt}
                className="fullwidth-banner-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Left / Right Arrow Controls */}
          <button
            onClick={(e) => { e.stopPropagation(); prevBanner(); }}
            className="fullwidth-slider-arrow arrow-left"
            aria-label="Previous Slide"
            title="Previous Banner"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextBanner(); }}
            className="fullwidth-slider-arrow arrow-right"
            aria-label="Next Slide"
            title="Next Banner"
          >
            <ChevronRight size={22} />
          </button>

          {/* Bottom Indicators on Banner */}
          <div className="fullwidth-banner-dots" aria-label="Slide Indicators">
            {heroBanners.map((b, idx) => (
              <button
                key={b.id}
                onClick={(e) => { e.stopPropagation(); goToBanner(idx); }}
                className={`fullwidth-slider-dot ${idx === currentBanner ? 'active' : ''}`}
                aria-label={`Slide ${idx + 1}: ${b.title}`}
                title={b.title}
              />
            ))}
          </div>
        </div>

        {/* Section 3: Exact Brief Hero Heading, Supporting Line & Intro */}
        <div className="hero-brief-box">
          <div className="hero-brief-container">
            <span className="section-tag" style={{ background: '#DCFCE7', color: '#166534', marginBottom: '10px' }}>
              Admissions Open 2026-27 &bull; Phase 2, Aduru, Kithaganur
            </span>
            <h1 className="hero-h1-heading">Preschool, Nursery &amp; Daycare in Kithaganur</h1>
            <p className="hero-h1-tagline">Little steps. Happy discoveries. A confident start.</p>
            <p className="hero-h1-desc">
              At Appy Kidz International Pre School &amp; Day Care, children learn through play, stories, creative activities and everyday discovery. Explore Playgroup, Nursery, Junior KG, Senior KG and Daycare at our campus in Phase 2, Aduru, Kithaganur, Bengaluru.
            </p>
            <div className="hero-h1-actions">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
                <Calendar size={18} /> Book a School Visit
              </button>
              <a
                href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20enquire%20about%20preschool,%20nursery%20and%20daycare%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-wa"
              >
                <WhatsAppIcon size={18} /> Enquire on WhatsApp
              </a>
              <a href="tel:+917022261013" className="btn-call-hero">
                <Phone size={16} /> +91 70222 61013
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A HAPPY BEGINNING AT APPY KIDZ KITHAGANUR (Section 3 Copy) */}
      <section className="about-compact-section" id="about">
        <div className="container">
          <div className="about-compact-grid">
            <div className="about-compact-content">
              <div className="about-compact-badge">
                <Sparkles size={14} style={{ color: '#D97706' }} />
                <span>Welcome to Appy Kidz Kithaganur</span>
              </div>
              <h2 className="about-compact-title">
                A Happy Beginning at Appy Kidz Kithaganur
              </h2>
              <p className="about-compact-lead">
                Choosing your child's first preschool is an important decision. You want to understand how your child will learn, how they will settle in and who will support them each day.
              </p>
              <p className="about-compact-sub">
                Appy Kidz brings early learning and childcare together at our Kithaganur campus. Our Montessori and play-way approach introduces children to language, numbers, movement and practical activities in an engaging way. Children have opportunities to explore, ask questions, practise new skills and build friendships.
              </p>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Visit the campus, meet our team and find out which programme suits your child's age and stage of development.
              </p>
              
              <div className="about-compact-highlights">
                <div className="about-highlight-pill">
                  <div className="about-pill-icon-box icon-box-trophy">
                    <Star size={24} color="#D97706" />
                  </div>
                  <div className="about-pill-text">
                    <strong>17+ Years</strong>
                    <span>Network Educational Legacy</span>
                  </div>
                </div>
                <div className="about-highlight-pill">
                  <div className="about-pill-icon-box icon-box-brain">
                    <Sparkles size={24} color="#DB2777" />
                  </div>
                  <div className="about-pill-text">
                    <strong>Play-Way</strong>
                    <span>Montessori Apparatus</span>
                  </div>
                </div>
                <div className="about-highlight-pill">
                  <div className="about-pill-icon-box icon-box-safe">
                    <CheckCircle2 size={24} color="#059669" />
                  </div>
                  <div className="about-pill-text">
                    <strong>Child Proofed</strong>
                    <span>Campus Safety Protocols</span>
                  </div>
                </div>
                <div className="about-highlight-pill">
                  <div className="about-pill-icon-box icon-box-award">
                    <GraduationCap size={24} color="#B45309" />
                  </div>
                  <div className="about-pill-text">
                    <strong>Recognized</strong>
                    <span>Indian School Awards Winner</span>
                  </div>
                </div>
              </div>

              <div className="about-compact-actions">
                <button onClick={() => setIsModalOpen(true)} className="btn-about-visit">
                  <Calendar size={15} /> Book a School Visit
                </button>
                <a href="#programs" className="btn-about-programs">
                  Explore Programmes <ChevronRight size={15} />
                </a>
              </div>
            </div>

            <div className="about-compact-visual">
              <div className="about-visual-card">
                <img
                  src="/assets/classroom-activity-tables.jpg"
                  alt="Appy Kidz Kithaganur Classroom and Activity Center"
                  className="about-main-img"
                  onError={(e) => { e.target.src = '/assets/classroom-green-desks.jpg'; }}
                />
                <div className="about-floating-card">
                  <span className="about-floating-number">Aduru</span>
                  <span className="about-floating-label">Kithaganur, Bengaluru</span>
                </div>
                <div className="about-floating-mascot">
                  <img
                    src="/assets/official/worm-mascot.png"
                    alt="Appy Kidz Bookworm Mascot"
                    className="about-mascot-thumb"
                  />
                  <div className="about-mascot-speech">
                    <span>"Where Happy Kids Learn!"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRESCHOOL AND DAYCARE PROGRAMMES (Section 3 Copy & Crawlable Routes) */}
      <section className="programs-section" id="programs">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Play-Way &amp; Montessori Learning</span>
            <h2 className="section-title-large">Preschool and Daycare Programmes</h2>
            <p className="section-subtitle-text">
              Age-appropriate programmes structured for joyful discovery, foundational literacy, numeracy, and gentle social development.
            </p>
          </div>

          <div className="programs-icon-grid">
            {/* Playgroup */}
            <div className="program-icon-card program-card-star">
              <div className="program-circle-icon program-circle-playgroup icon-shape-star">
                <PlaygroupIcon />
              </div>
              <h3 className="program-card-name">Playgroup</h3>
              <span className="program-age-pill age-playgroup">1.5 – 2.5 years</span>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: '10px 0 16px' }}>
                A gentle introduction to learning beyond home. Stories, songs, sensory exploration and guided play help children become familiar with a classroom routine and spending time with other children.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="program-link-btn"
              >
                Book Visit <ChevronRight size={14} />
              </button>
            </div>

            {/* Nursery / Pre-KG */}
            <div className="program-icon-card program-card-arch">
              <div className="program-circle-icon program-circle-nursery icon-shape-arch">
                <NurseryIcon />
              </div>
              <h3 className="program-card-name">Nursery / Pre-KG</h3>
              <span className="program-age-pill age-nursery">2.5 – 3.5 years</span>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: '10px 0 16px' }}>
                Our nursery programme introduces early language, counting, colours, shapes and creative expression through hands-on activities. Children practise listening, participating and doing small tasks with growing independence.
              </p>
              <Link
                href="/nursery-school-in-kithaganur"
                className="program-link-btn"
                style={{ textDecoration: 'none' }}
              >
                Explore Nursery in Kithaganur <ChevronRight size={14} />
              </Link>
            </div>

            {/* Junior KG */}
            <div className="program-icon-card program-card-round">
              <div className="program-circle-icon program-circle-jrkg icon-shape-round">
                <JrKgIcon />
              </div>
              <h3 className="program-card-name">Junior KG</h3>
              <span className="program-age-pill age-jrkg">3.5 – 4.5 years</span>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: '10px 0 16px' }}>
                Junior KG builds on early learning with phonics, number activities, storytelling and practical tasks. Children develop communication, coordination and confidence as they take part in classroom activities.
              </p>
              <Link
                href="/preschool-in-kithaganur"
                className="program-link-btn"
                style={{ textDecoration: 'none' }}
              >
                Explore Our Preschool Programme <ChevronRight size={14} />
              </Link>
            </div>

            {/* Senior KG */}
            <div className="program-icon-card program-card-crest">
              <div className="program-circle-icon program-circle-srkg icon-shape-crest">
                <SrKgIcon />
              </div>
              <h3 className="program-card-name">Senior KG</h3>
              <span className="program-age-pill age-srkg">4.5 – 5.5 years</span>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: '10px 0 16px' }}>
                Senior KG helps children prepare for their next stage of schooling. Activities support early reading, writing readiness, number understanding and the everyday skills needed to participate in a classroom.
              </p>
              <Link
                href="/preschool-in-kithaganur"
                className="program-link-btn"
                style={{ textDecoration: 'none' }}
              >
                Explore Our Preschool Programme <ChevronRight size={14} />
              </Link>
            </div>

            {/* Daycare */}
            <div className="program-icon-card program-card-heart">
              <div className="program-circle-icon program-circle-daycare icon-shape-heart">
                <DaycareIcon />
              </div>
              <h3 className="program-card-name">Daycare</h3>
              <span className="program-age-pill age-daycare">1 – 8 years</span>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: '10px 0 16px' }}>
                Families looking for daycare in Kithaganur can contact Appy Kidz to discuss childcare availability, age eligibility and daily arrangements. Speak with our team about your preferred schedule and how daycare can fit your child's routine.
              </p>
              <Link
                href="/daycare-in-kithaganur"
                className="program-link-btn"
                style={{ textDecoration: 'none' }}
              >
                Explore Daycare in Kithaganur <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Trademark Mascot Brand Feature Card */}
          <div className="mascot-brand-banner">
            <div className="mascot-avatar-wrap">
              <img
                src="/assets/official/worm-mascot.png"
                alt="Appy Kidz Official Mascot"
                className="mascot-banner-img"
              />
              <span className="mascot-avatar-tag">Official Trademark</span>
            </div>
            <div className="mascot-banner-text">
              <span className="mascot-banner-tagline">REGISTERED TRADEMARK BRAND MASCOT</span>
              <h3 className="mascot-banner-title">Guiding Curious Little Explorers Since 2008</h3>
              <p className="mascot-banner-desc">
                Meet <strong>Appy the Bookworm</strong>, our cheerful trademark ambassador! Appy brings stories to life, inspires early phonics &amp; numeracy, and reminds every toddler that learning is an exciting daily discovery.
              </p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="mascot-banner-cta">
              Meet Appy on Campus <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. LEARNING THROUGH PLAY, STORIES AND DISCOVERY (Section 3 Copy & Events Gallery) */}
      <section className="events-section" id="gallery">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Engaging Experiences</span>
            <h2 className="section-title-large">Learning Through Play, Stories and Discovery</h2>
            <p className="section-subtitle-text" style={{ maxWidth: '800px', margin: '0 auto 12px' }}>
              Learning becomes meaningful when children take part. At Appy Kidz, early learning includes storytelling, rhymes, art, Montessori activities and practical exploration.
            </p>
            <p style={{ color: '#64748B', fontSize: '0.96rem', maxWidth: '780px', margin: '0 auto', lineHeight: 1.6 }}>
              These experiences give children opportunities to build vocabulary, practise coordination, notice patterns, express ideas and work alongside others. Our approach encourages curiosity while helping children become familiar with simple routines and classroom responsibilities.
            </p>
          </div>

          {/* Desktop 3-Column Grid */}
          <div className="events-desktop-grid">
            {events.map((ev, idx) => (
              <div
                key={idx}
                className="event-card"
                onClick={() => setLightboxImg(ev.img)}
                title="Hover for details • Click to expand"
              >
                <div className="event-card-default-badge">
                  <span className={`event-badge ${ev.badgeClass}`} style={{ marginBottom: 0 }}>
                    {ev.category}
                  </span>
                </div>
                <img src={ev.img} alt={ev.title} className="event-card-full-img" />
                <div className="event-card-overlay">
                  <span className={`event-badge ${ev.badgeClass}`}>{ev.category}</span>
                  <h3 className="event-card-title">{ev.title}</h3>
                  <p className="event-card-desc">{ev.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#FEF08A', fontWeight: 800, marginTop: '4px' }}>
                    <span>Click to View Full Size</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Auto-Carousel */}
          <div className="events-mobile-carousel">
            <div
              className="carousel-slide-card"
              onClick={() => setLightboxImg(events[activeEventIndex].img)}
              title="Tap to expand"
            >
              <img
                src={events[activeEventIndex].img}
                alt={events[activeEventIndex].title}
                className="event-card-full-img"
              />
            </div>
            <div className="carousel-info-below">
              <span className={`event-badge ${events[activeEventIndex].badgeClass}`}>
                {events[activeEventIndex].category}
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#1E293B', margin: '6px 0' }}>
                {events[activeEventIndex].title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5 }}>
                {events[activeEventIndex].desc}
              </p>
              <button
                onClick={() => setLightboxImg(events[activeEventIndex].img)}
                style={{ marginTop: '8px', fontSize: '0.82rem', fontWeight: 800, color: '#0284C7' }}
              >
                Tap to Expand Poster ↗
              </button>
            </div>
            <div className="carousel-dots">
              {events.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveEventIndex(i)}
                  className={`carousel-dot ${activeEventIndex === i ? 'active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISIT OUR PRESCHOOL IN ADURU, KITHAGANUR (Section 3 Copy & Map) */}
      <section className="visit-campus-section" style={{ padding: '60px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <span className="section-tag" style={{ background: '#DCFCE7', color: '#166534' }}>
              Campus Location &amp; Directions
            </span>
            <h2 style={{ fontSize: '2.1rem', color: '#1E293B', margin: '10px 0 14px' }}>
              Visit Our Preschool in Aduru, Kithaganur
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '12px' }}>
              Our Bengaluru campus is located in Phase 2, Aduru, Kithaganur. If you live in Kithaganur or are considering a preschool near TC Palya, Battarahalli or KR Puram, arrange a visit to see whether the location and programme suit your family.
            </p>
            <p style={{ color: '#64748B', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '24px' }}>
              A school visit gives you time to explore the classrooms, meet the team and ask about nursery admission, kindergarten programmes or daycare. Use the map below for directions to the Kithaganur campus.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://maps.google.com/?q=Appy+Kidz+International+Pre+School+Kithaganur+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-hero"
                style={{ background: '#0284C7', borderColor: '#38BDF8' }}
              >
                <MapPin size={18} /> Get Directions
              </a>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
                <Calendar size={18} /> Book a School Visit
              </button>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', border: '1px solid #E2E8F0', height: '360px', background: '#E2E8F0' }}>
            <iframe
              title="Appy Kidz Kithaganur Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6853606684784!2d77.7265882!3d13.044146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11d4d3faefb3%3A0xc3faeb8a3791a8ee!2sAppy%20Kidz%20International%20Pre%20School%20%26%20Day%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 7. WHAT TO DISCUSS DURING YOUR SCHOOL VISIT (Section 3 Copy) */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 30px' }}>
            <span className="section-tag" style={{ background: '#FEF08A', color: '#854D0E' }}>
              School Visit Checklist
            </span>
            <h2 style={{ fontSize: '2rem', color: '#1E293B', margin: '8px 0 12px' }}>
              What to Discuss During Your School Visit
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.98rem' }}>
              Here are the key points to explore with our academic team when you tour our Aduru, Kithaganur campus:
            </p>
          </div>

          <div className="visit-topics-grid">
            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <Check size={16} strokeWidth={3} />
              </div>
              <div className="visit-topic-text">
                Which programme suits your child's age and readiness.
              </div>
            </div>

            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <Check size={16} strokeWidth={3} />
              </div>
              <div className="visit-topic-text">
                How children are introduced to the classroom routine.
              </div>
            </div>

            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <Check size={16} strokeWidth={3} />
              </div>
              <div className="visit-topic-text">
                Learning activities and communication with parents.
              </div>
            </div>

            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <Check size={16} strokeWidth={3} />
              </div>
              <div className="visit-topic-text">
                Current class timings and daycare availability.
              </div>
            </div>

            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <Check size={16} strokeWidth={3} />
              </div>
              <div className="visit-topic-text">
                Fees, documents and admission steps.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRESCHOOL ADMISSIONS IN KITHAGANUR (Section 3 Copy & Conversion Box) */}
      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)', borderTop: '1px solid #BBF7D0', borderBottom: '1px solid #BBF7D0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.1rem', color: '#14532D', marginBottom: '14px' }}>
              Preschool Admissions in Kithaganur
            </h2>
            <p style={{ color: '#166534', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '24px' }}>
              Start by sharing your child's age and the programme you are interested in. Our team will explain current availability and help you arrange a campus visit. After your visit, you can review programme details, fees and the admission process before deciding.
            </p>
            
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', boxShadow: '0 8px 25px rgba(22, 101, 52, 0.1)', border: '1.5px solid #86EFAC' }}>
              <h3 style={{ fontSize: '1.45rem', color: '#1E293B', marginBottom: '8px' }}>
                Find the Right First Step for Your Child
              </h3>
              <p style={{ color: '#475569', fontSize: '0.96rem', marginBottom: '20px' }}>
                Speak with Appy Kidz Kithaganur about preschool, nursery or daycare. Call +91 70222 61013 or book a school visit.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
                  <Calendar size={18} /> Book a School Visit
                </button>
                <a
                  href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20enquire%20about%20preschool,%20nursery%20and%20daycare%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-wa"
                >
                  <WhatsAppIcon size={18} /> Enquire on WhatsApp
                </a>
                <a href="tel:+917022261013" className="btn-call-hero">
                  <Phone size={16} /> Call +91 70222 61013
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROUD MOMENTS (Accurate & Evidence-Based Award Details) */}
      <section className="proud-moments-section" id="proud-moments">
        <div className="container">
          <div className="proud-grid">
            <div className="proud-photo-side">
              <div className="award-main-frame">
                <img
                  src={awardPhotos[activeAwardPhoto].src}
                  alt={awardPhotos[activeAwardPhoto].label}
                  className="award-main-img"
                  onClick={() => setLightboxImg(awardPhotos[activeAwardPhoto].src)}
                  title="Click to view high-resolution image"
                />
              </div>

              <div className="award-thumbnail-bar">
                {Object.keys(awardPhotos).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveAwardPhoto(key)}
                    className={`award-thumb-btn ${activeAwardPhoto === key ? 'active' : ''}`}
                  >
                    <img src={awardPhotos[key].src} alt={awardPhotos[key].label} />
                    <span>{awardPhotos[key].label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="proud-content-side">
              <span className="section-tag" style={{ background: '#FEF08A', color: '#854D0E' }}>
                Authentic Recognition
              </span>
              <h2 className="proud-tagline">
                Little Steps.<br />Big Recognition.
              </h2>

              <div className="proud-award-badge-card">
                <div className="award-category-title">
                  “BEST PRE SCHOOL STARTUP”
                </div>
                <div className="award-event-name">
                  30th Edition — Indian School Awards
                </div>
                <div className="award-location-stamp">
                  <MapPin size={16} color="#CA8A04" /> Bangalore Chapter
                </div>
              </div>

              <p className="proud-description-text">
                Appy Kidz was honored as the <strong>“Best Pre School Startup”</strong> at the <strong>30th Edition Indian School Awards, Bangalore Chapter</strong>. This recognition celebrates our dedication to child-centred learning, joyful curiosity, and nurturing early years education.
              </p>

              <div className="proud-cta-row">
                <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
                  <Calendar size={18} /> Schedule a Campus Tour
                </button>
                <a
                  href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20know%20more%20about%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-wa"
                >
                  <WhatsAppIcon size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CAMPUS SAFETY & FACILITIES (Evidence-Based Child Proofing) */}
      <section className="safety-section" id="safety">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag" style={{ background: '#DCFCE7', color: '#15803D' }}>
              Your Child’s Well-being
            </span>
            <h2 className="section-title-large">Campus Safety &amp; Facilities</h2>
            <p className="section-subtitle-text">
              We maintain careful child-proofing protocols across our campus. Every hallway, staircase, and play station is arranged for safety, hygiene, and freedom of movement.
            </p>
          </div>

          <div className="safety-features-grid">
            {safetyItems.map((item, idx) => (
              <div
                key={idx}
                className="safety-card"
                onClick={() => setLightboxImg(item.img)}
                title="Click to view full photo"
              >
                <div className="safety-img-wrap">
                  <img src={item.img} alt={item.title} className="safety-img" />
                </div>
                <div className="safety-card-body">
                  <span className="safety-pill">{item.badge}</span>
                  <h3 className="safety-title">{item.title}</h3>
                  <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginTop: '6px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WHAT OUR HAPPY PARENTS SAY (10 Authentic Reviews) */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="testi-header-box">
            <h2 className="testimonials-title">What Our Happy Parents Say</h2>
            <p className="testimonials-subtitle">
              Authentic stories and reviews from parents across our early learning community.
            </p>
          </div>

          <div 
            className="testimonials-compact-card"
            onMouseEnter={() => setIsTestiPaused(true)}
            onMouseLeave={() => setIsTestiPaused(false)}
          >
            <div key={activeTestiIndex} className="testi-slide-content">
              <div className="testi-card-header">
                <div 
                  className="testi-avatar-btn"
                  onClick={() => setLightboxImg(parentTestimonials[activeTestiIndex].image)}
                  title="Click to zoom photo"
                >
                  <img 
                    src={parentTestimonials[activeTestiIndex].image} 
                    alt={parentTestimonials[activeTestiIndex].studentName} 
                    className="testi-avatar-img" 
                  />
                </div>

                <div className="testi-author-meta">
                  <div className="testi-author-primary">
                    <h3 className="testi-student-name">{parentTestimonials[activeTestiIndex].studentName}</h3>
                    <span className="testi-grade-badge">{parentTestimonials[activeTestiIndex].grade}</span>
                  </div>
                  <p className="testi-parent-sub">{parentTestimonials[activeTestiIndex].parentRole}</p>
                </div>

                <div className="testi-rating-box">
                  <div className="testi-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span className="testi-counter-badge">{activeTestiIndex + 1} / {parentTestimonials.length}</span>
                </div>
              </div>

              <blockquote className="testi-quote-text">
                “{parentTestimonials[activeTestiIndex].quote}”
              </blockquote>
            </div>

            <div className="testi-card-footer">
              <div className="testi-dots-row">
                {parentTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestiIndex(idx)}
                    className={`testi-dot ${idx === activeTestiIndex ? 'active' : ''}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="testi-nav-arrows">
                <button 
                  onClick={prevTesti} 
                  className="testi-nav-btn" 
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={nextTesti} 
                  className="testi-nav-btn" 
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="testi-avatars-row-wrap">
            <span className="testi-avatars-label">Tap to view:</span>
            <div className="testi-avatars-scroller" ref={avatarScrollerRef}>
              {parentTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTestiIndex(idx)}
                  className={`testi-avatar-chip ${idx === activeTestiIndex ? 'active' : ''}`}
                  title={`${item.studentName} (${item.grade})`}
                >
                  <img src={item.image} alt={item.studentName} className="testi-chip-img" />
                  <span className="testi-chip-label">{item.studentName.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* 13. SHARED GLOBAL FOOTER (Section 8 Copy) */}
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* 14. FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Kithaganur!%20I%20would%20like%20to%20inquire%20about%20preschool%20and%20daycare%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat With Us on WhatsApp"
      >
        <WhatsAppIcon size={26} />
        <span>Chat With Us</span>
      </a>

      {/* 15. ADMISSION ENQUIRY MODAL */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram="Playgroup (1.5 - 2.5 yrs)"
      />

      {/* 16. IMAGE LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          className="modal-overlay"
          onClick={() => setLightboxImg(null)}
          style={{ zIndex: 1100, cursor: 'zoom-out' }}
        >
          <div style={{ position: 'relative', maxWidth: '88vw', maxHeight: '88vh' }}>
            <button
              onClick={() => setLightboxImg(null)}
              className="modal-close-btn"
              style={{ top: '-40px', right: '0' }}
            >
              <X size={24} />
            </button>
            <img
              src={lightboxImg}
              alt="Enlarged View"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                borderRadius: '16px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                objectFit: 'contain',
                background: '#fff'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
