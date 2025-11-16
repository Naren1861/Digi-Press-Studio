
import React from 'react';
import FadeInSection from './FadeInSection';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
      </svg>
    ),
    title: 'Logo Design',
    description: 'Crafting unique and impactful logos that define your brand\'s identity and leave a lasting impression.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Brand Posters',
    description: 'Designing visually stunning posters that capture attention, communicate your message, and enhance your brand\'s presence.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: 'Graphic Designing',
    description: 'Comprehensive design services, from social media assets to marketing materials, all tailored to your brand\'s aesthetic.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-2">Our <span className="text-yellow-400">Expertise</span></h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">From concept to launch, we provide the services you need to succeed in the digital landscape.</p>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index} className="flex">
              <div className="bg-black border-2 border-gray-800 rounded-lg p-8 flex flex-col items-start hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20">
                <div className="mb-4 bg-gray-900 p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 flex-grow">{service.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;