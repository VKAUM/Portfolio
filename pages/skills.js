import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import {
  Code2,
  ServerCog,
  BrainCircuit,
  Database,
  Languages,
} from "lucide-react"; // Icons

const Dropdown = ({ title, icon: Icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 border rounded-lg shadow transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left text-xl font-medium px-4 py-3 bg-white hover:bg-gray-100 transition cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-blue-600" />}
          {title}
        </div>
        <span className="text-sm">{open ? "▲" : "▼"}</span>
      </button>
      <div
        className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        {/* Skills */}
        <Dropdown title="Skills">
          <Dropdown title="Web Development" icon={Code2}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800">
              <span>Next.js</span>
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
            </div>
          </Dropdown>

          <Dropdown title="Cloud & DevOps" icon={ServerCog}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800">
              <span>AWS</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>NGC</span>
              <span>Ansible</span>
            </div>
          </Dropdown>

          <Dropdown title="Machine Learning & AI" icon={BrainCircuit}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800">
              <span>Python</span>
              <span>Scikit-learn</span>
              <span>LSTM</span>
              <span>TensorFlow</span>
              <span>OpenCV</span>
            </div>
          </Dropdown>

          <Dropdown title="Databases" icon={Database}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800">
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </Dropdown>

          <Dropdown title="Programming Languages" icon={Languages}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800">
              <span>Python</span>
              <span>C++</span>
              <span>Java</span>
              <span>SQL</span>
              <span>Kotlin</span>
            </div>
          </Dropdown>
        </Dropdown>

        {/* Certifications */}
        <Dropdown title="Certifications">
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>
              <a
                href="https://drive.google.com/file/d/111F-azVWqZEcOgmvdDfrHx32QzTEETs9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Database Management System
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1vFmChI30WjuoBMYI2-byhuDmj9YL-9iE/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Computer Organization Architecture
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1JOkvzAlobQixRZGSh2DfslYRuRIJOSGa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Image Processing Onramp
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1wVT65XRMSJQ7L2Y6GC5U00RDzjDQirvY/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Matlab Onramp
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1NPe0wa1R53CM8rl2e9nXTZ-k8e8qhBBq/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                AWS Machine Learning Foundations
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/11LQmOZREtP6JkFarOwCKEgyGPRzV2uDM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Robotics using AI – STTP
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1AoHADxv0XxrwNG0eL3DVjiAcAejmH7eG/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Artificial Intelligence via Udemy
              </a>
            </li>
          </ul>
        </Dropdown>

        {/* Achievements */}
        <Dropdown title="Achievements">
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>
              <a
                href="https://drive.google.com/file/d/1agAxt89DGQmvhL7dhjpDVfEvIzUAL2BZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Winner of Hackathon: HackSustain
              </a>
            </li>
          </ul>
        </Dropdown>

        {/* Education */}
        <Dropdown title="Education">
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>B.Tech in Computer Science with specialization in AI/ML</li>
            <li>XYZ College, 2021–2025</li>
          </ul>
        </Dropdown>
      </main>
      <Footer />
    </>
  );
}
