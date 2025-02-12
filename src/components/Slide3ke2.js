import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const canvasRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false); // Default suara mati

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

    const setupCanvasAnimation = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const clouds = [];
      const numClouds = 5;

      // Load cloud image
      const cloudImage = new Image();
      cloudImage.src = "/img/cloud.png";

      let cloudImageWidth = 0;
      let cloudImageHeight = 0;

      // Resize canvas
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      cloudImage.onload = () => {
        cloudImageWidth = cloudImage.width;
        cloudImageHeight = cloudImage.height;

        // Create cloud objects
        for (let i = 0; i < numClouds; i++) {
          const width = Math.random() * 200 + 100;
          const height = (cloudImageHeight / cloudImageWidth) * width; // Maintain aspect ratio
          clouds.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.5,
            width,
            height,
            speed: Math.random() * 0.5 + 0.2,
          });
        }

        // Draw clouds
        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          clouds.forEach((cloud) => {
            ctx.drawImage(
              cloudImage,
              cloud.x,
              cloud.y,
              cloud.width,
              cloud.height
            );
          });
        };

        // Update cloud positions
        const update = () => {
          clouds.forEach((cloud) => {
            cloud.x += cloud.speed;
            if (cloud.x > canvas.width) {
              cloud.x = -cloud.width;
              cloud.y = Math.random() * canvas.height * 0.5;
            }
          });
        };

        // Animation loop
        const animate = () => {
          draw();
          update();
          requestAnimationFrame(animate);
        };

        animate();
      };
    };

    window.addEventListener("scroll", handleScrollAnimations);
    handleScrollAnimations(); // Run on mount
    setupCanvasAnimation();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(
      "Mari kita telusuri ancaman abrasi pada pulau panaitan dengan penelitian menggunakan citra satelit, ayo gas"
    );
    utterance.lang = "id-ID";
    utterance.pitch = 1;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  // Button toggle untuk mengaktifkan/mematikan suara
  const toggleSpeak = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      speak();
    } else {
      window.speechSynthesis.cancel(); // Stop if already speaking
    }
  };

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/3_2.jpeg')" }}
    >
      {/* Tombol untuk mengontrol suara */}
      <button
        className="absolute top-7 left-10 bg-white text-blue-500 p-1 rounded-full shadow-lg text-lg hover:bg-gray-100 transition"
        onClick={toggleSpeak}
      >
        {isSpeaking ? "🔊" : "🔈"}
      </button>

      {/* Canvas untuk animasi awan */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>

      {/* Teks Animasi */}
      <h1
        className="text-center text-4xl md:text-5xl text-blue-800 leading-tight font-extrabold font-poppins hover:animate-wobble p-4 rounded-lg fade-in"
        style={{
          textShadow: `
            5px 5px 0px white, -5px 5px 0px white, 5px -5px 0px white, -5px -5px 0px white,
            5px 0px 0px white, -5px 0px 0px white, 0px 5px 0px white, 0px -5px 0px white
          `,
        }}
      >
        <span
          className="text-green-500 md:text-3xl"
          style={{
            textShadow: `
              5px 5px 0px white, -5px 5px 0px white, 5px -5px 0px white, -5px -5px 0px white,
              5px 0px 0px white, -5px 0px 0px white, 0px 5px 0px white, 0px -5px 0px white
            `,
          }}
        >
          Apakah Benar Nasib Pulau Panaitan Akan Menghilang? 😱
        </span>
        <br />
        Begini Hasil Risetnya Guys <br />
      </h1>

      {/* Subtitle */}
      <a
        href="#slide4"
        className="md:text-xs mt-6 text-lg font-semibold text-blue-500 hover:scale-110 transition-transform duration-800 bg-white bg-opacity-50 p-2 rounded-lg"
      >
        Hasil Penelitian ↓
      </a>

      {/* Gambar ilustrasi */}
      <div className="absolute bottom-0 w-full">
        <img src="/abrasi-illustration.png" className="w-full animate-slideUp" />
      </div>

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
