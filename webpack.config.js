/**
 * Require common loaders.
 */
const base = require('pckg-app-frontend/full.loader.js');

/**
 * Export with default syntax.
 */
module.exports = base.exports({
    entry: {
        libraries: [
            './app/demo/public/libraries.js'
        ],
        footer: [
            './app/demo/public/app.js'
        ]
    }
});
