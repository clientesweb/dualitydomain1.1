import { Footer, Navbar } from "../components"
import { About, Explore, GetStarted, Hero, Insights, WhatsNew, World, Projects } from "../sections"
import Head from "next/head"

const Home = () => (
  <>
    <Head>
      <title>Duality Domain | Desarrollo Web Profesional</title>
      <meta
        name="description"
        content="Duality Domain es una empresa de desarrollo web profesional ubicada en Villa del Dique, Córdoba, Argentina. Con presencia en LATAM. Se especializa en ofrecer soluciones digitales personalizadas que combinan creatividad y excelencia técnica para impulsar el crecimiento de los negocios."
      />
    </Head>
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <Projects />
        <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  </>
)

export default Home
