class MessageController{
	index(req, res){
		res.render("message");
	}
}
// chay doi tuong nay
module.exports = new MessageController();
