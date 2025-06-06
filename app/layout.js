import "../styles/globals.css"
import WhatsAppButton from "../components/WhatsAppButton"

export const metadata = {
  metadataBase: new URL("https://www.dualitydomain.com"),
  title: {
    default: "Duality Domain | Desarrollo Web Profesional en Villa del Dique, Córdoba",
    template: "%s | Duality Domain",
  },
  description:
    "Empresa líder en desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Especializada en sitios web, e-commerce, SEO y aplicaciones web personalizadas. Más de 20 años de experiencia transformando negocios digitales en LATAM.",
  keywords: [
    "desarrollo web Villa del Dique",
    "diseño web Córdoba",
    "empresa desarrollo web Argentina",
    "e-commerce personalizado",
    "SEO Villa del Dique",
    "aplicaciones web Córdoba",
    "sitios web profesionales",
    "desarrollo web LATAM",
    "agencia digital Argentina",
    "programación web Villa del Dique",
    "tiendas online Córdoba",
    "optimización web SEO",
    "UX UI design Argentina",
    "desarrollo responsive",
    "páginas web empresariales",
    "landing pages profesionales",
    "mantenimiento web",
    "hosting web Argentina",
    "diseño gráfico digital",
    "marketing digital Córdoba",
  ],
  authors: [{ name: "Duality Domain", url: "https://www.dualitydomain.com" }],
  creator: "Duality Domain",
  publisher: "Duality Domain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.dualitydomain.com",
    siteName: "Duality Domain",
    title: "Duality Domain | Desarrollo Web Profesional en Villa del Dique, Córdoba",
    description:
      "Empresa líder en desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Especializada en sitios web, e-commerce, SEO y aplicaciones web personalizadas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duality Domain - Desarrollo Web Profesional - Villa del Dique, Córdoba",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duality Domain | Desarrollo Web Profesional en Villa del Dique, Córdoba",
    description:
      "Empresa líder en desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Especializada en sitios web, e-commerce, SEO y aplicaciones web personalizadas.",
    images: ["/og-image.jpg"],
    creator: "@dualitydomain",
    site: "@dualitydomain",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#25618B",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#25618B" },
    { media: "(prefers-color-scheme: dark)", color: "#1A232E" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    yahoo: "yahoo-site-verification-code-here",
  },
  alternates: {
    canonical: "https://www.dualitydomain.com",
    languages: {
      "es-AR": "https://www.dualitydomain.com",
      es: "https://www.dualitydomain.com",
    },
  },
  other: {
    "msapplication-TileColor": "#1A232E",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Duality Domain",
    "application-name": "Duality Domain",
    "mobile-web-app-capable": "yes",
    "theme-color": "#25618B",
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique, Córdoba",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
  },
}

const RootLayout = ({ children }) => (
  <html lang="es-AR">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Duality Domain",
            description:
              "Empresa líder en desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Especializada en sitios web, e-commerce, SEO y aplicaciones web personalizadas.",
            url: "https://www.dualitydomain.com",
            logo: "https://www.dualitydomain.com/logo.png",
            image: "https://www.dualitydomain.com/og-image.jpg",
            telephone: "+54-9-3546-50-1537",
            email: "dualitydomainoficial@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ruta 5, km 107",
              addressLocality: "Villa del Dique",
              addressRegion: "Córdoba",
              postalCode: "X5856",
              addressCountry: "AR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-32.1833",
              longitude: "-64.4833",
            },
            areaServed: [
              {
                "@type": "Country",
                name: "Argentina",
              },
              {
                "@type": "AdministrativeArea",
                name: "LATAM",
              },
              {
                "@type": "State",
                name: "Córdoba",
              },
            ],
            serviceType: [
              "Desarrollo Web",
              "Diseño Web",
              "E-commerce",
              "SEO",
              "Aplicaciones Web",
              "UX/UI Design",
              "Landing Pages",
              "Mantenimiento Web",
              "Optimización Web",
            ],
            foundingDate: "2020",
            sameAs: ["https://www.instagram.com/dualitydomain"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de Desarrollo Web",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Desarrollo Web Profesional",
                    description: "Creación de sitios web modernos, responsivos y optimizados",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Personalizado",
                    description: "Tiendas online únicas con integración de pagos seguros",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO y Optimización Web",
                    description: "Mejora de velocidad, rendimiento y posicionamiento en buscadores",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Structured Data - LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.dualitydomain.com/#organization",
            name: "Duality Domain",
            description: "Empresa de desarrollo web profesional en Villa del Dique, Córdoba",
            url: "https://www.dualitydomain.com",
            telephone: "+54-9-3546-50-1537",
            email: "dualitydomainoficial@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ruta 5, km 107",
              addressLocality: "Villa del Dique",
              addressRegion: "Córdoba",
              postalCode: "X5856",
              addressCountry: "AR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -32.1833,
              longitude: -64.4833,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            priceRange: "$$",
            currenciesAccepted: "ARS",
            paymentAccepted: "Cash, Credit Card, Bank Transfer",
            areaServed: {
              "@type": "State",
              name: "Córdoba",
            },
          }),
        }}
      />

      {/* Service Worker Registration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `,
        }}
      />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      />
    </head>
    <body>
      {children}
      <WhatsAppButton />
    </body>
  </html>
)

export default RootLayout
