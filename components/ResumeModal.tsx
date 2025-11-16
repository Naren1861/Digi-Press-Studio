import React from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start z-50 p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div 
        className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full my-8"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <h2 id="resume-title" className="sr-only">Karthick T K's Resume</h2>
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold hover:bg-yellow-500 transition-transform transform hover:scale-110 z-10"
          aria-label="Close resume"
        >
          &times;
        </button>
        <div className="p-2">
          <img src="/resume.png" alt="Karthick T K's Resume" className="w-full h-auto rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;