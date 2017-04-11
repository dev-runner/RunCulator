(function(){ 'use strict';

/* Race times (in seconds) */
angular
	.module('runculator.vdot')
	.constant('vdotTable', {
		"30": {
			"1500m": 510,
			"3k": 1076,
			"5k": 1840,
			"10k": 3826,
			"15k": 5894,
			"HM": 8464,
			"M": 17357
		},
		"31": {
			"1500m": 495,
			"3k": 1047,
			"5k": 1791,
			"10k": 3723,
			"15k": 5736,
			"HM": 8241,
			"M": 16917
		},
		"32": {
			"1500m": 482,
			"3k": 1019,
			"5k": 1745,
			"10k": 3626,
			"15k": 5587,
			"HM": 8029,
			"M": 16499
		},
		"33": {
			"1500m": 469,
			"3k": 993,
			"5k": 1701,
			"10k": 3534,
			"15k": 5445,
			"HM": 7827,
			"M": 16102
		},
		"34": {
			"1500m": 457,
			"3k": 969,
			"5k": 1659,
			"10k": 3446,
			"15k": 5310,
			"HM": 7636,
			"M": 15723
		},
		"35": {
			"1500m": 445,
			"3k": 945,
			"5k": 1620,
			"10k": 3363,
			"15k": 5182,
			"HM": 7453,
			"M": 15363
		},
		"36": {
			"1500m": 434,
			"3k": 923,
			"5k": 1582,
			"10k": 3284,
			"15k": 5060,
			"HM": 7279,
			"M": 15019
		},
		"37": {
			"1500m": 424,
			"3k": 901,
			"5k": 1546,
			"10k": 3209,
			"15k": 4944,
			"HM": 7114,
			"M": 14690
		},
		"38": {
			"1500m": 414,
			"3k": 881,
			"5k": 1512,
			"10k": 3137,
			"15k": 4833,
			"HM": 6955,
			"M": 14375
		},
		"39": {
			"1500m": 404,
			"3k": 861,
			"5k": 1479,
			"10k": 3069,
			"15k": 4727,
			"HM": 6804,
			"M": 14074
		},
		"40": {
			"1500m": 395,
			"3k": 843,
			"5k": 1448,
			"10k": 3003,
			"15k": 4626,
			"HM": 6659,
			"M": 13785
		},
		"41": {
			"1500m": 387,
			"3k": 825,
			"5k": 1418,
			"10k": 2941,
			"15k": 4529,
			"HM": 6520,
			"M": 13509
		},
		"42": {
			"1500m": 379,
			"3k": 808,
			"5k": 1389,
			"10k": 2881,
			"15k": 4436,
			"HM": 6387,
			"M": 13243
		},
		"43": {
			"1500m": 371,
			"3k": 791,
			"5k": 1361,
			"10k": 2824,
			"15k": 4347,
			"HM": 6260,
			"M": 12988
		},
		"44": {
			"1500m": 363,
			"3k": 775,
			"5k": 1335,
			"10k": 2769,
			"15k": 4262,
			"HM": 6137,
			"M": 12743
		},
		"45": {
			"1500m": 356,
			"3k": 760,
			"5k": 1310,
			"10k": 2716,
			"15k": 4180,
			"HM": 6020,
			"M": 12506
		},
		"46": {
			"1500m": 349,
			"3k": 746,
			"5k": 1285,
			"10k": 2665,
			"15k": 4102,
			"HM": 5907,
			"M": 12279
		},
		"47": {
			"1500m": 342,
			"3k": 732,
			"5k": 1262,
			"10k": 2616,
			"15k": 4026,
			"HM": 5798,
			"M": 12060
		},
		"48": {
			"1500m": 336,
			"3k": 718,
			"5k": 1239,
			"10k": 2570,
			"15k": 3953,
			"HM": 5693,
			"M": 11849
		},
		"49": {
			"1500m": 330,
			"3k": 705,
			"5k": 1218,
			"10k": 2524,
			"15k": 3884,
			"HM": 5592,
			"M": 11646
		},
		"50": {
			"1500m": 324,
			"3k": 693,
			"5k": 1197,
			"10k": 2481,
			"15k": 3816,
			"HM": 5495,
			"M": 11449
		},
		"51": {
			"1500m": 318,
			"3k": 681,
			"5k": 1176,
			"10k": 2439,
			"15k": 3751,
			"HM": 5402,
			"M": 11259
		},
		"52": {
			"1500m": 313,
			"3k": 669,
			"5k": 1157,
			"10k": 2399,
			"15k": 3689,
			"HM": 5311,
			"M": 11076
		},
		"53": {
			"1500m": 307,
			"3k": 658,
			"5k": 1138,
			"10k": 2360,
			"15k": 3628,
			"HM": 5224,
			"M": 10899
		},
		"54": {
			"1500m": 302,
			"3k": 647,
			"5k": 1120,
			"10k": 2322,
			"15k": 3570,
			"HM": 5140,
			"M": 10727
		},
		"55": {
			"1500m": 297,
			"3k": 637,
			"5k": 1102,
			"10k": 2286,
			"15k": 3513,
			"HM": 5058,
			"M": 10561
		},
		"56": {
			"1500m": 293,
			"3k": 627,
			"5k": 1085,
			"10k": 2251,
			"15k": 3459,
			"HM": 4980,
			"M": 10400
		},
		"57": {
			"1500m": 288,
			"3k": 617,
			"5k": 1069,
			"10k": 2217,
			"15k": 3406,
			"HM": 4903,
			"M": 10245
		},
		"58": {
			"1500m": 284,
			"3k": 608,
			"5k": 1053,
			"10k": 2184,
			"15k": 3355,
			"HM": 4830,
			"M": 10094
		},
		"59": {
			"1500m": 279,
			"3k": 598,
			"5k": 1037,
			"10k": 2152,
			"15k": 3306,
			"HM": 4758,
			"M": 9947
		},
		"60": {
			"1500m": 275,
			"3k": 590,
			"5k": 1023,
			"10k": 2122,
			"15k": 3258,
			"HM": 4689,
			"M": 9805
		},
		"61": {
			"1500m": 271,
			"3k": 581,
			"5k": 1008,
			"10k": 2092,
			"15k": 3212,
			"HM": 4622,
			"M": 9668
		},
		"62": {
			"1500m": 267,
			"3k": 573,
			"5k": 994,
			"10k": 2063,
			"15k": 3167,
			"HM": 4557,
			"M": 9534
		},
		"63": {
			"1500m": 264,
			"3k": 565,
			"5k": 980,
			"10k": 2035,
			"15k": 3123,
			"HM": 4494,
			"M": 9404
		},
		"64": {
			"1500m": 260,
			"3k": 557,
			"5k": 967,
			"10k": 2008,
			"15k": 3081,
			"HM": 4433,
			"M": 9278
		},
		"65": {
			"1500m": 256,
			"3k": 549,
			"5k": 954,
			"10k": 1981,
			"15k": 3040,
			"HM": 4373,
			"M": 9155
		},
		"66": {
			"1500m": 253,
			"3k": 542,
			"5k": 942,
			"10k": 1955,
			"15k": 3000,
			"HM": 4316,
			"M": 9036
		},
		"67": {
			"1500m":  250,
			"3k": 535,
			"5k": 929,
			"10k": 1931,
			"15k": 2962,
			"HM": 4260,
			"M": 8920
		},
		"68": {
			"1500m": 246,
			"3k": 528,
			"5k": 918,
			"10k": 1906,
			"15k": 2924,
			"HM": 4205,
			"M": 8807
		},
		"69": {
			"1500m": 243,
			"3k": 521,
			"5k": 906,
			"10k": 1883,
			"15k": 2888,
			"HM": 4152,
			"M": 8697
		},
		"70": {
			"1500m": 240,
			"3k": 514,
			"5k": 895,
			"10k": 1860,
			"15k": 2852,
			"HM": 4101,
			"M": 8590
		},
		"71": {
			"1500m": 237,
			"3k": 508,
			"5k": 884,
			"10k": 1838,
			"15k": 2818,
			"HM": 4051,
			"M": 8486
		},
		"72": {
			"1500m": 234,
			"3k": 502,
			"5k": 873,
			"10k": 1816,
			"15k": 2784,
			"HM": 4002,
			"M": 8384
		},
		"73": {
			"1500m": 232,
			"3k": 496,
			"5k": 863,
			"10k": 1795,
			"15k": 2751,
			"HM": 3954,
			"M": 8285
		},
		"74": {
			"1500m": 229,
			"3k": 490,
			"5k": 853,
			"10k": 1774,
			"15k": 2719,
			"HM": 3908,
			"M": 8189
		},
		"75": {
			"1500m": 226,
			"3k": 484,
			"5k": 843,
			"10k": 1754,
			"15k": 2688,
			"HM": 3863,
			"M": 8095
		},
		"76": {
			"1500m": 224,
			"3k": 478,
			"5k": 834,
			"10k": 1735,
			"15k": 2658,
			"HM": 3819,
			"M": 8003
		},
		"77": {
			"1500m": 221,
			"3k": 473,
			"5k": 824,
			"10k": 1716,
			"15k": 2629,
			"HM": 3776,
			"M": 7914
		},
		"78": {
			"1500m": 218.8,
			"3k": 468,
			"5k": 815,
			"10k": 1697,
			"15k": 2600,
			"HM": 3735,
			"M": 7827
		},
		"79": {
			"1500m": 216.5,
			"3k": 463,
			"5k": 806,
			"10k": 1679,
			"15k": 2572,
			"HM": 3694,
			"M": 7742
		},
		"80": {
			"1500m": 214.2,
			"3k": 457.5,
			"5k": 797.8,
			"10k": 1661,
			"15k": 2545,
			"HM": 3654,
			"M": 7658
		},
		"81": {
			"1500m": 211.9,
			"3k": 452.5,
			"5k": 789.3,
			"10k": 1644,
			"15k": 2518,
			"HM": 3615,
			"M": 7577
		},
		"82": {
			"1500m": 209.7,
			"3k": 447.7,
			"5k": 781.1,
			"10k": 1627,
			"15k": 2492,
			"HM": 3578,
			"M": 7497
		},
		"83": {
			"1500m": 207.6,
			"3k": 443,
			"5k": 773,
			"10k": 1611,
			"15k": 2466,
			"HM": 3541,
			"M": 7420
		},
		"84": {
			"1500m": 205.5,
			"3k": 438.5,
			"5k": 765.2,
			"10k": 1594,
			"15k": 2442,
			"HM": 3505,
			"M": 7344
		},
		"85": {
			"1500m": 203.5,
			"3k": 434,
			"5k": 757.4,
			"10k": 1579,
			"15k": 2417,
			"HM": 3470,
			"M": 7270
		}
	});


/* Training paces (mm:ss) /km */
angular
	.module('runculator.vdot')
	.constant('vdotTrainingPaces', {
		"30": {
			easy: {
				min: '7:27',
				max: '8:14',
			},
			marathon: '7:03',
			threshold_400: '2:33',
			threshold_800: '5:07',
			threshold_1000: '6:24',
			interval_400: '2:22',
			interval_1000: '-',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '1:07',
			reps_300: '1:41',
			reps_400: '-',
			reps_600: '-',
			reps_800: '-'
		},
		"31": {
			easy: {
				min: '7:16',
				max: '8:02',
			},
			marathon: '6:52',
			threshold_400: '2:30',
			threshold_800: '4:59',
			threshold_1000: '6:14',
			interval_400: '2:18',
			interval_1000: '-',
			interval_1200: '',
			interval_1600: '',
			reps_200: '1:05',
			reps_300: '1:28',
			reps_400: '-',
			reps_600: '-',
			reps_800: '-'
		},
		"32": {
			easy: {
				min: '7:05',
				max: '7:52',
			},
			marathon: '6:40',
			threshold_400: '2:26',
			threshold_800: '4:52',
			threshold_1000: '6:05',
			interval_400: '2:14',
			interval_1000: '-',
			interval_1200: '',
			interval_1600: '',
			reps_200: '1:03',
			reps_300: '1:25',
			reps_400: '-',
			reps_600: '-',
			reps_800: '-',
		},
		"33": {
			easy: {
				min: '6:55',
				max: '7:41',
			},
			marathon: '6:30',
			threshold_400: '2:23',
			threshold_800: '4:45',
			threshold_1000: '5:56',
			interval_400: '2:11',
			interval_1000: '-',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '1:01',
			reps_300: '1:32',
			reps_400: '-',
			reps_600: '-',
			reps_800: '-',
		},
		"34": {
			easy: {
				min: '6:45',
				max: '7:31',
			},
			marathon: '6:20',
			threshold_400: '2:19',
			threshold_800: '4:38',
			threshold_1000: '5:48',
			interval_400: '2:08',
			interval_1000: '-',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '1:00',
			reps_300: '1:30',
			reps_400: '2:00',
			reps_600: '-',
			reps_800: '-',
		},
		"35": {
			easy: {
				min: '6:36',
				max: '7:21',
			},
			marathon: '6:10',
			threshold_400: '2:16',
			threshold_800: '4:32',
			threshold_1000: '5:40',
			interval_400: '2:05',
			interval_1000: '-',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '58',
			reps_300: '1:27',
			reps_400: '1:57',
			reps_600: '-',
			reps_800: '-',
		},
		"36": {
			easy: {
				min: '6:27',
				max: '7:11',
			},
			marathon: '6:01',
			threshold_400: '2:13',
			threshold_800: '4:26',
			threshold_1000: '5:33',
			interval_400: '2:02',
			interval_1000: '-',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '57',
			reps_300: '1:25',
			reps_400: '1:54',
			reps_600: '-',
			reps_800: '-',
		},
		"37": {
			easy: {
				min: '6:19',
				max: '7:02',
			},
			marathon: '5:53',
			threshold_400: '2:10',
			threshold_800: '4:20',
			threshold_1000: '5:26',
			interval_400: '1:59',
			interval_1000: '5:00',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '55',
			reps_300: '1:23',
			reps_400: '1:51',
			reps_600: '-',
			reps_800: '-',
		},
		"38": {
			easy: {
				min: '6:11',
				max: '6:54',
			},
			marathon: '5:45',
			threshold_400: '2:07',
			threshold_800: '4:15',
			threshold_1000: '5:19',
			interval_400: '1:56',
			interval_1000: '4:54',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '54',
			reps_300: '1:21',
			reps_400: '1:48',
			reps_600: '-',
			reps_800: '-',
		},
		"39": {
			easy: {
				min: '6:03',
				max: '6:46',
			},
			marathon: '5:37',
			threshold_400: '2:05',
			threshold_800: '4:10',
			threshold_1000: '5:12',
			interval_400: '1:54',
			interval_1000: '4:48',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '53',
			reps_300: '1:20',
			reps_400: '1:46',
			reps_600: '-',
			reps_800: '-',
		},
		"40": {
			easy: {
				min: '5:56',
				max: '6:38',
			},
			marathon: '5:29',
			threshold_400: '2:02',
			threshold_800: '4:05',
			threshold_1000: '5:06',
			interval_400: '1:52',
			interval_1000: '4:42',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '52',
			reps_300: '78',
			reps_400: '1:44',
			reps_600: '-',
			reps_800: '-',
		},
		"41": {
			easy: {
				min: '5:49',
				max: '6:31',
			},
			marathon: '5:22',
			threshold_400: '2:00',
			threshold_800: '4:00',
			threshold_1000: '5:00',
			interval_400: '1:50',
			interval_1000: '4:36',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '51',
			reps_300: '1:17',
			reps_400: '1:42',
			reps_600: '-',
			reps_800: '-',
		},
		"42": {
			easy: {
				min: '5:42',
				max: '6:23',
			},
			marathon: '5:16',
			threshold_400: '1:57',
			threshold_800: '3:55',
			threshold_1000: '4:54',
			interval_400: '1:48',
			interval_1000: '4:31',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '50',
			reps_300: '1:15',
			reps_400: '1:40',
			reps_600: '-',
			reps_800: '-',
		},
		"43": {
			easy: {
				min: '5:35',
				max: '6:16',
			},
			marathon: '5:09',
			threshold_400: '1:55',
			threshold_800: '3:51',
			threshold_1000: '4:49',
			interval_400: '1:46',
			interval_1000: '4:26',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '49',
			reps_300: '1:14',
			reps_400: '1:38',
			reps_600: '-',
			reps_800: '-',
		},
		"44": {
			easy: {
				min: '5:29',
				max: '6:10',
			},
			marathon: '5:03',
			threshold_400: '1:53',
			threshold_800: '3:46',
			threshold_1000: '4:43',
			interval_400: '1:44',
			interval_1000: '4:21',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '48',
			reps_300: '1:12',
			reps_400: '1:36',
			reps_600: '-',
			reps_800: '-',
		},
		"45": {
			easy: {
				min: '5:23',
				max: '6:03',
			},
			marathon: '4:57',
			threshold_400: '1:51',
			threshold_800: '3:42',
			threshold_1000: '4:38',
			interval_400: '1:42',
			interval_1000: '4:16',
			interval_1200: '-',
			interval_1600: '-',
			reps_200: '47',
			reps_300: '1:11',
			reps_400: '1:34',
			reps_600: '-',
			reps_800: '-',
		},
		"46": {
			easy: {
				min: '5:17',
				max: '5:57',
			},
			marathon: '4:51',
			threshold_400: '1:49',
			threshold_800: '3:38',
			threshold_1000: '4:33',
			interval_400: '1:40',
			interval_1000: '4:12',
			interval_1200: '5:00',
			interval_1600: '-',
			reps_200: '46',
			reps_300: '1:09',
			reps_400: '1:32',
			reps_600: '-',
			reps_800: '-',
		},
		"47": {
			easy: {
				min: '5:12',
				max: '5:51',
			},
			marathon: '4:46',
			threshold_400: '1:47',
			threshold_800: '3:35',
			threshold_1000: '4:29',
			interval_400: '1:38',
			interval_1000: '4:07',
			interval_1200: '4:54',
			interval_1600: '-',
			reps_200: '45',
			reps_300: '1:28',
			reps_400: '1:30',
			reps_600: '-',
			reps_800: '-',
		},
		"48": {
			easy: {
				min: '5:07',
				max: '5:45',
			},
			marathon: '4:41',
			threshold_400: '1:45',
			threshold_800: '3:31',
			threshold_1000: '4:24',
			interval_400: '1:36',
			interval_1000: '4:03',
			interval_1200: '4:49',
			interval_1600: '-',
			reps_200: '44',
			reps_300: '1:07',
			reps_400: '1:29',
			reps_600: '-',
			reps_800: '-',
		},
		"49": {
			easy: {
				min: '5:01',
				max: '5:40',
			},
			marathon: '4:36',
			threshold_400: '1:43',
			threshold_800: '3:28',
			threshold_1000: '4:20',
			interval_400: '1:35',
			interval_1000: '3:59',
			interval_1200: '4:45',
			interval_1600: '-',
			reps_200: '44',
			reps_300: '1:06',
			reps_400: '1:28',
			reps_600: '-',
			reps_800: '-',
		},
		"50": {
			easy: {
				min: '4:56',
				max: '5:34',
			},
			marathon: '4:31',
			threshold_400: '1:41',
			threshold_800: '3:24',
			threshold_1000: '4:15',
			interval_400: '1:33',
			interval_1000: '3:55',
			interval_1200: '4:40',
			interval_1600: '-',
			reps_200: '43',
			reps_300: '1:05',
			reps_400: '1:27',
			reps_600: '-',
			reps_800: '-',
		},
		"51": {
			easy: {
				min: '4:52',
				max: '5:29',
			},
			marathon: '4:27',
			threshold_400: '1:40',
			threshold_800: '3:21',
			threshold_1000: '4:11',
			interval_400: '1:32',
			interval_1000: '3:51',
			interval_1200: '4:36',
			interval_1600: '-',
			reps_200: '43',
			reps_300: '1:04',
			reps_400: '1:26',
			reps_600: '-',
			reps_800: '-',
		},
		"52": {
			easy: {
				min: '4:47',
				max: '5:24',
			},
			marathon: '4:22',
			threshold_400: '1:38',
			threshold_800: '3:17',
			threshold_1000: '4:07',
			interval_400: '1:31',
			interval_1000: '3:48',
			interval_1200: '4:32',
			interval_1600: '-',
			reps_200: '42',
			reps_300: '1:04',
			reps_400: '1:25',
			reps_600: '-',
			reps_800: '-',
		},
		"53": {
			easy: {
				min: '4:43',
				max: '5:19',
			},
			marathon: '4:18',
			threshold_400: '1:37',
			threshold_800: '3:15',
			threshold_1000: '4:04',
			interval_400: '1:30',
			interval_1000: '3:44',
			interval_1200: '4:29',
			interval_1600: '-',
			reps_200: '42',
			reps_300: '1:03',
			reps_400: '1:24',
			reps_600: '-',
			reps_800: '-',
		},
		"54": {
			easy: {
				min: '4:38',
				max: '5:14',
			},
			marathon: '4:14',
			threshold_400: '1:35',
			threshold_800: '3:12',
			threshold_1000: '4:00',
			interval_400: '1:28',
			interval_1000: '3:41',
			interval_1200: '4:25',
			interval_1600: '-',
			reps_200: '41',
			reps_300: '1:02',
			reps_400: '1:22',
			reps_600: '-',
			reps_800: '-',
		},
		"55": {
			easy: {
				min: '4:34',
				max: '5:10',
			},
			marathon: '4:10',
			threshold_400: '1:34',
			threshold_800: '3:09',
			threshold_1000: '3:56',
			interval_400: '1:27',
			interval_1000: '3:37',
			interval_1200: '4:21',
			interval_1600: '-',
			reps_200: '40',
			reps_300: '1:01',
			reps_400: '1:21',
			reps_600: '-',
			reps_800: '-',
		},
		"56": {
			easy: {
				min: '4:30',
				max: '5:05',
			},
			marathon: '4:06',
			threshold_400: '1:33',
			threshold_800: '3:06',
			threshold_1000: '3:53',
			interval_400: '86',
			interval_1000: '3:34',
			interval_1200: '4:18',
			interval_1600: '-',
			reps_200: '40',
			reps_300: '1:00',
			reps_400: '1:20',
			reps_600: '2:00',
			reps_800: '-',
		},
		"57": {
			easy: {
				min: '4:26',
				max: '5:01',
			},
			marathon: '4:03',
			threshold_400: '1:31',
			threshold_800: '3:04',
			threshold_1000: '3:50',
			interval_400: '1:25',
			interval_1000: '3:31',
			interval_1200: '4:14',
			interval_1600: '-',
			reps_200: '39',
			reps_300: '59',
			reps_400: '1:19',
			reps_600: '1:57',
			reps_800: '-',
		},
		"58": {
			easy: {
				min: '4:22',
				max: '4:57',
			},
			marathon: '3:59',
			threshold_400: '1:30',
			threshold_800: '3:00',
			threshold_1000: '3:46',
			interval_400: '1:23',
			interval_1000: '3:28',
			interval_1200: '4:10',
			interval_1600: '-',
			reps_200: '38',
			reps_300: '58',
			reps_400: '1:17',
			reps_600: '1:55',
			reps_800: '-',
		},
		"59": {
			easy: {
				min: '4:19',
				max: '4:53',
			},
			marathon: '3:56',
			threshold_400: '1:29',
			threshold_800: '2:58',
			threshold_1000: '3:43',
			interval_400: '1:22',
			interval_1000: '3:25',
			interval_1200: '4:07',
			interval_1600: '-',
			reps_200: '38',
			reps_300: '57',
			reps_400: '1:16',
			reps_600: '1:54',
			reps_800: '-',
		},
		"60": {
			easy: {
				min: '4:15',
				max: '4:49',
			},
			marathon: '3:52',
			threshold_400: '1:28',
			threshold_800: '2:56',
			threshold_1000: '3:40',
			interval_400: '1:21',
			interval_1000: '3:23',
			interval_1200: '4:03',
			interval_1600: '-',
			reps_200: '37',
			reps_300: '56',
			reps_400: '1:15',
			reps_600: '1:52',
			reps_800: '-',
		},
		"61": {
			easy: {
				min: '4:11',
				max: '4:45',
			},
			marathon: '3:49',
			threshold_400: '1:26',
			threshold_800: '2:53',
			threshold_1000: '3:37',
			interval_400: '1:20',
			interval_1000: '3:20',
			interval_1200: '4:00',
			interval_1600: '-',
			reps_200: '37',
			reps_300: '55',
			reps_400: '1:14',
			reps_600: '1:51',
			reps_800: '-',
		},
		"62": {
			easy: {
				min: '4:08',
				max: '4:41',
			},
			marathon: '3:46',
			threshold_400: '1:25',
			threshold_800: '2:51',
			threshold_1000: '3:34',
			interval_400: '1:19',
			interval_1000: '3:17',
			interval_1200: '3:57',
			interval_1600: '-',
			reps_200: '36',
			reps_300: '54',
			reps_400: '1:13',
			reps_600: '1:49',
			reps_800: '-',
		},
		"63": {
			easy: {
				min: '4:05',
				max: '4:38',
			},
			marathon: '3:43',
			threshold_400: '1:24',
			threshold_800: '2:49',
			threshold_1000: '3:32',
			interval_400: '1:18',
			interval_1000: '3:15',
			interval_1200: '3:54',
			interval_1600: '-',
			reps_200: '36',
			reps_300: '53',
			reps_400: '1:12',
			reps_600: '1:48',
			reps_800: '-',
		},
		"64": {
			easy: {
				min: '4:02',
				max: '4:34',
			},
			marathon: '3:40',
			threshold_400: '1:23',
			threshold_800: '2:47',
			threshold_1000: '3:29',
			interval_400: '1:17',
			interval_1000: '3:12',
			interval_1200: '3:51',
			interval_1600: '-',
			reps_200: '35',
			reps_300: '52',
			reps_400: '1:11',
			reps_600: '1:46',
			reps_800: '-',
		},
		"65": {
			easy: {
				min: '3:59',
				max: '4:31',
			},
			marathon: '3:37',
			threshold_400: '1:22',
			threshold_800: '2:45',
			threshold_1000: '3:26',
			interval_400: '1:16',
			interval_1000: '3:10',
			interval_1200: '3:48',
			interval_1600: '-',
			reps_200: '35',
			reps_300: '52',
			reps_400: '1:10',
			reps_600: '1:45',
			reps_800: '-',
		},
		"66": {
			easy: {
				min: '3:56',
				max: '4:28',
			},
			marathon: '3:34',
			threshold_400: '1:21',
			threshold_800: '2:43',
			threshold_1000: '3:24',
			interval_400: '1:25',
			interval_1000: '3:08',
			interval_1200: '3:45',
			interval_1600: '5:00',
			reps_200: '34',
			reps_300: '51',
			reps_400: '1:19',
			reps_600: '1:43',
			reps_800: '-',
		},
		"67": {
			easy: {
				min: '3:53',
				max: '4:24',
			},
			marathon: '3:31',
			threshold_400: '1:20',
			threshold_800: '2:41',
			threshold_1000: '3:21',
			interval_400: '1:14',
			interval_1000: '3:05',
			interval_1200: '3:42',
			interval_1600: '4:57',
			reps_200: '34',
			reps_300: '51',
			reps_400: '1:28',
			reps_600: '1:42',
			reps_800: '-',
		},
		"68": {
			easy: {
				min: '3:50',
				max: '4:21',
			},
			marathon: '3:29',
			threshold_400: '1:19',
			threshold_800: '2:39',
			threshold_1000: '3:19',
			interval_400: '1:13',
			interval_1000: '3:03',
			interval_1200: '3:39',
			interval_1600: '4:53',
			reps_200: '33',
			reps_300: '50',
			reps_400: '1:07',
			reps_600: '1:40',
			reps_800: '-',
		},
		"69": {
			easy: {
				min: '3:47',
				max: '4:18',
			},
			marathon: '3:26',
			threshold_400: '1:18',
			threshold_800: '2:37',
			threshold_1000: '3:16',
			interval_400: '1:12',
			interval_1000: '3:01',
			interval_1200: '3:36',
			interval_1600: '4:50',
			reps_200: '33',
			reps_300: '49',
			reps_400: '1:06',
			reps_600: '1:39',
			reps_800: '-',
		},
		"70": {
			easy: {
				min: '3:44',
				max: '4:15',
			},
			marathon: '3:24',
			threshold_400: '1:17',
			threshold_800: '2:35',
			threshold_1000: '3:14',
			interval_400: '1:11',
			interval_1000: '2:59',
			interval_1200: '3:34',
			interval_1600: '4:46',
			reps_200: '32',
			reps_300: '48',
			reps_400: '1:05',
			reps_600: '1:37',
			reps_800: '-',
		},
		"71": {
			easy: {
				min: '3:42',
				max: '4:12',
			},
			marathon: '3:21',
			threshold_400: '1:16',
			threshold_800: '2:33',
			threshold_1000: '3:12',
			interval_400: '1:10',
			interval_1000: '2:57',
			interval_1200: '3:31',
			interval_1600: '4:43',
			reps_200: '32',
			reps_300: '48',
			reps_400: '1:04',
			reps_600: '1:36',
			reps_800: '-',
		},
		"72": {
			easy: {
				min: '3:40',
				max: '4:00',
			},
			marathon: '3:19',
			threshold_400: '1:16',
			threshold_800: '2:32',
			threshold_1000: '3:10',
			interval_400: '1:09',
			interval_1000: '2:55',
			interval_1200: '3:29',
			interval_1600: '4:40',
			reps_200: '31',
			reps_300: '47',
			reps_400: '1:03',
			reps_600: '1:34',
			reps_800: '-',
		},
		"73": {
			easy: {
				min: '3:37',
				max: '4:07',
			},
			marathon: '3:16',
			threshold_400: '1:15',
			threshold_800: '2:30',
			threshold_1000: '3:08',
			interval_400: '1:09',
			interval_1000: '2:53',
			interval_1200: '3:27',
			interval_1600: '4:37',
			reps_200: '31',
			reps_300: '47',
			reps_400: '1:03',
			reps_600: '1:33',
			reps_800: '-',
		},
		"74": {
			easy: {
				min: '3:34',
				max: '4:04',
			},
			marathon: '3:14',
			threshold_400: '1:14',
			threshold_800: '2:29',
			threshold_1000: '3:06',
			interval_400: '1:08',
			interval_1000: '2:51',
			interval_1200: '3:25',
			interval_1600: '4:34',
			reps_200: '31',
			reps_300: '46',
			reps_400: '1:02',
			reps_600: '1:32',
			reps_800: '-',
		},
		"75": {
			easy: {
				min: '3:32',
				max: '4:01',
			},
			marathon: '3:12',
			threshold_400: '1:14',
			threshold_800: '2:27',
			threshold_1000: '3:04',
			interval_400: '1:07',
			interval_1000: '2:49',
			interval_1200: '3:22',
			interval_1600: '4:31',
			reps_200: '30',
			reps_300: '46',
			reps_400: '1:01',
			reps_600: '1:31',
			reps_800: '-',
		},
		"76": {
			easy: {
				min: '3:30',
				max: '3:58',
			},
			marathon: '3:10',
			threshold_400: '1:13',
			threshold_800: '2:26',
			threshold_1000: '3:02',
			interval_400: '1:06',
			interval_1000: '2:48',
			interval_1200: '3:20',
			interval_1600: '4:28',
			reps_200: '30',
			reps_300: '45',
			reps_400: '1:00',
			reps_600: '1:30',
			reps_800: '-',
		},
		"77": {
			easy: {
				min: '3:28',
				max: '3:56',
			},
			marathon: '3:08',
			threshold_400: '1:12',
			threshold_800: '2:24',
			threshold_1000: '3:00',
			interval_400: '1:05',
			interval_1000: '2;46',
			interval_1200: '3:18',
			interval_1600: '4:25',
			reps_200: '29',
			reps_300: '45',
			reps_400: '59',
			reps_600: '1:29',
			reps_800: '2:00',
		},
		"78": {
			easy: {
				min: '3:25',
				max: '3:53',
			},
			marathon: '3:06',
			threshold_400: '1:11',
			threshold_800: '2:22',
			threshold_1000: '2:58',
			interval_400: '1:05',
			interval_1000: '2:44',
			interval_1200: '3:16',
			interval_1600: '4:23',
			reps_200: '29',
			reps_300: '44',
			reps_400: '59',
			reps_600: '1:28',
			reps_800: '1:59',
		},
		"79": {
			easy: {
				min: '3:23',
				max: '3:51',
			},
			marathon: '3:03',
			threshold_400: '1:10',
			threshold_800: '2:21',
			threshold_1000: '2:56',
			interval_400: '1:04',
			interval_1000: '2:42',
			interval_1200: '3:14',
			interval_1600: '4:20',
			reps_200: '29',
			reps_300: '44',
			reps_400: '58',
			reps_600: '1:27',
			reps_800: '1:58',
		},
		"80": {
			easy: {
				min: '3:21',
				max: '3:49',
			},
			marathon: '3:01',
			threshold_400: '1:10',
			threshold_800: '2:19',
			threshold_1000: '2:54',
			interval_400: '1:04',
			interval_1000: '2:41',
			interval_1200: '3:12',
			interval_1600: '4:17',
			reps_200: '29',
			reps_300: '43',
			reps_400: '58',
			reps_600: '1:27',
			reps_800: '1:56',
		},
		"81": {
			easy: {
				min: '3:19',
				max: '3:46',
			},
			marathon: '3:00',
			threshold_400: '1:09',
			threshold_800: '2:18',
			threshold_1000: '2:53',
			interval_400: '63',
			interval_1000: '2:39',
			interval_1200: '3:10',
			interval_1600: '4:15',
			reps_200: '28',
			reps_300: '43',
			reps_400: '57',
			reps_600: '1:26',
			reps_800: '1:55',
		},
		"82": {
			easy: {
				min: '3:17',
				max: '3:44',
			},
			marathon: '2:58',
			threshold_400: '1:08',
			threshold_800: '2:17',
			threshold_1000: '2:51',
			interval_400: '62',
			interval_1000: '2:38',
			interval_1200: '3:08',
			interval_1600: '4:12',
			reps_200: '28',
			reps_300: '42',
			reps_400: '56',
			reps_600: '1:25',
			reps_800: '1:54',
		},
		"83": {
			easy: {
				min: '3:15',
				max: '3:42',
			},
			marathon: '2:56',
			threshold_400: '1:08',
			threshold_800: '2:15',
			threshold_1000: '2:49',
			interval_400: '1:02',
			interval_1000: '2:36',
			interval_1200: '3:07',
			interval_1600: '4:10',
			reps_200: '28',
			reps_300: '42',
			reps_400: '56',
			reps_600: '1:24',
			reps_800: '1:53',
		},
		"84": {
			easy: {
				min: '3:13',
				max: '3:40',
			},
			marathon: '2:54',
			threshold_400: '1:07',
			threshold_800: '2:14',
			threshold_1000: '2:48',
			interval_400: '1:01',
			interval_1000: '2:35',
			interval_1200: '3:05',
			interval_1600: '4:08',
			reps_200: '27',
			reps_300: '41',
			reps_400: '55',
			reps_600: '1:23',
			reps_800: '1:52',
		},
		"85": {
			easy: {
				min: '3:11',
				max: '3:38',
			},
			marathon: '2:52',
			threshold_400: '1:06',
			threshold_800: '2:13',
			threshold_1000: '2:46',
			interval_400: '1:01',
			interval_1000: '2:33',
			interval_1200: '3:03',
			interval_1600: '4:05',
			reps_200: '27',
			reps_300: '41',
			reps_400: '55',
			reps_600: '1:22',
			reps_800: '1:51',
		}

	});

})();