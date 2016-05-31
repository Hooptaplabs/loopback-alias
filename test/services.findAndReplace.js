
var expect	= require('chai').expect;
var service	= require('../src/services/findAndReplaceInUrl');

describe('Service findAndReplaceInUrl', () => {

	it('is simple', () => {
		expect(service).to.be.a('function');
	});

	it('name is "findAndReplaceInUrl', () => {
		expect(service.name).to.equal('findAndReplaceInUrl');
	});

	it('finds from the beginning of the url ignoring "/"', () => {
		expect(service('/hello/roger', '/hello', '/bye')).to.equal('/bye/roger');
	});

	it('only replaces first appearance', () => {
		expect(service('/hello/roger/hello', '/hello', '/bye')).to.equal('/bye/roger/hello');
	});

	it('allow change default beginning', () => {
		expect(service('/api/hello/roger', '/hello', '/bye', '/api')).to.equal('/api/bye/roger');
	});

});
