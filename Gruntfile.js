(function(){ "use strict";

	module.exports = function(grunt){

		// config
		grunt.initConfig({

			pkg: grunt.file.readJSON('package.json'),
			
			// install bower dependencies
			bower: {
				install: {
					options: {
						install: true,
						copy: false,
						targetDir: './app/libs',
						cleanTargetDir: true
					}
				}
			},

			// check code with jshint
			jshint: {
				files: ['Gruntfile.js', 'karma.conf.js', 'app/app/*.js' ]
			},

			// run unit tests
			karma: {
				options: {
					configFile: 'karma.conf.js'
				},
				unit: {
					singleRun: true
				},
				continuous: {
					singleRun: false,
					autoWatch: true
				}
			},

			// concat js files
			concat: {
				options: {
					separator: ';'
				},
				dist: {
					src: ['app/app/*.js', '!app/app/*.spec.js'],
					dest: 'app/dist/<%= pkg.name %>.js'
				}
			},

			// minify
			uglify: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				dist: {
					files: {
						'app/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
					}
				}
			},

			// watch
			watch: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			},

			// compress into a ZIP file
			compress: {
				dist: {
					options: {
						archive: 'app/<%= pkg.name %>-<%= pkg.version %>.zip'
					},
					files: [
						{ src: ['app/index.html', 'app/dist/**', 'app/assets/**', 'app/libs/**'], dest: '/' }
					]
				}
			}

		});

		// load tasks
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-compress');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-compress');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-bower-task');
		grunt.loadNpmTasks('grunt-karma');

		/**
		  * Register grunt tasks
		  */
		grunt.registerTask('test', ['bower', 'jshint', 'karma:unit'] );

		grunt.registerTask('build', ['jshint', 'concat:dist','uglify:dist'] );

		grunt.registerTask('default', ['bower', 'jshint','karma:unit', 'concat:dist', 'uglify:dist', 'compress:dist'] );

	};

})();