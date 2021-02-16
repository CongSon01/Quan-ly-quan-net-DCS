const Game = require('../models/Game');

const {MongooseToObject} = require('../../util/mongoose');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class HomeController{
	index(req, res, next){
		Game.find({})
			.then(Game => {
				res.render('home', {
					Game: mutipleMongooseToObject(Game)
				});
			})
		.catch(next);
	}
	deil(req, res, next){
		// res.send('course' + req.params.slug);
		Game.findOne({slug: req.params.slug})
			.then(Game => {
				res.render('deilGamesRegistered', {
					Game: MongooseToObject(Game),
					user : req.user,
					layout: './layouts/main'
				});
			})
			.catch(next);
	}
	login(req, res, next){
		Game.find({})
			.then(Game => {
				res.render('home', {
					Game: mutipleMongooseToObject(Game),
					 user : req.user,
					 layout: './layouts/main'
				});
			})
		.catch(next);
	}
	gamesRegistered(req, res, next){
		Game.find({})
			.then(Game => {
				res.render('gamesRegistered', {
					Game: mutipleMongooseToObject(Game),
					user : req.user,
					layout: './layouts/main'
				});
			})
		.catch(next);
	}
}
// chay doi tuong nay
module.exports = new HomeController();
