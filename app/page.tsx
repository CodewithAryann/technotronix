import Hero from './components/hero'; 
import AboutSection from './components/About Us';
import OurServiceSection from './components/OurServiceSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <AboutSection/>
      <OurServiceSection/>
    </div>
  );
}
