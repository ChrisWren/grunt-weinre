# grunt-weinre
> Run [weinre](http://people.apache.org/~pmuellr/weinre/) as a grunt task for easy configuration and integration with the rest of your workflow

[![NPM version](https://badge.fury.io/js/grunt-weinre.png)](http://badge.fury.io/js/grunt-weinre) [![Dependency Status](https://gemnasium.com/ChrisWren/grunt-weinre.png)](https://gemnasium.com/ChrisWren/grunt-weinre)

## Getting Started
If you haven't used grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a gruntfile as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:
```shell
npm install grunt-weinre --save-dev
```

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-weinre');
```

## Documentation

### Usage
The minimal usage of weinre runs with no options:
```js
weinre: {
  dev: {}
}
```

Here is a config that uses all of the available options(with their default values) for weinre:

```js
weinre: {
  dev: {
    options: {
      httpPort: 8080,
      boundHost: 'localhost',
      verbose: false,
      debug: false,
      readTimeout: 5,
      deathTimeout: 15
    }
  }
}
```

#### Running weinre concurrently
A common use case is to run `weinre` with other tasks concurrently. This can be achieved with the following config, which uses [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) to run weinre, [nodemon](https://github.com/ChrisWren/grunt-nodemon), [node-inspector](https://github.com/ChrisWren/grunt-node-inspector), and [watch](https://github.com/gruntjs/grunt-contrib-watch) in a single terminal tab:
```js
concurrent: {
  dev: {
    tasks: ['weinre', 'nodemon', 'node-inspector', 'watch'],
    options: {
      logConcurrentOutput: true
    }
  }
}
```
### Options

#### httpPort
Type: `Number` Default: `8080`

Port to run the http server on.

### boundHost 
Type: `String` Default: `'localhost'`

IP address to bind the server to.

### verbose
Type: `Boolean` Default: `false`

Print more diagnostics.

### debug
Type: `Boolean` Default: `false`

Print even more diagnostics.

### readTimeout
Type: `Number` Default: `5`

Seconds to wait for a client message.

### deathTimeout
Type: `Number` Default: `3 * readTimeout`

Seconds to wait to kill client.

# Changelog

**0.0.1** - Initial release
