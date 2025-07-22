import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <main className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-lg text-gray-700">
            Let's get in touch! You can reach me at:
          </p>
          <p className="text-lg mt-2">
            📧 <a href="mailto:vishishta@example.com" className="text-blue-600 underline">vishishta@example.com</a>
          </p>
          <p className="text-lg">
            🔗 <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-600 underline">LinkedIn</a>
          </p>
        </div>
      </main>
    </>
  );
}