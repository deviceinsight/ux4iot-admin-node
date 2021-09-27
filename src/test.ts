import Ux4iotAdminSDK from './library/Ux4iotAdminSDK';
import { config } from 'dotenv';
config();

const { TEST_CONNECTION_STRING } = process.env;

async function testSDK() {
	console.log(TEST_CONNECTION_STRING);
	if (!TEST_CONNECTION_STRING) {
		console.log('TEST_CONNECTION_STRING not defined');
		return;
	}
	const sdk = new Ux4iotAdminSDK({
		connectionString: TEST_CONNECTION_STRING,
	});

	try {
		const result = await sdk.version();
		console.log('version', result);
	} catch (error) {
		console.log('error, version', error);
	}
}

testSDK();

Promise.resolve();
