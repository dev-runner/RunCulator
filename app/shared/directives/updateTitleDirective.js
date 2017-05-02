(function(){ 'use strict';


	angular.module('runculator.directives.updateTitle', [
		'runculator.core.config',
		'pascalprecht.translate'
	]);

	
	angular.module('runculator.directives.updateTitle')
		.directive('updateTitle', updateTitleDirective);

	updateTitleDirective.$inject = ['$rootScope','$timeout','$translate','$state','runculatorConfig'];

	function updateTitleDirective($rootScope, $timeout, $translate, $state, runculatorConfig){

		return {
			restrict: 'A',
			link: function(scope, element){

				// update title on state transition
				$rootScope.$on('$stateChangeSuccess', function(event, toState){

					var selectedLang = $translate.use();
					var title = runculatorConfig.appName;

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
					var title = runculatorConfig.appName;

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