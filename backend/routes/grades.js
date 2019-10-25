import Grade from '../models/grades.model'
import express from 'express';

const gradeRoutes = express.Router();

// The function passed into the get function handles all GET requests sent to /grades 
// Further on, we're calling Grades.find to get a list of all course items from the MongoDB. The find function takes one argument, a callback function
// which is executed once the result is available. All results available in courses are added in JSON format to the response by calling res.json(courses).
gradeRoutes.route('/').get(async function(req, res) {
    let sorting = req.query.sorting ? req.query.sorting: 'semester_code';
    let order = req.query.order ? req.query.order : '1'; // Ascending order unless else is specified
    let page = req.query.page ? req.query.page : 1;
    let pages=parseInt(page);
    let limit = req.query.limit ? req.query.limit : 10;
    let lim=parseInt(limit);
    
    // Initiate an empty content object to save possible attributes for a grade document in the collection in content object
    let content = {};
    // Access course_code from URL by splitting on / and selecting the 3rd element. Will work for every possible state in this project.
    content.course_code = req.baseUrl.split('/')[2]
    // if (query.course_code) { content.course_code = {$regex : RegExp(query.course_code), $options:'-i'} }

    
    // The content object being send into find is of the form e.g., {course_code = "TDT4140"}
    const grades = await Grade.find(content).then(page => {
      res.json(page);
    })
      .catch(err => {
        res.status(500).json(err);
      })

    // Uses mongoose-paginate to paginate results. Plugin in imported in the course.model.js. Response to client is sent in this function. 
    // Takes to arguments. One content object, and one object containing pages, page limit and what to sort by.
    // To go to next page of query results, add &page=<page_number> to the end of the query.
    // Sorts by norwegian name unless sorting is specified in the query in ascending order (order : 1, use -1 for descending).
    // Sorting and order may also be added to the query &sorting=course_code&order=-1.
    
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

