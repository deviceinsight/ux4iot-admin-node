import axios, { AxiosInstance } from 'axios';
import {
	GrantRequest,
	LogLevel,
	parseConnectionString,
	SubscriptionRequest,
} from './ux4iot-shared';

type LibConfig = {
	connectionString: string;
};
export default class Ux4iotAdmin {
	host: string;
	key: string;
	axiosInstance: AxiosInstance;

	constructor(config: LibConfig) {
		const { Endpoint, SharedAccessKey } = parseConnectionString(
			config.connectionString
		);
		this.host = Endpoint;
		this.key = SharedAccessKey;
		this.axiosInstance = axios.create({
			baseURL: Endpoint,
			headers: {
				'Shared-Access-Key': SharedAccessKey,
			},
		});
	}

	public async version(): Promise<string> {
		const response = await this.axiosInstance.get('/version');

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

	public async grant(grantRequest: GrantRequest): Promise<void> {
		return await this.axiosInstance.put('/grants', grantRequest);
	}

	public async revokeGrant(grantRequest: GrantRequest): Promise<void> {
		return await this.axiosInstance.delete('/grants', { data: grantRequest });
	}

	public async subscribe(
		subscriptionRequest: SubscriptionRequest
	): Promise<void> {
		return await this.axiosInstance.put('/subscribe', subscriptionRequest);
	}

	public async unsubscribe(
		subscriptionRequest: SubscriptionRequest
	): Promise<void> {
		return await this.axiosInstance.put('/unsubscribe', subscriptionRequest);
	}

	public async revokeSession(sessionId: string): Promise<void> {
		return await this.axiosInstance.delete(`/sessions/${sessionId}`);
	}

	public async revokeAll(): Promise<void> {
		return await this.axiosInstance.delete('/grants');
	}

	public async logLevel(level: LogLevel): Promise<void> {
		return await this.axiosInstance.put(`/logLevel/${level}`);
	}
}
