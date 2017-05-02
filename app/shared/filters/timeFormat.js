(function(){ 'use strict';

	angular.module('runculator.filters.timeFormat', [])
		.filter('timeFormat', timeFormatFilter)

	/**
	  * Converts from seconds to hh:mm:ss
	  */
	function timeFormatFilter(){
		
		function fillDigits(n){
			if(n>=0 && n<10) return '0' + n.toString();
			return n.toString();
		}

		return function(timeInSeconds, zeroFill){

			zeroFill = zeroFill || true;
			timeInSeconds = timeInSeconds || 0;
			var output = '';

			var hours = Math.floor(timeInSeconds/3600);
			var minutes = Math.floor((timeInSeconds-hours*3600)/60);
			var seconds = Math.round(100*((timeInSeconds-hours*3600)%60))/100;

			if(zeroFill){
				if(hours) output += fillDigits(hours) + ':';
				output += fillDigits(minutes) + ':' + fillDigits(seconds);
			} else {
				if(hours) output += hours.toString() + ':';
				output += minutes.toString() + ':' + seconds.toString();
			}
			return output;
		};

	}

})();