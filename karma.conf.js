//jshint strict: false
module.exports = function(config) {
  
  config.set({

    basePath: './',
    
    files: [
      'libs/angular/angular.js',
      'libs/angular-animate/angular-animate.js',
      'libs/angular-touch/angular-touch.js',
      'libs/angular-cookies/angular-cookies.js',
      'libs/angular-translate/angular-translate.js',
      'libs/angular-sanitize/angular-sanitize.js',
      'libs/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'libs/angular-translate-storage-local/angular-translate-storage-local.js',
      'libs/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'libs/angular-ui-router/release/angular-ui-router.js',
      'libs/angular-mocks/angular-mocks.js',
      'libs/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/components/**/*Module.js',
      'app/shared/**/*Module.js',
      'app/app.module.js',
      'app/components/**/*.js',
      'app/shared/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
  
};
