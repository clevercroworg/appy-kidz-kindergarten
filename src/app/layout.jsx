import './globals.css';

export const metadata = {
  metadataBase: new URL('https://appykidz.in'),
  title: {
    default: 'Best Preschool & Day Care in Kithaganur, Bangalore | Appy Kidz',
    template: '%s | Appy Kidz Pre School Bangalore',
  },
  description: 'Best preschool, nursery & daycare in Kithaganur, Bangalore. Safe CCTV campus & Montessori play-way learning. Admissions open 2026-27! Call +91 70222 61013.',
  keywords: [
    // Real parent local search queries
    'preschool in kithaganur',
    'best preschool in kithaganur',
    'play school in kithaganur',
    'daycare in kithaganur',
    'nursery school in kithaganur',
    'play school near me',
    'best daycare near me',
    'kindergarten near tc palya',
    'play school in aduru',
    'daycare near battarahalli',
    'preschool near kr puram bangalore',
    'preschool near seegehalli medahalli',
    // Admission & program search queries
    'preschool admissions 2026-27',
    'playgroup admission near me',
    'nursery admission in bangalore',
    'lkg ukg admission near me',
    'after school daycare kithaganur',
    'toddler daycare kithaganur bangalore',
    // Safety & curriculum parent priorities
    'safe preschool with cctv bangalore',
    'montessori play school kithaganur',
    'affordable preschool in bangalore east',
    'award winning preschool bangalore',
    // Brand queries
    'appy kidz international pre school',
    'appy kidz kithaganur',
    'appy kidz bangalore',
    'child care center kithaganur 560049'
  ],
  authors: [{ name: 'Appy Kidz International Pre School' }],
  creator: 'Appy Kidz International Pre School',
  publisher: 'Appy Kidz International Pre School',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Appy Kidz | Best Preschool & Day Care in Kithaganur, Bangalore',
    description: 'Award-winning preschool, nursery & daycare in Kithaganur. Safe CCTV campus, Montessori play-way learning & caring staff. Admissions Open 2026-27!',
    url: 'https://appykidz.in',
    siteName: 'Appy Kidz International Pre School & Day Care',
    images: [
      {
        url: '/assets/og-share-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Appy Kidz International Pre School & Day Care Bangalore - Admissions Open 2026-27',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Preschool & Daycare in Kithaganur | Appy Kidz Bangalore',
    description: 'Safe child-friendly campus, Montessori learning & CCTV daycare in Kithaganur, Bangalore East. Admissions Open 2026-27.',
    images: ['/assets/og-share-preview.jpg'],
  },
  alternates: {
    canonical: 'https://appykidz.in',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'Preschool', 'ChildCare'],
        '@id': 'https://appykidz.in/#organization',
        name: 'Appy Kidz International Pre School & Day Care, Bangalore',
        alternateName: ['Appy Kidz Preschool Kithaganur', 'Appy Kidz Kindergarten'],
        url: 'https://appykidz.in',
        logo: 'https://appykidz.in/assets/official/logo-appy.png',
        image: 'https://appykidz.in/assets/og-share-preview.jpg',
        description: 'Premier preschool, nursery, kindergarten, and daycare in Kithaganur, Bangalore East. Awarded Best Pre School Startup at 30th Edition Indian School Awards. Child-proofed campus with CCTV monitoring and Montessori curriculum.',
        award: 'Best Pre School Startup - 30th Edition Indian School Awards, Bangalore',
        telephone: '+91 70222 61013',
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Net Banking, Cheque',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Phase 2, Aduru, Kithaganur',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          postalCode: '560049',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '13.0235',
          longitude: '77.7212'
        },
        areaServed: [
          'Kithaganur',
          'Aduru',
          'TC Palya',
          'Battarahalli',
          'KR Puram',
          'Medahalli',
          'Seegehalli',
          'Bengaluru East'
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:30',
            closes: '18:30'
          }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Academic & Daycare Programs',
          itemListElement: [
            {
              '@type': 'Course',
              name: 'Playgroup (1.5 - 2.5 Years)',
              description: 'Sensory exploration, language initiation, motor skill development in a playful environment.'
            },
            {
              '@type': 'Course',
              name: 'Nursery (2.5 - 3.5 Years)',
              description: 'Early literacy, phonics, numbers, socialization and creative arts.'
            },
            {
              '@type': 'Course',
              name: 'LKG (3.5 - 4.5 Years)',
              description: 'Reading, writing foundation, logical reasoning, and theme-based cognitive learning.'
            },
            {
              '@type': 'Course',
              name: 'UKG (4.5 - 5.5 Years)',
              description: 'School readiness, advanced vocabulary, science concepts, and confident public speaking.'
            },
            {
              '@type': 'Course',
              name: 'Infant & Daycare Facility (1.5+ Years)',
              description: 'Safe, CCTV-monitored, nurturing post-school and full-day childcare for working parents.'
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://appykidz.in/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which is the best preschool and daycare in Kithaganur, Bangalore?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Appy Kidz International Pre School is recognized as one of the best preschools and daycare centers in Kithaganur, Bangalore East. Winner of Best Pre School Startup at the 30th Edition Indian School Awards, it features 100% child-proofed classrooms, live CCTV monitoring, and an activity-driven Montessori curriculum.'
            }
          },
          {
            '@type': 'Question',
            name: 'What programs and age groups are offered at Appy Kidz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Appy Kidz caters to children aged 1.5 to 6 years across Playgroup (1.5 - 2.5 yrs), Nursery (2.5 - 3.5 yrs), LKG (3.5 - 4.5 yrs), UKG (4.5 - 5.5 yrs), and extended Daycare facilities for working parents.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are admissions open for 2026-27 at Appy Kidz Kithaganur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Admissions are officially open for the 2026-27 academic session. Parents can schedule a campus tour or apply online by calling +91 70222 61013.'
            }
          },
          {
            '@type': 'Question',
            name: 'What safety measures are in place at Appy Kidz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Appy Kidz provides a 100% child-proofed campus with full CCTV surveillance, police-verified caring staff, sanitized play zones, first-aid readiness, and strict pick-up authentication protocols.'
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
