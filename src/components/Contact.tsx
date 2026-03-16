import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-bg text-center">
      <div className="max-w-[640px] mx-auto">
        <div className="flex items-baseline gap-6 mb-16 justify-center">
          <span className="font-mono text-[0.75rem] text-accent opacity-50">06</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em]">Contact</h2>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.03em] mb-4"
        >
          Let's Build <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--accent)' }}>Together</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[1rem] text-muted leading-[1.8] mb-10 font-mono"
        >
          Open to full-time roles, freelance projects, and exciting collaborations. Drop me a message!
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="mailto:afnascm988@gmail.com" 
          className="font-mono text-[1.1rem] text-accent decoration-none border-b border-accent pb-[2px] transition-colors duration-200 hover:text-accent2 hover:border-accent2 cursor-none inline-block relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent2 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
        >
          afnascm988@gmail.com
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-mono text-[0.78rem] text-muted decoration-none py-[0.7rem] px-6 border border-border rounded-[4px] transition-all duration-200 flex items-center gap-[0.6rem] hover:text-accent hover:border-accent hover:bg-[rgba(0,210,180,0.05)] cursor-none">in LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="font-mono text-[0.78rem] text-muted decoration-none py-[0.7rem] px-6 border border-border rounded-[4px] transition-all duration-200 flex items-center gap-[0.6rem] hover:text-accent hover:border-accent hover:bg-[rgba(0,210,180,0.05)] cursor-none">⌥ GitHub</a>
          <a href="tel:+916235004189" className="font-mono text-[0.78rem] text-muted decoration-none py-[0.7rem] px-6 border border-border rounded-[4px] transition-all duration-200 flex items-center gap-[0.6rem] hover:text-accent hover:border-accent hover:bg-[rgba(0,210,180,0.05)] cursor-none">☎ +91 6235004189</a>
        </motion.div>
      </div>
    </section>
  );
};
