import { useEffect } from 'react';
import { SITE } from '@/constants';

export default function SEO({
  title,
  description,
  url,
  image,
  type = 'website',
}) {
  const pageTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} - ${SITE.tagline}`;
  const pageDescription = description || SITE.description;
  const pageUrl = url ? `${SITE.url}${url}` : SITE.url;
  const pageImage = image || `${SITE.url}/og-image.jpg`;

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', pageDescription);
    setMeta('author', SITE.name);
    setMeta('language', 'en');

    setMeta('og:type', type, 'property');
    setMeta('og:title', pageTitle, 'property');
    setMeta('og:description', pageDescription, 'property');
    setMeta('og:url', pageUrl, 'property');
    setMeta('og:image', pageImage, 'property');
    setMeta('og:site_name', SITE.name, 'property');
    setMeta('og:locale', 'en_IN', 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', pageDescription);
    setMeta('twitter:image', pageImage);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE.name,
      description: SITE.description,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      image: pageImage,
      logo: `${SITE.url}/brandlogo.webp`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9352',
        longitude: '77.6245',
      },
      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE.googleRating,
        reviewCount: SITE.reviewCount,
        bestRating: '5',
        worstRating: '1',
      },
      priceRange: '₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '09:00',
          closes: '17:00',
        },
      ],
      sameAs: Object.values(SITE.social).filter(Boolean),
    };

    const websiteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE.url}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };

    const scripts = [
      { id: 'sd-local', data: structuredData },
      { id: 'sd-website', data: websiteData },
    ];

    scripts.forEach(({ id, data }) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });
  }, [pageTitle, pageDescription, pageUrl, pageImage, type]);

  return null;
}
