module.exports = (app) => {
	app.get('/', (req, res) => res.status(200).send({
		success: true,
		routes: 'As per the official API'
	}));
};
