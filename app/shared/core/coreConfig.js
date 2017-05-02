(function(){ 'use strict';

	angular.module('runculator.core.config', [])
		
		.constant('runculatorConfig', {
			appName: "RunCulator",
			authorName: "Przemek Jazlo",
			authorEmail: "przemek@devrunner.pl",
			authorWebsite: "http://devrunner.pl/",
			availableLanguages: [
				{ id: 'pl', name: 'Polski' },
				{ id: 'en', name: 'English' },
			],
			defaultLanguage: 'pl'
		});

})();