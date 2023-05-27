/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "75vw": "75vw",
        "23vw": "23vw",

      },
      margin: {
        "24vw": "24vw",
        "5rem": "-4.5rem",
      },
      height: {
        "99vh": "98vh",
        "cust": "calc(99vh - 5rem)",
      },
    },
  },
  theme: {
    primary: "white",
      secondary: "black",
    extend: {},
  },
  plugins: [],
};
