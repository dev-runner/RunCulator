(function(){ 'use strict';


	angular.module('runculator.app').directive('updateTitle',
		['$rootScope','$timeout','$translate','$state','appConfig', updateTitleDirective]);


	// self-updating page title
	function updateTitleDirective($rootScope, $timeout, $translate, $state, appConfig){

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
	}


})();