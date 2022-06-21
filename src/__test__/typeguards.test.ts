import {
	isConnectionStateGrantRequest,
	isDesiredPropertyGrantRequest,
	isDeviceTwinGrantRequest,
	isDirectMethodGrantRequest,
	isGrantRequest,
	isD2CMessageGrantRequest,
	isTelemetryGrantRequest,
} from '../library/typeguards';

import {
	telemetryGrantRequest,
	connectionStateGrantRequest,
	desiredPropertyGrantRequest,
	deviceTwinGrantRequest,
	directMethodGrantRequest,
	grantRequestBase,
	rawD2CMessageGrantRequest,
} from '../__fixtures__/typeguard-fixtures';

describe('TelemetryGrantRequest', () => {
	it('correctly infers type', () => {
		expect(isTelemetryGrantRequest(telemetryGrantRequest)).toBe(true);
		expect(isTelemetryGrantRequest(connectionStateGrantRequest)).toBe(false);
		expect(isTelemetryGrantRequest(desiredPropertyGrantRequest)).toBe(false);
		expect(isTelemetryGrantRequest(deviceTwinGrantRequest)).toBe(false);
		expect(isTelemetryGrantRequest(directMethodGrantRequest)).toBe(false);
		expect(isTelemetryGrantRequest(rawD2CMessageGrantRequest)).toBe(false);
		expect(isTelemetryGrantRequest(grantRequestBase)).toBe(false);
	});
});
describe('DeviceTwinGrantRequest', () => {
	it('correctly infers type', () => {
		expect(isDeviceTwinGrantRequest(deviceTwinGrantRequest)).toBe(true);
		expect(isDeviceTwinGrantRequest(telemetryGrantRequest)).toBe(false);
		expect(isDeviceTwinGrantRequest(connectionStateGrantRequest)).toBe(false);
		expect(isDeviceTwinGrantRequest(desiredPropertyGrantRequest)).toBe(false);
		expect(isDeviceTwinGrantRequest(directMethodGrantRequest)).toBe(false);
		expect(isDeviceTwinGrantRequest(rawD2CMessageGrantRequest)).toBe(false);
		expect(isDeviceTwinGrantRequest(grantRequestBase)).toBe(false);
	});
});
describe('ConnectionStateGrantRequest', () => {
	it('correctly infers type', () => {
		expect(isConnectionStateGrantRequest(connectionStateGrantRequest)).toBe(
			true
		);
		expect(isConnectionStateGrantRequest(telemetryGrantRequest)).toBe(false);
		expect(isConnectionStateGrantRequest(desiredPropertyGrantRequest)).toBe(
			false
		);
		expect(isConnectionStateGrantRequest(deviceTwinGrantRequest)).toBe(false);
		expect(isConnectionStateGrantRequest(directMethodGrantRequest)).toBe(false);
		expect(isConnectionStateGrantRequest(rawD2CMessageGrantRequest)).toBe(
			false
		);
		expect(isConnectionStateGrantRequest(grantRequestBase)).toBe(false);
	});
});
describe('DesiredPropertyGrantRequest', () => {
	it('correctly infers type', () => {
		expect(isDesiredPropertyGrantRequest(desiredPropertyGrantRequest)).toBe(
			true
		);
		expect(isDesiredPropertyGrantRequest(telemetryGrantRequest)).toBe(false);
		expect(isDesiredPropertyGrantRequest(connectionStateGrantRequest)).toBe(
			false
		);
		expect(isDesiredPropertyGrantRequest(deviceTwinGrantRequest)).toBe(false);
		expect(isDesiredPropertyGrantRequest(directMethodGrantRequest)).toBe(false);
		expect(isDesiredPropertyGrantRequest(rawD2CMessageGrantRequest)).toBe(
			false
		);
		expect(isDesiredPropertyGrantRequest(grantRequestBase)).toBe(false);
	});
});
describe('DirectMethodGrantRequest', () => {
	it('correctly infers type', () => {
		expect(isDirectMethodGrantRequest(directMethodGrantRequest)).toBe(true);
		expect(isDirectMethodGrantRequest(telemetryGrantRequest)).toBe(false);
		expect(isDirectMethodGrantRequest(connectionStateGrantRequest)).toBe(false);
		expect(isDirectMethodGrantRequest(desiredPropertyGrantRequest)).toBe(false);
		expect(isDirectMethodGrantRequest(deviceTwinGrantRequest)).toBe(false);
		expect(isDirectMethodGrantRequest(rawD2CMessageGrantRequest)).toBe(false);
		expect(isDirectMethodGrantRequest(grantRequestBase)).toBe(false);
	});
});
describe('D2CMessageGrantRequest', () => {
	it('correctly infers type', () => {
		expect(isD2CMessageGrantRequest(rawD2CMessageGrantRequest)).toBe(true);
		expect(isD2CMessageGrantRequest(telemetryGrantRequest)).toBe(false);
		expect(isD2CMessageGrantRequest(connectionStateGrantRequest)).toBe(false);
		expect(isD2CMessageGrantRequest(desiredPropertyGrantRequest)).toBe(false);
		expect(isD2CMessageGrantRequest(deviceTwinGrantRequest)).toBe(false);
		expect(isD2CMessageGrantRequest(directMethodGrantRequest)).toBe(false);
		expect(isD2CMessageGrantRequest(grantRequestBase)).toBe(false);
	});
});
describe('GrantRequestBase', () => {
	it('correctly infers type', () => {
		expect(isGrantRequest(grantRequestBase)).toBe(true);
		expect(isGrantRequest(telemetryGrantRequest)).toBe(true);
		expect(isGrantRequest(connectionStateGrantRequest)).toBe(true);
		expect(isGrantRequest(desiredPropertyGrantRequest)).toBe(true);
		expect(isGrantRequest(deviceTwinGrantRequest)).toBe(true);
		expect(isGrantRequest(directMethodGrantRequest)).toBe(true);
		expect(isGrantRequest(rawD2CMessageGrantRequest)).toBe(true);
	});
});
