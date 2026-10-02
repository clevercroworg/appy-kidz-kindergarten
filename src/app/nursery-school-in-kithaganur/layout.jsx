export const metadata = {
  title: {
    absolute: 'Nursery School in Kithaganur | Pre-KG | Appy Kidz',
  },
  description: 'Explore nursery and pre-KG at Appy Kidz in Kithaganur. Learn about early language, number activities and admission enquiries. Book a campus visit.',
  alternates: {
    canonical: 'https://appykidz.in/nursery-school-in-kithaganur',
  },
  openGraph: {
    title: 'Nursery School in Kithaganur | Pre-KG | Appy Kidz',
    description: 'Explore nursery and pre-KG at Appy Kidz in Kithaganur. Learn about early language, number activities and admission enquiries. Book a campus visit.',
    url: 'https://appykidz.in/nursery-school-in-kithaganur',
  }
};

export default function NurseryLayout({ children }) {
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
        'name': 'Nursery School in Kithaganur',
        'item': 'https://appykidz.in/nursery-school-in-kithaganur'
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
