import { Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "MSPL Baldota Group",
      role: "Software Developer / Data Analyst",
      date: "Jun 2024",
      points: [
        "Collaborated with cross-functional teams to develop Python-based AI solutions, enhancing workflow efficiency by 15%.",
        "Built a chatbot, reducing manual queries by 30% and improving client satisfaction.",
        "Predicted product prices with 90% accuracy using LSTM models for market strategy."
      ],
      certificate: "https://drive.google.com/file/d/1yIcVaZ5EKRAfVA5dl9u-RjTHTDGMyKty/view?usp=drive_link"
    },
    {
      company: "SRM Tech",
      role: "Software Developer / Architect Intern",
      date: "Mar 2024 – Sep 2024",
      points: [
        "Designed and deployed a website with real-time functionality.",
        "Integrated real-time eye and face movement tracking to detect cheating, boosting detection by ~25%.",
        "Implemented voice recognition and frequency detection with sub-second latency for real-time speech/audio applications."
      ],
      certificate: "https://drive.google.com/file/d/1su0bBL8_Vhf6HOWR0S5GXpwVwTT9vFKl/view?usp=drive_link"
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-primary-text">
          Professional <span className="text-accent-blue">Experience</span>
        </h1>

        <div className="relative border-l-2 border-secondary-dark pl-10">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-[49px] top-1 w-6 h-6 bg-accent-blue rounded-full border-4 border-primary-dark"></div>
              <h2 className="text-2xl font-semibold text-primary-text">{exp.company}</h2>
              <p className="text-secondary-text italic mb-2">
                {exp.role} — {exp.date}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-text">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-blue hover:underline"
                >
                  <Award className="w-5 h-5 mr-2" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
