/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        soft: "0 0 5px rgba(0, 0, 0, 0.3)", // Tạo bóng mờ mềm mại
        softer: "0 0 10px rgba(0, 0, 0, 0.2)", // Bóng mờ tỏa rộng hơn
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-soft": {
          textShadow: "0 0 5px rgba(0, 0, 0, 0.3)", // Mờ và tỏa đều
        },
        ".text-shadow-softer": {
          textShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Mờ hơn và tỏa xa hơn
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
