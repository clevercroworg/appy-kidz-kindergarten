'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  Baby,
  BookOpen,
  GraduationCap,
  Users,
  Compass,
  CheckCircle2,
  X,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Menu,
  Sun,
  Smile,
  Music,
  Lightbulb,
  Palette,
  Shield,
  Star,
  ChevronLeft,
  RefreshCw,
  Quote
} from 'lucide-react';

// Official Authentic WhatsApp Vector Icon
function WhatsAppIcon({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.37C16.32 14.24 15.1 13.64 14.88 13.56C14.65 13.48 14.49 13.44 14.32 13.69C14.16 13.94 13.69 14.49 13.54 14.65C13.4 14.82 13.25 14.84 13 14.71C12.75 14.59 11.95 14.32 11.01 13.48C10.27 12.83 9.78 12.02 9.63 11.77C9.49 11.52 9.61 11.39 9.74 11.26C9.85 11.15 9.99 10.97 10.12 10.82C10.24 10.67 10.29 10.57 10.37 10.4C10.45 10.24 10.41 10.09 10.35 9.97C10.29 9.84 9.79 8.62 9.59 8.12C9.39 7.64 9.18 7.7 9.03 7.69C8.89 7.69 8.72 7.68 8.56 7.68C8.39 7.68 8.12 7.74 7.89 7.99C7.66 8.24 7.02 8.84 7.02 10.06C7.02 11.28 7.91 12.45 8.03 12.62C8.16 12.78 9.78 15.28 12.26 16.35C12.85 16.61 13.31 16.76 13.67 16.88C14.26 17.07 14.8 17.04 15.23 16.98C15.71 16.91 16.71 16.37 16.92 15.79C17.13 15.21 17.13 14.71 17.06 14.61C17 14.51 16.82 14.49 16.57 14.37Z"
      />
    </svg>
  );
}

