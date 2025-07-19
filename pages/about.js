import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Navbar />
      <main className="min-h-screen px-8 py-20 bg-white">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          I'm a passionate software developer specializing in full-stack web development and AI/ML. I love building clean, performant applications that solve real-world problems. I'm always learning and excited by new challenges!
        </p>
      </main>
      <Footer />
    </>
  );
}
