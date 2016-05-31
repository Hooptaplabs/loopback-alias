/**
 * Created by desaroger on 31/05/16.
 */

module.exports = function findAndReplaceInUrl(text, findString, replaceString, startsWith = '') {
	let find		= new RegExp('^' + startsWith + findString + '(/|$|\\?)', 'g');
	let replacement	= startsWith + replaceString + '$1';
	return text.replace(find, replacement);
};
