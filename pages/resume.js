import { DownloadCloud } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen p-4 sm:p-8 bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-text">
          My <span className="text-accent-blue">Resume</span>
        </h1>
        <p className="text-secondary-text mb-8 max-w-2xl mx-auto">
          View my resume on a larger screen, or click the button below to download a copy.
        </p>
        
        <div className="mb-8">
          <a
            href="/Vishishta_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue text-primary-dark font-semibold rounded-lg hover:bg-accent-blue/80 transition-all duration-300 transform hover:scale-105"
          >
            <DownloadCloud size={20} />
            Download Resume
          </a>
        </div>

        {/* PDF Viewer - Hidden on small screens */}
        <div className="hidden md:block w-full max-w-4xl mx-auto h-[120vh] border-2 border-secondary-dark rounded-lg overflow-hidden bg-white">
          <iframe
            src="/Update Resume.pdf"
            className="w-full h-full"
            title="Vishishta Kavadiya's Resume"
          >
            This browser does not support PDFs. Please download the PDF to view it.
          </iframe>
        </div>
      </div>
    </div>
  );
}
