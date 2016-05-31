var cachedModules=[];
cachedModules[9942]={exports:{}};
(function(module,exports) {'use strict';

/**
 * Created by desaroger on 31/05/16.
 */

module.exports = function findAndReplaceInUrl(text, findString, replaceString) {
	var startsWith = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

	var find = new RegExp('^' + startsWith + findString + '(/|$|\\?)', 'g');
	var replacement = startsWith + replaceString + '$1';
	return text.replace(find, replacement);
};}).call(this,cachedModules[9942],cachedModules[9942].exports);'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by desaroger on 31/05/16.
 */

var replace = cachedModules[9942].exports;

var me = function me(req, res, next) {

	req.originalUrl = req.url;

	me.replacements.forEach(function (_ref) {
		var find = _ref.find;
		var replacement = _ref.replacement;

		req.url = replace(req.url, find, replacement, '/api');
	});

	next();
};

me.replacements = [];
me.add = function (find) {
	var replacement = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	if (replacement === false) {
		var _trimArray = trimArray(find.split('->'));

		var _trimArray2 = _slicedToArray(_trimArray, 2);

		find = _trimArray2[0];
		replacement = _trimArray2[1];
	}

	me.replacements.push({ find: find, replacement: replacement });
};

module.exports = me;

function trimArray(array) {
	return array.map(Function.prototype.call, String.prototype.trim);
}