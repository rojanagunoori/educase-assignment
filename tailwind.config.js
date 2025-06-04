// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          rubik: ['Rubik', 'sans-serif'],
        },
      },
    },
    safelist: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-violet-600',
      'hover:bg-violet-700',
      'bg-violet-200',
      'hover:bg-violet-300',
      'text-white',
      'text-gray-900',
      'text-violet-800',
      'bg-sky-500',
      'hover:bg-sky-700',
    ],
    plugins: [],
  }
  