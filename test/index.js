
var expect	= require('chai').expect;
var service	= require('../src/index');

describe('Loopback-alias-middleware', () => {

	it('is a function', () => {
		expect(service).to.be.a('function');
	});

	it('has an array of replacements', () => {
		expect(service.replacements).to.be.an('array');
	});

	it('has the method add', () => {
		expect(service.add).to.be.a('function');
	});

	it('has initially no replacements', () => {
		expect(service.replacements.length).to.equal(0);
	});

	describe('method "add"', () => {

		beforeEach(() => {
			service.replacements = [];
		});

		it('can adds a replacement', () => {
			let [find, replacement] = ['/login', '/admins/login'];
			expect(service.replacements.length).to.equal(0);
			service.add(find, replacement);
			expect(service.replacements[0]).to.deep.equal({find, replacement});
		});

		it('works as a middleware', () => {
			let [find, replace] = ['/login', '/admins/login'];
			service.add(find, replace);
			let req		= {url: '/api/login'};
			let next	= () => {
				expect(req).to.deep.equal({
					originalUrl: '/api/login',
					url: '/api/admins/login'
				});
			};
			service(req, {}, next);
		});

		it('allow multiple chained middlewares', () => {
			service.add('/login -> /admins/login');
			service.add('/admins/login', '/users/login');
			let req		= {url: '/api/login'};
			let next	= () => {
				expect(req).to.deep.equal({
					originalUrl: '/api/login',
					url: '/api/users/login'
				});
			};
			service(req, {}, next);
		});


	});

});
