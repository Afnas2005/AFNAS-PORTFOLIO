import React from 'react';
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-bg2">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-mono text-[0.75rem] text-accent opacity-50">03</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em]">Experience</h2>
        <div className="flex-1 h-[1px] bg-border"></div>
      </div>

      <div className="relative pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border"></div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative pb-[3.5rem] pl-2"
        >
          <div className="absolute -left-[2.1rem] top-[6px] w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"></div>
          
          <div className="font-mono text-[0.72rem] text-accent tracking-[0.1em] mb-[0.6rem]">MAY 2025 – PRESENT</div>
          <div className="text-[1.4rem] font-bold mb-[0.3rem]">Full-Stack Developer Intern</div>
          <div className="font-mono text-[0.82rem] text-accent2 mb-[1.2rem]">Bridgeon Solution</div>
          
          <ul className="list-none flex flex-col gap-[0.7rem]">
            <li className="text-[0.95rem] leading-[1.7] text-[#e8f4f2b3] pl-[1.2rem] relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-[0.8rem]">
              Building responsive and user-friendly web interfaces using React.js, Next.js, Tailwind CSS, JavaScript, and TypeScript.
            </li>
            <li className="text-[0.95rem] leading-[1.7] text-[#e8f4f2b3] pl-[1.2rem] relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-[0.8rem]">
              Creating and validating forms using Formik and Yup to ensure user input accuracy and a smooth UX.
            </li>
            <li className="text-[0.95rem] leading-[1.7] text-[#e8f4f2b3] pl-[1.2rem] relative before:content-['▸'] before:absolute before:left-0 before:text-accent before:text-[0.8rem]">
              Participating in code reviews and Agile stand-ups to continuously improve team workflow and code quality.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
