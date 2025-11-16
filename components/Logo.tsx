import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img src="/logo.png" alt="Digi Press Studio Logo" className={className || 'h-12 w-auto'} />
  );
};

export default Logo;