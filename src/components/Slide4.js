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
          className="text-2xl md:text-4xl text-blue-800 font-extrabold text-blue mr-6 bg-white bg-opacity-50 p-4 hover:animate-wobble"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          Peta Sebaran Variabel
          2018 & 2023
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
            <option value="/img/abrasi.png">Peta Sebaran Abrasi</option>
            <option value="/img/ndvi_2018.png">Peta Sebaran Vegetasi (NDVI) 2018</option>
            <option value="/img/ndvi_2023.png">Peta Sebaran Vegetasi (NDVI) 2023</option>
            <option value="/img/mvi_2018.png">Peta Sebaran Mangrove (MVI) 2018</option>
            <option value="/img/mvi_2023.png">Peta Sebaran Mangrove (MVI) 2023</option>
            <option value="/img/lswi_2018.png">Peta Sebaran Kondisi Tanah (LSWI) 2018</option>
            <option value="/img/lswi_2023.png">Peta Sebaran Kondisi Tanah (LSWI) 2023</option>
            <option value="/img/tci_2018.png">Peta Sebaran Suhu (TCI) 2018</option>
            <option value="/img/tci_2023.png">Peta Sebaran Suhu (TCI) 2023</option>
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
            Berdasarkan analisis spasial tahun 2018 dan 2023, terlihat bahwa beberapa titik wilayah pesisir Pulau Panaitan terindikasi
             Pulau Panaitan terkena <span className="text-red-500 font-bold">abrasi</span>. 
             Berdasarkan hasil analisis menggunakan <b>Citra Satelit</b> dan <b>QGIS</b> pada tahun <b>2018</b> sampai <b>2023</b> terjadi <span className="text-red-500 font-bold">abrasi</span>
              dengan estimasi luas sekitar <span className="text-red-500 font-bold">2.04 km²</span>. Wilayah yang terkena <span className="text-red-500 font-bold">abrasi</span> cenderung mengalami penurunan kerapatan wilayah mangrove, 
              dan kerapatan vegetasi yang semakin menurun, kondisi matahari yang cukup menyinari sehingga suhu permukaan cenderung panas (bukan ekstrem)
              dapat mengsehatkan vegetasi sehingga dapat menahan abrasi.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Slide4;
