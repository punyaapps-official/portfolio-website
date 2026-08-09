import Section from "./components/Section/Section";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Hero from "./sections/Hero/Hero";
import TrustedTechnologies from "./sections/TrustedTechnologies/TrustedTechnologies";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import WorkflowAutomation from "./sections/WorkflowAutomation/WorkflowAutomation";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white">

      <Navbar />

      <Hero />

      <TrustedTechnologies />

      <About />

      <Experience />

      <Projects />

      <WorkflowAutomation />

      {/* <TechStack /> */}

      <Contact />

      <Footer />

      <ScrollToTop />

    </main>
  );
}

export default App;