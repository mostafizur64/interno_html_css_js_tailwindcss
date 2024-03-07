module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "DM Serif Display",
      secondary: "Jost",
    },
  
    extend: {
      backgroundImage: {
        'hero': "url(/assets/hero/bg.jpg)",
        'grid': "url(/assets/grid.png)",
      },
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};
