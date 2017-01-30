(function(){ 'use strict';

	angular.module('runculator.laps')
		.factory('lapsService', [LapsService]);

	// Laps service
	function LapsService(){

		var o = {};

		o.getResult = function(distance, pace){

			distance = distance || 0;
			pace.minutes = pace.minutes || 0;
			pace.seconds = pace.seconds || 0;

			var result = {
				hours: 0,
				minutes: 0,
				seconds: 0
			};

			// pace in seconds * distance in km
			var lapSeconds = (pace.minutes*60 + pace.seconds) * (distance/1000);

			result.hours = Math.floor(lapSeconds/3600);
			result.minutes = Math.floor((lapSeconds - result.hours*3600)/60);
			result.seconds = Math.round(100*(lapSeconds - result.hours*3600 - result.minutes*60))/100;

			return result;
		};

		return o;
	}

})();