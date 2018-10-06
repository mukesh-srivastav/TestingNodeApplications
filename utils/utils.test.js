const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			var res = utils.add(3,2);
			
			expect(res).toBe(5).toBeA('number');
		});
	});

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4,3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});

	it('should square the number', () => {
		var res = utils.square(3);

		expect(res).toBe(9).toBeA('number');

	});

	it('should async square a number', (done) => {
		utils.asyncSquare(4, (sum) => {
			expect(sum).toBe(16).toBeA('number');
			done();
		});
	});

});

it('should expect some values', () => {
	expect(12).toNotBe(11);
	expect({name : 'Mukesh'}).toEqual({name : 'Mukesh'});
	expect([1,2,3,4]).toExclude(5);
	expect({
		name : 'A',
		age : 23,
		location: 'Philadelphia'

	}).toInclude({
		age: 23
	});
});

it('should verify first and last names are set', () => {
	var firstName = 'Mukesh';
	var lastName = 'Srivastav';

	var fullName = `${firstName} ${lastName}`;
	var user = {};

	user = utils.setName(user, fullName);

	expect(user).toBeA('object').toInclude({
		firstName : firstName,
		lastName : lastName
	});
});