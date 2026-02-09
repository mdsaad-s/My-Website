// module.exports = {
  // content: ["./src/**/*.{js,jsx}"],
  // theme: {
    // extend: {
      // colors: {
        // primary: "#0d6efd",
        // secondary: "#20c997",
      // },
    // },
  // },
  // plugins: [],
// };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slowZoom: "slowZoom 20s ease-in-out infinite",
      },
      keyframes: {
        slowZoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
