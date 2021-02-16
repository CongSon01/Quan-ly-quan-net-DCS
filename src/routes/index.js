// const coursesRouter = require('./courses');
const homeRouter = require('./home');
const messageRouter = require('./message');
const gamesRegisteredRouter = require('./gamesRegistered');
function route(app){
	app.use('/message', messageRouter);
	app.use('/gamesRegistered', gamesRegisteredRouter);
	// app.use('', homeRouter);
	app.use('', homeRouter);
}

module.exports = route;