const Game = require('../models/Game');
const {MongooseToObject} = require('../../util/mongoose');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class GamesRegisteredController{
	index(req, res, next){
		Game.find({})
			.then(Game => {
				res.render('gamesRegistered', {
					Game: mutipleMongooseToObject(Game)
				});
			})
		.catch(next);
	}
	// [GET]/GamesRegister/:slug
	// deil(req, res, next){
	// 	// res.send('course' + req.params.slug);
	// 	RegisteredGame.findOne({slug: req.params.slug})
	// 		.then(RegisteredGame => {
	// 			res.render('gameRegistered/deilGamesRegistered', {
	// 				RegisteredGame: MongooseToObject(RegisteredGame)
	// 			});
	// 		})
	// 		.catch(next);
	// }
	// create(req, res, next){
	// 	res.render('courses/create');
	// }
}
// chay doi tuong nay
module.exports = new GamesRegisteredController();
