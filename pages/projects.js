import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SAGA - AI Interviewer",
      description:
        "Forecasts gold prices using historical market data with machine learning.",
      tech: ["Python", "ML", "Pandas", "OpenCV", "Flask", "MongoDB"],
      link: "https://github.com/VKAUM/SAGA",
    },
    {
      title: "Air Quality Prediction",
      description:
        "Predicts air quality (linear regression) and water quality (random forest classifier).",
      tech: ["Sklearn", "LSTM", "Regression"],
      link: "https://github.com/VKAUM/Air-Quality-Prediction",
    },
    {
      title: "Water Quality Prediction",
      description:
        "Predicts air quality (linear regression) and water quality (random forest classifier).",
      tech: ["Sklearn", "LSTM", "Regression"],
      link: "https://github.com/VKAUM/Water-Quality-Prediction",
    },
    {
      title: "Expense Tracker",
      description:
        "Smart assistant chatbot using Python and NLP with voice interaction.",
      tech: ["Java", "Swing", "MySQL"],
      link: "https://github.com/VKAUM/Expense-Tracker",
    },
        {
      title: "Nth Follower Application",
      description:
        "Smart assistant chatbot using Python and NLP with voice interaction.",
      tech: ["Java"],
      link: "https://github.com/VKAUM/Nth-Follower-Application",
    },
        {
      title: "Fitness Tracker",
      description:
        "Smart assistant chatbot using Python and NLP with voice interaction.",
      tech: ["Python", "AIML", "Docker", "Neural Networks", "React"],
      link: "https://github.com/VKAUM/FitnessTracker",
    },
        {
      title: "Portfolio Website",
      description:
        "Smart assistant chatbot using Python and NLP with voice interaction.",
      tech: ["NextJS", "Tailwind", "React"],
      link: "https://github.com/VKAUM/Portfolio",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-8 py-20 bg-white">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
