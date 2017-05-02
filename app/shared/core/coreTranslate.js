(function(){ 'use strict';

	angular.module('runculator.core.translate', ['pascalprecht.translate','runculator.core.config'])
		.config(configureTranslationProvider);

	configureTranslationProvider.$inject = ['$translateProvider', 'runculatorConfig'];

	function configureTranslationProvider($translateProvider, runculatorConfig){

		// load translations from files
		$translateProvider.useStaticFilesLoader({
			prefix: 'app/shared/translations/locale-',
			suffix: '.json'
		});

		// set the default language
		$translateProvider
			.fallbackLanguage(runculatorConfig.defaultLanguage)
			.preferredLanguage(runculatorConfig.defaultLanguage);

		// remember language
		$translateProvider.useLocalStorage();

		// set sanitize strategy
		$translateProvider.useSanitizeValueStrategy('sanitizeParameters');
	}

})();