// Official Authentic Facebook Vector Icon
function FacebookIcon({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

// Official Authentic Instagram Vector Icon
function InstagramIcon({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

// Official Authentic YouTube Vector Icon
function YouTubeIcon({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAwardPhoto, setActiveAwardPhoto] = useState('stage');
  const [lightboxImg, setLightboxImg] = useState(null);
  
  // Hero Banner Slider State
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isBannerPaused, setIsBannerPaused] = useState(false);

  // Captcha State for Admission Form (matching user screenshot)
  const [captchaCode, setCaptchaCode] = useState('C3ZJ');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Mobile Carousel state for Events Gallery (2.5 seconds auto advance)
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  // Testimonials Showcase State (10 Authentic Reviews from Old Website)
  const [activeTestiIndex, setActiveTestiIndex] = useState(0);
  const [isTestiPaused, setIsTestiPaused] = useState(false);

  // 4 Regenerated Themed Full-Width Banners from Old Website
  const heroBanners = [
    {
      id: 1,
      tag: '🎓 Admissions Open 2026-27',
      shortTitle: 'Admissions 2026-27',
      imageSrc: '/assets/banners/banner-1-admissions-open.jpg',
      imageAlt: 'Appy Kidz International Pre School Admissions Open 2026-27 Banner',
      title: 'Admissions Open for Academic Year 2026-27',
      subtitle: 'Play Group • Nursery Pre-KG • Junior KG • Senior KG • Day Care in Bangalore'
    },
    {
      id: 2,
      tag: '⭐ 17+ Years Excellence',
      shortTitle: '17+ Years Legacy',
      imageSrc: '/assets/banners/banner-2-talent-excellence.jpg',
      imageAlt: "Appy Kidz 17+ Years of Educational Excellence Nurturing Every Child's Talent Banner",
      title: "17+ Years of Educational Excellence",
      subtitle: "Nurturing Every Child's Talent, Creative Arts, Stage Confidence & Joyful Discovery"
    },
    {
      id: 3,
      tag: '🐛 Safe Campus & Mascot',
      shortTitle: 'Safe Campus',
      imageSrc: '/assets/banners/banner-3-safe-mascot.jpg',
      imageAlt: 'Appy Kidz Safe Loving Campus and Official Mascot Banner',
      title: 'A Safe, Loving & Great Place to Grow',
      subtitle: '100% Child Proofed Campus • Official Trademark Mascot Appy The Bookworm'
    },
    {
      id: 4,
      tag: '🏆 Best Pre School Startup',
      shortTitle: 'Award Winner',
      imageSrc: '/assets/banners/banner-4-awards.jpg',
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

  const refreshCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setUserCaptcha('');
  };

  // Auto rotate hero banner every 3.0 seconds unless paused
  useEffect(() => {
    if (isBannerPaused) return;
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isBannerPaused, heroBanners.length]);

  // Form State matching user screenshot
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Pre School Play Group',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    if (userCaptcha.trim().toUpperCase() !== captchaCode) {
      alert(`Please enter the matching verification code shown (${captchaCode}).`);
      return;
    }
    const msg = `Hello Appy Kidz Bangalore! I would like to submit an Admission Enquiry.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Program Interested:* ${encodeURIComponent(formData.program)}%0A*Message:* ${encodeURIComponent(formData.message || 'Admissions Enquiry 2026-27')}%0A*Campus:* Phase 2, Aduru, Kithaganur, Bengaluru - 560049`;
    window.open(`https://wa.me/917022261013?text=${msg}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
      setUserCaptcha('');
    }, 1500);
  };

  const awardPhotos = {
    stage: {
      src: '/assets/award-stage.jpg',
      label: 'Ceremony Stage',
      desc: 'Appy Kidz leadership receiving the honor on stage at the prestigious 30th Edition Indian School Awards, Bangalore.'
    },
    trophy: {
      src: '/assets/award-trophy.jpg',
      label: 'Trophy Plaque',
      desc: 'Official "Best Pre School Startup" Trophy Plaque presented to Appy Kidz International Pre School, Bangalore at the 30th Edition Indian School Awards.'
    },
    certificate: {
      src: '/assets/award-certificate.jpg',
      label: 'Official Certificate',
      desc: 'Authenticated Indian School Awards Certificate honoring Appy Kidz Bangalore as the Best Pre School Startup.'
    },
    full: {
      src: '/assets/award-full.jpg',
      label: 'Original Archive',
      desc: 'Full un-recolored photographic asset of the trophy and certificate presentation.'
    }
  };

  // ==========================================
  // CUSTOM INNOVATIVE COLORFUL FACELESS PROGRAM ICONS
  // ==========================================

  // 1. Playgroup: Joyful faceless toddlers raising arms to hold glowing discovery star with sensory spheres
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
      {/* Golden Discovery Star holding hands */}
      <path d="M32 5L34.5 10.5L40.5 11.3L36 15.5L37.2 21.5L32 18.6L26.8 21.5L28 15.5L23.5 11.3L29.5 10.5L32 5Z" fill="url(#pgStarGrad)" />
      <circle cx="32" cy="13.5" r="2.5" fill="#FFFBEB" />
      
      {/* Boy Toddler (Faceless, Raised Arms) */}
      <circle cx="21" cy="22" r="5.5" fill="#FBBF24" />
      <path d="M21 29C17 29 14 32 14 36V45C14 46.5 15.5 47 17 47H25C26.5 47 28 46.5 28 45V36C28 32 25 29 21 29Z" fill="url(#pgBoyGrad)" />
      <path d="M14 34L8 23C7 21.5 9 19.5 11 21L16 29" stroke="url(#pgBoyGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 31L31 20C32 18.5 34 20 33 22L28 34" stroke="url(#pgBoyGrad)" strokeWidth="3" strokeLinecap="round" />
      <rect x="16" y="47" width="4" height="7" rx="2" fill="#0369A1" />
      <rect x="22" y="47" width="4" height="7" rx="2" fill="#0369A1" />

      {/* Girl Toddler (Faceless, Pigtails Silhouette & Raised Arms) */}
      <circle cx="43" cy="22" r="5.5" fill="#FBBF24" />
      <path d="M37 20C35 18 34 21 35 23C36 24 37 23 37 21" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" fill="#E11D48" />
      <path d="M49 20C51 18 52 21 51 23C50 24 49 23 49 21" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" fill="#E11D48" />
      <path d="M43 29C40 29 38 31 37 34L33 46C32.5 47.5 34 48 35.5 48H50.5C52 48 53.5 47.5 53 46L49 34C48 31 46 29 43 29Z" fill="url(#pgGirlGrad)" />
      <path d="M38 31L33 20C32 18.5 30 20 31 22L36 34" stroke="url(#pgGirlGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 34L56 23C57 21.5 55 19.5 53 21L48 29" stroke="url(#pgGirlGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="39" y="48" width="3.5" height="6" rx="1.5" fill="#BE123C" />
      <rect x="44.5" y="48" width="3.5" height="6" rx="1.5" fill="#BE123C" />

      {/* Floating Sensory Sparkles */}
      <circle cx="8" cy="38" r="2.5" fill="#F59E0B" />
      <circle cx="56" cy="38" r="2.5" fill="#10B981" />
      <circle cx="14" cy="14" r="2" fill="#8B5CF6" />
      <circle cx="50" cy="14" r="2" fill="#EC4899" />
    </svg>
  );

  // 2. Nursery Pre-KG: Innovative preschool academy building, bellhouse, clock & sunshine
  const NurseryIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nurRoofGrad" x1="12" y1="20" x2="52" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <linearGradient id="nurWallGrad" x1="16" y1="32" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <linearGradient id="nurBellGrad" x1="28" y1="12" x2="36" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Sun behind tower */}
      <circle cx="48" cy="14" r="6" fill="#FDE047" />
      <path d="M48 6V4M48 24V22M56 14H58M38 14H40M53.5 8.5L55 7M42.5 19.5L41 21M53.5 19.5L55 21M42.5 8.5L41 7" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />

      {/* Base Foundation */}
      <rect x="10" y="54" width="44" height="4" rx="2" fill="#94A3B8" />

      {/* Main Schoolhouse Walls */}
      <rect x="15" y="32" width="34" height="22" rx="2" fill="url(#nurWallGrad)" stroke="#D97706" strokeWidth="1.5" />
      
      {/* Arched Open Doorway */}
      <path d="M26 54V40C26 36.5 38 36.5 38 40V54H26Z" fill="#78350F" />
      <circle cx="35" cy="47" r="1.2" fill="#FDE047" />

      {/* Side Classroom Windows */}
      <rect x="18" y="36" width="6" height="8" rx="1.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
      <line x1="21" y1="36" x2="21" y2="44" stroke="#FFFFFF" strokeWidth="1" />
      <rect x="40" y="36" width="6" height="8" rx="1.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
      <line x1="43" y1="36" x2="43" y2="44" stroke="#FFFFFF" strokeWidth="1" />

      {/* Main Roof Gable */}
      <polygon points="32,18 10,34 54,34" fill="url(#nurRoofGrad)" />

      {/* Bell Tower */}
      <rect x="27" y="10" width="10" height="11" rx="1" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
      <polygon points="32,4 25,10 39,10" fill="#DC2626" />
      {/* Pennant Flag */}
      <path d="M32 4V1L37 2.5L32 4" fill="#EF4444" />
      
      {/* Golden Bell */}
      <path d="M29 17C29 14.5 35 14.5 35 17L36 19H28L29 17Z" fill="url(#nurBellGrad)" />
      <circle cx="32" cy="20" r="1.5" fill="#B45309" />

      {/* Clock Face under Gable */}
      <circle cx="32" cy="28" r="4" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.2" />
      <line x1="32" y1="28" x2="32" y2="25.5" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="32" y1="28" x2="34" y2="28" stroke="#1E293B" strokeWidth="1.2" strokeLinecap="round" />

      {/* Plants at base */}
      <circle cx="13" cy="53" r="3" fill="#10B981" />
      <circle cx="51" cy="53" r="3" fill="#10B981" />
    </svg>
  );

  // 3. Junior KG: Faceless young scholar reading an illuminated storybook with floating 3D ABC letters & sparks
  const JrKgIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jrBoyGrad" x1="20" y1="24" x2="44" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="jrBookGrad" x1="14" y1="38" x2="50" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      
      {/* Ascending Magical Letters & Sparkles from Book */}
      <text x="17" y="15" fill="#EF4444" fontSize="10" fontWeight="900" fontFamily="sans-serif">A</text>
      <text x="31" y="11" fill="#F59E0B" fontSize="11" fontWeight="900" fontFamily="sans-serif">B</text>
      <text x="44" y="16" fill="#10B981" fontSize="10" fontWeight="900" fontFamily="sans-serif">C</text>
      <path d="M25 18L26 20L28 20.5L26.5 22L27 24L25 23L23 24L23.5 22L22 20.5L24 20L25 18Z" fill="#FDE047" />
      <path d="M39 18L40 20L42 20.5L40.5 22L41 24L39 23L37 24L37.5 22L36 20.5L38 20L39 18Z" fill="#FDE047" />

      {/* Faceless Scholar Head with Curious Posture */}
      <circle cx="32" cy="24" r="7" fill="#FBBF24" />
      <path d="M25 22C25 17 31 16 35 17C39 18 39 22 39 24C37 21 33 21 30 22C27 23 26 25 25 22Z" fill="#78350F" />
      
      {/* Child Body in Cozy Hoodie */}
      <path d="M32 32C24 32 20 36 19 41L21 51H43L45 41C44 36 40 32 32 32Z" fill="url(#jrBoyGrad)" />
      
      {/* Open Magic Book on Lap */}
      <path d="M12 45L31 43L32 54L13 56L12 45Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
      <path d="M52 45L33 43L32 54L51 56L52 45Z" fill="#F8FAFC" stroke="#0284C7" strokeWidth="1.5" />
      <path d="M11 47L31 45V56L11 58V47Z" fill="url(#jrBookGrad)" />
      <path d="M53 47L33 45V56L53 58V47Z" fill="url(#jrBookGrad)" />
      <line x1="32" y1="43" x2="32" y2="56" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="48" x2="27" y2="47" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="37" y1="47" x2="47" y2="48" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />

      {/* Child Arms holding book */}
      <path d="M22 38L18 46C17 48 19 49 20 48L24 43" stroke="url(#jrBoyGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M42 38L46 46C47 48 45 49 44 48L40 43" stroke="url(#jrBoyGrad)" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );

  // 4. Senior KG: Three collaborative faceless scholars, graduation mortarboard, open encyclopedia & discovery rocket
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
        <linearGradient id="srRocketGrad" x1="46" y1="8" x2="58" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
      </defs>

      {/* Imagination Mini Rocket ascending on top right */}
      <path d="M52 6C55 8 57 12 56 16L51 18L48 15L50 10C51 7 52 6 52 6Z" fill="url(#srRocketGrad)" />
      <path d="M48 15L45 17L47 19L50 18" fill="#FDE047" />
      <path d="M47 19L44 24L48 21" fill="#F97316" />
      <circle cx="53" cy="11" r="1.5" fill="#FFFFFF" />

      {/* Left Peer Faceless Student */}
      <circle cx="16" cy="27" r="5" fill="#FBBF24" />
      <path d="M16 33C11 33 8 36 7 41L8 50H23L24 41C23 36 20 33 16 33Z" fill="#3B82F6" />

      {/* Right Peer Faceless Student */}
      <circle cx="48" cy="27" r="5" fill="#FBBF24" />
      <path d="M48 33C44 33 41 36 40 41L41 50H56L57 41C56 36 53 33 48 33Z" fill="#10B981" />

      {/* Center Graduate Scholar */}
      <circle cx="32" cy="25" r="6" fill="#FBBF24" />
      <polygon points="32,10 16,16 32,22 48,16" fill="url(#srCapGrad)" />
      <polygon points="32,12 20,16 32,20 44,16" fill="#A78BFA" opacity="0.3" />
      <path d="M23 18.5V23C23 25.5 27 27.5 32 27.5C37 27.5 41 25.5 41 23V18.5" fill="#5B21B6" />
      <path d="M32 16L44 19V25" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="44" cy="26" r="1.5" fill="#F59E0B" />

      {/* Center Student Uniform */}
      <path d="M32 32C25 32 21 36 20 41L21 53H43L44 41C43 36 39 32 32 32Z" fill="url(#srPeerCenter)" />
      <polygon points="32,32 30,37 32,42 34,37" fill="#FDE047" />

      {/* Shared Open Encyclopedia & Star */}
      <path d="M18 47L31 45L32 55L19 56Z" fill="#FFFFFF" stroke="#6D28D9" strokeWidth="1.2" />
      <path d="M46 47L33 45L32 55L45 56Z" fill="#FFFFFF" stroke="#6D28D9" strokeWidth="1.2" />
      <path d="M32 42L33.5 45L37 45.5L34.5 48L35 51L32 49.5L29 51L29.5 48L27 45.5L30.5 45L32 42Z" fill="#F59E0B" />
    </svg>
  );

  // 5. Day Care & Extended: Loving caregiver & toddler under protective warm heart aura, sun & naptime care
  const DaycareIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dcHeartGrad" x1="16" y1="6" x2="48" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="100%" stopColor="#F43F5E" />
        </linearGradient>
        <linearGradient id="dcCaregiverGrad" x1="16" y1="20" x2="34" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>
        <linearGradient id="dcToddlerGrad" x1="36" y1="30" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Protective Loving Heart Halo Aura */}
      <path d="M32 20C32 20 22 10 14 16C6 22 8 32 17 39L32 52L47 39C56 32 58 22 50 16C42 10 32 20 32 20Z" fill="url(#dcHeartGrad)" opacity="0.18" stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="3 3" />
      
      {/* Gentle Warm Sun & Star */}
      <circle cx="10" cy="12" r="5" fill="#FDE047" />
      <circle cx="54" cy="14" r="2" fill="#F59E0B" />
      <path d="M52 22L53 24L55 24.5L53.5 26L54 28L52 27L50 28L50.5 26L49 24.5L51 24L52 22Z" fill="#FBBF24" />

      {/* Faceless Loving Caregiver */}
      <circle cx="24" cy="22" r="5.5" fill="#FBBF24" />
      <path d="M19 22C19 18 23 16 26 16C29 16 30 19 30 22C28 20 25 20 22 22Z" fill="#581C87" />
      <circle cx="21" cy="17" r="2.5" fill="#581C87" />

      {/* Caregiver Dress */}
      <path d="M24 29C20 29 18 31 17 34L13 54H33L29 34C28 31 27 29 24 29Z" fill="url(#dcCaregiverGrad)" />
      <rect x="17" y="54" width="3.5" height="6" rx="1.5" fill="#3B0764" />
      <rect x="23" y="54" width="3.5" height="6" rx="1.5" fill="#3B0764" />

      {/* Faceless Happy Toddler */}
      <circle cx="43" cy="31" r="5" fill="#FBBF24" />
      <path d="M43 37C39 37 37 39 37 42V51C37 52.5 38.5 53 40 53H46C47.5 53 49 52.5 49 51V42C49 39 47 37 43 37Z" fill="url(#dcToddlerGrad)" />
      <rect x="39" y="53" width="3" height="5" rx="1" fill="#064E3B" />
      <rect x="44" y="53" width="3" height="5" rx="1" fill="#064E3B" />

      {/* Tender Connected Hands (Caregiver holding toddler's hand) */}
      <path d="M26 36L35 42" stroke="url(#dcCaregiverGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 42L34 42" stroke="url(#dcToddlerGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M35 39C35 37.5 33 37.5 33 39C33 40.5 35 41.5 35 41.5C35 41.5 37 40.5 37 39C37 37.5 35 37.5 35 39Z" fill="#F43F5E" />
    </svg>
  );

  // High-End Custom Programs Array with New Innovative Colorful Faceless Icons
  const programs = [
    {
      id: 'playgroup',
      name: 'Playgroup',
      badge: 'Ages 1.5 - 2.5 yrs',
      badgeClass: 'age-playgroup',
      circleClass: 'program-circle-playgroup',
      desc: 'Joyful sensory exploration, gross motor games, music play, and affectionate emotional bonding.',
      icon: <PlaygroupIcon />
    },
    {
      id: 'nursery',
      name: 'Nursery Pre-KG',
      badge: 'Ages 2.5 - 3.5 yrs',
      badgeClass: 'age-nursery',
      circleClass: 'program-circle-nursery',
      desc: 'Phonics readiness, early counting, interactive storytelling, and tactile Montessori sensory apparatus.',
      icon: <NurseryIcon />
    },
    {
      id: 'jrkg',
      name: 'Junior KG',
      badge: 'Ages 3.5 - 4.5 yrs',
      badgeClass: 'age-jrkg',
      circleClass: 'program-circle-jrkg',
      desc: 'Pre-math fundamentals, language immersion, inquisitive science observations, and peer teamwork.',
      icon: <JrKgIcon />
    },
    {
      id: 'srkg',
      name: 'Senior KG',
      badge: 'Ages 4.5 - 5.5 yrs',
      badgeClass: 'age-srkg',
      circleClass: 'program-circle-srkg',
      desc: 'Primary school readiness, advanced phonics, mental arithmetic, stage confidence, and creative expression.',
      icon: <SrKgIcon />
    },
    {
      id: 'daycare',
      name: 'Day Care & Extended',
      badge: 'Ages 1 - 8 yrs',
      badgeClass: 'age-daycare',
      circleClass: 'program-circle-daycare',
      desc: 'Safe, hygienic extended care with nutritious warm meals, sanitized nap suites, and supervised homework.',
      icon: <DaycareIcon />
    }
  ];

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
      title: 'Bathing Activity Play Group',
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

  const teacherPhotos = [
    {
      img: '/assets/official/teacher-field.jpg',
      title: 'Field Mentorship',
      sub: 'Nature Discovery & Experiential Play'
    },
    {
      img: '/assets/official/teacher-cake.jpg',
      title: 'Milestone Celebrations',
      sub: 'Warm Emotional Growth & Encouragement'
    },
    {
      img: '/assets/official/teacher-classroom.jpg',
      title: 'Interactive Circle Time',
      sub: 'Montessori Trained Early Childhood Mentors'
    },
    {
      img: '/assets/official/teacher-celebration.jpg',
      title: 'Loving Guidance',
      sub: 'Safety Certified, Patient & Affectionate Care'
    }
  ];

  const safetyItems = [
    {
      img: '/assets/safety-stairs-netting-1.jpg',
      badge: '100% Child Proofed',
      title: 'Floor-to-Ceiling Safety Nets',
      desc: 'Industrial-grade protective netting enclosing stairwells and balconies to ensure zero fall risk for energetic little runners.'
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

  // 10 Authentic Parent Testimonials from Appy Kidz (appykidz.in)
  const parentTestimonials = [
    {
      id: 'sai-thanvikha',
      studentName: 'Sai Thanvikha R.',
      grade: 'Sr. KG',
      parentRole: 'Parent of Sai Thanvikha',
      image: '/assets/testimonials/Sai-Thanvikha_Sr.KG_.jpg',
      quote: "One of the best preschools! At just 5 years old, my daughter is reading full sentences fluently. The teachers make mathematical and practical concepts easy to understand. Highly recommended!",
      year: 'Sr. KG'
    },
    {
      id: 'ashwin-i',
      studentName: 'Ashwin I.',
      grade: 'Graduate',
      parentRole: 'Father of Ashwin I.',
      image: '/assets/testimonials/ASHWIN-I.jpg',
      quote: "Appy Kidz has been vital in moulding my boy to be his best. They don’t just focus on academics, but nurture extra-curriculars, stage confidence, and strong discipline.",
      year: 'Graduate'
    },
    {
      id: 'shananthika',
      studentName: 'Shananthika K. S.',
      grade: 'Since 2015',
      parentRole: 'Mother of 3 Enrolled Siblings',
      image: '/assets/testimonials/SHANANTHIKA-K-S.jpg',
      quote: "My two daughters studied here and now my son is continuing — our bonding dates back to 2015! A wonderful preschool giving equal importance to joyful studies and activities.",
      year: 'Alumni'
    },
    {
      id: 'g-kathiran',
      studentName: 'G. Kathiran',
      grade: 'Kindergarten',
      parentRole: 'Parent of Kathiran (2+ Yrs)',
      image: '/assets/testimonials/G-Kathiran.png',
      quote: "Been associated with Appy Kidz for 2+ years and the journey has been fantastic. The faculty and staff treat every child with genuine patience, warmth, and individualized care.",
      year: 'KG'
    },
    {
      id: 'nushaan',
      studentName: 'Nushaan Konduru',
      grade: 'Pre-KG',
      parentRole: 'Parents of Nushaan',
      image: '/assets/testimonials/NUSHAAN-KONDURU.jpg',
      quote: "When Nushaan joined at age 3, he could barely speak words. With the patient guidance and speech activities from his teachers, he made a remarkable breakthrough and now speaks joyfully!",
      year: 'Pre-KG'
    },
    {
      id: 'd-shaanvi',
      studentName: 'D. Shaanvi',
      grade: 'Jr. KG',
      parentRole: 'Parent of D. Shaanvi',
      image: '/assets/testimonials/D.-Shaanvi.jpg',
      quote: "Appy Kidz is an excellent school for KG students. Their teaching methodology is superb, and the teachers are wonderfully friendly and attentive to each child's learning pace.",
      year: 'Jr. KG'
    },
    {
      id: 'rohitvel',
      studentName: 'Rohitvel',
      grade: 'Jr. KG',
      parentRole: 'Mother of Rohitvel',
      image: '/assets/testimonials/ROHITVEL.jpg',
      quote: "My son Rohit joined here and we noticed wonderful positive changes immediately. The staff are extremely good and organize great celebrations that children love!",
      year: 'Jr. KG'
    },
    {
      id: 'b-rithvik',
      studentName: 'B. Rithvik',
      grade: 'Playgroup',
      parentRole: 'Parents of B. Rithvik',
      image: '/assets/testimonials/B-RITHVIK.jpg',
      quote: "Excellent quality education, very disciplined, and truly focused on the child's future. Super staff — deeply caring, professional, and well organized!",
      year: 'Playgroup'
    },
    {
      id: 'nr-kailash',
      studentName: 'N. R. Kailash',
      grade: 'Kindergarten',
      parentRole: 'Father of N. R. Kailash',
      image: '/assets/testimonials/N.R.KAILASH-scaled.jpg',
      quote: "I am very happy that I chose Appy Kidz for my son. The playful, creative activities make children excited to attend school and learn effortlessly every day.",
      year: 'KG'
    },
    {
      id: 'tharun-karthik',
      studentName: 'Tharun Karthik Kadari',
      grade: 'Sr. KG',
      parentRole: 'Parents of Tharun Karthik',
      image: '/assets/testimonials/KADARI-THARUN-KARTHIK.jpg',
      quote: "We are fortunate to have our child at Appy Kidz. The teachers make every session engaging and interactive. The dedication put in by the team is truly exceptional!",
      year: 'Sr. KG'
    }
  ];

  const avatarScrollerRef = useRef(null);

  // Testimonials auto-advance every 2 seconds smoothly when not paused by user
  useEffect(() => {
    if (isTestiPaused) return;
    const timer = setInterval(() => {
      setActiveTestiIndex((prev) => (prev + 1) % parentTestimonials.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isTestiPaused, parentTestimonials.length]);

  // Smoothly scroll ONLY the internal thumbnail container without moving the browser window
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

  // Mobile carousel timer: auto advances every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % events.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [events.length]);

  return (
    <>
      {/* 1. TOP BAR (Strict Single Line: Contact, Social Media & Admission Enquiry) */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <a href="tel:+917022261013" className="topbar-item topbar-phone" title="Call Appy Kidz Bangalore">
              <Phone size={13} /> <span>+91 70222 61013</span>
            </a>
            <span className="topbar-item topbar-address desktop-only" title="Campus Address">
              <MapPin size={13} /> <span>Phase 2, Aduru, Kithaganur, Bengaluru - 560049</span>
            </span>
            <span className="topbar-item topbar-hours desktop-only">
              <Clock size={13} /> <span>Mon - Sat: 8:30 AM - 6:30 PM</span>
            </span>
          </div>

          <div className="topbar-right">
            <div className="social-links" aria-label="Social Media Links">
              <a
                href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Bangalore!%20I%20would%20like%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn social-wa"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={13} />
              </a>
              <a
                href="https://www.facebook.com/appykidzkithaganur"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn social-fb"
                title="Appy Kidz on Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon size={12} />
              </a>
              <a
                href="https://www.instagram.com/appykidzkithaganur?igsh=NTZjYjBnaDBpZXRk"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn social-ig"
                title="Appy Kidz on Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon size={13} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCON-pGKMUYeFqDKmIdBpp7Q"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn social-yt"
                title="Appy Kidz on YouTube"
                aria-label="YouTube"
              >
                <YouTubeIcon size={13} />
              </a>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="topbar-enquiry-link"
              title="Click for Admission Enquiry"
            >
              Admission Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* 2. REFINED NAVBAR (Clean Padding & Horizontal Alignment) */}
      <header className="header-nav">
        <div className="container header-container">
          <a href="#" className="brand-logo-wrap">
            <img
              src="/assets/official/logo-appy.png"
              alt="Appy Kidz International Pre School"
              className="brand-logo-img"
              onError={(e) => { e.target.src = '/assets/logo.jpg'; }}
            />
            <div className="brand-text">
              <span className="brand-title">APPY KIDZ</span>
              <span className="brand-subtitle">INTERNATIONAL PRE SCHOOL & DAY CARE</span>
            </div>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#hero" className="nav-pill active">Home</a></li>
              <li><a href="#about" className="nav-pill">About Us</a></li>
              <li><a href="#programs" className="nav-pill">Programs</a></li>
              <li><a href="#proud-moments" className="nav-pill">Proud Moments</a></li>
              <li><a href="#parents-corner" className="nav-pill">Parents Corner</a></li>
              <li><a href="#teachers" className="nav-pill">Our Teachers</a></li>
              <li><a href="#gallery" className="nav-pill">Events</a></li>
              <li><a href="#safety" className="nav-pill">Safety</a></li>
              <li><a href="#locations" className="nav-pill">Locations</a></li>
            </ul>
          </nav>

          <div className="header-right-actions">
            <button onClick={() => setIsModalOpen(true)} className="nav-cta-btn">
              <Calendar size={16} /> Book a School Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle Navigation"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div style={{ background: '#3F7511', padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>About Us</a>
              <a href="#programs" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Our Programs</a>
              <a href="#proud-moments" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Proud Moments</a>
              <a href="#parents-corner" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Parents Corner</a>
              <a href="#teachers" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Our Teachers</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Events Gallery</a>
              <a href="#safety" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Campus Safety</a>
              <a href="#locations" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', fontWeight: 'bold' }}>Locations</a>
              <button
                onClick={() => { setIsModalOpen(true); setMobileMenuOpen(false); }}
                className="nav-cta-btn"
                style={{ justifyContent: 'center', marginTop: '10px' }}
              >
                Book a School Visit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. FULL-WIDTH HERO BANNER SLIDER (Regenerated Themed Banners from Old Site) */}
      <section
        className="fullwidth-hero-section"
        id="hero"
        onMouseEnter={() => setIsBannerPaused(true)}
        onMouseLeave={() => setIsBannerPaused(false)}
      >
        {/* Full-Width Slider Stage */}
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

          {/* Sleek Minimalist Bottom Indicators on Banner */}
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

        {/* High-Conversion Fast-Action Bar Below Full-Width Banner */}
        <div className="hero-conversion-bar">
          <div className="container conversion-bar-content">
            <div className="conversion-lead">
              <span className="conversion-pulse-dot"></span>
              <span className="conversion-lead-text">
                <strong>Admissions Open 2026-27</strong> • Play Group, Nursery, Jr. KG, Sr. KG & Day Care
              </span>
            </div>
            <div className="conversion-btn-group">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
                <Calendar size={16} /> Book School Visit
              </button>
              <a
                href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Bangalore!%20I%20would%20like%20to%20enquire%20about%20preschool%20and%20daycare%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-wa"
              >
                <WhatsAppIcon size={16} /> WhatsApp Us
              </a>
              <a href="tel:+917022261013" className="btn-call-hero">
                <Phone size={15} /> +91 70222 61013
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3B. COMPACT ABOUT US SECTION (The First Step to Success - Authentic Content from Old Website) */}
      <section className="about-compact-section" id="about">
        <div className="container">
          <div className="about-compact-grid">
            <div className="about-compact-content">
              <div className="about-compact-badge">
                <Sparkles size={14} style={{ color: '#D97706' }} />
                <span>Welcome to Appy Kidz</span>
              </div>
              <h2 className="about-compact-title">
                The <em>First Step</em> to a Lifetime of Success
              </h2>
              <p className="about-compact-lead">
                A Pre-school environment that parents choose for their kids is very significant since it is the <strong>FIRST STEP</strong> that a child takes to explore the outside world without parental guidance — building the very <strong>FOUNDATION</strong> in setting the tune for learning for the years.
              </p>
              <p className="about-compact-sub">
                Early childhood is the most crucial phase of life because almost <strong>90% of a child’s brain is developed by age 5</strong>. At Appy Kidz, we shape young minds with joy, offering a spirit of freedom, encouragement, and guidance with highest priority given to cultural and social values, care, love, and protection.
              </p>
              
              <div className="about-compact-highlights">
                <div className="about-highlight-pill">
                  <span className="about-pill-icon">🏆</span>
                  <div>
                    <strong>17+ Years</strong>
                    <span>Educational Legacy</span>
                  </div>
                </div>
                <div className="about-highlight-pill">
                  <span className="about-pill-icon">🧠</span>
                  <div>
                    <strong>90% Brain Growth</strong>
                    <span>Montessori Play-Way</span>
                  </div>
                </div>
                <div className="about-highlight-pill">
                  <span className="about-pill-icon">🛡️</span>
                  <div>
                    <strong>100% Safe</strong>
                    <span>Child-Proofed Campus</span>
                  </div>
                </div>
              </div>

              <div className="about-compact-actions">
                <button onClick={() => setIsModalOpen(true)} className="btn-about-visit">
                  <Calendar size={15} /> Book a Campus Tour
                </button>
                <a href="#programs" className="btn-about-programs">
                  Explore Programs <ChevronRight size={15} />
                </a>
              </div>
            </div>

            <div className="about-compact-visual">
              <div className="about-visual-card">
                <img
                  src="/assets/classroom-activity-tables.jpg"
                  alt="Appy Kidz Montessori Classroom and Activity Center"
                  className="about-main-img"
                  onError={(e) => { e.target.src = '/assets/classroom-green-desks.jpg'; }}
                />
                <div className="about-floating-card">
                  <span className="about-floating-number">100%</span>
                  <span className="about-floating-label">Loving & Caring Environment</span>
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

      {/* 4. OUR PROGRAMS (Refined Custom Icons & Padding) */}
      <section className="programs-section" id="programs">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Play-Way & Montessori Curriculum</span>
            <h2 className="section-title-large">Our Programs</h2>
            <p className="section-subtitle-text">
              Thoughtfully engineered developmental stages that empower children with curiosity, literacy, emotional resilience, and boundless confidence.
            </p>
          </div>

          <div className="programs-icon-grid">
            {programs.map((prog) => (
              <div key={prog.id} className="program-icon-card">
                <div className={`program-circle-icon ${prog.circleClass}`}>
                  {prog.icon}
                </div>
                <h3 className="program-card-name">{prog.name}</h3>
                <span className={`program-age-pill ${prog.badgeClass}`}>{prog.badge}</span>
                <p className="program-short-desc">{prog.desc}</p>
                <button
                  onClick={() => {
                    setFormData({ ...formData, program: prog.name });
                    setIsModalOpen(true);
                  }}
                  className="program-link-btn"
                >
                  Book Visit <ChevronRight size={14} />
                </button>
              </div>
            ))}
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
                Meet <strong>Appy the Bookworm</strong>, our cheerful trademark ambassador! Appy brings stories to life, inspires early phonics & numeracy, and reminds every toddler that learning is an exciting daily discovery.
              </p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="mascot-banner-cta">
              Meet Appy on Campus <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. PROUD MOMENTS (Full Fitted Recognition - Not Zoomed) */}
      <section className="proud-moments-section" id="proud-moments">
        <div className="container">
          <div className="proud-grid">
            {/* Left: Authentic Un-Recolored Trophy and Certificate Photo (Fully Fitted) */}
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

              {/* View Selector Tabs */}
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

            {/* Right: Statement, Factual Credentials, Action */}
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
                Appy Kidz International Pre School, Bangalore is proud to be officially honored with the <strong>“Best Pre School Startup”</strong> at the prestigious <strong>30th Edition Indian School Awards, Bangalore</strong>. This milestone celebrates our commitment to creating an affectionate, scientifically structured, and deeply secure early learning sanctuary.
              </p>

              <div className="proud-cta-row">
                <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
                  <Calendar size={18} /> Schedule a Campus Tour
                </button>
                <a
                  href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Bangalore!%20Congratulations%20on%20winning%20Best%20Pre%20School%20Startup!%20I%20would%20like%20to%20know%20more%20about%20admissions."
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

      {/* 6. PARENTS CORNER (Clean Custom Animated SVG Hot Air Balloon) */}
      <section className="parents-corner-section" id="parents-corner">
        <div className="container parents-grid">
          {/* Custom Handcrafted SVG Hot Air Balloon - Zero Crop Artifacts */}
          <div className="balloon-stage">
            <svg
              className="custom-svg-balloon"
              viewBox="0 0 320 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="balloonGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000" floodOpacity="0.25" />
                </filter>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Background Tiny Floating Cloud */}
              <path d="M40 90C40 82 46 76 54 76C56 68 64 62 73 62C83 62 91 69 93 78C98 78 103 83 103 89C103 95 98 100 92 100H48C43.5 100 40 95.5 40 90Z" fill="url(#cloudGrad)" />
              <path d="M230 160C230 153 235 147 242 147C244 140 251 135 259 135C268 135 275 141 277 149C281 149 285 153 285 158C285 163 281 167 276 167H237C233 167 230 164 230 160Z" fill="url(#cloudGrad)" />

              {/* Hot Air Balloon Envelope */}
              <g filter="url(#balloonGlow)">
                {/* Center Stripe: Mint Green */}
                <path d="M160 50C132 50 118 85 125 150C130 195 150 230 160 245C170 230 190 195 195 150C202 85 188 50 160 50Z" fill="#10B981" />
                
                {/* Left Inner Stripe: Soft Coral */}
                <path d="M125 150C118 85 132 50 160 50C138 52 110 70 96 110C84 145 92 185 108 215C122 235 142 242 160 245C150 230 130 195 125 150Z" fill="#F43F5E" />
                
                {/* Right Inner Stripe: Sunshine Yellow */}
                <path d="M195 150C202 85 188 50 160 50C182 52 210 70 224 110C236 145 228 185 212 215C198 235 178 242 160 245C170 230 190 195 195 150Z" fill="#FBBF24" />

                {/* Left Outer Stripe: Sky Blue */}
                <path d="M96 110C80 135 78 165 88 190C100 215 118 232 140 243C124 238 108 218 96 195C88 170 88 140 96 110Z" fill="#38BDF8" />

                {/* Right Outer Stripe: Lavender Violet */}
                <path d="M224 110C240 135 242 165 232 190C220 215 202 232 180 243C196 238 212 218 224 195C232 170 232 140 224 110Z" fill="#A855F7" />

                {/* Top Cap */}
                <ellipse cx="160" cy="52" rx="16" ry="6" fill="#FDE047" />

                {/* Decorative Bunting Swags */}
                <path d="M98 140Q128 165 160 148Q192 165 222 140" stroke="#FFFFFF" strokeWidth="3" fill="none" />
                <polygon points="120,150 128,162 136,150" fill="#FDE047" />
                <polygon points="152,152 160,165 168,152" fill="#F43F5E" />
                <polygon points="184,150 192,162 200,150" fill="#38BDF8" />

                {/* Burner Collar */}
                <rect x="148" y="244" width="24" height="8" rx="3" fill="#D97706" />

                {/* Suspension Rigging Ropes */}
                <line x1="148" y1="252" x2="140" y2="280" stroke="#78350F" strokeWidth="2" strokeDasharray="3 2" />
                <line x1="156" y1="252" x2="152" y2="280" stroke="#78350F" strokeWidth="2" />
                <line x1="164" y1="252" x2="168" y2="280" stroke="#78350F" strokeWidth="2" />
                <line x1="172" y1="252" x2="180" y2="280" stroke="#78350F" strokeWidth="2" strokeDasharray="3 2" />

                {/* Woven Wicker Basket */}
                <rect x="136" y="280" width="48" height="34" rx="6" fill="#B45309" />
                <rect x="140" y="284" width="40" height="26" rx="4" fill="#D97706" />
                <line x1="136" y1="290" x2="184" y2="290" stroke="#78350F" strokeWidth="2" />
                <line x1="136" y1="298" x2="184" y2="298" stroke="#78350F" strokeWidth="2" />
                <line x1="136" y1="306" x2="184" y2="306" stroke="#78350F" strokeWidth="2" />
                <line x1="150" y1="284" x2="150" y2="310" stroke="#78350F" strokeWidth="1.5" />
                <line x1="162" y1="284" x2="162" y2="310" stroke="#78350F" strokeWidth="1.5" />
                <line x1="174" y1="284" x2="174" y2="310" stroke="#78350F" strokeWidth="1.5" />

                {/* Basket Bunting */}
                <polygon points="144,284 150,292 156,284" fill="#FEF08A" />
                <polygon points="164,284 170,292 176,284" fill="#FEF08A" />
              </g>

              {/* Foreground Fluffy Cloud Floating Near Basket */}
              <path d="M30 320C30 306 41 295 55 295C58 281 70 270 85 270C101 270 114 282 117 298C123 298 130 306 130 315C130 326 122 335 110 335H45C36.7 335 30 328.3 30 320Z" fill="#FFFFFF" fillOpacity="0.95" />
            </svg>
          </div>

          <div className="parents-content">
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
              Family Partnership
            </span>
            <h2 className="parents-headline">Parents Corner</h2>
            <p className="parents-intro-text">
              We believe early childhood growth flourishes when preschool educators and parents collaborate seamlessly. Our Parents Corner equips you with actionable resources, transparent communication, and developmental guidance.
            </p>

            <div className="parents-feature-list">
              <div className="parent-feature-item">
                <CheckCircle2 size={22} color="#FEF08A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Milestone Progress Trackers</strong>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Regular constructive insights into speech, motor skills, and social behavior.</p>
                </div>
              </div>
              <div className="parent-feature-item">
                <CheckCircle2 size={22} color="#FEF08A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Nutritious Meal Plans</strong>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Pediatrician-aligned dietary recommendations for growing toddlers.</p>
                </div>
              </div>
              <div className="parent-feature-item">
                <CheckCircle2 size={22} color="#FEF08A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Home Play Activity Guides</strong>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Simple weekend games that reinforce phonics and spatial thinking.</p>
                </div>
              </div>
              <div className="parent-feature-item">
                <CheckCircle2 size={22} color="#FEF08A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Positive Parenting Webinars</strong>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Expert sessions addressing tantrums, screen time, and gentle discipline.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                alert('Appy Kidz Parent Handbook & Syllabus overview will be sent to your WhatsApp!');
                window.open('https://wa.me/917022261013?text=Hi!%20Please%20share%20the%20Appy%20Kidz%20Parent%20Handbook%20and%20Curriculum%20Overview.', '_blank');
              }}
              className="btn-read-more-parent"
            >
              Get Parent Handbook <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. OUR TEACHERS (Full Fitted Cards with Bottom Gradient Overlay) */}
      <section className="teachers-section" id="teachers">
        <div className="container">
          <div className="teachers-header">
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#FEF08A' }}>
              Compassionate Mentors
            </span>
            <h2 className="teachers-title">Our Teachers</h2>
            <p className="teachers-subtitle">
              Qualified early childhood educators trained in play-based pedagogy, emotional intelligence, and first aid. They provide patient, individualized attention to ignite every child’s spark.
            </p>
          </div>

          <div className="teachers-gallery-grid">
            {teacherPhotos.map((t, idx) => (
              <div
                key={idx}
                className="teacher-photo-card"
                onClick={() => setLightboxImg(t.img)}
                title="Click to view educator photo"
              >
                <img src={t.img} alt={t.title} className="teacher-full-img" />
                <div className="teacher-overlay-scrim">
                  <div className="teacher-caption-title">{t.title}</div>
                  <div className="teacher-caption-sub">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EVENTS GALLERY (Full Bleed Image + Mobile 2s Auto Carousel) */}
      <section className="events-section" id="gallery">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Learning in Action</span>
            <h2 className="section-title-large">Events Gallery</h2>
            <p className="section-subtitle-text">
              Every day at Appy Kidz is packed with dynamic themes, experiential activities, and cultural festivals that cultivate genuine curiosity.
            </p>
          </div>

          {/* Desktop 3-Column Grid with Clean Posters & On-Hover Overlays */}
          <div className="events-desktop-grid">
            {events.map((ev, idx) => (
              <div
                key={idx}
                className="event-card"
                onClick={() => setLightboxImg(ev.img)}
                title="Hover for details • Click to expand"
              >
                {/* Default Clean Category Tag on Top Left */}
                <div className="event-card-default-badge">
                  <span className={`event-badge ${ev.badgeClass}`} style={{ marginBottom: 0 }}>
                    {ev.category}
                  </span>
                </div>

                <img src={ev.img} alt={ev.title} className="event-card-full-img" />

                {/* Overlaid ONLY on Hover */}
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

          {/* Mobile Auto-Carousel (Advances Smoothly Every 2.5s with Clean Caption Below) */}
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

            {/* Clean Mobile Info Card Below Image - Poster Remains 100% Uncovered */}
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

            {/* Carousel Dot Indicators */}
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

      {/* 9. CAMPUS SAFETY & FACILITIES (Full Card Photos + Overlaid Info) */}
      <section className="safety-section" id="safety">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag" style={{ background: '#DCFCE7', color: '#15803D' }}>
              Your Child’s Well-being First
            </span>
            <h2 className="section-title-large">Campus Safety & Facilities</h2>
            <p className="section-subtitle-text">
              We maintain uncompromising child-proofing protocols. Every hallway, staircase, and play station is engineered for complete safety and freedom of movement.
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHAT OUR HAPPY PARENTS SAY (Interactive Showcase from Authentic Website Reviews) */}
      {/* 10. WHAT OUR HAPPY PARENTS SAY (Compact & High-Trust Authentic Showcase) */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="testi-header-box">
            <h2 className="testimonials-title">What Our Happy Parents Say</h2>
            <p className="testimonials-subtitle">
              Authentic stories and reviews from parents across our 17+ years of early education.
            </p>
          </div>

          {/* Compact Testimonial Spotlight Card */}
          <div 
            className="testimonials-compact-card"
            onMouseEnter={() => setIsTestiPaused(true)}
            onMouseLeave={() => setIsTestiPaused(false)}
          >
            {/* Animated Slide Content (Smooth crossfade every 2s) */}
            <div key={activeTestiIndex} className="testi-slide-content">
              {/* Header: Student Avatar, Name, Grade & Stars */}
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

              {/* Quote Body */}
              <blockquote className="testi-quote-text">
                “{parentTestimonials[activeTestiIndex].quote}”
              </blockquote>
            </div>

            {/* Footer Navigation */}
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

          {/* Quick-Switch Student Photo Row */}
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

      {/* 11. FINAL CONVERSION CALL TO ACTION (Whimsical Kiddy Playground BG) */}
      <section className="final-cta-section">
        <div className="container">
          <h2 className="final-cta-title">Ready for Their First Big Step?</h2>
          <p className="final-cta-sub">
            Admissions are open for Playgroup, Nursery, Junior KG, Senior KG, and Day Care at our Bangalore (Kithaganur) campus. Schedule a personalized walkthrough today!
          </p>
          <div className="final-cta-buttons">
            <button onClick={() => setIsModalOpen(true)} className="btn-primary-hero">
              <Calendar size={20} /> Book a School Visit
            </button>
            <a
              href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Bangalore!%20I%20am%20ready%20to%20enroll%20my%20child.%20Please%20share%20the%20admission%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-wa"
            >
              <WhatsAppIcon size={20} /> Chat on WhatsApp
            </a>
            <a href="tel:+917022261013" className="btn-call-hero">
              <Phone size={18} /> Call +91 70222 61013
            </a>
          </div>
        </div>
      </section>

      {/* 12. LOCATIONS & NETWORK FOOTER (Warm Terracotta / Coral) */}
      <footer className="locations-footer-section" id="locations">
        <div className="container">
          <div className="locations-header">
            <h2 className="locations-title">Locations</h2>
            <img
              src="/assets/official/logo-appy.png"
              alt="Appy Kidz"
              className="locations-brand-logo"
              onError={(e) => { e.target.src = '/assets/logo.jpg'; }}
            />
          </div>

          <div className="locations-grid">
            {/* Primary Featured: Bangalore Campus */}
            <div className="location-card featured-bangalore">
              <span className="featured-pill">⭐ FEATURED CAMPUS</span>
              <h3 className="location-name">Bangalore</h3>
              <p className="location-address">
                Phase 2, Aduru, Kithaganur,<br />
                Bengaluru, Karnataka - 560049<br />
                <em>(Near TC Palya, KR Puram & Battarahalli)</em>
              </p>
              <div className="location-phone">
                <Phone size={16} /> +91 70222 61013
              </div>
              <div className="location-links">
                <button onClick={() => setIsModalOpen(true)} className="location-link-btn">
                  Book Visit
                </button>
                <a
                  href="https://maps.google.com/?q=Appy+Kidz+International+Pre+School+Kithaganur+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link-btn"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Chennai Network Centers */}
            <div className="location-card">
              <h3 className="location-name">Thirumullaivoyal</h3>
              <p className="location-address">
                No. 8, Raghavan Street, Saraswathi Nagar,<br />
                Thirumullaivoyal, Chennai - 600062
              </p>
              <div className="location-phone">
                <Phone size={14} /> +91 91764 77733
              </div>
              <div className="location-links">
                <a href="tel:+919176477733" className="location-link-btn">Call Centre</a>
              </div>
            </div>

            <div className="location-card">
              <h3 className="location-name">Avadi</h3>
              <p className="location-address">
                No. 12, Nehru Street, Ram Nagar, Avadi,<br />
                (Near Murugappa Polytechnic), Chennai - 600071
              </p>
              <div className="location-phone">
                <Phone size={14} /> +91 91764 77733
              </div>
              <div className="location-links">
                <a href="tel:+919176477733" className="location-link-btn">Call Centre</a>
              </div>
            </div>

            <div className="location-card">
              <h3 className="location-name">Pattabiram</h3>
              <p className="location-address">
                No. 2/1, CTH Road (Beside Nilgiris),<br />
                Pattabiram, Chennai - 600072
              </p>
              <div className="location-phone">
                <Phone size={14} /> +91 91764 77733
              </div>
              <div className="location-links">
                <a href="tel:+919176477733" className="location-link-btn">Call Centre</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              &copy; {new Date().getFullYear()} Appy Kidz International Pre School. All rights reserved.
            </div>
            <div>
              Keywords: Nursery in Kithaganur | Daycare Bangalore East | Pre School TC Palya | Kindergarten Aduru 560049
            </div>
          </div>
        </div>
      </footer>

      {/* 13. FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Bangalore!%20I%20would%20like%20to%20inquire%20about%20preschool%20and%20daycare%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat With Us on WhatsApp"
      >
        <WhatsAppIcon size={26} />
        <span>Chat With Us</span>
      </a>

      {/* 14. ADMISSION ENQUIRY MODAL (Matching Trademark Worm Mascot Screenshot) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admission-enquiry-card" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header with Worm Mascot & Close Button */}
            <div className="admission-modal-header">
              <div className="admission-header-left">
                <img
                  src="/assets/official/worm-mascot.png"
                  alt="Appy Kidz Official Worm Mascot"
                  className="admission-worm-mascot"
                />
                <h3 className="admission-modal-title">Admission Enquiry Form</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="admission-modal-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {formSubmitted ? (
              <div className="admission-success-box">
                <CheckCircle2 size={48} color="#16A34A" />
                <h4>Enquiry Submitted Successfully!</h4>
                <p>Opening WhatsApp to connect directly with our admissions counselor in Bangalore...</p>
              </div>
            ) : (
              <form onSubmit={handleVisitSubmit} className="admission-form-body">
                <div className="admission-input-wrap">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="admission-input-styled"
                  />
                </div>

                <div className="admission-input-wrap">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="admission-input-styled"
                  />
                </div>

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

                <div className="admission-select-block">
                  <label className="admission-select-label">Program Interested in</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleFormChange}
                    className="admission-select-styled"
                  >
                    <option value="Pre School Play Group">Pre School Play Group (1.5 - 2.5 yrs)</option>
                    <option value="Nursery Pre-KG">Nursery Pre-KG (2.5 - 3.5 yrs)</option>
                    <option value="Junior KG">Junior KG (3.5 - 4.5 yrs)</option>
                    <option value="Senior KG">Senior KG (4.5 - 5.5 yrs)</option>
                    <option value="Day Care & Extended">Day Care & Extended Care</option>
                  </select>
                </div>

                <div className="admission-input-wrap">
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="admission-textarea-styled"
                  />
                </div>

                {/* Captcha Verification Row matching screenshot */}
                <div className="admission-captcha-row">
                  <input
                    type="text"
                    required
                    placeholder="Captcha Code *"
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

                {/* Orange Rounded Submit Button */}
                <div className="admission-submit-wrap">
                  <button type="submit" className="admission-btn-submit">
                    Submit
                  </button>
                </div>

                {/* Instant WhatsApp alternative */}
                <div className="admission-wa-direct-row">
                  <a
                    href="https://wa.me/917022261013?text=Hello%20Appy%20Kidz%20Bangalore!%20I%20would%20like%20to%20enquire%20about%20admissions%20for%20my%20child."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admission-wa-direct-link"
                  >
                    <WhatsAppIcon size={16} /> Or Connect Instantly on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 15. IMAGE LIGHTBOX MODAL */}
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
