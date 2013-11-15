/*
 * grunt-weinre
 * https://github.com/ChrisWren/grunt-weinre
 *
 * Copyright (c) 2013 Chris Wren
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('weinre', 'Runs a weinre server to debug your mobile web site/app.', function () {

    var options = this.options();
    var done = this.async();
    var args = [require.resolve('weinre/weinre')];

    [
      'httpPort',
      'boundHost',
      'verbose',
      'debug',
      'readTimeout',
      'deathTimeout'
    ].forEach(function (option) {
      if (option in options) {
        args.push('--' + option);
        args.push(options[option]);
      }
    });

    grunt.util.spawn({
      cmd: 'node',
      args: args,
      opts: {
        stdio: 'inherit'
      }
    },
    function (error) {
      if (error) {
        grunt.fail.fatal(error);
      }
      done();
    });
  });
};
