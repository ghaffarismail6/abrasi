import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const canvasRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add("animate-fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimations);
    handleScrollAnimations(); // Run on mount
    
    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance("STOP CLIMATE CHANGE, SAVE OUR PLANET");
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  const toggleSpeak = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      speak();
    } else {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/5_5.jpeg')" }}>
      <button className="absolute top-7 left-10 bg-white text-blue-500 p-1 rounded-full shadow-lg text-lg hover:bg-gray-100 transition" onClick={toggleSpeak}>
        {isSpeaking ? "🔊" : "🔈"}
      </button>

      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>

      {/* Gambar Poster */}
      <img src="/img/poster.jpg" alt="Climate Change Poster" className="w-3/4 md:w-1/2 fade-in shadow-lg rounded-lg" />
      
      {/* Sumber */}
      <p className="text-sm text-gray-500 mt-2 fade-in">Sumber: Amazon.com</p>
      
      {/* Kalimat Besar */}
      <p className="text-lg md:text-xl font-bold text-red-600 mt-4 fade-in text-center">
        Climate Change bisa merusak bumi dan mendatangkan bencana termasuk abrasi dan menenggelamkan kita semua
      </p>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
