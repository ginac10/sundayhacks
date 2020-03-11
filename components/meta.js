import Head from 'next/head'

export default ({
  title = 'SundaylHacks – Dedicated to giving back!',
  description = 'A 12-hour hackathon for middle and high schoolers in Los Angeles.',
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
          startDate: '2019-10-26T9:00',
          endDate: '2019-10-26T21:00',
          description:
            'Register today for 12 hours of coding, fun, free food, and prizes. SundayHacks will be on October 26, 2019 and open to all middle and high school students.',
          isAccessibleForFree: true,
          url: 'https://sundayhacks.org',
          image: 'https://sundayhacks.org/static/images/logo-inverted.png',
          location: {
            '@type': 'Place',
            name: 'Snapchat Headquarters',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Los Angeles',
              addressRegion: 'CA',
              postalCode: '90291',
              streetAddress: '606 Venice Blvd., Venice 90291'
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
            name: 'SundayHacks Ad Astra Team'
          }
        })
      }}
    />
  </Head>
)
