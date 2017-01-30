(function(){ 'use strict';

	angular.module('runculator.app')
		.filter('timeFormat', timeFormatFilter)
		.filter('paceFormat', paceFormatFilter)
		.filter('convertPace', convertPaceFilter)
		.filter("htmlSafe", ['$sce', htmlSafeFilter]);
	
	// converts from seconds to hh:mm:ss
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

	// converts pace from seconds to (mm'ss") /km
	function paceFormatFilter(){
		return function(paceInSeconds){
			paceInSeconds = paceInSeconds || 0;
			var output = '';
			var minutes = Math.floor(paceInSeconds/60);
			var seconds = Math.round(paceInSeconds-60*minutes);

			output += minutes.toString() + "'" + seconds.toString() + '" /km';
			return output;
		};
	}

	// converts from (mm:ss) to (mm'ss")
	function convertPaceFilter(){
		return function(pace, perKm){

			pace = pace || '';
			var output = '';

			var splitPace = pace.split(':');
			if(splitPace.length == 2){
				output += splitPace[0] + "'" + splitPace[1] + '"';
				if(perKm) output += ' /km';
			} else {
				output = '-';
			}
			return output;
		};
	}

	// trusted html filter
	function htmlSafeFilter($sce) {
	    return function(htmlCode){
			return $sce.trustAsHtml(htmlCode);
	    };
	}

})();