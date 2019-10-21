import express from 'express';
import cors from 'cors';
import Course from '../models/course.model';


const courseRoutes = express.Router()


courseRoutes.use(cors());
  // Allow client to fetch data
  courseRoutes.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Can change * to allow request from specific clients. In this project we dont care to handle security issues.
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      next();
});

// The function passed into the get function handles all GET requests sent to it2810-39.idi.ntnu.no:<PORT-NUMBER>/courses 
// Further on, we're calling Course.find to get a list of all course items from the MongoDB. The find function takes one argument, a callback function
// which is executed once the result is available. All results available in courses are added in JSON format to the response by calling res.json(courses).
courseRoutes.route('/').get(async function(req, res) {
    let sorting = req.query.sorting ? req.query.sorting: 'norwegian_name';
    let order = req.query.order ? req.query.order : '1';
    let page = req.query.page ? req.query.page : 1;
    let pages=parseInt(page);
    let limit = req.query.limit ? req.query.limit : 10;
    let lim=parseInt(limit);

    // Saving all possible attributes for a course document in the collection in content object. 
    // Checks if attribute exists on req.query and saves it if it exists.
    let content = {};
    let query = await req.query;
    var stringQuery = Object.keys(query)[0]

    
    if(allLetters(stringQuery)) {
      content.norwegian_name = {$regex : RegExp(stringQuery), $options:'-i'}
      console.log("BOKSTAVER")
      // const courses = await Course.find({'norwegian_name': {$regex : RegExp(/query/), $options:'-i'}})
    }
    else if (containsNumber(stringQuery)) {
      content.course_code = {$regex: RegExp(stringQuery), $options:'-i'}
      // const courses = await Course.find({'course_code': {$regex : RegExp(/query/), $options:'-i'}})
      console.log("TALL")
    }


    // if (query._id) { content._id = query._id } 
    // if (query.course_code) { content.course_code = {$regex: RegExp(query.course_code), $options:'-i'}}
    // if (query.credits) { content.credits = Number(query.credits)}
    // if (query.norwegian_name) { content.norwegian_name = {$regex : RegExp(query.norwegian_name), $options:'-i'}}
    // if (query.taught_in_spring) { content.taught_in_spring = true} 
    // if (query.taught_in_autumn) { content.taught_in_autumn = true} 
    // if (query.content) { content.content = {$regex: RegExp(query.content), $options:'-i'}}
    // if (query.learning_goal) { content.learning_goal = {$regex: RegExp(query.learning_goal), $options:'-i'}}

    // Syntax to find partial match by using MongoDB find()-function:
    // find(({norwegian_name : {$regex : /Ava/}})
    console.log("CONTENT:",content)
    const courses = await Course.find((content), function(err, courses) {}).catch(err => console.log(err));
    // The content in json() is what is being returned in the HTTP Response
    // res.status(200).json(courses).send();

    // Uses mongoose-paginate to paginate results. Plugin in imported in the course.model.js.
    Course.paginate(content,{
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

// // This path endpoint is used to retrieve a course by its ID. This will return a course object in JSON format as response to a GET request on id.
// courseRoutes.route('/:course_code').get(async function(req, res) {
//     let course_code = req.params.course_code;
//     course = await Course.find({course_code : course_code}, function(err, course) {
//         res.json(course);
//     });
//     res.status(200).json(course).send();
// });



// TODO: Rewrite this to handle adding reviews of courses
// courseRoutes.route('/:course_code/add').post(function(req, res) {
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



function allLetters(query) {
  let letters = /^[A-Za-z]+$/
  return letters.test(query)
}

function containsNumber(query) {
  let numbers = /\d/
  return numbers.test(query)
}