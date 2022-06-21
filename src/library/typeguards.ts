import {
	TelemetryGrantRequest,
	DeviceTwinGrantRequest,
	ConnectionStateGrantRequest,
	DesiredPropertyGrantRequest,
	DirectMethodGrantRequest,
	D2CMessageGrantRequest,
	GrantRequest,
} from './ux4iot-shared';

export const isGrantRequest = (request: unknown): request is GrantRequest => {
	return (
		!!request &&
		typeof (request as GrantRequest).deviceId === 'string' &&
		typeof (request as GrantRequest).sessionId === 'string'
	);
};

export const isTelemetryGrantRequest = (
	request: unknown
): request is TelemetryGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as TelemetryGrantRequest).type === 'telemetry' &&
		typeof (request as TelemetryGrantRequest).telemetryKey === 'string'
	);
};
export const isDeviceTwinGrantRequest = (
	request: unknown
): request is DeviceTwinGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequest).type === 'deviceTwin'
	);
};
export const isConnectionStateGrantRequest = (
	request: unknown
): request is ConnectionStateGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequest).type === 'connectionState'
	);
};
export const isDesiredPropertyGrantRequest = (
	request: unknown
): request is DesiredPropertyGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequest).type === 'desiredProperties'
	);
};
export const isDirectMethodGrantRequest = (
	request: unknown
): request is DirectMethodGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequest).type === 'directMethod' &&
		typeof (request as DirectMethodGrantRequest).directMethodName === 'string'
	);
};
export const isD2CMessageGrantRequest = (
	request: unknown
): request is D2CMessageGrantRequest => {
	return (
		!!request &&
		isGrantRequest(request) &&
		(request as GrantRequest).type === 'd2cMessages'
	);
};
