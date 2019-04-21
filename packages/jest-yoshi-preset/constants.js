const { MATCH_ENV, LATEST_JSDOM } = process.env;
const jestYoshiConfig = require('yoshi-config/jest');

module.exports.parentEnvironment = jestYoshiConfig.bootstrap
  ? require('jest-environment-yoshi-bootstrap')
  : require('jest-environment-node');

module.exports.envs = MATCH_ENV ? MATCH_ENV.split(',') : null;
module.exports.withLatestJSDom = LATEST_JSDOM;
module.exports.supportedEnvs = ['e2e', 'spec'];
