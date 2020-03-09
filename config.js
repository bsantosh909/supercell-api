// Select which of the Supercell game API you want to use. Every game disabled by default...
exports.games = {
	clash: false,
	royale: false,
	brawl: false
};

// Set the mail and password below (for global) only if they are same across all the developer portals
exports.global = {
	mail: null,
	password: null
};

// Your mail and password at https://developer.clashofclans.com
exports.clash = {
	mail: 'your-mail@gmail.com',
	password: 'secret-password-here'
};

// Your mail and password at https://developer.clashroyale.com
exports.royale = {
	mail: 'your-mail@gmail.com',
	password: 'secret-password-here'
};

// Your mail and password at https://developer.brawlstars.com
exports.brawl = {
	mail: 'your-mail@gmail.com',
	password: 'secret-password-here'
};
