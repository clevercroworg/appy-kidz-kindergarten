import './globals.css';

export const metadata = {
  metadataBase: new URL('https://appykidz.in'),
  title: {
    default: 'Preschool & Daycare in Kithaganur | Appy Kidz',
    template: '%s | Appy Kidz Kithaganur',
  },
  description: 'Explore preschool, nursery and daycare at Appy Kidz in Kithaganur, Bengaluru. Visit our Aduru campus and enquire about programmes and admissions.',
  keywords: [
    'Appy Kidz Kithaganur',
    'preschool and daycare in Kithaganur',
    'preschool in Kithaganur',
    'daycare in Kithaganur',
    'nursery school in Kithaganur',
    'play school in Kithaganur',
    'playgroup Kithaganur',
    'pre-KG Kithaganur',
    'childcare Kithaganur',
    'daycare near Aduru',
    'preschool near TC Palya',
    'preschool near Battarahalli',
    'preschool near KR Puram'
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
    title: 'Preschool & Daycare in Kithaganur | Appy Kidz',
    description: 'Explore preschool, nursery and daycare at Appy Kidz in Kithaganur, Bengaluru. Visit our Aduru campus and enquire about programmes and admissions.',
    url: 'https://appykidz.in',
    siteName: 'Appy Kidz International Pre School & Day Care — Kithaganur',
    images: [
      {
        url: '/assets/og-share-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Appy Kidz International Pre School & Day Care Kithaganur Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preschool & Daycare in Kithaganur | Appy Kidz',
    description: 'Explore preschool, nursery and daycare at Appy Kidz in Kithaganur, Bengaluru. Visit our Aduru campus and enquire about programmes and admissions.',
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
          streetAddress: 'Building No 30, Aryan Springz, Phase 2, Kithaganur',
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
            name: 'Where is Appy Kidz in Kithaganur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our Bengaluru campus is located at Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore, Karnataka 560049. Use the directions link on our Contact page to plan your visit.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which programmes are available at Appy Kidz Kithaganur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The campus offers Playgroup, Nursery / Pre-KG, Junior KG, Senior KG and Daycare. Contact our team to confirm age eligibility, timings and current availability for your child.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does Appy Kidz offer daycare in Kithaganur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Contact the Kithaganur campus to discuss your child’s age, preferred schedule and current daycare arrangements.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between preschool and daycare?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Preschool focuses on early learning through an age-appropriate programme. Daycare provides childcare for an agreed schedule. If you need both, ask our team how the available programmes can fit together.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I enquire about nursery admission?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Call +91 70222 61013 or send a WhatsApp message with your child’s age. Our team will explain current admission availability and help arrange a campus visit.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I visit the school before enrolling my child?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Book a school visit to explore the campus, meet our team and discuss the programme, timings, fees and admission process.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are the preschool and daycare fees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact our team for the current fee schedule for your chosen programme. Ask about registration, tuition, daycare charges and any additional items before enrolling.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is the campus an option for families near TC Palya or Battarahalli?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our campus is in Kithaganur. Families from TC Palya, Battarahalli and nearby neighbourhoods can check the directions and visit to decide whether the journey suits their daily routine.'
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
