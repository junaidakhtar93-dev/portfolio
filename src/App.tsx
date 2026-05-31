import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useFadeIn } from './hooks/useScrollEffects';

export default function App(): React.ReactElement {
  useFadeIn();

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
