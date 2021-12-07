export const grantRequestBase = {
	deviceId: 'someDeviceId',
	sessionId: 'someSessionId',
};
export const telemetryGrantRequest = {
	...grantRequestBase,
	grantType: 'subscribeToTelemetry',
	telemetryKey: 'someTelemetryKey', // null means: Access to all telemetry key
};
export const deviceTwinGrantRequest = {
	...grantRequestBase,
	grantType: 'subscribeToDeviceTwin',
};
export const connectionStateGrantRequest = {
	...grantRequestBase,
	grantType: 'subscribeToConnectionState',
};
export const desiredPropertyGrantRequest = {
	...grantRequestBase,
	grantType: 'modifyDesiredProperties',
};
export const directMethodGrantRequest = {
	...grantRequestBase,
	grantType: 'invokeDirectMethod',
	directMethodName: 'someDevice', // null means: Access to all direct methods
};
export const rawD2CMessageGrantRequest = {
	...grantRequestBase,
	grantType: 'subscribeToD2CMessages',
};
