import React, { useState } from "react";
import { motion } from "framer-motion";

const Slide4 = () => {
  // Variasi animasi untuk elemen
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Animasi awal (tersembunyi dan bergeser ke bawah)
    visible: { opacity: 1, y: 0 }, // Animasi ketika muncul
  };

  // State untuk dropdown
  const [selectedMap, setSelectedMap] = useState("/img/peta1.png");
  const [isSpeaking, setIsSpeaking] = useState(false); // State untuk memonitor suara

  const handleMapChange = (event) => {
    setSelectedMap(event.target.value);
  };

  // Fungsi untuk memulai/menghentikan suara
  const toggleSpeak = () => {
    const text = `Berikut Peta sebaran abrasi pulau panaitan teman-teman bisa memiliki tombol scroll down yang ada di bagian kanan untuk membandingkan peta sebaran, terdapat peta sebaran abrasi, dan beberapa fitur yang mempengaruhi abrasi seperti mvi, ndvi, ndwi, dan tci. Jika kita lihat Berdasarkan analisis spasial, terlihat bahwa sebagian Pulau Panaitan terkena abrasi dan bisa saja berpotensi hilang setelah beberapa puluh tahun setelahnya. Berdasarkan hasil analisis menggunakan Citra Satelit dan QGIS pada tahun 2018 sampai 2023 terjadi abrasi dengan luas sekitar 2.27 km². Wilayah yang terkena abrasi cenderung mempunyai wilayah mangrove rendah, vegetasi yang kurang rapat, dan suhu lebih rendah.`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.pitch = 1;
    utterance.rate = 1;

    if (isSpeaking) {
      window.speechSynthesis.cancel(); // Jika sudah berbicara, hentikan
    } else {
      window.speechSynthesis.speak(utterance);
    }

    setIsSpeaking(!isSpeaking); // Toggle status suara
  };

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/5.jpeg')" }}
    >
      {/* Tombol untuk mengontrol suara */}
      <button
        className="absolute top-7 left-10 bg-white text-blue-500 p-1 rounded-full shadow-lg text-lg hover:bg-gray-100 transition"
        onClick={toggleSpeak}
      >
        {isSpeaking ? "🔊" : "🔈"}
      </button>

      {/* Kontainer untuk judul dan gambar peta */}
      <motion.div
        className="w-full max-w-7xl flex items-center justify-center mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        variants={variants}
      >
        {/* Judul di samping gambar peta */}
        <motion.h2
          className="text-4xl md:text-5xl text-blue-800 font-extrabold text-blue mr-6 bg-white bg-opacity-50 p-4 hover:animate-wobble"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          Peta Sebaran Abrasi Panaitan
        </motion.h2>

        {/* Gambar Peta */}
        <div className="flex-grow w-[550px] h-[400px] rounded-lg shadow-xl overflow-hidden">
          <img
            src={selectedMap}
            alt="Peta Persebaran"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Dropdown */}
        <div className="ml-4">
          <select
            className="p-3 border rounded-lg shadow-md bg-green-500 text-white font-bold"
            value={selectedMap}
            onChange={handleMapChange}
          >
            <option value="/img/petacoastline.png">Peta Sebaran Abrasi</option>
            <option value="/img/petamvi.png">Peta Sebaran Mangrove (MVI)</option>
            <option value="/img/petandvi.png">Peta Sebaran Vegetasi (NDVI)</option>
            <option value="/img/petalswi.png">Peta Sebaran Kondisi Tanah (LSWI)</option>
            <option value="/img/petatci.png">Peta Sebaran Suhu (TCI)</option>
          </select>
        </div>
      </motion.div>

      {/* Deskripsi */}
      <motion.div
        className="w-full max-w-5xl mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        variants={variants}
      >
        <div className="flex items-center justify-center flex-col border border-gray-300 rounded-lg p-6 bg-white bg-opacity-80">
          <p className="text-sm text-justify">
            Berdasarkan analisis spasial, terlihat bahwa sebagian Pulau Panaitan terkena <span className="text-red-500 font-bold">abrasi</span> dan bisa saja berpotensi hilang setelah beberapa puluh tahun setelahnya. Berdasarkan hasil analisis menggunakan <b>Citra Satelit</b> dan <b>QGIS</b> pada tahun <b>2018</b> sampai <b>2023</b> terjadi <span className="text-red-500 font-bold">abrasi</span> dengan luas sekitar <span className="text-red-500 font-bold">2265271.573236327 m²</span> atau <span className="text-red-500 font-bold">2.27 km²</span>. Wilayah yang terkena <span className="text-red-500 font-bold">abrasi</span> cenderung mempunyai wilayah mangrove rendah, vegetasi yang kurang rapat, tanah yang terlalu lembap dan suhu lebih rendah.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Slide4;
