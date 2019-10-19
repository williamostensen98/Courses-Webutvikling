import Grade from '../models/grades.model'
import express from 'express';
import cors from 'cors';
import Axios from 'axios';

const gradeRoutes = express.Router();

gradeRoutes.use(cors());
  // Allow client to fetch data
  gradeRoutes.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Can change * to allow request from specific clients
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      next();
});

// The function passed into the get function handles all GET requests sent to /courses 
// Further on, we're calling Course.find to get a list of all course items from the MongoDB. The find function takes one argument, a callback function
// which is executed once the result is available. All results available in courses are added in JSON format to the response by calling res.json(courses).
gradeRoutes.route('/').get(async function(req, res) {
    // Saving all possible attributes for a course document in the collection in content object
    let content = {};
    let body = await req.body;
    content.course_code =  body.course_code ? body.course_code : "";
    content.semesters = body.semesters ? body.semesters : "";
    
    const grades = await Grade.find(req.query, function(err, grades) {});
    console.log(req.query)
    
    body.course_code ? console.log("Body: " +  body.course_code) : null 
    body.semesters ? console.log("Semesters: " +  body.semesters) : null 
    
    // The content in json() is what is being returned in the HTTP Response
    res.status(200).json(grades).send();
});

// gradeRoutes.route('/grades').get(async function(req, res) {
//     console.log(req)
//     let course_code = await req.body.course_code;
//     grades = await Grade.findById(course_code, function(err, grade) {
//         res.json(grades);
//     });
//     res.status(200).json(grades).send();
// });

export default gradeRoutes;

// Format for spørringer:
// http://localhost:3001/grades?course_code=TDT4110&semesters.semester_code=H2018