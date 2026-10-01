import './globals.css';

export const metadata = {
  metadataBase: new URL('https://appykidz.in'),
  title: 'Appy Kidz International Pre School & Day Care | Nursery & Kindergarten in Kithaganur, Bangalore',
  description: 'Award-winning International Pre School, Nursery, Kindergarten & Day Care in Kithaganur, Aduru, Bangalore East. Recognized as Best Pre School Startup at 30th Edition Indian School Awards. Admissions Open!',
  keywords: [
    'nursery in Kithaganur',
    'daycare in Bangalore East',
    'pre school near TC Palya',
    'kindergarten Kithaganur',
    'play school in Aduru',
    'best preschool near KR Puram',
    'child care Battarahalli',
    'early childhood education Bengaluru',
    'Appy Kidz International Pre School Bangalore',
    'playgroup admissions Bangalore 560049',
    'safe daycare Kithaganur',
    'Montessori play school Bangalore'
  ],
  authors: [{ name: 'Appy Kidz International Pre School' }],
  creator: 'Appy Kidz International Pre School',
  publisher: 'Appy Kidz International Pre School',
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
    title: 'Appy Kidz International Pre School & Day Care | Kithaganur, Bangalore',
    description: 'Nurturing your child’s talent with playful learning, high safety standards, and dedicated educators. Best Pre School Startup Award Winner.',
    url: 'https://appykidz.in',
    siteName: 'Appy Kidz International Pre School',
    images: [
      {
        url: '/assets/award-trophy.jpg',
        width: 1200,
        height: 630,
        alt: 'Appy Kidz Bangalore Best Pre School Startup Award',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appy Kidz International Pre School & Day Care | Bangalore',
    description: 'Premier Preschool, Nursery & Daycare in Kithaganur, Bangalore East. Recognized as Best Pre School Startup.',
    images: ['/assets/award-trophy.jpg'],
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
