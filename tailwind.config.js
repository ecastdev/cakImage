// tailwind.config.js
// const { nextui } = require("@nextui-org/react");
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./componets/**/*.{js,jsx,ts,tsx}",
    "./homelist/**/*.{js,jsx,ts,tsx}",
    "./sidebar/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  

  ],
  theme: {
    extend: {},
    backgroundImage: {
      'hero': "url('components/assests/dark background.webp')",
    },
    
  
    fontFamily: {
      subt:["Lobster","Pacifico"],
      title: ["Platypi", 'serif']
    }
  },
  darkMode: "class",
  plugins: [
    flowbite.plugin(),
  ],
}
