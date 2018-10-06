const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send({
		error : 'Page not found.',
		name : 'Todo App v1.0'
	});
}); 

app.get('/users', (req, res) => {
	var users = [
		{
			name : 'Mukesh',
			age : 22
		}, 
		{
			name : 'Mujeeb',
			age : 23
		},
		{
			name : 'Hello',
			age : 24
		}
	];

	res.send(users);
})

app.listen(3000);

module.exports.app = app; 