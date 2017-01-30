(function(){ 'use strict';

	angular.module('runculator.vdot').factory('vdotService', ['vdotTable','vdotTrainingPaces', VdotService]);

	function VdotService(vdotTable, vdotTrainingPaces){

		var o = {};

		// finds the VDOT factor
		o.getVDOT = function(distance, timeInSeconds){

			var retVdot = null;

			for(var vdot in vdotTable){
				if(timeInSeconds <= vdotTable[vdot][distance]){
					retVdot = vdot;
				} else {
					break;
				}
			}
			return retVdot;
		};

		// returns pace for given distance and time [s/km]
		o.getPaceInSeconds = function(distance, timeInSeconds){
			return Math.floor(timeInSeconds/distance);
		};

		// returns result
		o.getResult = function(distance, time){

			time.hours = time.hours || 0;
			time.minutes = time.minutes || 0;
			time.seconds = time.seconds || 0;

			var result = {
				vdot_value: null,
				race_times: null,
				training_paces: null
			};

			var timeInSeconds = time.hours*3600 + time.minutes*60 + time.seconds;
			var VDOT = this.getVDOT(distance, timeInSeconds);

			if(VDOT){
				result.vdot_value = VDOT;
				result.race_times = vdotTable[VDOT];
				result.training_paces = vdotTrainingPaces[VDOT];
				return result;
			}
			return null;
		};

		return o;
	}
	
})();