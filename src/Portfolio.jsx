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
      
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, []);

  return (
    <main className="relative">
      {isLoading ? (
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