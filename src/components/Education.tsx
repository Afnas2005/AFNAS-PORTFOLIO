import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-bg2">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-mono text-[0.75rem] text-accent opacity-50">05</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em]">Education</h2>
        <div className="flex-1 h-[1px] bg-border"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface border border-border rounded-lg p-8 flex gap-8 items-start max-w-[700px] hover:border-[rgba(0,210,180,0.2)] transition-colors duration-300"
      >
        <div className="text-[2rem] flex-shrink-0 w-[56px] h-[56px] flex items-center justify-center bg-[rgba(0,210,180,0.08)] rounded-lg border border-border">
          🎓
        </div>
        <div>
          <div className="font-mono text-[0.72rem] text-accent tracking-[0.1em] mb-2">JUN 2020 – MARCH 2022</div>
          <div className="text-[1.2rem] font-bold mb-1">Kerala State Syllabus Higher Secondary Education</div>
          <div className="font-mono text-[0.82rem] text-muted">G.H.S.S Kakkavayal, Wayanad</div>
        </div>
      </motion.div>
    </section>
  );
};
