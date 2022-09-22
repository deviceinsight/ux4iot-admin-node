# ux4iot-admin-node

ux4iot-admin-node provides a Node.js admin client for ux4iot. Use this library to easily access grant 
requests to the ux4iot service.

## Prerequisites

In order to use this library you need to have an ux4iot instance deployed in your Azure subscription. [Here](https://docs.ux4iot.com/quickstart) 
is a link to a quickstart that explains how to deploy one. [Here](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/deviceinsightgmbh-4961725.ux4iot)
is the link to the Azure Marketplace offering.

## Installation

```
npm install ux4iot-admin-node
```

## Usage

```ts
import Ux4iotAdminSDK from 'ux4iot-admin-node';

const sdk = new Ux4iotAdminSDK({ connectionString: 'YOUR_UX4IOT_CONNECTION_STRING' });

const grantRequest = {
    deviceId: 'mydevice',
    sessionId: 'valid-session-id',
    type: 'telemetry',
    telemetryKey: 'mytelemetry'
}

await sdk.grant(grantRequest);
```

## Documentation

Check out the [Documentation](https://docs.ux4iot.com/implementing-your-custom-security-backend/introduction) for

- API documentation on grant requests with ux4iot
- Why you would need to use this library when using ux4iot
- How to write a security backend for ux4iot
