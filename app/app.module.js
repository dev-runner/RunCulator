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

	// define module and its dependencies
	angular.module('runculator', deps);

	// app config variables
	angular.module('runculator').constant('appConfig',{
		appName: "RunCulator",
		authorName: "Przemek Jazlo",
		authorEmail: "przemek@devrunner.pl"
	});


	angular.module('runculator').run(['$rootScope','$translate','appConfig', function($rootScope, $translate, appConfig){
		
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
		$rootScope.appName = appConfig.appName;
		$rootScope.author = appConfig.authorName + " <" + appConfig.authorEmail + ">";

	}]);


})();