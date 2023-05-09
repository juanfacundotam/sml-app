/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/**/**/*.jsx",

  // Path to the Tremor module
"./node_modules/@tremor//*.{js,ts,jsx,tsx}",
  // "./node_modules/@tremor/**/*.{js, jsx}"
],
  theme: {
    extend: {},
  },
  plugins: [],
};
