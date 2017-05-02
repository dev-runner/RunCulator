(function(){ 'use strict';

	angular.module('runculator.vdot.service', [
		'runculator.vdot.tables'
	]);

	angular.module('runculator.vdot.service')
		.factory('vdotService', VdotService);

	VdotService.$inject = ['vdotTable','vdotTrainingPaces'];

	function VdotService(vdotTable, vdotTrainingPaces){

		var service = {
			getVDOT: getVDOT,
			getPaceInSeconds: getPaceInSeconds,
			getResult: getResult
		};

		return service;

		////////////////////////////////

		// finds the VDOT factor
		function getVDOT(distance, timeInSeconds){

			var retVdot = null;

			for(var vdot in vdotTable){
				if(timeInSeconds <= vdotTable[vdot][distance]){
					retVdot = vdot;
				} else {
					break;
				}
			}
			return retVdot;
		}


		// returns pace for given distance and time [s/km]
		function getPaceInSeconds(distance, timeInSeconds){
			return Math.floor(timeInSeconds/distance);
		}

		// returns result
		function getResult(data){

			var distance = data.selectedDistance;
			var hours = data.time.hours || 0;
			var minutes = data.time.minutes || 0;
			var seconds = data.time.seconds || 0;

			var result = {
				vdot_value: null,
				race_times: null,
				training_paces: null
			};

			var timeInSeconds = (hours*3600) + (minutes*60) + seconds;
			var VDOT = this.getVDOT(distance, timeInSeconds);

			if(VDOT){
				result.vdot_value = VDOT;
				result.race_times = vdotTable[VDOT];
				result.training_paces = vdotTrainingPaces[VDOT];
				return result;
			}
			return 'tooslow';
		}

	}
	
})();