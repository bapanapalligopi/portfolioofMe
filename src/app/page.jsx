import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import RecruiterChat from "../components/RecruiterChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="glow-backdrop-1"></div>
      <div className="glow-backdrop-2"></div>
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <RecruiterChat />
    </>
  );
}
