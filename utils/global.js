function validateTag(_tag) {
	const tag = _tag.toUpperCase().replace(/O/g, '0').replace('#', '');
	if (!/[0289PYLQGRJCUV]{4,9}/i.test(tag)) return false;
	const matched = tag.match(/[0289PYLQGRJCUV]{4,9}/i)[0];
	return encodeURIComponent(`#${matched}`);
}

module.exports = {
	validateTag
}