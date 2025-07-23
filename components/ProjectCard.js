import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative flex flex-col justify-between border border-secondary-dark rounded-2xl p-6 bg-secondary-dark/50 group overflow-hidden transition-all duration-300 hover:border-accent-blue/50"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-2 text-primary-text">{title}</h3>
        <p className="text-secondary-text mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span
              key={i}
              className="bg-primary-dark text-xs text-accent-blue px-3 py-1 rounded-full border border-accent-blue/30"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* "Know More" Button */}
      <div className="relative z-10 mt-auto flex justify-end">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-dark text-accent-blue font-semibold rounded-lg border border-accent-blue/50 hover:bg-accent-blue hover:text-primary-dark transition-all duration-300"
        >
          <Github size={16} />
          Know More
        </a>
      </div>
    </motion.div>
  );
}
