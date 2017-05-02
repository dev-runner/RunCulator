(function(){ 'use strict';
	
	// register controller on the module
	angular.module('runculator.bmi')
		.controller('BmiController', BmiController);

	BmiController.$inject = ['bmiService','$scope'];

	function BmiController(bmiService, $scope){

		/* jshint validthis: true */
		var vm = this;

		// bindable members
		vm.calculated = false;
		vm.data = { weight: null, height: null };
		vm.result = null;
		vm.processForm = processForm;
		
		///////////////////

		function processForm(){
			if(!vm.data.weight || !vm.data.height){
				$scope.app.setError('danger','GENERAL.FORM_ERROR');
				return;
			}
			$scope.app.getResult(vm, bmiService, vm.data);
		}

	}

})();