/**
 * Loads global dependencies
 */
require('./vendor')();

/**
 * Loads module from index.js
 * @type {exports|module.exports} angular.module
 */
var appModule = require('../index');

/**
 * Bootstraps module from index.js
 */
angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name]);
});