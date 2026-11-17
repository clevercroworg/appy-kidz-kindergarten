export const metadata = {
  title: {
    absolute: 'Privacy Policy | Appy Kidz International Pre School Kithaganur',
  },
  description: 'Read the official Privacy Policy of Appy Kidz International Pre School & Day Care, Kithaganur, Bengaluru. Learn how we protect parental and child personal data.',
  alternates: {
    canonical: 'https://appykidz.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Appy Kidz International Pre School Kithaganur',
    description: 'Learn how Appy Kidz Kithaganur collects, uses, and safeguards parental and student information with full transparency and safety compliance.',
    url: 'https://appykidz.in/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicyLayout({ children }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://appykidz.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Privacy Policy',
        item: 'https://appykidz.in/privacy-policy',
      },
    ],
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
