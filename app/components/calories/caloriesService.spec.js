(function(){ 'use strict';

	describe('calService', function(){

		var calService;

		beforeEach(function(){

			module('runculator.cal.service');

			inject(function($injector) {
				
				calService = $injector.get('calService');

			});

		});

		
		describe('getResult', function(){


			it('should not return any value if no input is given', function(){

				var data = {};
				var result = calService.getResult(data);

				expect(result.total_calories_burned).toBe(0);
				expect(result.calories_per_hour).toBeNaN();
				expect(result.calories_per_km).toBeNaN();

			});


			it('should return value if correct input is given', function(){

				//const RUNNING_CAL_FACTOR = 1.036; // [kcal/kg/km]

				var data = {
					distance: 10,
					weight: 80,
					time: {
						hours: 1,
						minutes: 0,
						seconds: 0
					}
				};

				var result = calService.getResult(data);

				expect(result.total_calories_burned).toBe(829);
				expect(result.calories_per_hour).toBe(829);
				expect(result.calories_per_km).toBe(83);

			});


		});

	});

})();