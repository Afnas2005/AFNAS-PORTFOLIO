import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-16 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 bg-bg w-full">
      <span className="font-mono text-[0.7rem] text-muted text-center md:text-left">
        © 2025 <span className="text-accent">Afnas CM</span>. Designed & Developed by Afnas.
      </span>
      <span className="font-mono text-[0.7rem] text-muted text-center md:text-right">
        Built with <span className="text-accent">React · ThreeJS · GSAP</span>
      </span>
    </footer>
  );
};
