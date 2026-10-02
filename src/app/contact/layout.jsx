export const metadata = {
  title: {
    absolute: 'Contact Appy Kidz Kithaganur | Visit & Admissions',
  },
  description: 'Contact Appy Kidz at Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore. Call +91 70222 61013 for preschool, nursery and daycare enquiries or school visits.',
  alternates: {
    canonical: 'https://appykidz.in/contact',
  },
  openGraph: {
    title: 'Contact Appy Kidz Kithaganur | Visit & Admissions',
    description: 'Contact Appy Kidz at Building No 30, Aryan Springz, Phase 2, Kithaganur, Bangalore. Call +91 70222 61013 for preschool, nursery and daycare enquiries or school visits.',
    url: 'https://appykidz.in/contact',
  }
};

export default function ContactLayout({ children }) {
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
        'name': 'Contact & Directions',
        'item': 'https://appykidz.in/contact'
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
