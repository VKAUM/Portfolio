import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I&apos;m Vishishta Kavadiya
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        I build full-stack applications with a focus on design, accessibility, and performance.
      </p>
      
      <Link href="/projects">
        <button className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          View My Work
        </button>
      </Link>
    </section>
  );
}
