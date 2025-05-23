/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      name: "Forest",
      fontFamily: {
          sans: [
              "Montserrat",
              "ui-sans-serif",
              "system-ui",
              "sans-serif",
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"'
          ]
      },
      extend: {
          fontFamily: {
              title: [
                  "Montserrat",
                  "ui-sans-serif",
                  "system-ui",
                  "sans-serif",
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"',
                  '"Noto Color Emoji"'
              ],
              body: [
                  "Montserrat",
                  "ui-sans-serif",
                  "system-ui",
                  "sans-serif",
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"',
                  '"Noto Color Emoji"'
              ]
          },
          colors: {
              neutral: {
                  50: "#171212",
                  100: "#161111",
                  200: "#161111",
                  300: "#151010",
                  400: "#141010",
                  500: "#140F0F",
                  600: "#090707",
                  700: "#070505",
                  800: "#050404",
                  900: "#020202",
                  DEFAULT: "#171212"
              },
              primary: {
                  50: "#E9F8EE",
                  100: "#DDF4E5",
                  200: "#B9E9CA",
                  300: "#1EB853",
                  400: "#1BA64B",
                  500: "#189342",
                  600: "#178A3E",
                  700: "#126E32",
                  800: "#0D5325",
                  900: "#0B401D",
                  DEFAULT: "#1EB853"
              }
          }
      },
      fontSize: {
          xs: ["12px", {lineHeight: "19.200000000000003px"}],
          sm: ["14px", {lineHeight: "21px"}],
          base: ["16px", {lineHeight: "25.6px"}],
          lg: ["18px", {lineHeight: "27px"}],
          xl: ["20px", {lineHeight: "28px"}],
          "2xl": ["24px", {lineHeight: "31.200000000000003px"}],
          "3xl": ["30px", {lineHeight: "36px"}],
          "4xl": ["36px", {lineHeight: "41.4px"}],
          "5xl": ["48px", {lineHeight: "52.800000000000004px"}],
          "6xl": ["60px", {lineHeight: "66px"}],
          "7xl": ["72px", {lineHeight: "75.60000000000001px"}],
          "8xl": ["96px", {lineHeight: "100.80000000000001px"}],
          "9xl": ["128px", {lineHeight: "134.4px"}]
      },
      borderRadius: {
          none: "0px",
          sm: "1.5px",
          DEFAULT: "3px",
          md: "4.5px",
          lg: "6px",
          xl: "9px",
          "2xl": "12px",
          "3xl": "18px",
          full: "9999px"
      },
      spacing: {
          0: "0px",
          1: "5px",
          2: "10px",
          3: "15px",
          4: "20px",
          5: "25px",
          6: "30px",
          7: "35px",
          8: "40px",
          9: "45px",
          10: "50px",
          11: "55px",
          12: "60px",
          14: "70px",
          16: "80px",
          20: "100px",
          24: "120px",
          28: "140px",
          32: "160px",
          36: "180px",
          40: "200px",
          44: "220px",
          48: "240px",
          52: "260px",
          56: "280px",
          60: "300px",
          64: "320px",
          72: "360px",
          80: "400px",
          96: "480px",
          px: "1px",
          0.5: "2.5px",
          1.5: "7.5px",
          2.5: "12.5px",
          3.5: "17.5px"
      }
  },
  plugins: [],
}

