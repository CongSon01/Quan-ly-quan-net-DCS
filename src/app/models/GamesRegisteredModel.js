const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const RegisteredGame = new Schema({
	name: {type: String},
	price: {type: String},
	address: {type: String},
	createAt: {type: Date, default: Date.now},
	slug: { type: String, slug: "name", unique: true},
});
// formatDate(today, 'mm/dd/yy');
module.exports = mongoose.model('gamesregistered', RegisteredGame);
