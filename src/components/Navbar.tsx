import React, { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[500] px-6 py-4 md:px-16 md:py-5 flex items-center justify-between transition-all duration-300",
      scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
    )}>
      <div className="font-mono text-base text-accent tracking-[0.12em] z-10 cursor-none">
        AFNAS<span className="text-muted">.CM</span>
      </div>
      <ul className="hidden md:flex gap-10 list-none z-10">
        {navItems.map((item) => (
          <li key={item.name}>
            <a 
              href={item.href}
              className="font-mono text-[0.75rem] text-muted decoration-none tracking-[0.1em] uppercase transition-colors duration-200 relative hover:text-accent after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:bg-accent after:scale-x-0 outline-none focus-visible:text-accent focus-visible:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100 cursor-none"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
