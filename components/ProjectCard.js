import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      className="block border border-gray-200 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <span
            key={i}
            className="bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
