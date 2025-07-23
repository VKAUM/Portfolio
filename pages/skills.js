import { useState } from "react";
import {
  Code2,
  ServerCog,
  BrainCircuit,
  Database,
  Languages,
  ChevronDown,
  Award,
  GraduationCap,
  Trophy
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 border border-secondary-dark rounded-lg bg-secondary-dark/30 transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left text-xl font-medium px-4 py-3 hover:bg-secondary-dark/70 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3 text-primary-text">
          {Icon && <Icon className="w-5 h-5 text-accent-blue" />}
          {title}
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5 text-secondary-text" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-secondary-dark">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="min-h-screen p-8 bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-primary-text">
          My <span className="text-accent-blue">Profile</span>
        </h1>

        <Dropdown title="Skills" icon={Code2} defaultOpen={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-secondary-text">
                <div className="p-4 rounded-lg bg-secondary-dark/50">
                    <h4 className="font-bold text-primary-text mb-2 flex items-center gap-2"><Code2 size={18}/> Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                        {["Next.js", "React", "HTML", "CSS", "JavaScript", "Tailwind CSS"].map(s => <span key={s} className="bg-primary-dark text-xs text-accent-blue px-2 py-1 rounded-full border border-accent-blue/30">{s}</span>)}
                    </div>
                </div>
                <div className="p-4 rounded-lg bg-secondary-dark/50">
                    <h4 className="font-bold text-primary-text mb-2 flex items-center gap-2"><ServerCog size={18}/> Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                        {["AWS", "Docker", "Kubernetes", "NGC", "Ansible"].map(s => <span key={s} className="bg-primary-dark text-xs text-accent-blue px-2 py-1 rounded-full border border-accent-blue/30">{s}</span>)}
                    </div>
                </div>
                <div className="p-4 rounded-lg bg-secondary-dark/50">
                    <h4 className="font-bold text-primary-text mb-2 flex items-center gap-2"><BrainCircuit size={18}/> Machine Learning & AI</h4>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "Scikit-learn", "LSTM", "TensorFlow", "OpenCV"].map(s => <span key={s} className="bg-primary-dark text-xs text-accent-blue px-2 py-1 rounded-full border border-accent-blue/30">{s}</span>)}
                    </div>
                </div>
                <div className="p-4 rounded-lg bg-secondary-dark/50">
                    <h4 className="font-bold text-primary-text mb-2 flex items-center gap-2"><Database size={18}/> Databases</h4>
                    <div className="flex flex-wrap gap-2">
                        {["PostgreSQL", "MySQL", "MongoDB"].map(s => <span key={s} className="bg-primary-dark text-xs text-accent-blue px-2 py-1 rounded-full border border-accent-blue/30">{s}</span>)}
                    </div>
                </div>
                 <div className="p-4 rounded-lg bg-secondary-dark/50 md:col-span-2">
                    <h4 className="font-bold text-primary-text mb-2 flex items-center gap-2"><Languages size={18}/> Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "C++", "Java", "SQL", "Kotlin"].map(s => <span key={s} className="bg-primary-dark text-xs text-accent-blue px-2 py-1 rounded-full border border-accent-blue/30">{s}</span>)}
                    </div>
                </div>
            </div>
        </Dropdown>

        <Dropdown title="Certifications" icon={Award}>
          <ul className="list-disc list-inside space-y-2 text-secondary-text">
            <li><a href="https://drive.google.com/file/d/111F-azVWqZEcOgmvdDfrHx32QzTEETs9/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Database Management System</a></li>
            <li><a href="https://drive.google.com/file/d/1vFmChI30WjuoBMYI2-byhuDmj9YL-9iE/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Computer Organization Architecture</a></li>
            <li><a href="https://drive.google.com/file/d/1JOkvzAlobQixRZGSh2DfslYRuRIJOSGa/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Image Processing Onramp</a></li>
            <li><a href="https://drive.google.com/file/d/1wVT65XRMSJQ7L2Y6GC5U00RDzjDQirvY/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Matlab Onramp</a></li>
            <li><a href="https://drive.google.com/file/d/1NPe0wa1R53CM8rl2e9nXTZ-k8e8qhBBq/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">AWS Machine Learning Foundations</a></li>
            <li><a href="https://drive.google.com/file/d/11LQmOZREtP6JkFarOwCKEgyGPRzV2uDM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Robotics using AI – STTP</a></li>
            <li><a href="https://drive.google.com/file/d/1AoHADxv0XxrwNG0eL3DVjiAcAejmH7eG/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Artificial Intelligence via Udemy</a></li>
          </ul>
        </Dropdown>

        <Dropdown title="Achievements" icon={Trophy}>
          <ul className="list-disc list-inside space-y-2 text-secondary-text">
            <li><a href="https://drive.google.com/file/d/1agAxt89DGQmvhL7dhjpDVfEvIzUAL2BZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Winner of Hackathon: HackSustain</a></li>
          </ul>
        </Dropdown>

        <Dropdown title="Education" icon={GraduationCap}>
          <div className="text-secondary-text">
            <p className="font-bold text-primary-text">B.Tech in Computer Science with specialization in AI/ML</p>
            <p>SRM Institute of Science and Technology, 2021–2025</p>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
