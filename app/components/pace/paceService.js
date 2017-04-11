(function(){ 'use strict';

	angular
		.module('runculator.pace')
		.factory('paceService', PaceService);

	PaceService.$inject = [];

	function PaceService(){

		var service = {
			getResult: getResult
		};

		return service;

		/////////////////////////////

		function getResult(data){

			var distance = data.distance || 0;
			var hours = data.time.hours || 0;
			var minutes = data.time.minutes || 0;
			var seconds = data.time.seconds || 0;

			var result = {
				pace: {
					minutes: null,
					seconds: null,
				},
				speed: null,
			};

			// calculate pace and speed
			var timeInSeconds = (hours*3600) + (minutes*60) + seconds;
			var paceSeconds = timeInSeconds / distance; // [s/km]
			var speed = 3600 * distance / timeInSeconds; // [km/h]
			
			result.pace.minutes = Math.floor(paceSeconds/60);
			result.pace.seconds = Math.round(paceSeconds % 60);
			result.speed = Math.round(speed*1000)/1000;

			return result;
		}

	}

})();