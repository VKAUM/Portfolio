import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SAGA - AI Interviewer",
      description:
        "SAGA is an advanced, AI-driven interview system designed to revolutionize the recruitment process by providing a secure, unbiased, and efficient platform for candidate evaluation. This project integrates sophisticated audio and video proctoring to create a comprehensive assessment environment that analyzes both verbal and non-verbal cues. By leveraging technologies like natural language processing (NLP) and computer vision, SAGA aims to mitigate common recruitment challenges such as logistical constraints and interviewer bias, ensuring a fair and objective evaluation of every candidate.",
      tech: ["Python", "ML", "Pandas", "OpenCV", "Flask", "MongoDB"],
      link: "https://github.com/VKAUM/SAGA",
    },
    {
      title: "Air Quality Prediction",
      description:
        "This project is a comprehensive machine learning initiative designed to forecast air quality by predicting the Air Quality Index (AQI) based on various environmental factors. Addressing the growing global concern over air pollution and its impact on public health, this end-to-end data science project demonstrates the entire lifecycle, from data collection and cleaning to model deployment. The final result is a web application that allows users to get real-time AQI predictions for a specific region by inputting relevant climate conditions.",
      tech: ["Sklearn", "LSTM", "Regression"],
      link: "https://github.com/VKAUM/Air-Quality-Prediction",
    },
    {
      title: "Water Quality Prediction",
      description:
        "This project presents a machine learning-based solution to predict water quality, determining whether a water sample is potable (safe for drinking) or not. Given that access to safe drinking water is a critical global health issue, this project leverages data science to provide a valuable tool for assessing water safety. The end-to-end workflow covers everything from data collection and preprocessing to model implementation and evaluation, culminating in a predictive system that classifies water quality with high accuracy.",
      tech: ["Sklearn", "LSTM", "Regression"],
      link: "https://github.com/VKAUM/Water-Quality-Prediction",
    },
    {
      title: "Expense Tracker",
      description:
        "The Expense Tracker is a lightweight and convenient Chrome extension designed to help users monitor their spending directly from their browser. This simple yet effective tool allows for quick entry of expenses and provides an immediate calculation of total and limit-based spending. The motivation behind this project is to offer a seamless and accessible way for users to stay on top of their finances without needing to open a separate application or website. The entire user interface is built to be intuitive and is presented as a popup within the Chrome browser for easy access.",
      tech: ["Java", "Swing", "MySQL"],
      link: "https://github.com/VKAUM/Expense-Tracker",
    },
        {
      title: "Nth Follower Application",
      description:
        "The Nth Follower Application is a Python-based tool designed to find the 'Nth' follower of a given public Instagram profile. This command-line application provides a simple and effective way to identify a specific follower in a user's follower list without having to manually scroll through potentially thousands of accounts. The project leverages web scraping techniques to access and parse Instagram's data, offering a practical solution for a unique social media query.",
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
