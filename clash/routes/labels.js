const axios = require('axios');
const { validateTag } = require('../../utils/global');

module.exports = function(app, token, apiURL) {

	app.get('/labels/clans', async (req, res) => {
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/labels/clans`, {
				params: { ...req.query },
				headers: { 'Authorization': token }
			});
			return res.status(200).send({ ...data });
		} catch(err) {
			if (err.response) return res.status(err.response.status).send(err.response.data);
			return res.status(500).send({ success: false, message: 'API is facing problem while processing your request! Please contact the API developer if the problem persists!' });
		}
	})

	app.get('/labels/players', async (req, res) => {
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/labels/players`, {
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