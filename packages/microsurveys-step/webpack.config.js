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
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
      ],
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
