const yargs = require('yargs').argv;
const path = require('path');
const reporter = require('cucumber-html-reporter');
const cucumberJunitConvert = require('cucumber-junit-convert');

const reportOtions = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, '../reports/report.json'),
  output: path.join(__dirname, '../reports/cucumber-report.html'),
  reportSuitsAsSCenarios: true
};

const options = {
  inputJsonFile: path.join(__dirname, '../reports/report.json'),
  outputXmlFile: path.join(__dirname, '../reports/xml-report.xml')
}

exports.config = {
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--window-size=1920,1080'],
      w3c: false
    },
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },
  disableChecks: true,
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  specs: [path.resolve('./test/features/**/*.feature')],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [path.resolve('./test/step_definitions/**/*.js')],
    ignoreUncaughtExceptions: true,
    format: ['json:./test/reports/report.json', './node_modules/cucumber-pretty'],
    tags: yargs.tags || '@jobSearch'
  },
  onPrepare: () => {
    return browser.waitForAngularEnabled(false);
  },
  afterLaunch: () => {
    reporter.generate(reportOtions);
    return cucumberJunitConvert.convert(options);
  }
};
