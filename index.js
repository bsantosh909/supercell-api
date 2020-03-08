const express = require('express');
const cors = require('cors');
const { version } = require('./package.json');
const { games } = require('./config');

const app = express();
const port = process.env.PORT || 5000;

// Using CORS... Can be customized as per the needs or removed entirely as well..
app.use(cors());

// Clash of clans...
if (games.clash) {
	const clashRoutes = require('./clash/index');
	app.use('/clash', clashRoutes);
}
// Clash royale...
if (games.royale) {
	const royaleRoutes = require('./royale/index');
	app.use('/royale', royaleRoutes);
}
// Brawl stars...
if (games.brawl) {
	const brawlRoutes = require('./brawl/index');
	app.use('/brawl', brawlRoutes);
}

/* Base information about the API */
app.get('/', (req, res) => {
	return res.status(200).send({
		success: true,
		version,
		hosting: 'For hosting your own version of the API, do visit https://blog.santoshb.com.np/articles/supercell-api'
		github: 'https://github.com/TheLearneer/supercell-api'
		author: {
			name: 'Santosh Bhandari',
			mail: 'contact@santoshb.com.np',
			website: 'https://santoshb.com.np'
		},
		enabled: {
			clash: games.clash,
			royale: games.royale,
			brawl: games.brawl
		}
	});
})

app.get('*', (req, res) => {
	return res.status(404).send({
		success: false,
		message: 'API route is not available!',
		description: 'If you think this is a problem with the API, please contact the API developer!',
		github: 'https://github.com/TheLearneer/supercell-api'
	});
})

app.listen(port, () => console.log('API is ready to serve!'));
