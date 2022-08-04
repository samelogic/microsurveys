// https://stackoverflow.com/questions/68707553/uncaught-referenceerror-buffer-is-not-defined
module.exports = (config, context) => {
  config = {
    ...config,
    mode: 'production',
    experiments: {
      outputModule: true,
    },
    optimization: {
      runtimeChunk: false,
    },
    output: {
      ...config.output,
      filename: 'dist/runner.js',
      chunkFilename: undefined,
      library: {
        type: 'module',
      },
    },
  };

  return config;
};
