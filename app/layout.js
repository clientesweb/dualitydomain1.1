import "../styles/globals.css"
import WhatsAppButton from "../components/WhatsAppButton"

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      {children}
      <WhatsAppButton />
    </body>
  </html>
)

export default RootLayout
