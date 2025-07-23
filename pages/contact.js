import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      icon: <Mail className="w-8 h-8 text-accent-blue" />,
      title: "Email",
      handle: "vishishta.kavadiya@example.com",
      href: "mailto:vishishta.kavadiya@example.com"
    },
    {
      icon: <Linkedin className="w-8 h-8 text-accent-blue" />,
      title: "LinkedIn",
      handle: "in/vishishta-kavadiya",
      href: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: <Github className="w-8 h-8 text-accent-blue" />,
      title: "GitHub",
      handle: "VKAUM",
      href: "https://github.com/VKAUM"
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-text">
          Get In <span className="text-accent-blue">Touch</span>
        </h1>
        <p className="text-secondary-text mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary-dark/50 border border-secondary-dark rounded-lg flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-accent-blue/50 hover:-translate-y-1"
            >
              {link.icon}
              <h3 className="text-xl font-semibold text-primary-text">{link.title}</h3>
              <p className="text-secondary-text break-all">{link.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
