const axios = require('axios');

module.exports = (app, token, apiURL) => {
	app.get('/leagues', async (req, res) => {
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/leagues`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/leagues/:league', async (req, res) => {
		const leagueId = req.params.league;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/leagues/${leagueId}`, { headers: { Authorization: token } });
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/leagues/:league/seasons', async (req, res) => {
		const leagueId = req.params.league;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/leagues/${leagueId}/seasons`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/leagues/:league/seasons/:season', async (req, res) => {
		const leagueId = req.params.league;
		const seasonId = req.params.season;
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/leagues/${leagueId}/seasons/${seasonId}`, {
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
