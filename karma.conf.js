// Karma configuration
// Generated on Thu Mar 13 2014 11:40:21 GMT-0500 (COT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit'],


    // list of files / patterns to load in the browser
    files: [
      // LIBS
      'js/libs/jquery-1.10.2.js',
      'js/libs/handlebars-1.1.2.js',
      'js/libs/ember-1.4.0.js',
      'js/libs/bootstrap.min.js',
      'js/libs/sinon-1.9.0.js',
      // END LIB

      // TEMPLATES
      "js/templates/components/*.handlebars",
      "js/templates/components/*.hbs",
      "js/templates/components/templates.js",
      // END TEMPLATES

      'js/app.js',
      'tests/runner.js',
      'tests/tests.js',
      'js/router.js',
      'js/controllers/*.js',
      'js/components.js',
      'js/components/*.js',
      'js/models/*.js',
      'js/test/*.js',
    ],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/*.handlebars": 'ember',
      "**/*.hbs": 'ember'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    plugins: [
        'karma-qunit',
        'karma-ember-preprocessor',
        'karma-phantomjs-launcher'
   ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
