const { extname, relative, join } = require('path');
const fs = require('fs-nextra');

const express = require('express');
const router = express.Router();

const TokenHandler = require('../utils/tokener');
const { clash } = require('../config');

const tokener = new TokenHandler(clash.mail, clash.password, 'https://developer.clashofclans.com/api');

/* Performing all the operations of loading the routes and obtaining the API key */
(async() => {

	// Essential stuffs...
	const apiURL = 'https://api.clashofclans.com/v1';
	const token = await tokener.getToken();

	console.log('Clash of Clans API token is successfully fetched!')
	
	// Loading all the routes
	const files = await fs.scan('clash/routes', { filter: (stats, path) => stats.isFile() && extname(path) === '.js' });
	[...files.keys()].forEach((_file) => {
		// Using all the route files in the directory...
		// Providing router instance, fetched token and the base API url...
		require(_file)(router, token, apiURL);
	})

})();

module.exports = router;