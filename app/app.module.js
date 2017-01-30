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

		// set meta html tags
		$rootScope.appName = appConfig.appName;
		$rootScope.author = appConfig.authorName + " <" + appConfig.authorEmail + ">";

	}]);

	
	// self-updating page title
	angular.module('runculator').directive('updateTitle',
		['$rootScope','$timeout','$translate','$state','appConfig', function($rootScope, $timeout, $translate, $state, appConfig){

		return {
			restrict: 'A',
			link: function(scope, element){

				// update title on state transition
				$rootScope.$on('$stateChangeSuccess', function(event, toState){

					var selectedLang = $translate.use();
					var title = appConfig.appName;

					if(toState.data && toState.data.pageTitle){
						title += ' | ' + toState.data.pageTitle[selectedLang];
					} else {
						title += ' | ' + $rootScope.appDescription;
					}

					// update <title> tag
					$timeout(function(){ element.text(title); },0,false);
				});

				// update title on language change
				$rootScope.$on("$translateChangeSuccess", function(){
					
					var selectedLang = $translate.use();
					var title = appConfig.appName;

					if($state.current.data && $state.current.data.pageTitle){
						title += ' | ' + $state.current.data.pageTitle[selectedLang];
					} else {
						title += ' | ' + $rootScope.appDescription;
					}

					// update <title> tag
					$timeout(function(){ element.text(title); },0,false);
				});

			}
		};

	}]);


	angular.module('runculator').filter("htmlSafe", ['$sce', function($sce) {
	    return function(htmlCode){
			return $sce.trustAsHtml(htmlCode);
	    };
	}]);


})();