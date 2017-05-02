(function(){ 'use strict';

	angular.module('runculator.core', [
		
		'ui.bootstrap',
		'pascalprecht.translate',
		'ngAnimate',
		'ngTouch',
		'ngCookies',
		'ngSanitize',

		'runculator.core.config',
		'runculator.core.translate',
		'runculator.core.routing'
	]);

})();