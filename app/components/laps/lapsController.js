(function(){ 'use strict';

	angular.module('runculator.laps', []);

	angular
		.module('runculator.laps')
		.controller('LapsController', LapsController);

	LapsController.$inject = ['lapsService','$scope'];

	function LapsController(lapsService, $scope){

		/* jshint validthis: true */
		var vm = this;

		// bindable members
		vm.calculated = false;
		vm.data = {
			distance: null,
			pace: { minutes: null, seconds: null }
		};
		vm.result = null;
		vm.processForm = processForm;

		///////////////////////

		function processForm(){
			if(!vm.data.distance || !validatePace() ){
				$scope.app.setError('danger','GENERAL.FORM_ERROR');
				return;
			}
			$scope.app.getResult(vm, lapsService, vm.data);
		}

		function validatePace(){
			return (!vm.data.pace.minutes && !vm.data.pace.seconds) ? false : true;
		}

	}

})();