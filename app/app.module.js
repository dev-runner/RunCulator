(function(){ 'use strict';

	// app dependencies
	const deps = [
		'ui.bootstrap',
		'ui.router',
		'pascalprecht.translate',
		'ngAnimate',
		'ngTouch',
		'ngCookies',
		'ngSanitize',
		'runculator.app',
		'runculator.bmi',
		'runculator.pace',
		'runculator.cal',
		'runculator.laps',
		'runculator.vdot'
	];

	// root app module and dependencies
	angular.module('runculator', deps);

	// app configuration
	angular.module('runculator').constant('config', {
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


	angular.module('runculator').run(runBlock);

	runBlock.$inject = ['$rootScope','$translate','config'];

	function runBlock($rootScope, $translate, config){
		
		// update the html language attribute on language change
		$rootScope.language = $translate.use();

		// update tags on language change
		$rootScope.$on("$translateChangeSuccess", function(){
			$rootScope.language = $translate.use();

			// update the description tag
			$translate('GENERAL.DESCRIPTION').then(function(title){
				$rootScope.appDescription = title;
			});
		});

		// set meta tags
		$rootScope.appName = config.appName;
		$rootScope.website = config.authorWebsite;
		$rootScope.author = config.authorName + " <" + config.authorEmail + ">";
	}

})();