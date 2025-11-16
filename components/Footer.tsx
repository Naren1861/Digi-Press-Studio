
import React from 'react';
import Logo from './Logo';
import { BehanceIcon, InstagramIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Logo className="h-16 w-auto" />
          <div className="flex space-x-6">
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6" />
             </a>
             <a href="https://www.behance.net/narendhira" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label="Behance">
                <BehanceIcon className="w-6 h-6" />
             </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Digi Press Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;