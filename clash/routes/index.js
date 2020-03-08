module.exports = function(app, tokne, apiURL) {

	app.get('/', (req, res) => {
		return res.status(200).send({
			success: true,
			routes: 'As per the official API'
		});
	})

}