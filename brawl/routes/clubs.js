const axios = require('axios');
const { validateTag } = require('../../utils/global');

module.exports = function(app, token, apiURL) {

	app.get('/clubs/:tag', async (req, res) => {
		// Verifying the provided tag...
		const tag = validateTag(req.params.tag);
		if (!tag) return res.status(400).send({ success: false, message: 'Invalid Tag provided!' });
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/clubs/${tag}`, { headers: { 'Authorization': token } });
			return res.status(200).send({ ...data });
		} catch(err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	})

	app.get('/clubs/:tag/members', async (req, res) => {
		// Verifying the provided tag...
		const tag = validateTag(req.params.tag);
		if (!tag) return res.status(400).send({ success: false, message: 'Invalid Tag provided!' });
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/clubs/${tag}/members`, {
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