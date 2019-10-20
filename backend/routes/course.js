import express from 'express';
import cors from 'cors';
import Course from '../models/course.model'


const courseRoutes = express.Router()


courseRoutes.use(cors());
  // Allow client to fetch data
  courseRoutes.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Can change * to allow request from specific clients
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      next();
});

// The function passed into the get function handles all GET requests sent to /courses 
// Further on, we're calling Course.find to get a list of all course items from the MongoDB. The find function takes one argument, a callback function
// which is executed once the result is available. All results available in courses are added in JSON format to the response by calling res.json(courses).
courseRoutes.route('/').get(async function(req, res) {

    // Saving all possible attributes for a course document in the collection in content object
    let content = {};
    let body = await req.body;
    content.id = body.id ? body.id : "";
    content.course_code = body.code ? body.code : "";
    content.credits = body.credits ? body.credits : "";
    content.norwegian_name = body.norwegian_name ? body.norwegian_name : "";
    content.taught_in_spring =  body.taught_in_spring ? body.taught_in_spring : "";
    content.taught_in_autumn =  body.taught_in_autumn ? body.taught_in_autumn : "";
    content.content =  body.content ? body.content : "";
    content.learning_goal =  body.learning_goal ? body.learning_goal : "";
    
    // if (req.query.credits) {
    //     const courses = await Course.find(({credits: Number(req.query.credits)}), function(err, courses) {}).catch(err => console.log(err));    
    // }
    console.log(req.query)
    const courses = await Course.find((req.query), function(err, courses) {}).catch(err => console.log(err));
    // The content in json() is what is being returned in the HTTP Response
    res.status(200).json(courses).send();
});

// This path endpoint is used to retrieve a course by its ID. This will return a course object in JSON format as response to a GET request on id.
// courseRoutes.route('/courses').get(async function(req, res) {
//     let course_code = await req.body.course_code;
//     course = await Course.findById(course_code, function(err, course) {
//         res.json(course);
//     });
//     res.status(200).json(course).send();
// });


// TODO: Rewrite this to handle adding reviews of courses
// courseRoutes.route('/add').post(function(req, res) {
//     let course = new Course(req.body);
//     course.save()
//         .then(course => {
//             res.status(200).json({'Course': 'Reviews added successfully.'});
//         })
//         .catch(err => {
//             res.status(400).send('Adding new review to course, ', course, ', failed');
//         });
// });

export default courseRoutes;