const webpack = require("webpack");
module.exports = function override(config, env) {
  config.resolve.fallback = {
    path: false,
    fs: false,
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};
