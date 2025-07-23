import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SAGA - AI Interviewer",
      description:
        "An advanced, AI-driven interview system with audio/video proctoring to ensure a secure, unbiased, and efficient candidate evaluation process.",
      tech: ["Python", "ML", "Pandas", "OpenCV", "Flask", "MongoDB"],
      link: "https://github.com/VKAUM/SAGA",
    },
    {
      title: "Air Quality Prediction",
      description:
        "A comprehensive machine learning project to forecast the Air Quality Index (AQI) based on various environmental factors, deployed as a web application.",
      tech: ["Sklearn", "LSTM", "Regression"],
      link: "https://github.com/VKAUM/Air-Quality-Prediction",
    },
    {
      title: "Water Quality Prediction",
      description:
        "A machine learning solution to predict water potability. This end-to-end project covers the workflow from data collection to model implementation.",
      tech: ["Sklearn", "LSTM", "Regression"],
      link: "https://github.com/VKAUM/Water-Quality-Prediction",
    },
    {
      title: "Expense Tracker",
      description:
        "A lightweight Chrome extension to help users monitor their spending directly from their browser with a simple and intuitive popup interface.",
      tech: ["Java", "Swing", "MySQL"],
      link: "https://github.com/VKAUM/Expense-Tracker",
    },
    {
      title: "Nth Follower Application",
      description:
        "A Python command-line tool that uses web scraping to find the 'Nth' follower of any public Instagram profile without manual scrolling.",
      tech: ["Java"],
      link: "https://github.com/VKAUM/Nth-Follower-Application",
    },
    {
      title: "Fitness Tracker",
      description:
        "A smart assistant chatbot using Python and NLP with voice interaction to help users track their fitness goals and activities.",
      tech: ["Python", "AIML", "Docker", "Neural Networks", "React"],
      link: "https://github.com/VKAUM/FitnessTracker",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website built with modern web technologies to showcase my projects, skills, and experience.",
      tech: ["NextJS", "Tailwind", "React"],
      link: "https://github.com/VKAUM/Portfolio",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-primary-dark py-20">
       <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-primary-text">
          My <span className="text-accent-blue">Projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
