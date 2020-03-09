const axios = require('axios');
const { validateTag } = require('../../utils/global');

module.exports = (app, token, apiURL) => {
	app.get('/clans', async (req, res) => {
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/clans`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/clans/:tag', async (req, res) => {
		// Verifying the provided tag...
		const tag = validateTag(req.params.tag);
		if (!tag) return res.status(400).send({ success: false, message: 'Invalid Tag provided!' });
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/clans/${tag}`, { headers: { Authorization: token } });
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/clans/:tag/members', async (req, res) => {
		// Verifying the provided tag...
		const tag = validateTag(req.params.tag);
		if (!tag) return res.status(400).send({ success: false, message: 'Invalid Tag provided!' });
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/clans/${tag}/members`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/clans/:tag/warlog', async (req, res) => {
		// Verifying the provided tag...
		const tag = validateTag(req.params.tag);
		if (!tag) return res.status(400).send({ success: false, message: 'Invalid Tag provided!' });
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/clans/${tag}/warlog`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/clans/:tag/currentwar', async (req, res) => {
		// Verifying the provided tag...
		const tag = validateTag(req.params.tag);
		if (!tag) return res.status(400).send({ success: false, message: 'Invalid Tag provided!' });
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/clans/${tag}/currentwar`, { headers: { Authorization: token } });
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});
};
