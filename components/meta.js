import Head from 'next/head'

export default ({
  title = 'Sunday Hacks',
  description = 'A five week CS camp for low-income students in the Bay Area.',
  image = 'https://sundayhacks.org/static/images/logo-inverted.png',
  url = 'https://sundayhacks.org'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} /> 
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SundayHackcs" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'sundayhacks',
          url: 'https://sundayhacks.org',
          logo: 'https://sundayhacks.org/static/images/logo-inverted.png',
          sameAs: [
            'https://sundayhacks.org'
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'hello@sundayhacks.org',
              contactType: 'customer support',
              url: 'https://sundayhacks.org'
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'SundayHacks',
          startDate: '2020-08-23T9:00',
          endDate: '2020-09-27T21:00',
          description:
            'Sunday Hacks will host a five week CS workshop and final showcase during the 2020 summer.',
          isAccessibleForFree: true,
          url: 'https://sundayhacks.org',
          image: 'https://sundayhacks.org/static/images/logo-inverted.png',
          location: {
            '@type': 'Place',
            name: 'Lowell Elementary School',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'San Jose',
              addressRegion: 'CA',
              postalCode: '95112',
              streetAddress: '625 S 7th St, San Jose, CA 95112'
            }

          },
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          offers: {
            '@type': 'Offer',
            name: 'Free Admission',
            url: 'https://sundayhacks.org',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2019-04-01',
            validThrough: '2019-06-22'
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'Sunday Hacks Team'
          }
        })
      }}
    />
  </Head>
)
