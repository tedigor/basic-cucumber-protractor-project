// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const reporter = require('cucumber-html-reporter');

const cucumberReporterOptions = {
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  theme: "bootstrap",
  launchReport: true
}; 

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/features/**/**.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args:
        ['--window-size=1920,1080',
          '--start-maximized',
          // '--headless'
        ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/steps/**/**.steps.ts'],
    tags: ['@sites'],
    // strict: true,
    format: ['json:cucumber_report.json'],
    // dryRun: true
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  },
  onComplete: () => {
    reporter.generate(cucumberReporterOptions);
  },
};