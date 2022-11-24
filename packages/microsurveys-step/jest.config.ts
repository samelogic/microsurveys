/* eslint-disable */
export default {
  displayName: 'microsurveys-step',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/microsurveys-step',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
  },
};
