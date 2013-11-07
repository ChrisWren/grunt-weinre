module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    weinre: {
      all: {
        options: {
          httpPort: 8081,
          boundHost: '-all-',
          verbose: true,
          debug: true,
          readTimeout: 10,
          deathTimeout: 15
        }
      },
      empty: {}
    },
    mdlint: ['README.md'],
    jshint: {
      options: {
        bitwise: true,
        indent: 2,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        nonew: true,
        quotmark: 'single',
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        trailing: true,
        eqnull: true,
        node: true,
        expr: true,
        evil: true,
        globals: {
          describe: true,
          it: true,
          before: true
        }
      },
      files: {
        src:  ['*.js', 'tasks/*.js']
      }
    }
  });

  grunt.registerTask('default', ['weinre']);
  grunt.registerTask('test', ['jshint', 'mdlint']);

  grunt.loadTasks('tasks');

};
