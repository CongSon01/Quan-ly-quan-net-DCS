
const mongoose = require('mongoose');
async function connect(){
	try {
		await mongoose.connect('mongodb://localhost:27017/Quan_ly_quan_net_dev',{
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('connect successfully');
	} catch(error) {
		console.log('connect failure');
	}
}

// dung de sau trang index.js chay object
module.exports = { connect };