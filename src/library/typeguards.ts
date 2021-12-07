import {
	TelemetryGrantRequest,
	DeviceTwinGrantRequest,
	ConnectionStateGrantRequest,
	DesiredPropertyGrantRequest,
	DirectMethodGrantRequest,
	RawD2CMessageGrantRequest,
	GrantRequestBase,
} from './ux4iot-shared';

export const isGrantRequest = (
	request: unknown
): request is GrantRequestBase<any> => {
	return (
		!!request &&
		typeof (request as GrantRequestBase<any>).deviceId === 'string' &&
		typeof (request as GrantRequestBase<any>).sessionId === 'string'
	);
};

export const isTelemetryGrantRequest = (
	request: unknown
): request is TelemetryGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequestBase<any>).grantType === 'subscribeToTelemetry' &&
		typeof (request as GrantRequestBase<any>).telemetryKey === 'string'
	);
};
export const isDeviceTwinGrantRequest = (
	request: unknown
): request is DeviceTwinGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequestBase<any>).grantType === 'subscribeToDeviceTwin'
	);
};
export const isConnectionStateGrantRequest = (
	request: unknown
): request is ConnectionStateGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequestBase<any>).grantType ===
			'subscribeToConnectionState'
	);
};
export const isDesiredPropertyGrantRequest = (
	request: unknown
): request is DesiredPropertyGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequestBase<any>).grantType === 'modifyDesiredProperties'
	);
};
export const isDirectMethodGrantRequest = (
	request: unknown
): request is DirectMethodGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequestBase<any>).grantType === 'invokeDirectMethod' &&
		typeof (request as GrantRequestBase<any>).directMethodName === 'string'
	);
};
export const isRawD2CMessageGrantRequest = (
	request: unknown
): request is RawD2CMessageGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequestBase<any>).grantType === 'subscribeToD2CMessages'
	);
};
