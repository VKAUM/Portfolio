import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(''); // Can be 'sending', 'success', 'error', or ''

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // !!! IMPORTANT !!!
    // Replace these placeholders with your actual EmailJS credentials
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'YOUR_USER_ID';

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000); // Reset status after 5 seconds
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
      });
  };

  const contactLinks = [
    {
      icon: <Mail className="w-8 h-8 text-accent-blue" />,
      title: "Email",
      handle: "vishishtakavadiyacric@gmail.com",
      href: "mailto:vishishtakavadiyacric@gmail.com"
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-text">
            Get In <span className="text-accent-blue">Touch</span>
            </h1>
            <p className="text-secondary-text mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-primary-text mb-6">Send Me a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-secondary-text mb-2">Name</label>
                <input type="text" name="user_name" id="user_name" required className="w-full bg-secondary-dark/50 border border-secondary-dark rounded-lg px-4 py-2 text-primary-text focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all" />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-secondary-text mb-2">Email</label>
                <input type="email" name="user_email" id="user_email" required className="w-full bg-secondary-dark/50 border border-secondary-dark rounded-lg px-4 py-2 text-primary-text focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-text mb-2">Message</label>
                <textarea name="message" id="message" rows="5" required className="w-full bg-secondary-dark/50 border border-secondary-dark rounded-lg px-4 py-2 text-primary-text focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 px-6 py-2 bg-accent-blue text-primary-dark font-semibold rounded-lg hover:bg-accent-blue/80 transition-all duration-300 disabled:bg-secondary-dark disabled:text-secondary-text disabled:cursor-not-allowed">
                  {status === 'sending' ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                <AnimatePresence>
                  {status === 'success' && <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-green-400 flex items-center gap-2"><CheckCircle size={20}/> Message Sent!</motion.p>}
                  {status === 'error' && <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-red-400 flex items-center gap-2"><AlertTriangle size={20}/> Failed to send.</motion.p>}
                </AnimatePresence>
              </div>
            </form>
          </div>

          {/* Contact Links */}
          <div className="space-y-8">
             <h2 className="text-2xl font-bold text-primary-text mb-6">Other Ways to Connect</h2>
            {contactLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 bg-secondary-dark/50 border border-secondary-dark rounded-lg flex items-center gap-4 transition-all duration-300 hover:border-accent-blue/50 hover:-translate-y-1"
              >
                {link.icon}
                <div>
                  <h3 className="text-xl font-semibold text-primary-text">{link.title}</h3>
                  <p className="text-secondary-text break-all">{link.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
