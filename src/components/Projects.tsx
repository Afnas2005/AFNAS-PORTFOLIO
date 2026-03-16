import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-bg">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-mono text-[0.75rem] text-accent opacity-50">04</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em]">Projects</h2>
        <div className="flex-1 h-[1px] bg-border"></div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-surface border border-border rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:border-[rgba(0,210,180,0.25)] group"
        >
          <div className="p-8 bg-gradient-to-br from-[#0b1622] to-[#0f1e2e] relative min-h-[130px] flex flex-col justify-end overflow-hidden before:content-['01'] before:absolute before:right-6 before:top-4 before:text-[5rem] before:font-extrabold before:text-[rgba(0,210,180,0.06)] before:font-mono before:leading-none">
            <div className="text-[1.4rem] font-extrabold tracking-[-0.02em]">DREAMY-LAYERS</div>
            <div className="font-mono text-[0.72rem] text-accent tracking-[0.1em] uppercase mt-1">E-Commerce Web Application</div>
          </div>
          <div className="p-7">
            <p className="text-[0.92rem] leading-[1.75] text-[#e8f4f2a6] mb-6">
              Fully responsive e-commerce platform for selling cake and bakery products. Features user authentication, product listing, filtering, cart, wishlist, checkout, order history, and Razorpay payment integration.
            </p>
            <p className="text-[0.92rem] leading-[1.75] text-[#e8f4f2a6] mb-6">
              Built an admin dashboard with cake/product/user/order management, protected routes, and real MongoDB backend for managing inventory and orders.
            </p>
            <div className="flex flex-wrap gap-[0.4rem] mb-6">
              {['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay', 'Formik + Yup'].map(tech => (
                <span key={tech} className="font-mono text-[0.68rem] py-[0.25rem] px-[0.6rem] rounded-[2px] bg-[rgba(0,170,255,0.08)] border border-[rgba(0,170,255,0.15)] text-accent2 cursor-none hover:border-[rgba(0,170,255,0.4)] transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://dreamy-layers-p3ee.vercel.app/" target="_blank" rel="noreferrer" className="font-mono text-[0.75rem] text-muted decoration-none flex items-center gap-[0.4rem] transition-colors duration-200 hover:text-accent cursor-none">↗ Live Demo</a>
              <a href="#" className="font-mono text-[0.75rem] text-muted decoration-none flex items-center gap-[0.4rem] transition-colors duration-200 hover:text-accent cursor-none">⌥ GitHub</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface border border-border rounded-[10px] overflow-hideen flex items-center justify-center min-h-[320px] transition-all duration-300 hover:-translate-y-[6px] hover:border-[rgba(0,210,180,0.25)]"
        >
          <div className="text-center p-8">
            <div className="text-[2.5rem] mb-4 opacity-30">+</div>
            <div className="font-mono text-[0.78rem] text-muted">More projects coming soon...</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
