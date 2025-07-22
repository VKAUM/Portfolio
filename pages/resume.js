export default function Resume() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <a
        href="/Vishishta_Resume.pdf"
        download
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Download Resume
      </a>
    </main>
  );
}