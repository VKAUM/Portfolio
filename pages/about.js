import Head from "next/head";
import { Code, Dumbbell, Sparkles } from "lucide-react";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main className="min-h-screen px-8 py-20 bg-white pt-20">
        <h2 className="text-4xl font-bold mb-10">Spectrum of My Personality</h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          I'm a passionate software developer specializing in full-stack web development and AI/ML. I love building clean, performant applications that solve real-world problems. But that's just one dimension — fitness grounds my discipline, and spirituality anchors my presence.
        </p>

        {/* Personality Spectrum */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Guy */}
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <Code className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">The Technical Guy</h3>
            <p className="text-gray-700">
              I engineer full-stack applications and build AI/ML solutions to solve impactful problems. Constantly learning and contributing to real-world innovations.
            </p>
          </div>

          {/* Fitness Freak */}
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <Dumbbell className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">The Fitness Freak</h3>
            <p className="text-gray-700">
              Gym is my second home. I train six days a week, pushing limits and mastering discipline through strength and consistency.
            </p>
          </div>

          {/* Spirituality Guy */}
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <Sparkles className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">The Spirituality Guy</h3>
            <p className="text-gray-700">
              Meditation, presence, and higher awareness — these shape my worldview and bring clarity, calm, and meaning to all I do.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}