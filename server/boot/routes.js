const path = require('path');

module.exports = app => {
	app.get('/sudoku', (req, res) => {
		res.sendFile(path.join(__dirname, '../../dist/index.html'));
	})

	app.get('/checkers', (req, res) => {
		res.sendFile(path.join(__dirname, '../../dist/index.html'));
	})
}
