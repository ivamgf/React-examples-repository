module.exports = {
  presets: ["next/babel"],
  // Enables top level tree-shaking without sacrificing startup time in `development`.
  // Also reduces code duplication, requiring only a single import for multiple `@material-ui` modules.
  // See: https://next.material-ui.com/guides/minimizing-bundle-size/#option-2
  plugins: ["core", "lab", "styles"].map((lib) => [
    "babel-plugin-import",
    {
      libraryName: `@material-ui/${lib}`,
      libraryDirectory: "",
      camel2DashComponentName: false,
    },
    lib,
  ]),
};
