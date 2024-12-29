import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "resume_gradient": "linear-gradient(90deg, #d946ef, #6366f1)",
        "resume_gradient_radial": "radial-gradient(ellipse, rgba(217, 70, 239, 0.1) 0%, rgba(217, 70, 239, 0.1) 25%, rgba(217, 70, 239, 0.07) 30%,rgba(217, 70, 239, 0.02) 45%, rgba(217, 70, 239, 0) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
