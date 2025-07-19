import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide7 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Voice-over text
  const voiceOverText = `
    Dari bahayanya abrasi di pulau panaitan yang dapat menenggelamkan keseluruhan pulau, Lalu Bagaimana kita dapat mencegah abrasi terjadi, Pertama, Penanam Mangrove dan Tidak Menebang Berlebihan.
    Menurut KLHK, mangrove berfungsi sebagai penahan ombak, mencegah intrusi air laut, 
    dan mengurangi abrasi dengan sistem akarnya yang kokoh. Penanaman mangrove juga mendukung 
    mitigasi perubahan iklim melalui penyimpanan karbon.

    Kedua, Pemeliharaan Terumbu Karang.
    Terumbu karang membantu mengurangi energi gelombang laut, melindungi garis pantai dari abrasi, 
    dan mendukung ekosistem laut. Pemeliharaan dan restorasi menjadi langkah penting untuk menjaga perannya.

    Ketiga, Pelarangan Penambangan Pasir.
    Penambangan pasir yang berlebihan mempercepat abrasi. Regulasi ketat diperlukan untuk melarang aktivitas ini, 
    menjaga stabilitas ekosistem pesisir, dan mencegah kerusakan lingkungan.
  `;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("slide7");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardData = [
    {
      title: "Penanam Mangrove dan Tidak Menebang Berlebihan",
      description:
        "Menurut KLHK, mangrove berfungsi sebagai penahan ombak, mencegah intrusi air laut, dan mengurangi abrasi dengan sistem akarnya yang kokoh. Penanaman mangrove juga mendukung mitigasi perubahan iklim melalui penyimpanan karbon.",
      icon: "\uD83C\uDF10", // Replace with a suitable icon
    },
    {
      title: "Aturan Tegas dan Tindak Tegas Aktifitas ilegal",
      description:
        "Masih banyak aktifitas illegal di Pulau Panaitan, contohnya penebangan liar, pembuatan jalan untuk menangkap burung, madu dll. Sehingga perlu langkah tegas dari pemerintah untuk mengurangi aktgifitas tersebut dan menemukan solusi terbaik dengan masyrakat sekitar.",
      icon: "\uD83C\uDF0A", // Replace with a suitable icon
    },
    {
      title: "STOP CLIMATE CHANGE, SAVE OUR PLANET",
      description:
        "Secara umum, hal yang paling sulit dan berpengaruh yang menimbulkan efek domino bencana yang lain adalah perubahan iklim termasuk mengakibatkan abrasi. Stop merusak lingkungan, save energy dan Go green! ",
      icon: "\uD83C\uDFE6", // Replace with a suitable icon
    },
  ];

  // Toggle voice-over
  const handleToggleVoiceOver = () => {
    if (isSpeaking) {
      // Stop the voice-over
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Start the voice-over
      const utterance = new SpeechSynthesisUtterance(voiceOverText);
      utterance.lang = "id-ID"; // Set language to Indonesian
      utterance.rate = 1; // Adjust speed if necessary

      utterance.onend = () => {
        // Reset state when speech ends
        setIsSpeaking(false);
      };

      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <section
      id="slide7"
      className="bg-blue-100 py-16 px-8 flex flex-col items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: "url('/img/8.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Voice-over toggle button */}
      <button
        onClick={handleToggleVoiceOver}
        className={`absolute top-6 left-10 p-1 rounded-full shadow-lg text-lg transition ${
          isSpeaking
            ? "bg-white text-white hover:bg-white"
            : "bg-white text-blue-600 hover:bg-gray-100"
        }`}
        style={{ zIndex: 10 }}
      >
        {isSpeaking ? "🔊" : "🔈"}
      </button>

      <motion.h2
        className="text-center text-2xl md:text-3xl font-bold text-gray-100 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Bagaimana Kita Mencegah Abrasi?<br />
        <br />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-3xl text-blue-500 mb-4">{card.icon}</div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">{card.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Slide7;
