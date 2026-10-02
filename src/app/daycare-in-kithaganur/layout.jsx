export const metadata = {
  title: {
    absolute: 'Daycare in Kithaganur, Bengaluru | Appy Kidz',
  },
  description: 'Looking for daycare in Kithaganur? Contact Appy Kidz in Aduru to discuss childcare availability, age eligibility, timings and a campus visit.',
  alternates: {
    canonical: 'https://appykidz.in/daycare-in-kithaganur',
  },
  openGraph: {
    title: 'Daycare in Kithaganur, Bengaluru | Appy Kidz',
    description: 'Looking for daycare in Kithaganur? Contact Appy Kidz in Aduru to discuss childcare availability, age eligibility, timings and a campus visit.',
    url: 'https://appykidz.in/daycare-in-kithaganur',
  }
};

export default function DaycareLayout({ children }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://appykidz.in'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Daycare in Kithaganur',
        'item': 'https://appykidz.in/daycare-in-kithaganur'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
