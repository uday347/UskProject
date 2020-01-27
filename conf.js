var HtmlScreenshotReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [
        { 'browserName': 'chrome'}],
      //  {'browserName': 'chrome'}],
      
    framework: 'jasmine',
    //specs: ['../tests/login-spec.js'],
      /*      '../tests/users-spec.js'],*/
    suites: {
        login: ['./tests/login-spec.js'],
        masters: ['./tests/masters-spec.js'],
        holidays: ['./tests/holidays-spec.js'],
        dashboard: ['./tests/dashboard-spec.js'],
        ranks: ['./tests/ranks-spec.js'],
        locations: ['./tests/locations-spec.js'],
        programs: ['./tests/programs-spec.js'],
        merchants: ['./tests/merchants-spec.js'],
        events: ['./tests/events-spec.js']
       },

    jasmineNodeOpts: {
          showColors: true, // Use colors in the command line report.
          defaultTimeoutInterval:30000,
        },
        
       
onPrepare: function() {
  browser.manage().window().maximize(); 
  jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
    
    savePath: 'target/screenshots',
     
  }));
}
};