(function(){ 'use strict';

	angular.module('runculator.cal')
		.controller('CaloriesController', CaloriesController);

	CaloriesController.$inject = ['calService','$scope'];

	function CaloriesController(calService, $scope){

		/* jshint validthis: true */
		var vm = this;

		// bindable members
		vm.calculated = false;
		vm.data = {
			distance: null,
			weight: null,
			time: { hours: null, minutes: null, seconds: null }
		};
		vm.result = null;
		vm.processForm = processForm;

		//////////////////////

		function processForm(){
			if(!vm.data.distance || !vm.data.weight || !validateTime()){
				$scope.app.setError('danger','GENERAL.FORM_ERROR');
				return;
			}
			$scope.app.getResult(vm, calService, vm.data);
		}
		
		function validateTime(){
			return (!vm.data.time.hours && !vm.data.time.minutes && !vm.data.time.seconds) ? false : true;
		}

	}

})();