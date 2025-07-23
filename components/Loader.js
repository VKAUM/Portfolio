import { useEffect, useRef } from 'react';

export default function Loader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;

    // Characters that will be falling
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;':,./<>?";
    const charArray = chars.split('');
    const fontSize = 14;
    
    let columns;
    let drops;

    const setupAndResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = [];
        for (let x = 0; x < columns; x++) {
          drops[x] = 1;
        }
    }
    
    window.addEventListener('resize', setupAndResize);
    setupAndResize();


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
      animationFrameId = window.requestAnimationFrame(draw);
    }

    draw();

    // Cleanup on unmount
    return () => {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', setupAndResize);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#0D1117] z-[100] flex items-center justify-center">
      <canvas ref={canvasRef}></canvas>
      <h1 className="absolute text-xl sm:text-2xl font-mono animate-pulse text-center px-4">
        Initializing Portfolio...
      </h1>
    </div>
  );
}
