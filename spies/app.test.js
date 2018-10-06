const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

	var db = {
		saveUser: expect.createSpy()
	};

	app.__set__('db', db);

	it('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy('Mukesh', 23);
		expect(spy).toHaveBeenCalledWith('Mukesh', 23);
	});

	it('should call saveUser with user object', () => {
		var email = 'a@gmail.com';
		var psw = '12345';

		app.handleSignup(email, psw);

		expect(db.saveUser).toHaveBeenCalledWith({email, password : psw});
	});
});