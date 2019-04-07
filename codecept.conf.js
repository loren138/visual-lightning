exports.config = {
  tests: './visual-tests/*.vis.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://klingman.us'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'visual-lightning'
};
