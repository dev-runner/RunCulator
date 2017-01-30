(function(){ 'use strict';


	// Configure the translation service
	angular.module('runculator').config(['$translateProvider', function($translateProvider){

		// load translations from files
		$translateProvider.useStaticFilesLoader({
			prefix: 'app/shared/translations/locale-',
			suffix: '.json'
		});

		// set pl as the default language
		$translateProvider
			.fallbackLanguage('pl')
			.preferredLanguage('pl');

		// remember language
		$translateProvider.useLocalStorage();

		// set sanitize strategy
		$translateProvider.useSanitizeValueStrategy('sanitizeParameters');

	}]);

})();