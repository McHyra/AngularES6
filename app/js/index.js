/**
 * Import controllers, services, modules, ...
 */
import AppController from './controllers/AppController';

/**
 * Create angular module
 * @type {*} angular.module
 */
var app = angular.module('app', [])
    .controller('appController', AppController);

/**
 * Exports default angular module
 */
export default app;