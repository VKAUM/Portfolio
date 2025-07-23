import Head from "next/head";
import { Code, Dumbbell, Sparkles } from "lucide-react";

export default function About() {
  const cardInfo = [
    {
      icon: <Code className="w-10 h-10 text-accent-blue mb-4" />,
      title: "The Technical Guy",
      description: "I engineer full-stack applications and build AI/ML solutions to solve impactful problems. Constantly learning and contributing to real-world innovations."
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-accent-indigo mb-4" />,
      title: "The Fitness Freak",
      description: "Gym is my second home. I train six days a week, pushing limits and mastering discipline through strength and consistency."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-accent-purple mb-4" />,
      title: "The Spirituality Guy",
      description: "Meditation, presence, and higher awareness — these shape my worldview and bring clarity, calm, and meaning to all I do."
    }
  ];

  return (
    <>
      <Head>
        <title>About | Vishishta</title>
      </Head>
      <main className="min-h-screen px-8 py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Spectrum of My <span className="text-accent-blue">Personality</span></h2>
          <p className="text-lg text-secondary-text max-w-3xl mx-auto text-center mb-12">
            I'm a passionate software developer specializing in full-stack web development and AI/ML. I love building clean, performant applications that solve real-world problems. But that's just one dimension — fitness grounds my discipline, and spirituality anchors my presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardInfo.map((card, index) => (
              <div key={index} className="relative p-6 border border-secondary-dark rounded-xl bg-secondary-dark/50 group overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  {card.icon}
                  <h3 className="text-2xl font-semibold mb-2 text-primary-text">{card.title}</h3>
                  <p className="text-secondary-text">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
