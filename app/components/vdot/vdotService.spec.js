'use strict';

describe('vdotService', function(){

	var vdotService;

	beforeEach(function(){

		module('runculator.vdot.service');

		inject(function($injector){

			vdotService = $injector.get('vdotService');

		});
	});


	describe('getVDOT', function(){

		it('should return VDOT value', function(){

			var distance = '10k';
			var timeInSeconds = 3600;
			var vdot = parseInt(vdotService.getVDOT(distance, timeInSeconds));
			
			expect(vdot).toBe(32);
		});

		it('should return null if it is too slow', function(){

			var distance = '10k';
			var timeInSeconds = 7200;
			var vdot = vdotService.getVDOT(distance, timeInSeconds);

			expect(vdot).toBeNull();

		});

		it('should return max VDOT value if it is really fast', function(){

			var distance = '10k';
			var timeInSeconds = 1500;
			var vdot = parseInt(vdotService.getVDOT(distance, timeInSeconds));

			expect(vdot).toBe(85);

		});

	});


	describe('getPaceInSeconds', function(){

		it('should return pace in seconds for given input', function(){

			var distance = 10;
			var timeInSeconds = 1800;
			var result = vdotService.getPaceInSeconds(distance, timeInSeconds);

			expect(result).toBe(180);
		});

		it('should return NaN for incorrect input', function(){

			var distance = null;
			var timeInSeconds = null;
			var result = vdotService.getPaceInSeconds(distance, timeInSeconds);

			expect(result).toBeNaN();
		});

	});


	describe('getResult', function(){

		it('should not return a value for incorrect input', function(){

			var data = {};
			var result = vdotService.getResult(data);

			expect(result).toBe('tooslow');
		});


		it('should return a VDOT value for correct input', function(){

			var data = {
				selectedDistance: '10k',
				time: {
					hours: 0,
					minutes: 35,
					seconds: 20,
				}
			};

			var result = vdotService.getResult(data);

			expect(result).toBeDefined();
			expect(result.vdot_value).toBe('60');
			expect(result.race_times).toEqual( jasmine.any(Object));
			expect(result.training_paces).toEqual( jasmine.any(Object));
		});

	});

});