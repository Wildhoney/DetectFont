module.exports = function(config) {

    var isTravisCI = 'TRAVIS' in process.env;

    config.set({
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            'src/detect-font.js',
            'tests/detect-font.test.js'
        ],
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: isTravisCI ? ['Firefox'] : ['Firefox', 'Chrome'],
        singleRun: true,
        preprocessors: {
            'src/*.js': ['browserify'],
            'tests/*.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [['babelify', { presets: ['es2015', 'stage-0'] }]]
        }
    });
};
