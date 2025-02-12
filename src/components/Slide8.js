import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Slide8 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("slide8");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    const createAnimation = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const clouds = [];
      const numClouds = 5;

      const cloudImage = new Image();
      cloudImage.src = "/img/cloud.png";

      let cloudImageWidth = 0;
      let cloudImageHeight = 0;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      cloudImage.onload = () => {
        cloudImageWidth = cloudImage.width;
        cloudImageHeight = cloudImage.height;

        for (let i = 0; i < numClouds; i++) {
          const width = Math.random() * 200 + 100;
          const height = (cloudImageHeight / cloudImageWidth) * width;
          clouds.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.5,
            width,
            height,
            speed: Math.random() * 0.5 + 0.2,
          });
        }

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

        const update = () => {
          clouds.forEach((cloud) => {
            cloud.x += cloud.speed;
            if (cloud.x > canvas.width) {
              cloud.x = -cloud.width;
              cloud.y = Math.random() * canvas.height * 0.5;
            }
          });
        };

        const animate = () => {
          draw();
          update();
          requestAnimationFrame(animate);
        };

        animate();
      };
    };

    window.addEventListener("scroll", handleScroll);
    createAnimation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleVoiceOver = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(
        "Oke, karena awan sudah berwarna putih cukup sekian dan terima kasih"
      );
      utterance.lang = "id-ID"; // Set to Indonesian language
      utterance.rate = 1; // Adjust speed if necessary

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <section
      id="slide8"
      className="py-8 px-6 md:px-10 flex flex-col items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: "url('/img/9.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>

      {/* Voice-over Toggle Button */}
      <button
        onClick={handleToggleVoiceOver}
        className={`absolute top-10 left-10 p-1 rounded-full shadow-lg text-lg transition ${
          isSpeaking
            ? "bg-white text-white hover:bg-white"
            : "bg-white text-blue-600 hover:bg-gray-100"
        }`}
      >
        {isSpeaking ? "🔊" : "🔈"}
      </button>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        TENTANG PENELITI
      </motion.h2>

      <motion.div
        className="w-full md:w-1/2 flex flex-col md:flex-row items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/img/ghaffar.png"
          alt="Foto Peneliti 1"
          className="w-36 h-36 object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
        />
        <div className="text-justify">
          <h3 className="text-xl font-semibold text-lime-700 mb-1">
            GHAFFAR ISMAIL
          </h3>
          <p className="text-lime-600 font-medium mb-2">
            D-IV SAINS DATA KOMPUTASI STATISTIK
          </p>
          <p className="text-gray-700 leading-relaxed">
            I am a highly motivated individual specializing in Data Science with
            a strong foundation in data analytics, programming, and statistical
            modeling. My interests lie at the intersection of technology and
            environmental science, focusing on utilizing big data and remote
            sensing to uncover patterns and insights that drive impactful
            decisions.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex flex-col md:flex-row items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="/img/robert.jpg"
          alt="Foto Peneliti 2"
          className="w-36 h-36 object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
        />
        <div className="text-justify">
          <h3 className="text-xl font-semibold text-lime-700 mb-1">
            ROBERT KURNIAWAN, S.ST. M.Si
          </h3>
          <p className="text-lime-600 font-medium mb-2">
            Dosen Politeknik Statistika STIS / Researcher
          </p>
          <p className="text-gray-700 leading-relaxed">
            Research interests include diverse fields such as Disaster Management,
            Computational Statistics, Environmental Studies, Fuzzy Clustering, and
            Social Science. Notable achievements include the Master's Scholarship
            from BPS in 2009, a Research Grant from Bank Indonesia in 2021, and a
            Research Grant from ERIA in 2020.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Slide8;
