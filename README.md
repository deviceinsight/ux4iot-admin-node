# ux4iot Admin Client

![Test suite](https://github.com/jankapunkt/npm-package-template/workflows/Test%20suite/badge.svg)
[![Build Status](https://travis-ci.org/jankapunkt/npm-package-template.svg?branch=master)](https://travis-ci.org/jankapunkt/npm-package-template)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![GitHub](https://img.shields.io/github/license/jankapunkt/npm-package-template)

Minimal tested and fully functional NPM package template project for ES6+ Javascript.

## About this package

This template is intended to allow you to **start developing immediatly** with a working set
of tools and scripts that play well together.

It is little opinionated to the point, that only the most basic tools are integrated.
If you want a different flavour you can fork this project and easily replace the tools or add new ones.

## Which tools are used?

## Getting started

In your backend code, initialize the admin client:

```javascript
const ux4iotAdmin = initializeAdmin({
	connectionString: 'HostName=yourux4iotinstance.com;Key=supersecret',
});
```

In order to generate subscription tokens:

```javascript
const subscriptionToken = ux4iotAdmin.createSubscriptionToken({
	deviceIds: ['somedevice', 'anotherdevice'],
	telemetry: ['temperature', 'pressure'],
	accessToAllTelemetryValues: false,
});
```

## Code Quality

We use `standard` as opinionated but zero-config linter.
You can run lint in two modes:

##### lint

```bash
$ npm run lint
```

##### lint with auto fixing

```bash
$ npm run lint:fix
```

## Run the tests

We use mocha and chai with a mostly (but not strict) behavioural style for testing.
You can run the tests in three different contexts:

##### Single run

```bash
$ npm run test
```

##### Watch mode

```bash
$ npm run test:watch
```

## License

MIT, see [license file](LICENSE)
