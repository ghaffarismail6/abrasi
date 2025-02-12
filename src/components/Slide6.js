import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing motion for animations

const Slide5ke2 = () => {
  const isVisible = true; // Replace this with actual visibility logic if needed

  // State for voice-over
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Voice-over text
  const voiceOverText =
    "Menurut UNEP, meskipun hanya mencakup kurang dari 1% total hutan tropis global, mangrove memiliki manfaat penting dalam kontrol gas rumah kaca, termasuk melindungi garis pantai dari badai, erosi, dan banjir dengan sistem akarnya yang kompleks, menyimpan karbon untuk mitigasi perubahan iklim, serta menyediakan habitat bagi lebih dari 1.533 spesies yang mendukung kesehatan ekosistem terumbu karang dan padang lamun. Selain itu, mangrove menjadi sumber makanan, kayu, dan air bersih bagi komunitas pesisir, menjadikannya vital untuk keberlanjutan lingkungan dan kesejahteraan masyarakat. Berdasarkan data Badan Pusat Statistik (BPS) per Desember 2021, luas ekosistem mangrove di Indonesia mencapai 3,63 juta hektare, yang merupakan sekitar 20,37% dari total luas mangrove dunia. Pulau Papua memiliki hutan mangrove terluas di Indonesia, yaitu sekitar 1,63 juta hektare."
  // Function to toggle voice-over
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
      className="relative h-screen flex flex-row items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/7.jpeg')" }}
    >
      {/* Tombol untuk mengontrol suara */}
      <button
        onClick={handleToggleVoiceOver}
        className={`absolute top-20 left-10 p-1 rounded-full shadow-lg text-lg transition ${
          isSpeaking
            ? "bg-white text-white hover:bg-gray-100"
            : "bg-white  hover:bg-gray-100"
        }`}
      >
        {isSpeaking ? "🔇 " : "🔈"}
      </button>

      {/* Bagian Kiri: Gambar Mangrove */}
      <motion.div
        className="w-25 ml-20 md:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/img/mangrove.png"
          alt="Ilustrasi Mangrove"
          className="w-25 object-cover rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>

      {/* Bagian Kanan: Teks dan Informasi */}
      <motion.div
        className="w-full md:w-2/3 m-3 md:mt-0 md:pl-6 text-sm mr-10"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-lg md:text-2xl font-bold text-gray-100 mt-0 text-justify">
          Peran Mangrove dalam Abrasi Pesisir
        </h2>

        <div className="mt-4 mr-20">
          <p className="text-gray-100 leading-relaxed text-justify">
            <span className="font-bold text-green-300">Menurut UNEP</span>, meskipun hanya mencakup{" "}
            <span className="font-bold text-green-300">kurang dari 1% total hutan tropis global</span>, mangrove memiliki manfaat penting dalam kontrol gas rumah kaca, termasuk melindungi garis pantai dari badai, erosi, dan banjir dengan sistem akarnya yang kompleks, menyimpan karbon untuk mitigasi perubahan iklim, serta menyediakan habitat bagi lebih dari 1.533 spesies yang mendukung kesehatan ekosistem terumbu karang dan padang lamun. Selain itu, mangrove menjadi sumber makanan, kayu, dan air bersih bagi komunitas pesisir, menjadikannya vital untuk keberlanjutan lingkungan dan kesejahteraan masyarakat.
          </p>
          <p className="text-gray-100 mt-2 leading-relaxed text-justify">
            Berdasarkan data{" "}
            <span className="font-bold text-green-300">Badan Pusat Statistik (BPS)</span> per Desember 2021, luas ekosistem mangrove di Indonesia mencapai{" "}
            <span className="font-bold text-green-300">3,63 juta hektare</span>, yang merupakan sekitar{" "}
            <span className="font-bold text-green-300">20,37%</span> dari total luas mangrove dunia. Pulau Papua memiliki hutan mangrove terluas di Indonesia, yaitu sekitar{" "}
            <span className="font-bold text-green-300">1,63 juta hektare</span>.
          </p>
        </div>

      </motion.div>

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

export default Slide5ke2;
