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

### Recommended Usage

The default HTTP port of 8080 is pretty popular, so offsetting it by 2 may help you dodge a collision. Also setting the `boundHost` to `-all-` will let your mobile devices connect via your local ip address, since the default `localhost` won't work for them.

```js
weinre: {
  dev: {
  options: {
      httpPort: 8082,
      boundHost: '-all-'
    }
  }
}
```

### Usage with all available options(with their default values):

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
A common use case is to run `weinre` with other tasks concurrently. This can be achieved with the following config for the [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) plugin which runs weinre, [nodemon](https://github.com/ChrisWren/grunt-nodemon), [node-inspector](https://github.com/ChrisWren/grunt-node-inspector), and [watch](https://github.com/gruntjs/grunt-contrib-watch) in a single terminal tab:

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
