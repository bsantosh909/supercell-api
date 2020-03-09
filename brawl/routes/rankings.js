const axios = require('axios');

module.exports = (app, token, apiURL) => {
	app.get('/rankings/:country/players', async (req, res) => {
		const countryCode = req.params.country;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/rankings/${countryCode}/players`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/rankings/:country/clubs', async (req, res) => {
		const countryCode = req.params.country;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/rankings/${countryCode}/clubs`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/rankings/:country/brawlers/:brawler', async (req, res) => {
		const countryCode = req.params.country;
		const brawlerId = req.params.brawler;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/rankings/${countryCode}/brawlers/${brawlerId}`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});
};
