module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    
    extend: {
      backgroundImage: {
        'gaming': "url('/src/assets/future-gaming.gif')",
        'pixel': "url('/src/assets/pixel-art.gif')",
      }

    },
  },
  plugins: [],
}
