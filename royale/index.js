const { extname, relative, join } = require('path');
const fs = require('fs-nextra');

const express = require('express');
const router = express.Router();

const TokenHandler = require('../utils/tokener');
const { global, royale } = require('../config');

const mail = global.mail || royale.mail;
const password = global.password || royale.password;

const tokener = new TokenHandler(mail, password, 'https://developer.clashroyale.com/api');

/* Performing all the operations of loading the routes and obtaining the API key */
(async() => {

	// Essential stuffs...
	const apiURL = 'https://api.clashroyale.com/v1';
	const token = await tokener.getToken();

	console.log('Clash Royale API token is successfully fetched!')

	// Loading all the routes
	const files = await fs.scan('royale/routes', { filter: (stats, path) => stats.isFile() && extname(path) === '.js' });
	[...files.keys()].forEach((_file) => {
		// Using all the route files in the directory...
		// Providing router instance, fetched token and the base API url...
		require(_file)(router, token, apiURL);
	})

})();

module.exports = router;