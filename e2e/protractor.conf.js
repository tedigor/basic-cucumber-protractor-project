// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const reporter = require('cucumber-html-reporter');

const cucumberReporterOptions = {
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  theme: "bootstrap",
  launchReport: true,
  metadata: {
    "App Version":"0.0.1",
    "Test Environment": "Testing",
    "Browser": "Chrome 86.0.4240.183",
    "Platform": "Windows",
    "Parallel": "Scenarios",
    "Executed": "Local"
  }
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
        [
          '--start-maximized',
          'incognito',
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu'
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
    tags: [],
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