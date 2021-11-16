module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [],
  addons: ["@storybook/addon-essentials", "@storybook/preset-scss"],
  babelDefault: (config) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        [
          require.resolve("@babel/plugin-transform-react-jsx"),
          { pragma: "h" },
          "preset",
        ],
      ],
    };
  },
};
