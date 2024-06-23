import React,{ useState, useEffect } from "react"
import Intro from "./Sections/Intro"
import Skills from "./Sections/Skills"
import Projects from "./Sections/Projects"
import Competition from "./Sections/Competitions"
import Achievements from "./Sections/Achievements"
import Resume from "./Sections/Resume"
import Education from "./Sections/Education"
import SocialLinks from "./Sections/SocialLinks"
import Footer from "./Sections/Footer"
import Loading from "./Components/Loading"


function Portfolio() {
      
  const [fontsLoaded, setFontsLoaded] = useState(true);

  useEffect(() => {
    
    const fontPromises = [
      new FontFace('ZohoPuviRegular', 'url("/Zoho Puvi Regular.otf")').load(),
      new FontFace('ZohoPuviSemibold', 'url("/Zoho Puvi Semibold.otf")').load(),
      new FontFace('ZohoPuviMedium', 'url("/Zoho Puvi Medium.otf")').load(),
      new FontFace('ZohoPuviBold', 'url("/Zoho Puvi Bold.otf")').load(),
    ];

    Promise.all(fontPromises)
    .then((loadedFonts) => {
      loadedFonts.forEach((font) => document.fonts.add(font));
      setFontsLoaded(false);
    })
    .catch((error) => {
      console.error('Font loading failed:', error);
    });
  },[])


  return (
    <main className="relative">
      {fontsLoaded ? (
        <Loading />
      ) : (
        <>
      <section>
        <Intro />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Competition />
      </section>
      <section>
        <Achievements />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Resume />
      </section>
      <section>
        <SocialLinks />
      </section>
      <section>
        <Footer />
      </section>
      </>
)}
    </main>

  )
}

export default Portfolio