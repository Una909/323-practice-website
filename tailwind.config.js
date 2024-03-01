/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "rgb(248, 223, 212)",
        header: "rgb(99, 126, 118)",
        footer: "rgb(198, 151, 116)",
        content: "rgba(243, 236, 228, 0.404)",
      },
      borderRadius: {
        "header": "25px",
        "footer": "18px",
        "content": "25px",
      }
    },
  },
  plugins: [],
}

