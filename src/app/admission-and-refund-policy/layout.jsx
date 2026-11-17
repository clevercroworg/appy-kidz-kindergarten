export const metadata = {
  title: {
    absolute: 'Admission & Refund Policy | Appy Kidz International Pre School Kithaganur',
  },
  description: 'Understand the admission procedure, fee schedule guidelines, cancellation, and refund policy of Appy Kidz International Pre School & Day Care, Kithaganur, Bengaluru.',
  alternates: {
    canonical: 'https://appykidz.in/admission-and-refund-policy',
  },
  openGraph: {
    title: 'Admission & Refund Policy | Appy Kidz International Pre School Kithaganur',
    description: 'Clear guidelines on admission enrollment, fee structure transparency, withdrawal notice periods, and refund policies for preschool and daycare in Kithaganur.',
    url: 'https://appykidz.in/admission-and-refund-policy',
    type: 'website',
  },
};

export default function AdmissionAndRefundPolicyLayout({ children }) {
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
        name: 'Admission & Refund Policy',
        item: 'https://appykidz.in/admission-and-refund-policy',
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
