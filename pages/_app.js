import Head from "next/head"
import "../styles/globals.css"
import WhatsAppButton from "../components/WhatsAppButton"

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Duality Domain | Desarrollo Web Profesional</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Duality Domain es una empresa de desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Con presencia en LATAM. Se especializa en ofrecer soluciones digitales personalizadas que combinan creatividad y excelencia técnica para impulsar el crecimiento de los negocios."
      />
      <meta
        name="keywords"
        content="desarrollo web, diseño web, e-commerce, SEO, aplicaciones web, UX, Villa del Dique, Córdoba, Argentina, LATAM"
      />
      <meta name="author" content="Duality Domain" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://dualitydomain.com" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Theme Color */}
      <meta name="theme-color" content="#25618B" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dualitydomain.com/" />
      <meta property="og:title" content="Duality Domain | Desarrollo Web Profesional" />
      <meta
        property="og:description"
        content="Empresa de desarrollo web profesional especializada en soluciones digitales personalizadas que combinan creatividad y excelencia técnica."
      />
      <meta property="og:image" content="https://dualitydomain.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dualitydomain.com/" />
      <meta property="twitter:title" content="Duality Domain | Desarrollo Web Profesional" />
      <meta
        property="twitter:description"
        content="Empresa de desarrollo web profesional especializada en soluciones digitales personalizadas que combinan creatividad y excelencia técnica."
      />
      <meta property="twitter:image" content="https://dualitydomain.com/og-image.jpg" />

      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
    <WhatsAppButton />
  </>
)

export default MyApp
