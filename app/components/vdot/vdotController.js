(function(){ 'use strict';

	angular.module('runculator.vdot',[]);

	angular
		.module('runculator.vdot')
		.controller('VdotController', VdotController);

	VdotController.$inject = ['vdotService', '$scope'];

	function VdotController(vdotService, $scope){

		/* jshint validthis: true */
		var vm = this;

		// bindable members
		vm.calculated = false;
		vm.collapsed = { easy: true, marathon: true, threshold: true, intervals: true, repetitions: true };
		vm.data = {
			selectedDistance: '',
			time: { hours: null, minutes: null, seconds: null }
		};
		vm.getPace = getPace;
		vm.processForm = processForm;
		vm.result = null;

		//////////////////////

		function processForm(){
			if(!vm.data.selectedDistance || !validateTime()){
				$scope.app.setError('danger','GENERAL.FORM_ERROR');
				return;
			}
			$scope.app.getResult(vm, vdotService, vm.data);
		}

		function getPace(distance, timeInSeconds){
			return vdotService.getPaceInSeconds(distance, timeInSeconds);
		}

		function validateTime(){
			return (!vm.data.time.hours && !vm.data.time.minutes && !vm.data.time.seconds) ? false : true;
		}

	}

})();