import Hero from './components/hero'; 
import AboutSection from './components/About Us';
import OurServiceSection from './components/OurServiceSection';
import FeaturePointPage from './components/feature-point';
import OurGoals from './components/our-goals';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <AboutSection/>
      <OurServiceSection/>
      <FeaturePointPage/>
      <OurGoals/>
    </div>
  );
}
