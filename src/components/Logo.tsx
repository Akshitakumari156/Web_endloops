import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8', iconOnly = false, light = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision SVG recreation of the official Endloops infinity loop mark */}
      <svg 
        viewBox="0 0 48 32" 
        className="h-8 w-auto flex-shrink-0"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Endloops Logo Mark"
      >
        <path 
          d="M14.5 6C9.253 6 5 10.477 5 16s4.253 10 9.5 10c4.52 0 7.9-3.23 10.5-6.88 2.6 3.65 5.98 6.88 10.5 6.88 5.247 0 9.5-4.477 9.5-10S40.247 6 35 6c-4.52 0-7.9 3.23-10.5 6.88C21.9 9.23 18.52 6 14.5 6zm0 4.5c2.76 0 5.2 2.24 6.8 5.5-1.6 3.26-4.04 5.5-6.8 5.5-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5zm21 0c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-2.76 0-5.2-2.24-6.8-5.5 1.6-3.26 4.04-5.5 6.8-5.5z" 
          fill="#00A884"
        />
      </svg>
      
      {!iconOnly && (
        <span 
          className={`font-extrabold tracking-tight text-2xl font-sans ${
            light ? 'text-white' : 'text-slate-900'
          }`}
        >
          Endloops
        </span>
      )}
    </div>
  );
};

