
import React from 'react';
import FadeInSection from './FadeInSection';

const portfolioItems = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=600&h=400&fit=crop',
      category: 'UI/UX Design',
      title: 'Mobile App Wireframes',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&h=400&fit=crop',
      category: 'Graphic Design',
      title: 'Social Media Campaign',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=600&h=400&fit=crop',
      category: 'Branding',
      title: 'Corporate Identity Mockup',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&h=400&fit=crop',
      category: 'Logo Design',
      title: 'Modern Logo Concepts',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1489257712453-24e4d5b06822?q=80&w=600&h=400&fit=crop',
      category: 'Poster Design',
      title: 'Event Poster Series',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=600&h=400&fit=crop',
      category: 'Web Design',
      title: 'Marketing Website',
    }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-2">Our <span className="text-yellow-400">Portfolio</span></h2>
          <p className="text-center text-gray-400 mb-12">A glimpse into our world of creativity and innovation.</p>
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <FadeInSection key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-yellow-400">{item.category}</p>
                  </div>
                </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;