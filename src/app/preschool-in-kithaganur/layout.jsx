export const metadata = {
  title: {
    absolute: 'Preschool in Kithaganur | Playgroup & KG | Appy Kidz',
  },
  description: 'Discover playgroup and kindergarten programmes at Appy Kidz preschool in Kithaganur. Explore our approach to early learning and book a school visit.',
  alternates: {
    canonical: 'https://appykidz.in/preschool-in-kithaganur',
  },
  openGraph: {
    title: 'Preschool in Kithaganur | Playgroup & KG | Appy Kidz',
    description: 'Discover playgroup and kindergarten programmes at Appy Kidz preschool in Kithaganur. Explore our Montessori and play-way approach and book a campus visit.',
    url: 'https://appykidz.in/preschool-in-kithaganur',
  }
};

export default function PreschoolLayout({ children }) {
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
        'name': 'Preschool in Kithaganur',
        'item': 'https://appykidz.in/preschool-in-kithaganur'
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
