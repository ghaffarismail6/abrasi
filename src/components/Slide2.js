import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slide2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false); // State untuk kontrol suara

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("slide2");
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 3 : prev === 3 ? 2 : 1));
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(
      "Mengapa ya abrasi sangat mengancam? Banyak berita tentang bahaya dari abrasi. Teman-teman bisa pencet tombol panah kanan untuk slide berita lainnya. Di Indonesia, secara umum abrasi sering terjadi karena Indonesia merupakan salah satu negara dengan tepi pantai terpanjang di dunia, jadi abrasi tidak bisa diindahkan. Ancaman abrasi dapat berbahaya karena dapat merusak jalanan, fasilitas publik, rumah penduduk, bahkan sampai menghilangkan sebuah pulau. Klik Baca Berita untuk mengarahkan ke berita yang ada."
    );
    utterance.lang = "id-ID";
    utterance.pitch = 1;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  const toggleSpeak = () => {
    setIsSpeaking((prev) => !prev);
    if (!isSpeaking) {
      speak();
    } else {
      window.speechSynthesis.cancel();
    }
  };

  const slideData = [
    {
      id: 1,
      newsImage: "/img/berita1.jpeg",
      newsDescription:
        "Bahaya! Dampak abrasi mengakibatkan sebuah pulau menghilang.",
      newsLink:
        "https://mediaindonesia.com/nusantara/93101/akibat-abrasi-pulau-derawan-terancam-hilang",
    },
    {
      id: 2,
      newsImage: "/img/berita2.jpeg",
      newsDescription:
        "Abrasi mengakibatkan rumah jalanan rusak di berbagai wilayah Indonesia.",
      newsLink:
        "https://acehprov.go.id/berita/kategori/sosial-kemasyarakatan/sejumlah-rumah-warga-di-lhokseumawe-rusak-dihantam-abrasi",
    },
    {
      id: 3,
      newsImage: "/img/berita3.jpeg",
      newsDescription:
        "Jalanan rusak imbas abrasi tidak kuatnya pondasi tanah menompang.",
      newsLink:
        "https://www.balipost.com/news/2025/01/16/437441/Akibat-Abrasi,Kondisi-Jalan-Setapak...html",
    },
  ];

  const current = slideData.find((slide) => slide.id === currentSlide);

  return (
    <section
      id="slide2"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/2.jpeg')" }}
    >
      {/* Tombol Suara */}
      <button
        className="absolute top-4 left-10 bg-white text-pink-500 p-1 rounded-full shadow-lg text-lg hover:bg-gray-100 transition"
        onClick={toggleSpeak}
      >
        {isSpeaking ? "🔊" : "🔈"}
      </button>

      {/* Judul */}
      <motion.h2
        className="text-4xl md:text-3xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Mengapa Abrasi Sangat Mengancam?
      </motion.h2>

      <motion.p
        className="mt-3 text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Mari kita simak beberapa berita dan jurnalnya!
      </motion.p>

      {/* Kartu Berita */}
      <motion.div
        className="relative mt-8 w-11/12 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center">
          {/* Gambar Berita */}
          <div className="w-full">
            <img
              src={current.newsImage}
              alt="Berita Abrasi"
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Abrasi Mengancam Pesisir Pantai Indonesia, Bahaya dan Kerugian
              Menghantui
            </h3>
            <p className="text-gray-600 mt-2">{current.newsDescription}</p>
            <a
              href={current.newsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 px-6 py-2 bg-pink-500 text-white font-bold rounded-full flex items-center gap-2">
                Baca Berita <span>👁</span>
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Tombol Navigasi Kiri & Kanan */}
      <motion.button
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={prevSlide}
      >
        ←
      </motion.button>
      <motion.button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={nextSlide}
      >
        →
      </motion.button>
    </section>
  );
};

export default Slide2;
