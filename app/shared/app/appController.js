(function(){ 'use strict';
	
	angular.module('runculator.app', []);
	
	angular
		.module('runculator.app')
		.controller('AppController', AppController);

	AppController.$inject = ['$translate','$timeout','config'];

	function AppController($translate, $timeout, config){

		/* jshint validthis: true */
		var vm = this;

		// bindable members:
		vm.changeLanguage = changeLanguage;
		vm.closeError = closeError;
		vm.data = {
			availableLanguages: config.availableLanguages,
			selectedLanguage: { 
				id: $translate.proposedLanguage() || 'pl'
			}
		};
		vm.errors = [];
		vm.goBack = goBack;
		vm.removeErrors = removeErrors;
		vm.setError = setError;
		vm.getResult = getResult;

		///////////////////

		function changeLanguage(langKey){
			$translate.use(langKey);
		}

		function setError(type, errorId){
			$translate(errorId).then(function(errTranslation){
				vm.errors = [ { type: type, msg: errTranslation } ];	
			}, function(errId){
				vm.errors = [ { type: type, msg: errId } ];
			});
		}

		function closeError(index){
			vm.errors.splice(index,1);
		}

		function removeErrors(){
			vm.errors = [];
		}

		function goBack(whichCtrl){
			if(whichCtrl){
				whichCtrl.result = null;
			}
		}

		function getResult(viewModel, service, data){
			viewModel.calculated = false;

			function fetchResult(){
				viewModel.result = service.getResult(data);
				viewModel.calculated = true;
			}
			$timeout(fetchResult, 300);
		}

	}

})();