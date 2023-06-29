/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-soft-orange": "hsl(35, 77%, 62%)",
        "custom-soft-red": "hsl(5, 85%, 63%)",
        "custom-off-white": "hsl(36, 100%, 99%)",
        "custom-grayish-blue": "hsl(233, 8%, 79%)",
        "custom-dark-grayish-blue": "hsl(236, 13%, 42%)",
        "custom-very-dark-blue": "hsl(240, 100%, 5%)",
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  plugins: [],
};
