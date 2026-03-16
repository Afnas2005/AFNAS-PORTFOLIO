import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages & Tools",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "Git", "GitHub", "VS Code", "Chrome DevTools"]
  },
  {
    category: "Front-End",
    tags: ["React.js", "Next.js", "Redux", "React Router", "Tailwind CSS", "Bootstrap", "Formik", "Yup", "Axios"]
  },
  {
    category: "Back-End",
    tags: ["Node.js", "Express.js", "RESTful API", "JWT Auth", "Middleware", "CRUD Ops", "Bcrypt"]
  },
  {
    category: "Database",
    tags: ["MongoDB", "Mongoose ORM", "Data Modeling", "CRUD Operations"]
  },
  {
    category: "Workflow & Dev",
    tags: ["Agile / Scrum", "Branching Strategy", "Code Reviews", "SPA", "Mobile-First", "Performance Opt."]
  },
  {
    category: "Integrations",
    tags: ["Razorpay", "REST API", "Context API", "Protected Routes", "Component Architecture"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-bg relative overflow-hidden">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-mono text-[0.75rem] text-accent opacity-50">02</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em]">Skills</h2>
        <div className="flex-1 h-[1px] bg-border"></div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {skillsData.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface border border-border rounded-lg p-7 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <h3 className="font-mono text-[0.7rem] text-accent uppercase tracking-[0.15em] mb-5">
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {skillGroup.tags.map(tag => (
                <span 
                  key={tag}
                  className="font-mono text-[0.72rem] py-[0.35rem] px-3 rounded-[3px] border border-border text-muted transition-colors duration-200 bg-white/5 hover:border-accent2 hover:text-accent2 cursor-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
