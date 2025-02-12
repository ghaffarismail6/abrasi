import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const images = ["/img/p1.jpeg", "/img/p2.jpeg", "/img/p3.jpeg"]; // Add more images here
  const voiceOverText = `
    Berikut adalah Pulau Panaitan, cantik bukan? Laut biru dan pasir putih. 
    Namun abrasi menyebabkan hilangnya tanah dan pergeseran garis pantai. 
    Menurut Pemerintah Banten, tahun 2015 sebanyak dua pulau di Banten hilang 
    (Pulau Karang Gundul dan Pulau Waton) akibat tidak dirawat sehingga diduga abrasi. 
    Hal ini disayangkan karena pulau merupakan aset untuk pemerintah daerah. 
    Dilakukan penelitian untuk melihat apakah ada abrasi karena pergeseran garis pantai di Pulau Panaitan 
    dan melihat variabel yang mempengaruhi abrasi seperti mangrove dan lainnya.
  `;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleToggleVoiceOver = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(voiceOverText);
      utterance.lang = "id-ID"; // Set to Indonesian language
      utterance.rate = 1; // Adjust speed if necessary

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("slide3");
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

  return (
    <section
      id="slide3"
      className="bg-blue-100 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center min-h-screen relative"
      style={{ backgroundImage: "url('/img/3.jpeg')", backgroundSize: "cover" }}
    >
      {/* Tombol Voice-over */}
      <button
        onClick={handleToggleVoiceOver}
        className={`absolute top-7 left-10 p-1 rounded-full shadow-lg text-lg transition ${
          isSpeaking
            ? "bg-white text-white hover:bg-white"
            : "bg-white text-blue-600 hover:bg-gray-100"
        }`}
        style={{ zIndex: 10 }}
      >
        {isSpeaking ? "🔊" : "🔈"}
      </button>

      {/* Bagian Kiri: Gambar dan Ilustrasi */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-yellow-300 rounded-xl p-6 md:p-10 shadow-lg w-[600px] h-[450px]">
          <div className="relative w-full h-full">
            <img
              src={images[currentImageIndex]}
              alt="Ilustrasi Stunting"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Tombol Navigasi */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bagian Kanan: Teks dan Informasi */}
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mt-2">
          Ancaman Abrasi di Pulau Panaitan, Ujung Kulon, Banten
        </h2>

        <div className="mt-6">
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            Abrasi menyebabkan hilangnya tanah dan pergeseran garis pantai.
            Menurut Pemerintah Banten, tahun 2015 sebanyak 2 pulau di Banten
            hilang (Pulau Karang Gundul dan Pulau Waton) akibat tidak dirawat
            sehingga diduga abrasi. Hal ini disayangkan karena pulau merupakan
            aset untuk pemerintah daerah. Dilakukan penelitian untuk melihat
            apakah ada abrasi karena pergeseran garis pantai di Pulau Panaitan
            dan melihat variabel yang mempengaruhi abrasi seperti mangrove dan
            lainnya.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Slide3;
