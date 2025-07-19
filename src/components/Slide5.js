import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Slide5 = () => {
  const [isVoiceActive, setIsVoiceActive] = useState(false); // Initial state set to false, so voice-over doesn't play automatically

  const data = {
    labels: ["ndvi", "tci", "lswi", "mvi"], // Sumbu Y (nama indikator)
    datasets: [
      {
        label: "Nilai Indikator", // Label untuk grafik
        data: [ 0.5304155568926703, 0.21305062209189726, 0.1540454357358096, 0.10248838527962278], // Sumbu X (nilai indikator)
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Warna batang
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Feature Importance (Fitur Paling Signifikan terhadap Abrasi)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Nilai",
        },
      },
      y: {
        title: {
          display: true,
          text: "Fitur",
        },
        beginAtZero: true, // Ensure the bar starts from zero
      },
    },
    indexAxis: "y", // Set to 'y' to make the bars horizontal
  };

  const data2 = {
    labels: ["Logistic Regression", "Random Forest", "SVM"], // Model names
    datasets: [
      {
        label: "Accuracy", // Label for accuracy bar
        data: [0.7422.toFixed(3), 0.8223.toFixed(3), 0.7591.toFixed(3)], // Accuracy values for each model, rounded to 3 decimal places
        backgroundColor: "rgba(54, 162, 235, 0.5)", // Color for accuracy bars
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "F1-Score", // Label for F1-score bar
        data: [0.74.toFixed(3), 0.82.toFixed(3), 0.77.toFixed(3)], // F1-score values for each model, rounded to 3 decimal places
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Color for F1-score bars
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Model Performance Comparison (Accuracy and F1-Score)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Model",
        },
      },
      y: {
        title: {
          display: true,
          text: "Score",
        },
        beginAtZero: true, // Ensure the bar starts from zero
      },
    },
  };

  useEffect(() => {
    // Trigger voice-over only when `isVoiceActive` is true (after clicking the button)
    if (isVoiceActive) {
      const voiceOverText = `
      Untuk menganalisis lebih jauh dan mencari model klasifikasi yang paling baik dilakukan dengan machine learning menggunakan metode esviar, Random fores, dan regresi logistik. 
      Dari ketiga model dipilih yang terbaik dilihat dari akurasi dan F one score, teman-teman bisa melihat akurasi masing-maisng model dengan mendekatkan kursor ke diagram akan muncul nilai akurasi masing-masing, dan yang terbaik adalah random forest dengan akurasi 84,38%. 
      Lanjut menganalisis faktor/fitur yang paling signifikan/penting dalam mempengaruhi abrasi adalah mvi atau adanya pengaruh tanaman mangrove. 
      Limitasi penelitian ini adalah 1. Akurasi masih bisa ditingkatkan lagi menjadi lebih dari 90%. 
      2. Machine Learning hanya menggunakan 3 metode, bisa digunakan yang lain, seperti XGBoost agar menemukan metode yang terbaik dengan akurasi uji yang terbaik.
      `;
      const utterance = new SpeechSynthesisUtterance(voiceOverText);
      utterance.lang = "id-ID"; // Set to Bahasa Indonesia
      window.speechSynthesis.speak(utterance);
    }
  }, [isVoiceActive]);

  const toggleVoice = () => {
    setIsVoiceActive((prevState) => !prevState); // Toggle the voice state
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/6.jpeg')" }}>
      {/* Voice Toggle Button */}
      <button
        onClick={toggleVoice}
        className="absolute top-6 left-10 p-1 bg-white rounded-full shadow-md focus:outline-none"
      >
        {isVoiceActive ? "🔊" : "🔈"}
      </button>

      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <br /> <br /><br /><br /><br /><br />
        <h2 className="text-3xl font-bold text-white">Pemodelan</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
       
               {/* Card 1 */}
               <motion.div
          className="ml-20 bg-orange-50 p-6 rounded-2xl shadow-md w-90 h-auto flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Bar data={data2} options={options2} />
        </motion.div>
        {/* Card 2 */}
        <motion.div
          className="mr-20 bg-orange-50 p-6 rounded-2xl shadow-md w-90 h-auto flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Bar data={data} options={options} />
        </motion.div>



        {/* Card 3 */}
        <motion.div
          className="mb-20 ml-20 bg-orange-50 p-6 rounded-2xl shadow-md w-90 h-auto flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-orange-200 p-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-home text-orange-600 text-2xl"></i>
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-sm font-bold text-orange-600">Berdasarkan berbandingan nilai Akurasi dan F1-Score dari SVM, Reg. Log, dan Random Forest, model Terbaik adalah Random Forest sebesar</h3>
            <p className="text-2xl font-bold text-orange-600 mt-2">82,23%</p>
            
          </div>
          <div>
            <i className="fas fa-info-circle text-orange-400 text-lg"></i>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="mb-20 mr-20 bg-orange-50 p-6 rounded-2xl shadow-md w-90 h-auto flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-orange-200 p-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-home text-orange-600 text-2xl"></i>
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-bold text-orange-600">Limitasi Penelitian</h3>
            <p className="text-sm text-orange-500 mt-1 text-left">1. Akurasi masih bisa ditingkatkan lagi.</p>
            <p className="text-sm text-orange-500 mt-1 text-left">2. Machine Learning hanya menggunakan 3 metode.</p>
          </div>
          <div>
            <i className="fas fa-info-circle text-orange-400 text-lg"></i>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Slide5;
