
import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import { BehanceIcon, InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    setStatus('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-2">Get In <span className="text-yellow-400">Touch</span></h2>
          <p className="text-center text-gray-400 mb-12">Have a project in mind? We'd love to hear from you.</p>
        </FadeInSection>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-black p-8 rounded-lg border-2 border-gray-800">
          <FadeInSection>
            <h3 className="text-2xl font-bold mb-4 text-white">Let's Talk</h3>
            <p className="text-gray-400 mb-6">Fill out the form, or reach out via our social channels. We're excited to start a conversation with you.</p>
            <div className="space-y-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <WhatsAppIcon className="w-8 h-8 text-gray-500 group-hover:text-yellow-400 transition-colors" />
                <span className="ml-4 text-gray-300 group-hover:text-yellow-400 transition-colors">Chat on WhatsApp</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <InstagramIcon className="w-8 h-8 text-gray-500 group-hover:text-yellow-400 transition-colors" />
                <span className="ml-4 text-gray-300 group-hover:text-yellow-400 transition-colors">Follow on Instagram</span>
              </a>
              <a href="https://www.behance.net/narendhira" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <BehanceIcon className="w-8 h-8 text-gray-500 group-hover:text-yellow-400 transition-colors" />
                <span className="ml-4 text-gray-300 group-hover:text-yellow-400 transition-colors">See us on Behance</span>
              </a>
            </div>
          </FadeInSection>
          <FadeInSection>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-yellow-400" required></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
              {status && <p className="mt-4 text-center text-green-400">{status}</p>}
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;