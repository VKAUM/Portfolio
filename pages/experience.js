import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Experience() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <ul className="list-disc pl-6 text-gray-700 space-y-4">
          <li>Intern @ XYZ — Built a gold price prediction model using ML</li>
          <li>Chatbot with voice recognition for customer support</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
