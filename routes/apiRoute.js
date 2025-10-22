const express = require('express');
const studentController = require('../controllers/studentController');
const courseController = require("../controllers/courseController");
const apiRouter = express.Router();


apiRouter.get('/', studentController.handleGreeting);
apiRouter.get('/students', studentController.handleGetStudents);
apiRouter.get("/courses", courseController.handleGetCourses);

module.exports = apiRouter;