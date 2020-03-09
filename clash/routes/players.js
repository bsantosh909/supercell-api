const axios = require('axios');
const { validateTag } = require('../../utils/global');

module.exports = (app, token, apiURL) => {
	app.get('/players/:tag', async (req, res) => {
		// Verifying the provided tag...
		const tag = validateTag(req.params.tag);
		if (!tag) return res.status(400).send({ success: false, message: 'Invalid Tag provided!' });
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/players/${tag}`, { headers: { Authorization: token } });
			return res.status(200).send({ ...data });
		} catch (err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	});
};
