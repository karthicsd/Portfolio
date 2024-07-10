/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image":
          "url('/WhatsApp Image 2024-05-30 at 17.18.24_67c9501bb.jpg')",
      },
      fontFamily: {
        myName: ["Lexend", "sans-serif"],
      },
      animation: {
        blink: "blink 0.4s step-end infinite alternate",
        typing: "typing 2s steps(18) forwards",
        typingWithBlink:
          "typing 2s steps(8), blink 1s step-end infinite alternate",
      },
      keyframes: {
        blink: {
          "50%": { borderColor: "transparent" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100" },
        },
      },
    },
  },
  plugins: [],
};
