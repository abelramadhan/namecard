const themes = [
  {
    name: "code-dark",
    getComponents: () => import("@/components/themes/dark-theme"),
  },
  {
    name: "minimal-light",
    getComponents: () => import("@/components/themes/minimal-light-theme"),
  },
];

export default themes;
