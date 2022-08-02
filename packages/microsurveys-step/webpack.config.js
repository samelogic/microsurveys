// https://github.com/nrwl/nx/issues/3175
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

// https://stackoverflow.com/questions/68707553/uncaught-referenceerror-buffer-is-not-defined
module.exports = (config, context) => {
  nrwlConfig(config);

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
      library: {
        type: 'module',
      },
    },
  };

  console.log(config);

  return config;
};
