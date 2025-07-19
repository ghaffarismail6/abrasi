import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const canvasRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false); // Default suara mati
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
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

    window.addEventListener("resize", resizeCanvas); // Register resize event
    resizeCanvas(); // Initial resize

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

    const speak = () => {
      const utterance = new SpeechSynthesisUtterance(
        "Halo Teman-teman semuanya, Selamat Datang di Website penelitian Remote Sensing, DI website ini akan dibahas tentang Ancaman Abrasi yang ada di Pulau Panaitan Banten, Tapi Sebelumnya temen-temen bisa matika fitur mic di kiri atas jika teman-teman mau matikan suara. Silahkan scroll down untuk melanjutkan, enjoy , "
      );
      utterance.lang = "id-ID";
      utterance.pitch = 1;
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    };

    if (isSpeaking) {
      const timeoutId = setTimeout(() => {
        speak();
      }, 1000); // Delay 2 detik
      return () => clearTimeout(timeoutId); // Bersihkan timeout saat unmount
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 0.5;
      setShowButton(scrollPosition < triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      window.speechSynthesis.cancel();
    };
  }, [isSpeaking]);

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/1.jpeg')" }}
    >
      {/* Button for toggling sound */}
      {showButton && (
        <button
          className="absolute top-4 left-10 bg-white text-blue-500 p-1 rounded-full shadow-lg text-lg hover:bg-gray-100 transition"
          onClick={() => setIsSpeaking((prev) => !prev)}
        >
          {isSpeaking ? "🔊" : "🔈"}
        </button>
      )}

      {/* Canvas for cloud animation */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>

      {/* Teks Animasi */}
      <h1
        className="text-center text-4xl md:text-5xl text-blue-800 leading-tight font-extrabold font-poppins hover:animate-wobble p-4 rounded-lg"
        style={{
          textShadow: `
            5px 5px 0px white, -5px 5px 0px white, 5px -5px 0px white, -5px -5px 0px white,
            5px 0px 0px white, -5px 0px 0px white, 0px 5px 0px white, 0px -5px 0px white
          `,
        }}
      >
        <span
          className="text-green-500 md:text-7xl"
          style={{
            textShadow: `
              5px 5px 0px white, -5px 5px 0px white, 5px -5px 0px white, -5px -5px 0px white,
              5px 0px 0px white, -5px 0px 0px white, 0px 5px 0px white, 0px -5px 0px white
            `,
          }}
        >
          Panaitan Warning!!:
        </span>
        <br />
        Ancaman Hilangnya Pulau <br />
        Akibat Abrasi
      </h1>

      {/* Subtitle */}
      <a
        href="#slide2"
        className="md:text-xs mt-6 text-lg font-semibold text-blue-500 hover:scale-110 transition-transform duration-800 bg-white bg-opacity-50 p-2 rounded-lg"
      >
        Scroll Ke Bawah ↓
      </a>

      {/* Gambar ilustrasi */}
      <div className="absolute bottom-0 w-full">
        <img src="/abrasi-illustration.png" className="w-full animate-slideUp" />
      </div>
    </section>
  );
};

export default Hero;
