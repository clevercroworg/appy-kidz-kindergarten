export const metadata = {
  title: {
    absolute: 'Terms and Conditions | Appy Kidz International Pre School Kithaganur',
  },
  description: 'Read the Terms and Conditions for using the Appy Kidz International Pre School & Day Care website, booking campus visits, and submitting admission inquiries.',
  alternates: {
    canonical: 'https://appykidz.in/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | Appy Kidz International Pre School Kithaganur',
    description: 'Terms of use, admission booking guidelines, visitor code of conduct, and legal framework for Appy Kidz Kithaganur, Bengaluru.',
    url: 'https://appykidz.in/terms-and-conditions',
    type: 'website',
  },
};

export default function TermsAndConditionsLayout({ children }) {
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
        name: 'Terms and Conditions',
        item: 'https://appykidz.in/terms-and-conditions',
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
