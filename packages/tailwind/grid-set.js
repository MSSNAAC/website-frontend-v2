import plugin from "tailwindcss/plugin";

export const gridset = plugin(({ addUtilities }) => {
  addUtilities({
    ".grid-set": {
      display: "grid",
      "& *": {
        gridArea: "1 / 1",
      },
    },
  });
});
