module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
		ts: {
			options: {
				target: 'es5',
				module: 'amd',
				sourcemap: true,
				declaration: false,
				nolib: false,
				comments: false
			},
			dev: {
				src: ["src/**/*.ts"],
				watch: 'src',
				outDir: 'src'
			}
		},
	});

	//load the task
	grunt.loadNpmTasks("grunt-ts");
	grunt.registerTask("default", ["ts:dev"]);
};