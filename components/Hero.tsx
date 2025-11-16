import React from 'react';
import FadeInSection from './FadeInSection';
import Logo from './Logo';

interface HeroProps {
  onOpenResume: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-yellow-400/10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 text-center z-10">
        <FadeInSection>
            <div className="inline-block mb-8">
                <Logo className="h-32 w-auto object-contain" />
            </div>
        </FadeInSection>
        <FadeInSection>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Creative Vision, <span className="text-yellow-400">Premium Execution</span>.
          </h1>
        </FadeInSection>
        <FadeInSection>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
            Digi Press Studio brings your brand's story to life with modern design and flawless digital experiences.
          </p>
        </FadeInSection>
        <FadeInSection>
          <button
            onClick={onOpenResume}
            className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/30"
          >
            My CV
          </button>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;