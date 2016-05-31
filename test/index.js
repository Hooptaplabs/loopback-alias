
var expect	= require('chai').expect;
var service	= require('../src/index');

describe('Simple test', () => {

	it('is simple', () => {
		expect(service).to.equal('works');
	});

});
