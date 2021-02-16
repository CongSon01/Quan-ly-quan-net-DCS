class LoginController{
	index(req, res){
		res.render("login");
	}
}
// chay doi tuong nay
module.exports = new LoginController();
