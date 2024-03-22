import './App.css';
import About from './components/About/About';
import Case from './components/Case/Case';
import Certificat from './components/Certificat/Certificat';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LinksOnBehanceGithub from './components/LinksOnBehanceGithub/LinksOnBehanceGithub';
import Navbar from './components/Navbar/Navbar';
import Person from './components/Person/Person';
import Process from './components/Process/Process';
import Reviews from './components/Reviews/Reviews';
import Skills from './components/Skills/Skills';
import WhyUs from './components/WhyUs/WhyUs';
import WorldCode from './components/WorldCode/WorldCode';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Person />
        <About />
        <WorldCode />
        <Skills />
        <LinksOnBehanceGithub />
        <Process />
        <WhyUs />
        <Case />
        <Certificat />
        <Reviews />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
