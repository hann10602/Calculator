/** @type {import('tailwindcss').Config} */
export default {
  //jit mode
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],

	// affected files
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
		// config own styles
      backgroundColor: {
        'red-custom': '#AC3939',
        'blue-custom': '#004466',
        'gray-custom': '#666666',
        'default-custom': '#4D4D4D',
      },
      minHeight: {
        '28px':'28px'
      },
      textColor: {
        'yellow-custom': '#FFA500'
      },
      fontFamily: {
        'digital' : 'Digital'
      }
    },
    plugins: [],
  }
}