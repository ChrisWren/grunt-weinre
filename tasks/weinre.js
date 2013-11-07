/*
 * grunt-weinre
 * https://github.com/ChrisWren/grunt-weinre
 *
 * Copyright (c) 2013 Chris Wren
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('weinre', 'Runs a weinre monitor of your node.js server.', function () {

    var options = this.options();
    var done = this.async();
    var args = [__dirname + '/../node_modules/weinre/weinre'];

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
        grunt.fail.fatal('weinre must be installed as a local dependency of grunt-weinre.\n\n' +

                         'Run the following command:\n' +
                         'rm -rf node_modules/weinre\n\n' +

                         'Then run:\n' +
                         'npm install grunt-weinre --save-dev');
      }
      done();
    });
  });
};
