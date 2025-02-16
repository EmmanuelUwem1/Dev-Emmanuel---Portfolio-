/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        background2: "var(--background2)",
        foreground: "var(--foreground)",
        sectionBG: "var(--sectionBG)",
      },
      fontFamily: {
        bungeeHairline: "var(--bungee-hairline)",
        audiowide: "var(--audiowide)",
        montserrat: "var(--montserrat)",
        lato: "var(--lato)",
        funnelDisplay: "var(--funnel-display)",
        monoton: "var(--monoton)",
        turretRoad: "var(--turret-road)",
      },
    },
  },
  plugins: [],
};
