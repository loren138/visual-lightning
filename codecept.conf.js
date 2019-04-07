exports.config = {
    tests: './visual-tests/**/*.vis.js',
    output: './output',
    helpers: {
        WebDriver: {
            url: "http://klingman.us",
            browser: "chrome",
            desiredCapabilities: {
                chromeOptions: {
                    args: [ "--headless", "--disable-gpu", "--window-size=1280,800" ]
                }
            },
        },
        ResembleHelper: {
            require: "codeceptjs-resemblehelper",
            screenshotFolder: "./output/",
            baseFolder: "./visual-tests/",
            diffFolder: "./output/visual-tests-diff/"
        }
    },
    include: {},
    bootstrap: null,
    mocha: {},
    name: 'visual-lightning'
};
