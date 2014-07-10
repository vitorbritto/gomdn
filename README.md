# Go MDN [![NPM version](https://badge.fury.io/js/gomdn.svg)](http://badge.fury.io/js/gomdn) [![GitHub version](https://badge.fury.io/gh/vitorbritto%2Fgomdn.svg)](http://badge.fury.io/gh/vitorbritto%2Fgomdn)

**DON'T USE W3Schools.** Use the MDN for research and references. Seriously!

## Install

```bash
$ npm install gomdn -g
```

This will make `godmn` and the shorter `mdn` alias available on the command line.

## Usage

```bash
$ gomdn [options] <term> <filter>
```

### Available Filters

You can be more specific with these filters:

- js
- css
- html
- apps
- api
- addons
- canvas
- docs
- firefox
- firefox-os
- games
- mathml
- mobile
- svg
- webdev
- webgl
- xul

### Available Options
#### -s or --skill

You can search content by skill:

- 1 => beginner
- 2 => intermediate
- 3 => advanced

#### -t or --type

You can search content by type:

- tools => tools
- howto => how-to & Tutorial
- code => code samples


## Example

```bash
$ gomdn closure js
```
or using the options

```bash
$ gomdn closure js -t howto
$ gomdn closure js -s 1
```


## Contribute

Feel free to [contribute](https://github.com/vitorbritto/gomdn/pulls) with this project or leave a [suggestion](https://github.com/vitorbritto/gomdn/issues).


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
