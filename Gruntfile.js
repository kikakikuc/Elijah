module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	var config = {

		/* Path variables
		-------------------------------------------*/
		src: 'src',
		src_js: 'src/js',
		src_less: 'src/less',
		src_css: 'src/css',
		src_html: 'src/html',

		dest: 'dest',
		dest_js: 'dest/js',
		dest_css: 'dest/css',

		/* Watch
		-------------------------------------------*/
		watch: {
			options: {
				spawn: false
			},
			grunt: {
				files: ['Gruntfile.js']
			},
			css: {
				files: ['<%= src %>/**/*.less'],
				tasks: ['less']
			},
			js: {
				files: [
					'<%= src_js %>/*.js',
					'<%= src_css %>/*.css'
				],
				tasks: ['concat']
			},
			// jsmin: {
			// 	files: [
			// 		'<%= src_js %>/*.js',
			// 	],
			// 	tasks: ['uglify']
			// },
			// cssmin: {
			// 	files: [
			// 		'<%= src_css %>/*.css',
			// 	],
			// 	tasks: ['cssmin']
			// },
			html: {
				files: ['<%= src %>/**/*.html'],
				tasks: ['htmlbuild']
			},
		},

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						"<%= dest_css %>/*.css",
					]
				},
				options: {
					watchTask: true,
					proxy: "http://localhost/Elijah/dest/"
				}
			}
		},

		/* CSS Min
		-------------------------------------------*/
		// cssmin: {
		// 	target: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: '<%= dest_css %>',
		// 			src: ['plugins.css'],
		// 			dest: '<%= dest_css %>',
		// 			ext: '.min.css'
		// 		}]
		// 	}
		// },

		/* Uglify
		-------------------------------------------*/
		// uglify: {
		// 	dist: {
		// 		files: {
		// 			'<%= dest_js %>/plugins.min.js': ['<%= dest_js %>/plugins.js']
		// 		}
		// 	}
		// },

		/* SASS
		-------------------------------------------*/
		less: {
			development: {
				options: {
					paths: ["less"]
				},
				files: {
					"<%= dest_css %>/style.css": "<%= src_less %>/style.less"
				}
			},
		},
		/* Concat
		-------------------------------------------*/
		concat: {
			js: {
				src: ['<%= src_js %>/*.js','!<%= src_js %>/custom.js'],
				dest: '<%= dest_js %>/plugins.js'
			},
			extras:{
                src: ['<%= src_js %>/custom.js'],
                dest: '<%= dest_js %>/custom.js'
            },
			css: {
				src: '<%= src_css %>/*.css',
				dest: '<%= dest_css %>/plugins.css'
			}
		},
		/* HTML Build
		-------------------------------------------*/
		htmlbuild: {
			dest: {
				src: '<%= src %>/*.html',
				dest: '<%= dest %>/',
				options: {
					relative: true,
					sections: {
						layout: {
							head: '<%= src_html %>/head.html',
							header: '<%= src_html %>/header.html',
							foot: '<%= src_html %>/foot.html',
							footer: '<%= src_html %>/footer.html'
						},
						section: {
							demo_section: '<%= src_html %>/demo_section.html',
							home_section: '<%= src_html %>/home_section.html',
							nav_section: '<%= src_html %>/nav_section.html',
							about_section: '<%= src_html %>/about_section.html',
							quote_section: '<%= src_html %>/quote_section.html',
							team_section: '<%= src_html %>/team_section.html',
							service_section: '<%= src_html %>/service_section.html',
							portfolio_section: '<%= src_html %>/portfolio_section.html',
							pricing_section: '<%= src_html %>/pricing_section.html',
							contact_section: '<%= src_html %>/contact_section.html',
						},
						widget: {
							demo_widget: '<%= src_html %>/demo_widget.html',
						},
					},
					data: {
						version: "0.1.0",
						title: "Haintheme HTML Framework"
					}
				}
			}
		}
	};

	grunt.initConfig(config);
	grunt.registerTask('default', ['browserSync', 'watch']);
}