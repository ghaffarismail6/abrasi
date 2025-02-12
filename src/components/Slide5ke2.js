import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing motion for animations

const Slide5ke2 = () => {
  const isVisible = true; // Replace this with actual visibility logic if needed

  // State for voice-over
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Voice-over text
  const voiceOverText =
    "Berdasarkan hasil analisis spasial dari citra satelit, adanya indikasi abrasi dari tahun ke tahun. Walau hanya 5 tahun abrasi di Pulau Panaitan lebih dari 2 kilometer persegi. Hal ini menjadi kekhawatiran ketika beberapa tahun mendatang dapat berkemungkinan menenggelamkan keseluruhan Pulau Panaitan jika tidak ditindaklajuti oleh masyarakat sekitar, pengelola wisata Ujung Kulon ataupun pemerintah seperti nasibnya 2 pulau di Pandeglang, Banten yaitu Pulau Karang Gundul dan Pulau Waton yang tenggelam karena abrasi. Analisis dilakukan dengan grid 20x20 meter untuk mencari fitur yang mempengaruhi wilayah rawan abrasi tersebut. Dengan model terbaik Random Forest didapat akurasi sebesar 84,34 persen dengan fitur paling signifikan atau penting adalah MVI yang menandakan keberadaan vegetasi mangrove pada setiap grid tersebut. Pemerintah dan pengelola wisata perlu mengambil langkah untuk menyelamatkan Pulau Panaitan tersebut dengan beberapa langkah di bawah.";

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
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/5_5.jpeg')" }}
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
        className="w-25 md:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/img/citra.png"
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
        <h2 className="text-lg md:text-2xl font-bold text-gray-0 mt-0">
          Kesimpulan
        </h2>

        <div className="mt-4 mr-5">
          <p className="text-gray-0 leading-relaxed text-justify">
            Berdasarkan hasil analisis spasial dari citra satelit, adanya
            indikasi abrasi dari tahun ke tahun. Walau hanya 5 tahun abrasi di
            Pulau Panaitan lebih dari 2 km<sup>2</sup>. Hal ini menjadi
            kekhawatiran ketika beberapa tahun mendatang dapat berkemungkinan
            menenggelamkan keseluruhan Pulau Panaitan jika tidak ditindaklajuti
            oleh masyarakat sekitar, pengelola wisata Ujung Kulon ataupun
            pemerintah seperti nasibnya 2 pulau di Pandeglang, Banten yaitu
            Pulau Karang Gundul dan Pulau Waton yang tenggelam karena abrasi.
            Analisis dilakukan dengan grid 20x20 meter untuk mencari fitur yang
            mempengaruhi wilayah rawan abrasi tersebut. Dengan model terbaik
            Random Forest didapat akurasi sebesar 83,02% dengan semua fitur signifkan karena lebib dari 20%. Fitur paling
            signifikan atau penting adalah NDVI Vegetasi rapat di Pulau Panaitan, yang didukung oleh hutan lindung, 
            berperan penting dalam meredam gelombang, menjaga kelembaban tanah, mengurangi dampak angin, 
            serta menstabilkan dan menambah sedimen, sehingga membantu melindungi area dari abrasi, Pemerintah dan
            pengelola wisata perlu mengambil langkah untuk menyelamatkan Pulau
            Panaitan tersebut dengan beberapa langkah di bawah.
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
