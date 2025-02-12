import React, { useState } from "react";

const SlideWithChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Liburan Yokkkk! 🥰🥰🥰", sender: "user" },
    { id: 2, text: "Ayo, ke Pulau Panaitan aja yang pasir putih kerenn", sender: "friend" },
    { id: 3, text: "Ah Iya, kemarin aku melihat videonya...", sender: "user" },
    { id: 4, text: "Ayo kesanaaaaaaa 😍", sender: "friend" },
    {
      id: 5,
      text: "Tapi bagaimana ya jika abrasi terjadi pada pulau yang sangat cantik dan berpotensi menjadi destinasi wisata karena pasir putih dan keindahan pemandanganya. Teman-teman bisa melihat profil pulau panaitan pada halaman ini.",
      sender: "user",
    },
    { id: 6, text: "NO WAY!!! 😱", sender: "friend" },
  ]);

  const [isMicOn, setIsMicOn] = useState(false);

  const toggleMic = () => {
    setIsMicOn((prev) => !prev);
    if (!isMicOn) {
      speakMessage();
    } else {
      window.speechSynthesis.cancel();
    }
  };

  const speakMessage = () => {
    const message =
      "Tapi bagaimana ya jika abrasi terjadi pada pulau yang sangat cantik dan berpotensi menjadi destinasi wisata karena pasir putih dan keindahan pemandanganya. Teman-teman bisa melihat profil pulau panaitan pada halaman ini.";
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "id-ID";
    utterance.pitch = 1;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="relative grid grid-cols-2 gap-4 h-[100vh] items-start px-8 bg-gray-100"
      style={{ backgroundImage: "url('/img/2_2.jpeg')" }}
    >
      {/* Tombol Mic di Halaman */}
      <button
        className="absolute top-4 left-10 bg-white text-pink-500 p-1 rounded-full shadow-lg text-lg hover:bg-gray-100 transition"
        onClick={toggleMic}
      >
        {isMicOn ? "🔊" : "🔈"}
      </button>

      {/* Video Section */}
      <div className="flex flex-col items-center fade-in">
        <div
          className="ml-20 mt-20 relative w-[600px] h-[400px] overflow-hidden rounded-lg border-4 border-gray-300 shadow-lg"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VSJyw_6h-ew?autoplay=1&mute=1"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-gray-900 opacity-30 animate-pulse"
          ></div>
        </div>
        <div className="ml-20 mt-10 w-full flex justify-center items-center">
          <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-transform transform hover:scale-110">
            ◀
          </button>
          <input
            type="range"
            className="mx-4 w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-transform transform hover:scale-110">
            ▶
          </button>
        </div>
      </div>

      {/* Chat Section */}
      <div className=" ml-20 mt-20 relative w-full max-w-md mx-auto bg-[#d2f8c8] rounded-lg shadow-lg overflow-hidden fade-in">
        <div className="relative bg-[#075e54] text-white h-16 flex items-center px-4">
          <span className="font-bold text-base">
            [Panaitan] Potensi Besar Destinasi Banten Hilang?
          </span>
        </div>

        <div className="relative h-[400px] bg-[#e5ddd5] overflow-hidden">
          <div className="absolute w-full h-full overflow-hidden">
            <div
              className="space-y-4 px-4 py-6 animate-scroll"
              style={{ animation: "scrollUp 25s linear infinite" }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`w-fit max-w-[70%] p-2 rounded-lg shadow-md text-sm transition-transform transform ${
                    message.sender === "user"
                      ? "bg-[#dcf8c6] self-end text-gray-800 hover:scale-105"
                      : "bg-white self-start text-gray-800 hover:scale-105"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SlideWithChat;
