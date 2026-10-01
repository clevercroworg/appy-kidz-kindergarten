import './globals.css';

export const metadata = {
  metadataBase: new URL('https://appykidz.in'),
  title: {
    default: 'Appy Kidz International Pre School & Day Care | Best Preschool in Kithaganur, Bangalore',
    template: '%s | Appy Kidz International Pre School Bangalore',
  },
  description: 'Award-Winning Preschool, Nursery, Kindergarten & Day Care in Kithaganur, Aduru, TC Palya, Bangalore East. 100% child-proofed campus, Montessori play-way curriculum. Admissions Open 2026-27! Call +91 70222 61013.',
  keywords: [
    'preschool in Kithaganur',
    'best preschool in Kithaganur Bangalore',
    'nursery in Kithaganur',
    'daycare in Kithaganur Bangalore East',
    'play school in Aduru Kithaganur',
    'kindergarten near TC Palya',
    'best preschool near KR Puram',
    'child care center Battarahalli',
    'Montessori play school Kithaganur',
    'preschool admissions 2026-27 Bangalore',
    'Appy Kidz International Pre School Bangalore',
    'best playgroup in Bangalore East 560049',
    'Indian School Awards best preschool startup',
    'top kindergarten in Bangalore East',
    'early childhood education Bengaluru'
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
    title: 'Appy Kidz International Pre School & Day Care | Admissions Open 2026-27',
    description: 'Award-Winning Preschool, Nursery, Kindergarten & Day Care in Kithaganur, Bangalore East. Rated Best Pre School Startup at 30th Edition Indian School Awards. Book a campus tour today!',
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
    title: 'Appy Kidz International Pre School & Day Care | Bangalore',
    description: 'Premier Preschool, Nursery & Daycare in Kithaganur, Bangalore East. 100% Child-Proofed Campus & Montessori Play-Way Curriculum.',
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
        url: 'https://appykidz.in',
        logo: 'https://appykidz.in/assets/official/logo-appy.png',
        image: 'https://appykidz.in/assets/award-stage.jpg',
        description: 'Premier preschool, nursery, kindergarten, and daycare facility located in Kithaganur, Bangalore. Winner of Best Pre School Startup at the 30th Edition Indian School Awards.',
        award: 'Best Pre School Startup - 30th Edition Indian School Awards, Bangalore',
        telephone: '+91 70222 61013',
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
          'Bengaluru East'
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:30',
            closes: '18:30'
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
