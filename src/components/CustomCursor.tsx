import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0;
    
    // QuickTo for high performance following
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power3" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      xToCursor(mx);
      yToCursor(my);
      xToRing(mx);
      yToRing(my);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Handle hover states through mutation observer to catch dynamically added items
    const observer = new MutationObserver(() => {
      attachHoverEvents();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    let interactiveElements: NodeListOf<Element>;

    const onMouseEnter = () => {
      gsap.to(cursor, { width: 20, height: 20, duration: 0.2 });
      gsap.to(ring, { width: 50, height: 50, duration: 0.2 });
    };
    
    const onMouseLeave = () => {
      gsap.to(cursor, { width: 12, height: 12, duration: 0.2 });
      gsap.to(ring, { width: 36, height: 36, duration: 0.2 });
    };

    const attachHoverEvents = () => {
      if (interactiveElements) {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      }
      
      interactiveElements = document.querySelectorAll('a, button, .btn');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };

    attachHoverEvents();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      if (interactiveElements) {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-9 h-9 border-[1.5px] border-accent rounded-full pointer-events-none z-[9998] opacity-50 -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
};
