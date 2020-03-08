const axios = require('axios');

class Tokener {

	constructor(email, password, baseURL) {
		Object.defineProperty(this, 'email', { value: email });
		Object.defineProperty(this, 'password', { value: password });
		Object.defineProperty(this, 'baseURL', { value: baseURL });

		this._token = null;
	}

	async getToken() {
		if (this._token) return this._token;
		// Getting the current IP of the device...
		const { data: ip } = await axios.get('https://api.ipify.org/');
		// Creating axios instance...
		const axiosInstance = axios.create({ baseURL: this.baseURL });
		await this._createSession(axiosInstance);
		// Getting the list of existing keys...
		const { data: { keys: existingKeys } } = await axiosInstance.post('/apikey/list');
		// Getting old key for current IP if available...
		for (let i=0; i < existingKeys.length; i++) {
			const key = existingKeys[i];
			if (key.cidrRanges.includes(ip)) {
				this._token = `Bearer ${key.key}`;
				return this._token;
			}
		}
		// Deleting old keys if none of them is for the current IP...
		// Doing this because the supercell api limits to 10 tokens...
		for (let i=0; i < existingKeys.length; i++) {
			await axiosInstance.post('/apikey/revoke', {
				id: existingKeys[i].id
			})
		}		
		// Creating new key...
		const { data: keys } = await axiosInstance.post('/apikey/create', {
			name: `New key - Date: ${this._getDate()}`,
			description: 'Key for production service!',
			cidrRanges: [ip]
		});
		// Setting the data and returning...
		this._token = `Bearer ${keys.key.key}`;
		return this._token;
	}

	async _createSession(axiosInstance) {
		const login = await axiosInstance.post('/login', {
			email: this.email,
			password: this.password
		})
		const sessionDetails = login.headers["set-cookie"][0];
		const cookieFormatted = `${sessionDetails};game-api-url=${login.swaggerUrl};game-api-token=${login.temporaryAPIToken}`;
		axiosInstance.defaults.headers.cookie = cookieFormatted;
	}

	_getDate() {
		const date = new Date();
		const year = date.getUTCFullYear();
		const month = date.getUTCMonth() + 1;
		const day = date.getUTCDate();
		return `${year}-${month}-${day}`;
	}

}

module.exports = Tokener;
