const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
describe('Express Server', () => {
	describe('GET /', () => {
		it('should return hello world response', (done) => {
		request(app)
			.get('/')
			.expect(200)
			.expect((res) => {
				expect(res.body).toInclude({
				 	error: 'Page not found.'
				});
			})
			.end(done);
		});
	});

	describe('GET /users', () => {
		it('should contain my name', (done) => {
		request(app)
			.get('/users')
			.expect(200)
			.expect((res) => {
				expect(res.body).toBeA('array').toInclude({
					name : 'Mukesh',
					age : 22
				});
			})
			.end(done);
		});
	});
});
