module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Asegúrate de que cubra todos tus archivos de React
  ],
  theme: {
    extend: {
      colors: {
        primary: '#21B9EF',    // Color primario
        secondary: '#5967E3',  // Color secundario
        tertiary: '#A4BEE3',   // Color terciario
        fourth: '#59E3DC',     // Color cuarto
        letter: '#f7f9fa',     // Color para textos
        vishuddha: '#66DDAA'   // Color del logo de Vishuddha
      },
      fontFamily: {
        body: ['Lora', 'serif'],         // Cuerpo y texto
        title: ['Playfair Display', 'serif'], // Títulos
        button: ['Merriweather', 'serif'],   // Botones
        script: ['"Dancing Script"', 'cursive'],
        vishuddhaFont: ['Lucida Unicode Calligraphy', 'sans-serif']
      },
    },
  },
  plugins: [],
}
