/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Warna utama (Biru)
        secondary: "#9333EA", // Warna sekunder (Ungu)
        accent: "#F59E0B", // Warna aksen (Kuning)
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
          "75%": { transform: "rotate(-3deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        wobble: "wobble 0.5s ease-in-out",
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
