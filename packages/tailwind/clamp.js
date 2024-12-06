import plugin from "tailwindcss/plugin";

export const clamp = plugin(({ addVariant }) => {
  addVariant("fluid", "@supports (font-size: clamp(1rem,2vw,3rem))");
});
