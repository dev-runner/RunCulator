(function(){ 'use strict';

	// declare a module and its dependencies
	angular.module('runculator.filters', [
		'runculator.filters.timeFormat',
		'runculator.filters.paceFormat',
		'runculator.filters.convertPace', 
		'runculator.filters.htmlSafe'
	]);

})();