const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Game = new Schema({
	name: {type: String},
	category: {type: String},
	price:{type: Number},
	description:{type: String},
	imageAvatar:{type: String},
	rate: {type: Number},
	content:{type: String},
	imageBackground:{type: String},
	subscribe:{type: Number},
	createAt: {type: Date, default: Date.now},
	slug: { type: String, slug: "name", unique: true},
});
// formatDate(today, 'mm/dd/yy');
module.exports = mongoose.model('game', Game);
