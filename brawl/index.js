const { extname, relative, join } = require('path');
const fs = require('fs-nextra');

const express = require('express');
const router = express.Router();

const TokenHandler = require('../utils/tokener');
const { brawl } = require('../config');

const tokener = new TokenHandler(brawl.mail, brawl.password, 'https://developer.brawlstars.com/api');

/* Performing all the operations of loading the routes and obtaining the API key */
(async() => {

	// Essential stuffs...
	const apiURL = 'https://api.brawlstars.com/v1';
	const token = await tokener.getToken();

	console.log('Brawl Stars API token is successfully fetched!')

	// Loading all the routes
	const files = await fs.scan('brawl/routes', { filter: (stats, path) => stats.isFile() && extname(path) === '.js' });
	[...files.keys()].forEach((_file) => {
		// Using all the route files in the directory...
		// Providing router instance, fetched token and the base API url...
		require(_file)(router, token, apiURL);
	})

})();

module.exports = router;