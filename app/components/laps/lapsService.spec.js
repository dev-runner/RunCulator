(function(){ 'use strict';

	describe('lapsService', function(){

		var lapsService;

		beforeEach(function(){

			module('runculator.laps.service');

			inject(function($injector){

				lapsService = $injector.get('lapsService');

			});

		});


		describe('getResult', function(){

			it('should not return any value if no input is given', function(){

				var data = {};
				var result = lapsService.getResult(data);

				expect(result.hours).toBe(0);
				expect(result.minutes).toBe(0);
				expect(result.seconds).toBe(0);

			});


			it('should return value if correct input is given', function(){

				var data = {
					distance: 1000, // 1000 meters
					pace: {
						minutes: 3,
						seconds: 30, 
					}
				};

				var result = lapsService.getResult(data);

				expect(result.hours).toBe(0);
				expect(result.minutes).toBe(3);
				expect(result.seconds).toBe(30);

			});
			
		});

	});

})();