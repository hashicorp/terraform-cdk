// set a generous global timeout for beforeAll hooks as jest does run the tests anyway even
// if the hook timeout out. This produces weird errors that are hard to trace down
// for reference: https://github.com/facebook/jest/issues/9527
const DEFAULT_TIMEOUT = 500000;
let originalBeforeAll = global.beforeAll;
global.beforeAll = function beforeAllWithDefaultTimeout(setup, timeout = DEFAULT_TIMEOUT) {
    return originalBeforeAll(setup, timeout);
};
