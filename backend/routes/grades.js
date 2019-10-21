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

// The function passed into the get function handles all GET requests sent to /grades 
// Further on, we're calling Grades.find to get a list of all course items from the MongoDB. The find function takes one argument, a callback function
// which is executed once the result is available. All results available in courses are added in JSON format to the response by calling res.json(courses).
gradeRoutes.route('/').get(async function(req, res) {
    let sorting = req.query.sorting ? req.query.sorting: 'semester_code';
    let order = req.query.order ? req.query.order : '1';
    let page = req.query.page ? req.query.page : 1;
    let pages=parseInt(page);
    let limit = req.query.limit ? req.query.limit : 10;
    let lim=parseInt(limit);
    // Access course_code from URL by splitting on / and selecting the 3rd element. Will work for every possible state in this project.
    // Saving all possible attributes for a course document in the collection in content object
    let content = {};
    content.course_code = req.baseUrl.split('/')[2]
    // if (query.course_code) { content.course_code = {$regex : RegExp(query.course_code), $options:'-i'} }

    
    // The content object being send into find is of the form e.g., {course_code = "TDT4140"}
    const grades = await Grade.find(content);
    console.log(grades[0])
    
    // The content in json() is what is being returned in the HTTP Response
    // res.status(200).json(grades).send();

    Grade.paginate(grades[0],{
        page: pages,
        limit: lim,
        sort: {[sorting]:[order]
        }
      }).then(page => {
        res.json(page);
      })
        .catch(err => {
          res.status(500).json(err);
        })
});


// Makes it possible to go directly to the semesters of a course object by visiting it2810-39.idi.ntnu.no:3001/grades/TDT4110
gradeRoutes.route('/:course_code').get(async function(req, res) {
    let course_code = req.params.course_code;
    const grades = await Grade.find({course_code : course_code}, function(err, grades) {
        res.json(grades);
    });
    res.status(200).json(grades).send();

   
});

export default gradeRoutes;

// Format for spørringer:
// http://localhost:3001/grades?course_code=TDT4110&semesters.semester_code=H2018

