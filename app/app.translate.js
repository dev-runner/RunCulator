(function(){ 'use strict';

	// Configure translation provider
	angular.module('runculator')
			.config(configureTranslationProvider);
	
	configureTranslationProvider.$inject = ['$translateProvider', 'config'];

	function configureTranslationProvider($translateProvider, config){

		// load translations from files
		$translateProvider.useStaticFilesLoader({
			prefix: 'app/shared/translations/locale-',
			suffix: '.json'
		});

		// set the default language
		$translateProvider
			.fallbackLanguage(config.defaultLanguage)
			.preferredLanguage(config.defaultLanguage);

		// remember language
		$translateProvider.useLocalStorage();

		// set sanitize strategy
		$translateProvider.useSanitizeValueStrategy('sanitizeParameters');
	}

})();