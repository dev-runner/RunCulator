(function(){ 'use strict';

	angular.module('runculator.pace')
		.controller('PaceController', PaceController);

	PaceController.$inject = ['paceService','$scope'];

	function PaceController(paceService, $scope){
		
		/* jshint validthis: true */
		var vm = this;

		// bindable members
		vm.calculated = false;
		vm.data = {
			distance: null,
			time: { hours: null, minutes: null, seconds: null }
		};
		vm.result = null;
		vm.selectedDistance = '';
		vm.processForm = processForm;
		vm.changeDistance = changeDistance;
		vm.resetDistance = resetDistance;

		//////////////////////

		function processForm(){
			if(!vm.data.distance || !validateTime()){
				$scope.app.setError('danger','GENERAL.FORM_ERROR');
				return;
			}
			$scope.app.getResult(vm, paceService, vm.data);
		}

		// update distance when selected from list
		function changeDistance(){
			vm.data.distance = parseFloat(vm.selectedDistance);
		}

		// reset selected distance when user updates manually
		function resetDistance(){
			vm.selectedDistance = '';
		}

		// validates if at least one of the fields is filled in
		function validateTime(){
			return (!vm.data.time.hours && !vm.data.time.minutes && !vm.data.time.seconds) ? false : true;
		}

	}

})();