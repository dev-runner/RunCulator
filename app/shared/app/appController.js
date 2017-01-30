(function(){ 'use strict';

	angular.module('runculator.app', []);

	angular.module('runculator.app')
		.controller('AppController', ['$translate','$scope', AppController]);

	function AppController($translate, $scope){

		var selLang = $translate.proposedLanguage() || 'pl';

		$scope.errors = [];

		$scope.data = {
			availableLanguages: [
				{id: 'pl', name: 'Polski'},
				{id: 'en', name: 'English'},
			],
			selectedLanguage: {id: selLang }
		};

		// changes the app language
		$scope.changeLanguage = function(langKey){
			$translate.use(langKey);
		};
		
		$scope.setError = function(type, msg){
			$scope.errors = [ {type: type, msg: msg} ];
		};

		$scope.addError = function(type, msg){
			$scope.errors.push( {type: type, msg: msg} );
		};

		$scope.closeError = function(index){
			$scope.errors.splice(index,1);
		};

		$scope.removeErrors = function(){
			$scope.errors = [];
		};

		$scope.goBack = function(ctrl){
			if(ctrl){
				ctrl.result = null;
			}
		};
	}

})();