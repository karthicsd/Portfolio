/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Sans Georgian", "sans-serif"],
      },
      screens: {
        "1sm": "532px",
        "ys-exp": "588px",
        "-1sm": "467px",
        p3res: "984px",
        "2p3res": "652px",
        "3p3res": "492px",
        p4res: "1108px",
        "2p4res": "878px",
        "3p4res": "379px",
        prblm: "640px",
      },
    },
  },
  plugins: [],
};
