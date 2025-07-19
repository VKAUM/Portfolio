import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-white shadow">
      <h1 className="text-xl font-bold">
        <Link href="/" className="hover:underline">Home</Link>
      </h1>
      <div className="space-x-6">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/experience" className="hover:underline">Experience</Link>
        <Link href="/skills" className="hover:underline">Skills</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/resume" className="hover:underline">Resume</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
