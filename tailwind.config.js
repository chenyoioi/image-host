/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f8f3e9',
        ink: '#292524',
        crimson: '#991b1b',
        ash: '#a8a29e',
        progress: '#ca8a04',
        tabJing: '#1e3a8a',
        tabJie: '#15803d',
        tabCe: '#ca8a04'
      },
      fontFamily: {
        calligraphy: ['STKaiti', 'KaiTi', '楷体', 'STXingkai', '华文行楷', 'serif'],
        song: ['Source Han Serif SC', '思源宋体', 'Noto Serif CJK SC', 'Songti SC', 'SimSun', 'serif']
      }
    }
  },
  plugins: []
}
