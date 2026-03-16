import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-bg2 relative overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-mono text-[0.75rem] text-accent opacity-50">01</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em]">About</h2>
        <div className="flex-1 h-[1px] bg-border"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-[1.05rem] leading-[1.8] text-[#e8f4f2bf]"
        >
          <p>
            Passionate <strong className="text-accent font-semibold">MERN Stack Developer</strong> with strong expertise in building responsive, high-performance web applications. I specialize in creating clean, maintainable code and translating design concepts into pixel-perfect, mobile-first interfaces.
          </p>
          <p>
            My stack of choice: <strong className="text-accent font-semibold">React.js, Next.js, Node.js, Express.js, and MongoDB</strong>. Experienced in developing full-featured e-commerce platforms with user authentication, admin dashboards, and RESTful API integration.
          </p>
          <p>
            Currently interning at <strong className="text-accent font-semibold">Bridgeon Solution</strong> — building real-world applications and sharpening my skills every day.
          </p>

          <div className="flex flex-col gap-4 mt-8">
            <a href="mailto:afnascm988@gmail.com" className="flex items-center gap-4 font-mono text-[0.82rem] text-muted decoration-none transition-colors duration-200 border border-border p-3 rounded bg-surface hover:text-accent hover:border-accent cursor-none">
              <span className="text-base">✉</span> afnascm988@gmail.com
            </a>
            <a href="tel:+916235004189" className="flex items-center gap-4 font-mono text-[0.82rem] text-muted decoration-none transition-colors duration-200 border border-border p-3 rounded bg-surface hover:text-accent hover:border-accent cursor-none">
              <span className="text-base">☎</span> +91 6235004189
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 font-mono text-[0.82rem] text-muted decoration-none transition-colors duration-200 border border-border p-3 rounded bg-surface hover:text-accent hover:border-accent cursor-none">
              <span className="text-base">in</span> LinkedIn Profile
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 font-mono text-[0.82rem] text-muted decoration-none transition-colors duration-200 border border-border p-3 rounded bg-surface hover:text-accent hover:border-accent cursor-none">
              <span className="text-base">⌥</span> GitHub Profile
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="glass-panel rounded-lg p-8 font-mono text-[0.82rem] leading-[1.9] w-full relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
            
            <div className="flex gap-2 mb-6">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]"></div>
            </div>
            
            <div><span className="text-accent3">const</span> <span className="text-accent2">developer</span> = {'{'}</div>
            <div>&nbsp;&nbsp;<span className="text-[#f7c59f]">name</span>: <span className="text-accent">"Afnas CM"</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#f7c59f]">role</span>: <span className="text-accent">"MERN Stack Dev"</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#f7c59f]">location</span>: <span className="text-accent">"Kerala, India"</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#f7c59f]">stack</span>: [</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">"React"</span>, <span className="text-accent">"Next.js"</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">"Node.js"</span>, <span className="text-accent">"MongoDB"</span></div>
            <div>&nbsp;&nbsp;],</div>
            <div>&nbsp;&nbsp;<span className="text-[#f7c59f]">available</span>: <span className="text-accent2">true</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#f7c59f]">coffee</span>: <span className="text-accent">"essential ☕"</span>,</div>
            <div>{'};'}</div>
            <br/>
            <div><span className="text-muted">// Currently at Bridgeon Solution</span></div>
            <div><span className="text-accent3">export default</span> <span className="text-accent2">developer</span>;</div>
            
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
