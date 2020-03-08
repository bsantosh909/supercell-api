const axios = require('axios');

module.exports = function(app, token, apiURL) {

	app.get('/cards', async (req, res) => {
		// Making request to the official API...
		try {
			const { data } = await axios.get(`${apiURL}/cards`, {
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