function validateTag(tag) {
	const _tag = tag.toUpperCase().replace(/O/g, '0').replace('#', '');
	if (!/[0289PYLQGRJCUV]{4,9}/i.test(_tag)) return false;
	const matched = _tag.match(/[0289PYLQGRJCUV]{4,9}/i)[0];
	return encodeURIComponent(`#${matched}`);
}

module.exports = { validateTag };
