/**
 * Created by desaroger on 31/05/16.
 */

let replace = require('./services/findAndReplaceInUrl');

let me = (req, res, next) => {

	req.originalUrl = req.url;

	me.replacements
		.forEach(({find, replacement}) => {
			req.url = replace(req.url, find, replacement, '/api');
		});

	next();
};

me.replacements		= [];
me.add				= (find, replacement = false) => {
	if (replacement === false) {
		[find, replacement] = trimArray(find.split('->'));
	}

	me.replacements.push({find, replacement});
};


module.exports = me;

function trimArray(array) {
	return array.map(Function.prototype.call, String.prototype.trim);
}
