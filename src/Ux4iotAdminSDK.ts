import axios, { AxiosInstance } from 'axios';
import { DeviceMethodParams } from 'azure-iothub';
import {
	GrantRequest,
	IoTHubResponse,
	LogLevel,
	parseConnectionString,
	SubscriptionRequest,
} from './ux4iot-shared';
import https from 'https';

type LibConfig = {
	connectionString: string;
};
export default class Ux4iotAdminSDK {
	host: string;
	key: string;
	axiosInstance: AxiosInstance;

	constructor(config: LibConfig) {
		const { Endpoint, SharedAccessKey } = parseConnectionString(
			config.connectionString
		);
		this.host = Endpoint;
		this.key = SharedAccessKey;
		const httpsAgent = new https.Agent({ keepAlive: true });
		this.axiosInstance = axios.create({
			baseURL: Endpoint,
			headers: {
				'Shared-Access-Key': SharedAccessKey,
			},
			httpsAgent,
		});
	}

	public async version(): Promise<string> {
		const response = await this.axiosInstance.get('/version');

		return response.data;
	}

	public async status(): Promise<string> {
		const response = await this.axiosInstance.get('/status');

		return response.data;
	}

	public async getSessionId(): Promise<{ sessionId: string }> {
		const response = await this.axiosInstance.post('/session');

		return response.data;
	}

	public static async getSessionIdStatic(
		endpoint: string
	): Promise<{ sessionId: string }> {
		const url = new URL('/session', endpoint).href;
		const response = await axios.post(url);

		return response.data;
	}

	public async revokeSession(sessionId: string): Promise<void> {
		return await this.axiosInstance.delete(`/sessions/${sessionId}`);
	}

	public async revokeAllSessions(): Promise<void> {
		return await this.axiosInstance.delete(`/sessions`);
	}

	public async grant(grantRequest: GrantRequest): Promise<void> {
		return await this.axiosInstance.put('/grants', grantRequest);
	}

	public async revokeGrant(grantRequest: GrantRequest): Promise<void> {
		return await this.axiosInstance.delete('/grants', { data: grantRequest });
	}

	public async subscribe(
		subscriptionRequest: SubscriptionRequest
	): Promise<void> {
		return await this.axiosInstance.put('/subscription', subscriptionRequest);
	}

	public async unsubscribe(
		subscriptionRequest: SubscriptionRequest
	): Promise<void> {
		return await this.axiosInstance.delete('/subscription', {
			data: subscriptionRequest,
		});
	}

	public async subscribeAll(
		sessionId: string,
		subscriptionRequests: SubscriptionRequest[]
	): Promise<SubscriptionRequest[]> {
		const response = await this.axiosInstance.put(
			'subscriptions',
			{ subscriptionRequests },
			{ headers: { sessionId } }
		);
		return response.data;
	}

	public async unsubscribeAll(
		sessionId: string,
		subscriptionRequests: SubscriptionRequest[]
	): Promise<SubscriptionRequest[]> {
		const response = await this.axiosInstance.delete('subscriptions', {
			data: subscriptionRequests,
			headers: { sessionId },
		});
		return response.data;
	}

	public async invokeDirectMethod(
		sessionId: string,
		deviceId: string,
		options: DeviceMethodParams
	): Promise<IoTHubResponse | void> {
		const response = await this.axiosInstance.post(
			'/directMethod',
			{ deviceId, methodParams: options },
			{ headers: { sessionId } }
		);

		return response.data;
	}

	public async getLastTelemetryValues(
		sessionId: string,
		deviceId: string,
		telemetryKey: string
	): Promise<{ deviceId: string; data: any; timestamp: string }> {
		const response = await this.axiosInstance.get(
			`/lastValue/${deviceId}/${telemetryKey}`,
			{ headers: { sessionId } }
		);
		return response.data;
	}

	public async deleteLastValuesForDevice(deviceId: string): Promise<void> {
		return await this.axiosInstance.delete(`/lastValue/${deviceId}`);
	}

	public async getLastDeviceTwin(
		sessionId: string,
		deviceId: string
	): Promise<{ deviceId: string; data: any; timestamp: string }> {
		const response = await this.axiosInstance.get(`/deviceTwin/${deviceId}`, {
			headers: { sessionId },
		});
		return response.data;
	}

	public async getLastConnectionState(
		sessionId: string,
		deviceId: string
	): Promise<{ deviceId: string; data: any; timestamp: string }> {
		const response = await this.axiosInstance.get(
			`/connectionState/${deviceId}`,
			{ headers: { sessionId } }
		);

		return response.data;
	}

	public async patchDesiredProperties(
		sessionId: string,
		deviceId: string,
		desiredPropertyPatch: Record<string, unknown>
	): Promise<IoTHubResponse | void> {
		const response = await this.axiosInstance.patch<IoTHubResponse | void>(
			'/deviceTwinDesiredProperties',
			{ deviceId, desiredPropertyPatch },
			{ headers: { sessionId } }
		);

		return response.data;
	}

	public async logLevel(level: LogLevel): Promise<void> {
		return await this.axiosInstance.put(`/logLevel/${level}`);
	}
}
