import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import SiteMockup from './components/SiteMockup';
import Roadmap from './components/Roadmap';
import HeatLine from './components/HeatLine';

export default function App() {
  return (
    <div className="bg-carbon min-h-screen">
      <HeatLine />
      <Hero />
      <About />
      <Process />
      <SiteMockup />
      <Roadmap />
    </div>
  );
}
