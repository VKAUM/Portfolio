import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award } from "lucide-react"; // Use Award icon in place of Certificate

export default function Experience() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-white">
        <h1 className="text-4xl font-bold mb-8">Experience</h1>

        {/* MSPL Baldota Group */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold">MSPL Baldota Group</h2>
          <p className="text-gray-600 italic mb-2">
            Software Developer / Data Analyst — Jun 2024
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Collaborated with cross-functional teams to develop Python-based AI solutions, enhancing workflow efficiency by 15%.</li>
            <li>Built a chatbot, reducing manual queries by 30% and improving client satisfaction.</li>
            <li>Predicted product prices with 90% accuracy using LSTM models for market strategy.</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1yIcVaZ5EKRAfVA5dl9u-RjTHTDGMyKty/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <Award className="w-5 h-5 mr-2" />
              View Certificate
            </a>
          </div>
        </div>

        {/* SRM Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold">SRM Tech</h2>
          <p className="text-gray-600 italic mb-2">
            Software Developer / Architect Intern — Mar 2024 – Sep 2024
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Designed and deployed a website with real-time functionality.</li>
            <li>Integrated real-time eye and face movement tracking to detect cheating, boosting detection by ~25%.</li>
            <li>Implemented voice recognition and frequency detection with sub-second latency for real-time speech/audio applications.</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1su0bBL8_Vhf6HOWR0S5GXpwVwTT9vFKl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <Award className="w-5 h-5 mr-2" />
              View Certificate
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
