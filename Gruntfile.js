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
						targetDir: './libs',
						cleanTargetDir: true
					}
				}
			},

			// check code with jshint
			jshint: {
				files: ['Gruntfile.js', 'karma.conf.js', 'app/**/*.js' ]
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

			// cache html templates in js
			html2js: {
				options: {
					base: './'
				},
				dist: {
					src: ['app/**/*.html'],
					dest: 'tmp/app.templates.js'
				}
			},

			// concat js files
			concat: {
				options: {
					separator: ';'
				},
				tmp: {
					files: {
						'tmp/app.modules.js': ['app/app.module.js','app/**/*Module.js'],
						'tmp/app.func.js' : ['app/**/*.js', '!app/app.module.js', '!app/**/*.spec.js', '!app/**/*Module.js']
					}
				},
				dist: {
					src: ['tmp/app.modules.js', 'tmp/app.func.js', 'tmp/app.templates.js'],
					dest: 'dist/<%= pkg.name %>.js'
				}
			},

			// minify
			uglify: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				dist: {
					src: ['<%= concat.dist.dest %>'],
					dest: 'dist/<%= pkg.name %>.min.js'
				}
			},

			// watch
			watch: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			},

			clean: {
				temp: {
					src: ['tmp']
				},
				dist: {
					src: ['dist','*.zip']
				}
			},

			// compress into a ZIP file
			compress: {
				dist: {
					options: {
						archive: '<%= pkg.name %>-<%= pkg.version %>.zip'
					},
					files: [
						{ 
							src: ['index.html', 'favicon.ico', 'LICENSE', 'dist/**', 'assets/**', 'libs/**'],
							dest: '/'
						}
					]
				}
			}

		});

		// load tasks
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-html2js');
		grunt.loadNpmTasks('grunt-contrib-compress');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-compress');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-bower-task');
		grunt.loadNpmTasks('grunt-karma');

		/**
		  * Register grunt tasks
		  */
		grunt.registerTask('test', ['jshint', 'karma:unit'] );

		grunt.registerTask('build', ['bower', 'jshint', 'html2js', 'concat', 'uglify:dist', 'clean:temp', 'compress:dist'] );

		grunt.registerTask('default', ['bower', 'jshint', 'karma:unit', 'concat', 'uglify:dist', 'clean:temp', 'compress:dist'] );

	};

})();