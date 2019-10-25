import Grade from '../models/grades.model'
import express from 'express';

const gradeRoutes = express.Router();

// The function passed into the get function handles all GET requests sent to /grades 
// Further on, we're calling Grades.find to get a list of all course items from the MongoDB. The find function takes one argument, a callback function
// which is executed once the result is available. All results available in courses are added in JSON format to the response by calling res.json(courses).
gradeRoutes.route('/').get(async function(req, res) {
    // Initiate an empty content object to save possible attributes for a grade document in the collection in content object
    let content = {};
    // Access course_code from URL by splitting on / and selecting the 3rd element. Will work for every possible state in this project.
    content.course_code = req.baseUrl.split('/')[2]
    // if (query.course_code) { content.course_code = {$regex : RegExp(query.course_code), $options:'-i'} }

    
    // The content object being send into find is of the form e.g., {course_code = "TDT4140"}
    const grades = await Grade.find(content).then(grades => {
      res.json(grades);
    })
      .catch(err => {
        res.status(500).json(err);
      })
});


// Makes it possible to go directly to the semesters of a course object by sending GET request to it2810-39.idi.ntnu.no:3001/grades/TDT4110.
// Will only return semesters for this specific course code. 
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

