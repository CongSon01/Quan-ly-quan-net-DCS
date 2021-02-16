const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/HomeController');

// router.get('/:slug', HomeController.deil);
router.get('/home/gamesRegistered', HomeController.gamesRegistered);
router.get('/home/deil', HomeController.deil);
router.get('/home', isLoggedIn, HomeController.login);
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
router.get('/', HomeController.index);
module.exports = router;