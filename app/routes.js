
var game = require('./models/game');

module.exports = function(app) {
	app.get('', function(req, res) {
		game.find(function(err, games) {
			if(err)
				res.send(err);
			res.json(nerds);
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};



