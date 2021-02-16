// const Course = require('../models/Course');
// const {MongooseToObject} = require('../../util/mongoose');
// const {mutipleMongooseToObject} = require('../../util/mongoose');
// class CourseController{

// 	index(req, res, next){
// 		Course.find({})
// 			.then(Course => {
// 				res.render('courses', {
// 					Course: mutipleMongooseToObject(Course)
// 				});
// 			})
// 		.catch(next);
// 	}


// 	//[GET]/sourse/:slug
// 	show(req, res, next){
// 		// res.send('course' + req.params.slug);
// 		Course.findOne({slug: req.params.slug})
// 			.then(Course => {
// 				res.render('courses/show', {
// 					Course: MongooseToObject(Course)
// 				});
// 			})
// 			.catch(next);
// 	}
// 	// [GET] /courses/create
// 	create(req, res, next){
// 		res.render('courses/create');
// 	}

// 	// [POST] /courses/store
// 	store(req, res, next){
// 		const formData = req.body;
// 		const courses = new Course(formData);
// 		courses.save()
// 			.then(() => res.redirect('/'))
// 			.catch(error => {

// 			});
// 	}
// }
// // chay doi tuong nay
// module.exports = new CourseController();
