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

  // Testimonials Showcase State (11 Authentic Google Reviews)
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
      id: 'ammu-ammuchinnu',
      studentName: 'Ammu Ammuchinnu',
      grade: 'Google Verified',
      parentRole: 'Parent Review • 5 months ago',
      image: '/assets/testimonials/ammu-ammuchinnu.png',
      quote: "The school provides a safe, caring and engaging environment for children. Teachers are supportive and activities make learning fun and interactive. Overall, it is a great place for a child's growth and development. 😍🥰🥰🥰🥰😍"
    },
    {
      id: 'talitha-mungara',
      studentName: 'Talitha Mungara. Y',
      grade: 'Google Verified',
      parentRole: 'Parent Review (2 reviews) • 5 months ago',
      image: '/assets/testimonials/talitha-mungara.png',
      quote: "This is a very nice kindergarten School the teachers are kind and taking care of the children my children enjoy going to school everyday and learning new things."
    },
    {
      id: 'harshitha-savanth',
      studentName: 'Harshitha.R Savanth',
      grade: 'Google Verified',
      parentRole: 'Parent of 2.9 yr old (5 reviews) • 9 months ago',
      image: '/assets/testimonials/harshitha-savanth.png',
      quote: "We are very happy with Appy Kids School. Our son is 2.9 years old, and the care, love, and attention he receives here are truly wonderful. The teachers are warm, patient, and nurturing, making the children feel safe and comfortable."
    },
    {
      id: 'rajeshwari-jadhav',
      studentName: 'Rajeshwari Jadhav',
      grade: 'Google Verified',
      parentRole: 'Toddler Parent (7 reviews) • 3 months ago',
      image: '/assets/testimonials/rajeshwari-jadhav.png',
      quote: "Very good school for littele angels, I feel really safe of the environment this school is having , I feel happy that well knowlegeble teachers are there in the school who really take care of toddlers and teachings something new."
    },
    {
      id: 'inform-priyanka',
      studentName: 'Inform Priyanka',
      grade: 'Google Verified',
      parentRole: 'Parent Review • 1 year ago',
      image: '/assets/testimonials/inform-priyanka.png',
      quote: "Best school and very good management they are very supportive even fees is very competitive. Syllabus is also very energetic and impressive. You must visit it☺️"
    },
    {
      id: 'lalitha-lalitha',
      studentName: 'Lalitha Lalitha',
      grade: 'Google Verified',
      parentRole: 'Preschool Parent (2 reviews) • Recent',
      image: '/assets/testimonials/lalitha-lalitha.png',
      quote: "I recently joined Appy Kidz International Preschool - Kithaganur, and I am extremely happy with my experience. The school provides a warm, safe, and welcoming environment where children feel comfortable, confident, and excited to learn."
    },
    {
      id: 'madhu-manoj',
      studentName: 'Madhu Manoj',
      grade: 'Google Verified',
      parentRole: 'Parent Review (9 reviews) • Recent',
      image: '/assets/testimonials/madhu-manoj.png',
      quote: "Best school and very good management they are very supportive Syllabus is also very energetic and impressive. I can see day to day growth from him ,teachers and staff and entire team is friendly very caring thank u so much ☺️"
    },
    {
      id: 'manoj-kumar',
      studentName: 'Manoj kumar',
      grade: 'Google Verified',
      parentRole: 'Local Guide (13 reviews • 2 photos) • Recent',
      image: '/assets/testimonials/manoj-kumar.png',
      quote: "We are very happy with Appy Kids School the care, love, and attention they have given are truly wonderful. The teachers are warm, patient, and nurturing, making the children feel safe and comfortable. The activities are fun, engaging, and creative."
    },
    {
      id: 'marian-lazaro',
      studentName: 'Marian Lazaro',
      grade: 'Google Verified',
      parentRole: 'Parent Review (2 reviews) • Recent',
      image: '/assets/testimonials/marian-lazaro.png',
      quote: "Appy Kidz International Preschool is a wonderful school with a happy, safe, and nurturing environment. The teachers are caring, and the school conducts many fun and engaging activities that help children learn and grow. The management is friendly and supportive. I am very happy with the holistic development and would highly recommend Appy Kidz to other parents."
    },
    {
      id: 'deepa-deepa',
      studentName: 'deepa deepa',
      grade: 'Google Verified',
      parentRole: 'Parent Review (2 reviews) • 2 months ago',
      image: '/assets/testimonials/deepa-deepa.png',
      quote: "The teachers take a personal interest in every student and make learning fun. And also we see a big improvement in our child’s speaking skills and discipline. Thank you to the principal and teachers for creating such a warm and happy learning space."
    },
    {
      id: 'ranjitha-k',
      studentName: 'Ranjitha k',
      grade: 'Google Verified',
      parentRole: 'Parent Review (3 reviews) • 3 months ago',
      image: '/assets/testimonials/ranjitha-k.png',
      quote: "I believe Appy Kids is a wonderful place for young children to build a solid foundation. My son is learning many valuable things there which have helped him develop strong observation, listening, and action skills. Thank you so much for all the activities you offer, please continue to do so."
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
      </section>

      {/* 2B. SECTION 3: EXACT BRIEF HERO HEADING, SUPPORTING LINE & INTRO */}
      <section className="hero-brief-box">
        <div className="container hero-brief-container">
          <div className="hero-brief-content">
            <span className="hero-admissions-badge">
              Admissions Open 2026-27
            </span>
            <h1 className="hero-h1-heading">
              Preschool, Nursery &amp; Daycare in Kithaganur
            </h1>
            <p className="hero-h1-tagline">
              Little steps. Happy discoveries. A confident start.
            </p>
            <p className="hero-h1-desc">
              At Appy Kidz International Pre School &amp; Day Care, children learn through play, stories, creative activities and everyday discovery. Explore Playgroup, Nursery, Junior KG, Senior KG and Daycare at our campus in Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049.
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
              <span className="about-welcome-tag">
                <Sparkles size={14} style={{ color: '#D97706' }} />
                <span>Welcome to Appy Kidz</span>
              </span>
              <h2 className="about-compact-title">
                A Happy Beginning at Appy Kidz Kithaganur
              </h2>
              <p className="about-compact-lead">
                Choosing your child's first preschool is an important decision. You want to understand how your child will learn, how they will settle in and who will support them each day.
              </p>
              <p className="about-compact-sub">
                Appy Kidz brings early learning and childcare together at our Kithaganur campus. Our Montessori and play-way approach introduces children to language, numbers, movement and practical activities in an engaging way. Children have opportunities to explore, ask questions, practise new skills and build friendships.
              </p>
              <p className="about-compact-sub">
                Visit the campus, meet our team and find out which programme suits your child's age and stage of development.
              </p>
              
              <div className="about-compact-highlights">
                <div className="about-highlight-pill">
                  <div className="about-pill-icon-box icon-box-trophy">
                    <Star size={22} color="#D97706" />
                  </div>
                  <div className="about-pill-text">
                    <strong>17+ Years</strong>
                    <span>Network Legacy</span>
                  </div>
                </div>
                <div className="about-highlight-pill">
                  <div className="about-pill-icon-box icon-box-brain">
                    <Sparkles size={22} color="#DB2777" />
                  </div>
                  <div className="about-pill-text">
                    <strong>Play-Way</strong>
                    <span>Montessori Apparatus</span>
                  </div>
                </div>
                <div className="about-highlight-pill">
                  <div className="about-pill-icon-box icon-box-safe">
                    <CheckCircle2 size={22} color="#059669" />
                  </div>
                  <div className="about-pill-text">
                    <strong>Child Proofed</strong>
                    <span>Campus Safety</span>
                  </div>
                </div>
                <div className="about-highlight-pill">
                  <div className="about-pill-icon-box icon-box-award">
                    <GraduationCap size={22} color="#B45309" />
                  </div>
                  <div className="about-pill-text">
                    <strong>Recognized</strong>
                    <span>Award Winner</span>
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
                  <span className="about-floating-number">Aryan Springz, Phase 2</span>
                  <span className="about-floating-label">Kithaganur, Bangalore</span>
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

      {/* 3. PRESCHOOL AND DAYCARE PROGRAMMES (Section 3 Copy & Crawlable Routes) */}
      <section className="programs-section" id="programs">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Play-Way &amp; Montessori Learning</span>
            <h2 className="section-title-large">Preschool and Daycare Programmes</h2>
          </div>

          <div className="programs-icon-grid">
            {/* Playgroup */}
            <div className="program-icon-card program-card-star">
              <div className="program-circle-icon program-circle-playgroup icon-shape-star">
                <PlaygroupIcon />
              </div>
              <h3 className="program-card-name">Playgroup</h3>
              <span className="program-age-pill age-playgroup">1.5 – 2.5 years</span>
              <p className="program-card-desc">
                Gentle introduction through stories, sensory exploration, and guided classroom routines.
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
              <p className="program-card-desc">
                Early language, counting, colours, shapes, and creative expression through hands-on play.
              </p>
              <Link
                href="/nursery-school-in-kithaganur"
                className="program-link-btn"
                style={{ textDecoration: 'none' }}
              >
                Explore Nursery <ChevronRight size={14} />
              </Link>
            </div>

            {/* Junior KG */}
            <div className="program-icon-card program-card-round">
              <div className="program-circle-icon program-circle-jrkg icon-shape-round">
                <JrKgIcon />
              </div>
              <h3 className="program-card-name">Junior KG</h3>
              <span className="program-age-pill age-jrkg">3.5 – 4.5 years</span>
              <p className="program-card-desc">
                Phonics, early numeracy, interactive storytelling, and classroom communication confidence.
              </p>
              <Link
                href="/preschool-in-kithaganur"
                className="program-link-btn"
                style={{ textDecoration: 'none' }}
              >
                Explore Junior KG <ChevronRight size={14} />
              </Link>
            </div>

            {/* Senior KG */}
            <div className="program-icon-card program-card-crest">
              <div className="program-circle-icon program-circle-srkg icon-shape-crest">
                <SrKgIcon />
              </div>
              <h3 className="program-card-name">Senior KG</h3>
              <span className="program-age-pill age-srkg">4.5 – 5.5 years</span>
              <p className="program-card-desc">
                School readiness, early reading fluency, writing skills, and logical thinking foundation.
              </p>
              <Link
                href="/preschool-in-kithaganur"
                className="program-link-btn"
                style={{ textDecoration: 'none' }}
              >
                Explore Senior KG <ChevronRight size={14} />
              </Link>
            </div>

            {/* Daycare */}
            <div className="program-icon-card program-card-heart">
              <div className="program-circle-icon program-circle-daycare icon-shape-heart">
                <DaycareIcon />
              </div>
              <h3 className="program-card-name">Daycare</h3>
              <span className="program-age-pill age-daycare">1 – 8 years</span>
              <p className="program-card-desc">
                Loving childcare with flexible routines, nutritious support, and complete child-proofed safety.
              </p>
              <Link
                href="/daycare-in-kithaganur"
                className="program-link-btn"
                style={{ textDecoration: 'none' }}
              >
                Explore Daycare <ChevronRight size={14} />
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

      {/* 4. VISIT OUR PRESCHOOL IN ADURU, KITHAGANUR (Section 3 Copy & 2-Column Campus Showcase) */}
      <section className="visit-section" id="visit">
        <div className="container">
          <div className="visit-grid">
            {/* Left Column: Campus Details & Directions */}
            <div className="visit-info-col">
              <span className="section-tag visit-tag">
                <MapPin size={14} /> Campus Location &amp; Directions
              </span>
              <h2 className="visit-title">
                Visit Our Preschool in Aduru, Kithaganur
              </h2>
              <p className="visit-desc">
                Our Bengaluru campus is located at Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049. If you live in Kithaganur or are considering a preschool near TC Palya, Battarahalli or KR Puram, arrange a visit to see whether the location and programme suit your family.
              </p>
              <p className="visit-desc-sub">
                A school visit gives you time to explore the classrooms, meet the team and ask about nursery admission, kindergarten programmes or daycare.
              </p>

              {/* Quick Info Badges */}
              <div className="visit-quick-facts">
                <div className="visit-fact-item">
                  <div className="visit-fact-icon">
                    <MapPin size={18} color="#0284C7" />
                  </div>
                  <div>
                    <strong>Campus Address</strong>
                    <span>Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore - 560049</span>
                  </div>
                </div>
                <div className="visit-fact-item">
                  <div className="visit-fact-icon">
                    <Clock size={18} color="#059669" />
                  </div>
                  <div>
                    <strong>Campus Hours</strong>
                    <span>Monday – Saturday: 8:30 AM – 6:30 PM</span>
                  </div>
                </div>
                <div className="visit-fact-item">
                  <div className="visit-fact-icon">
                    <Phone size={18} color="#D97706" />
                  </div>
                  <div>
                    <strong>Admissions Desk</strong>
                    <span>+91 70222 61013</span>
                  </div>
                </div>
              </div>

              <div className="visit-actions">
                <a
                  href="https://maps.google.com/?q=Appy+Kidz+International+Pre+School+Kithaganur+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-directions-link"
                >
                  <MapPin size={18} /> Get Directions on Maps
                </a>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
                  <Calendar size={18} /> Book a School Visit
                </button>
              </div>
            </div>

            {/* Right Column: Embedded Google Map Card */}
            <div className="visit-map-col">
              <div className="visit-map-container">
                <div className="visit-map-badge">
                  <MapPin size={14} color="#EA580C" />
                  <span>Live Campus Location</span>
                </div>
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
          </div>
        </div>
      </section>

      {/* 5. WHAT TO DISCUSS DURING YOUR SCHOOL VISIT (Section 3 Copy & Polished Checklist) */}
      <section className="checklist-section">
        <div className="container">
          <div className="checklist-header-box">
            <span className="section-tag checklist-tag">
              Parent Tour Guide
            </span>
            <h2 className="checklist-title">
              What to Discuss During Your School Visit
            </h2>
            <p className="checklist-desc">
              Here are the key points to explore with our academic team when you tour our Aduru, Kithaganur campus:
            </p>
          </div>

          <div className="visit-topics-grid">
            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <CheckCircle2 size={20} color="#15803D" />
              </div>
              <div className="visit-topic-text">
                Which programme suits your child's age and readiness.
              </div>
            </div>

            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <CheckCircle2 size={20} color="#15803D" />
              </div>
              <div className="visit-topic-text">
                How children are introduced to the classroom routine.
              </div>
            </div>

            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <CheckCircle2 size={20} color="#15803D" />
              </div>
              <div className="visit-topic-text">
                Learning activities and communication with parents.
              </div>
            </div>

            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <CheckCircle2 size={20} color="#15803D" />
              </div>
              <div className="visit-topic-text">
                Current class timings and daycare availability.
              </div>
            </div>

            <div className="visit-topic-card">
              <div className="visit-topic-icon">
                <CheckCircle2 size={20} color="#15803D" />
              </div>
              <div className="visit-topic-text">
                Fees, documents and admission steps.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRESCHOOL ADMISSIONS IN KITHAGANUR (Section 3 Copy & Conversion Box) */}
      <section className="admissions-section">
        <div className="container">
          <div className="admissions-card">
            <div className="admissions-card-badge">
              🎓 Admissions Open Academic Year 2026-27
            </div>
            <h2 className="admissions-title">
              Preschool Admissions in Kithaganur
            </h2>
            

            <div className="admissions-inner-banner">
              <h3 className="admissions-card-title">
                Find the Right First Step for Your Child
              </h3>
              <p className="admissions-card-desc">
                Speak with Appy Kidz Kithaganur about preschool, nursery or daycare. Call +91 70222 61013 or book a school visit.
              </p>
              <div className="admissions-card-actions">
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

      {/* 11. WHAT OUR HAPPY PARENTS SAY (11 Authentic Google Reviews) */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="testi-header-box">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: '#FEF3C7', color: '#92400E', fontSize: '0.82rem', fontWeight: 700, marginBottom: '12px', border: '1px solid #FDE68A' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span>5.0 ★ Google Verified Reviews</span>
            </div>
            <h2 className="testimonials-title">What Our Happy Parents Say</h2>
            <p className="testimonials-subtitle">
              Authentic stories and 5-star reviews from parents at Appy Kidz Kithaganur on Google.
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
            <span className="testi-avatars-label">Tap parent review:</span>
            <div className="testi-avatars-scroller" ref={avatarScrollerRef}>
              {parentTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTestiIndex(idx)}
                  className={`testi-avatar-chip ${idx === activeTestiIndex ? 'active' : ''}`}
                  title={`${item.studentName} (${item.parentRole})`}
                >
                  <img src={item.image} alt={item.studentName} className="testi-chip-img" />
                  <span className="testi-chip-label">{item.studentName.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '22px' }}>
            <a
              href="https://www.google.com/search?q=appy+kidz+kithaganur#lrd=0x3bae11644478a7bd:0x962c06cb423c4327,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                color: '#1E293B',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: '1.5px solid #CBD5E1',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span>Read All Reviews on Google Maps</span>
              <ExternalLink size={15} color="#F59E0B" />
            </a>
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
