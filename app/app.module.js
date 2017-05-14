(function(){ 'use strict';

	// root app module and dependencies
	angular.module('runculator', [

		// shared modules
		'runculator.core',
		'runculator.directives',
		'runculator.filters',

		// feature areas
		'runculator.app',
		'runculator.bmi',
		'runculator.pace',
		'runculator.cal',
		'runculator.laps',
		'runculator.vdot'
	]);


	angular.module('runculator').run(runBlock);

	runBlock.$inject = ['$rootScope','$translate','$location', 'runculatorConfig'];

	function runBlock($rootScope, $translate, $location, runculatorConfig){
		
		// update the html language attribute on language change
		//$rootScope.language = $translate.use();

		// set current url
		$rootScope.url = $location.absUrl();

		// update tags on language change
		$rootScope.$on("$translateChangeSuccess", function(){
			
			// set app language used
			$rootScope.language = $translate.use();

			// update the description tag
			$translate('GENERAL.DESCRIPTION').then(function(desc){
				$rootScope.appDescription = desc;
			});

			$translate('GENERAL.INTRO').then(function(intro){
				$rootScope.appIntro = intro;
			});

		});

		// set meta tags
		$rootScope.appName = runculatorConfig.appName;
		$rootScope.website = runculatorConfig.authorWebsite;
		$rootScope.author = runculatorConfig.authorName + " <" + runculatorConfig.authorEmail + ">";
	}

})();