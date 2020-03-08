const axios = require('axios');

module.exports = function(app, token, apiURL) {

	app.get('/locations', async (req, res) => {		
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/locations`, {
				params: { ...req.query },
				headers: { 'Authorization': token }
			});
			return res.status(200).send({ ...data });
		} catch(err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	})

	app.get('/locations/:location', async (req, res) => {
		const locationId = req.params.location;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/locations/${locationId}`, { headers: { 'Authorization': token } });
			return res.status(200).send({ ...data });
		} catch(err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	})

	app.get('/locations/:location/rankings/clans', async (req, res) => {
		const locationId = req.params.location;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/locations/${locationId}/rankings/clans`, {
				params: { ...req.query },
				headers: { 'Authorization': token }
			});
			return res.status(200).send({ ...data });
		} catch(err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	})

	app.get('/locations/:location/rankings/players', async (req, res) => {
		const locationId = req.params.location;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/locations/${locationId}/rankings/players`, {
				params: { ...req.query },
				headers: { 'Authorization': token }
			});
			return res.status(200).send({ ...data });
		} catch(err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	})

	app.get('/locations/:location/rankings/clans-versus', async (req, res) => {
		const locationId = req.params.location;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/locations/${locationId}/rankings/clans-versus`, {
				params: { ...req.query },
				headers: { 'Authorization': token }
			});
			return res.status(200).send({ ...data });
		} catch(err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	})

	app.get('/locations/:location/rankings/players-versus', async (req, res) => {
		const locationId = req.params.location;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/locations/${locationId}/rankings/players-versus`, {
				params: { ...req.query },
				headers: { 'Authorization': token }
			});
			return res.status(200).send({ ...data });
		} catch(err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	})

}