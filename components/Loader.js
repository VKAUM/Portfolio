import { useEffect, useRef } from 'react';

export default function Loader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters that will be falling
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;':,./<>?";
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // An array of drops - one for each column
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // Drawing the characters
    function draw() {
      // Semi-transparent black background to create a fading effect
      ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set color for the falling characters
      ctx.fillStyle = '#38BDF8'; // A vibrant sky blue
      ctx.font = `${fontSize}px monospace`;

      // Loop over the drops
      for (let i = 0; i < drops.length; i++) {
        // A random character to print
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        // x = i * fontSize, y = value of drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#0D1117] z-[100] flex items-center justify-center">
      <canvas ref={canvasRef}></canvas>
      <h1 className="absolute text-white text-2xl font-mono animate-pulse">
        Initializing Portfolio...
      </h1>
    </div>
  );
}
