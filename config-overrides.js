const {
  override,
  addWebpackAlias,
  addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "~": require("path").resolve(__dirname, "src"),
  }),

  addPostcssPlugins([
    require("react-app-rewire-postcss"),
    require("tailwindcss"),
    require("autoprefixer"),
  ])
);
