import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';
import gsap from 'gsap';

const FloatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          color="#00d2b4"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
          opacity={0.15}
          transparent
        />
      </Sphere>
    </Float>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from('.hero-tag', { y: 20, opacity: 0, duration: 0.8 }, 0.3)
        .from('.hero-name', { y: 30, opacity: 0, duration: 0.8 }, 0.5)
        .from('.hero-role', { y: 20, opacity: 0, duration: 0.8 }, 0.7)
        .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, 0.9)
        .from('.scroll-hint', { opacity: 0, duration: 0.8 }, 1.2)
        .from('.hero-stats', { x: 30, opacity: 0, duration: 0.8 }, 1)
        .from('.hero-img', { opacity: 0, scale: 0.9, y: 30, duration: 1 }, 0.6);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="min-h-screen relative flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d2b4" />
          <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <FloatingShape />
        </Canvas>
      </div>

      {/* Floating Orbs */}
      <div className="absolute w-[500px] h-[500px] bg-[rgba(0,210,180,0.07)] rounded-full blur-[80px] -right-[100px] top-[10%] animate-orbFloat z-[-2] pointer-events-none"></div>
      <div className="absolute w-[350px] h-[350px] bg-[rgba(123,97,255,0.06)] rounded-full blur-[80px] left-[10%] bottom-[10%] animate-orbFloat animation-delay-[-4s] z-[-2] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 mt-10 md:mt-0">
          <p className="hero-tag font-mono text-[0.75rem] text-accent tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            <span className="text-muted">{'>'}</span> MERN Stack Developer
          </p>
          
          <h1 className="hero-name text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-2">
            AFNAS
            <span className="block text-transparent" style={{ WebkitTextStroke: '1.5px var(--accent)' }}>C M</span>
          </h1>
          
          <p className="hero-role font-mono text-[clamp(0.9rem,1.8vw,1.1rem)] text-muted mt-6 mb-12">
            Building <span className="text-accent2">full-stack web experiences</span> with React · Next.js · Node.js · MongoDB<span className="animate-pulse">_</span>
          </p>
          
          <div className="hero-ctas flex flex-wrap gap-5">
            <a href="#projects" className="btn btn-primary cursor-none">View Projects ↓</a>
            <a href="#contact" className="btn btn-outline cursor-none">Let's Talk →</a>
          </div>
        </div>

        <div className="hero-img relative w-56 h-56 md:w-[26rem] md:h-[26rem] flex-shrink-0">
          <div className="absolute inset-0 border-[2px] md:border-[3px] border-accent rounded-[2rem] md:rounded-[3rem] translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5"></div>
          <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden z-10 bg-surface border border-border">
            <img src="/profile.jpg" alt="Afnas CM" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="scroll-hint absolute bottom-10 left-6 md:left-16 font-mono text-[0.7rem] text-muted tracking-[0.15em] uppercase flex items-center gap-4">
        <div className="w-[60px] h-[1px] bg-border"></div>
        Scroll to explore
      </div>

      <div className="hero-stats hidden md:flex absolute right-16 bottom-16 flex-col gap-6 items-end">
        <div className="text-right">
          <div className="text-3xl font-extrabold text-accent stat-num">1+</div>
          <div className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.12em] stat-label">Years Experience</div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold text-accent stat-num">10+</div>
          <div className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.12em] stat-label">Technologies</div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold text-accent stat-num">∞</div>
          <div className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.12em] stat-label">Lines of Code</div>
        </div>
      </div>
    </section>
  );
};
