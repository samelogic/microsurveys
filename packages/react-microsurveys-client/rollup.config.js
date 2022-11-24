// https://react-svgr.com/docs/rollup/#using-with-rollupplugin-url
const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const svgr = require('@svgr/rollup');
const url = require('@rollup/plugin-url');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);
  return {
    ...nxConfig,
    plugins: [
      ...nxConfig.plugins,
      url(),
      svgr({
        icon: true,
      }),
    ],
  };
};
