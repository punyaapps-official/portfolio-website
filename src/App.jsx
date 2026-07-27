import Section from "./components/Section/Section";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import TrustedTechnologies from "./sections/TrustedTechnologies/TrustedTechnologies";
import CareerHighlights from "./sections/CareerHighlights/CareerHighlights";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import WorkflowAutomation from "./sections/WorkflowAutomation/WorkflowAutomation";
import TechStack from "./sections/TechStack/TechStack";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <TrustedTechnologies />

      {/* <CareerHighlights /> */}

      <About />

      <Experience />

      <Projects />

      <WorkflowAutomation />

      <TechStack />

      <Contact />

      <Footer />

    </main>
  );
}

export default App;