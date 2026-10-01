/**
 * APPY KIDZ INTERNATIONAL PRE-SCHOOL
 * Client-Side Application Logic · Interactive Modals, Lightbox & Conversion Flows
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initAwardSwitcher();
  initGalleryFiltering();
  initLightbox();
  initVisitModal();
  initScrollAnimations();
});

/* ==========================================================================
   MOBILE MENU DRAWER
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-list a, .mobile-drawer-footer a');

  if (!menuBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = menuBtn.classList.toggle('open');
    drawer.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    menuBtn.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', toggleMenu);
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   PROUD MOMENTS — AUTHENTIC AWARD IMAGE SWITCHER
   ========================================================================== */
function initAwardSwitcher() {
  const mainImg = document.getElementById('awardMainImg');
  const captionEl = document.getElementById('awardMainCaption');
  const tabBtns = document.querySelectorAll('.award-tab-btn');

  if (!mainImg || tabBtns.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const newSrc = btn.getAttribute('data-img-src');
      const newAlt = btn.getAttribute('data-img-alt');
      const newCaption = btn.getAttribute('data-img-caption');

      // Subtle opacity transition
      mainImg.style.opacity = '0.4';
      mainImg.style.transform = 'scale(0.98)';
      
      setTimeout(() => {
        mainImg.src = newSrc;
        mainImg.alt = newAlt;
        if (captionEl) captionEl.textContent = newCaption;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // Clicking main award image opens high-res lightbox
  mainImg.parentElement.addEventListener('click', () => {
    const activeBtn = document.querySelector('.award-tab-btn.active');
    const title = activeBtn ? activeBtn.getAttribute('data-img-alt') : 'Indian School Awards Recognition';
    const desc = activeBtn ? activeBtn.getAttribute('data-img-caption') : 'Appy Kidz International Pre School, Bangalore';
    openLightbox(mainImg.src, title, desc);
  });
}

/* ==========================================================================
   SEE THE SCHOOL — GALLERY CATEGORY FILTERING
   ========================================================================== */
function initGalleryFiltering() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (filterBtns.length === 0 || galleryCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   AUTHENTIC PHOTO LIGHTBOX
   ========================================================================== */
let lightboxBackdrop, lightboxImg, lightboxTitle, lightboxDesc, lightboxClose;

function initLightbox() {
  lightboxBackdrop = document.getElementById('lightboxBackdrop');
  lightboxImg = document.getElementById('lightboxImg');
  lightboxTitle = document.getElementById('lightboxTitle');
  lightboxDesc = document.getElementById('lightboxDesc');
  lightboxClose = document.getElementById('lightboxClose');

  if (!lightboxBackdrop) return;

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', (e) => {
    if (e.target === lightboxBackdrop || e.target.classList.contains('lightbox-content-box')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxBackdrop.classList.contains('open')) {
      closeLightbox();
    }
  });

  // Attach lightbox trigger to all gallery cards & safety thumbnails
  const triggers = document.querySelectorAll('[data-lightbox-src]');
  triggers.forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-lightbox-src');
      const title = el.getAttribute('data-lightbox-title') || 'Appy Kidz Campus';
      const desc = el.getAttribute('data-lightbox-desc') || 'Phase 2, Aduru, Kithaganur, Bengaluru';
      openLightbox(src, title, desc);
    });
  });
}

function openLightbox(src, title, desc) {
  if (!lightboxBackdrop || !lightboxImg) return;
  lightboxImg.src = src;
  if (lightboxTitle) lightboxTitle.textContent = title;
  if (lightboxDesc) lightboxDesc.textContent = desc;
  lightboxBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightboxBackdrop) return;
  lightboxBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   BOOK A SCHOOL VISIT / ADMISSION ENQUIRY MODAL FLOW
   ========================================================================== */
function initVisitModal() {
  const modal = document.getElementById('visitModal');
  const closeBtn = document.getElementById('visitModalClose');
  const openButtons = document.querySelectorAll('[data-open-visit-modal]');
  const form = document.getElementById('visitBookingForm');

  if (!modal) return;

  function openModal(defaultProgram = '') {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (defaultProgram && form) {
      const programSelect = form.querySelector('[name="program"]');
      if (programSelect) programSelect.value = defaultProgram;
    }
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const program = btn.getAttribute('data-program-preset') || '';
      openModal(program);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Form Submission with 1-click WhatsApp Integration
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const parentName = form.querySelector('[name="parentName"]').value.trim();
      const childName = form.querySelector('[name="childName"]').value.trim();
      const program = form.querySelector('[name="program"]').value;
      const phone = form.querySelector('[name="phone"]').value.trim();
      const visitDate = form.querySelector('[name="visitDate"]').value;
      const timeSlot = form.querySelector('[name="timeSlot"]').value;
      const notes = form.querySelector('[name="notes"]').value.trim();

      const message = `Hello Appy Kidz, I would like to schedule a school visit.%0A%0A*Parent Name:* ${encodeURIComponent(parentName)}%0A*Child Name:* ${encodeURIComponent(childName)}%0A*Program:* ${encodeURIComponent(program)}%0A*Contact Phone:* ${encodeURIComponent(phone)}%0A*Preferred Date:* ${encodeURIComponent(visitDate || 'Flexible')}%0A*Slot:* ${encodeURIComponent(timeSlot)}` + (notes ? `%0A*Note:* ${encodeURIComponent(notes)}` : '');

      const waUrl = `https://wa.me/917022261013?text=${message}`;

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      closeModal();
    });

    // Handle Direct WhatsApp Button inside Modal
    const waQuickBtn = document.getElementById('modalWhatsAppQuickBtn');
    if (waQuickBtn) {
      waQuickBtn.addEventListener('click', () => {
        const parentName = form.querySelector('[name="parentName"]').value.trim() || 'Parent';
        const program = form.querySelector('[name="program"]').value || 'Admission Inquiry';
        const quickMsg = `Hello Appy Kidz, I am ${encodeURIComponent(parentName)}. I would like to know more about admissions for ${encodeURIComponent(program)} and schedule a school visit.`;
        window.open(`https://wa.me/917022261013?text=${quickMsg}`, '_blank', 'noopener,noreferrer');
        closeModal();
      });
    }
  }
}

/* ==========================================================================
   SCROLL INTERSECTION OBSERVER ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const cards = document.querySelectorAll('.card-bezel, .journey-step-card, .trust-item, .safety-card-inner');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  cards.forEach(card => {
    card.style.opacity = '0.9';
    card.style.transform = 'translateY(12px)';
    card.style.transition = 'opacity 500ms ease, transform 500ms cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(card);
  });
}
