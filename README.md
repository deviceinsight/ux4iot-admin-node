# ux4iot-admin-node

![Test suite](https://github.com/jankapunkt/npm-package-template/workflows/Test%20suite/badge.svg)
[![Build Status](https://travis-ci.org/jankapunkt/npm-package-template.svg?branch=master)](https://travis-ci.org/jankapunkt/npm-package-template)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![GitHub](https://img.shields.io/github/license/jankapunkt/npm-package-template)

ux4iot-admin-node provides a minimalistic node-sdk client for ux4iot. Use this package to easily access grant requests to the ux4iot service.

## Installation

```
npm install ux4iot-admin-node
```

## Usage

```js
import Ux4iotAdmin from 'ux4iot-admin-node';

const sdk = new Ux4iotAdmin({ connectionString: 'YOUR_CONNECTION_STRING' });

const grantRequest = {
    deviceId: 'mydevice',
    sessionId: 'valid-session-id',
    grantType: 'subscribeToTelemetry',
    telemetryKey: 'mytelemetry'
}

await sdk.grant(grantRequest);
```

## Check out the [Documentation](https://docs.ux4iot.com/implementing-your-custom-security-backend/introduction) for

- API documentation on grant requests with ux4iot
- Why you would need to use this library when using ux4iot
- How to write a security backend ux4iot
