const axios = require('axios');
const { validateTag } = require('../../utils/global');

module.exports = (app, token, apiURL) => {
	app.get('/tournaments', async (req, res) => {
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/tournaments`, {
				params: { ...req.query },
				headers: { Authorization: token }
			});
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});

	app.get('/tournaments/:tag', async (req, res) => {
		// Verifying the provided tag...
		const tag = validateTag(req.params.tag);
		if (!tag) return res.status(400).send({ success: false, message: 'Invalid Tag provided!' });
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/tournaments/${tag}`, { headers: { Authorization: token } });
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});
};
