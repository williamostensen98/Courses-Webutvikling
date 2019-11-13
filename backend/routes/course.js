import express from 'express';
import Course from '../models/course.model';

// TODO: Add catch blocks for all functions to handle warnings in the console.

const courseRoutes = express.Router()

// The function passed into the get function handles all GET requests sent to it2810-39.idi.ntnu.no:<PORT-NUMBER>/courses 
// Further on, we're calling Course.find to get a list of all course items from the MongoDB. The find function takes one argument, a callback function
// which is executed once the result is available. All results available in courses are added in JSON format to the response by calling res.json(courses).
courseRoutes.route('/').get(async function(req, res) {
    // Saving all possible attributes for a course document in the collection in content object. 
    // Checks if attribute exists on req.query and saves it if it exists.
    let content = {};
    const query = await req.query;
    var stringQuery = Object.keys(query)[0] //This will be the input the user writes in the search bar
    //Checks if there are any sort/filter specifications the query other than the key words
    Object.keys(query).length > 1 ? ( delete query[stringQuery], filtSort(query)) : searchOnly(stringQuery)
   
    //Makes query from user chosen filtering/sorting
    function filtSort(query) {

      if (query._id) { content._id = query._id } 
      if (query.credits) { content.credits = Number(query.credits)}
      if (query.taught_in_spring) { content.taught_in_spring = true} 
      if (query.taught_in_autumn) { content.taught_in_autumn = true} 
      if (query.content) { content.content = {$regex: RegExp(query.content), $options:'-i'}}
      if (query.learning_goal) { content.learning_goal = {$regex: RegExp(query.learning_goal), $options:'-i'}}

      // Have to make the search as well, in addition to the sorting/filtering
      searchOnly(stringQuery)
    }
  
    // Only handles input from written in search bar in GUI. User only searches for norwegian_name or course_code
    function searchOnly(stringQuery) {
      if(allValid(stringQuery)) {
        containsCode(stringQuery) ? content.course_code = {$regex: RegExp(stringQuery), $options:'-i'} : 
                                    content.norwegian_name = {$regex : RegExp(stringQuery), $options:'-i'}
      }
    }
    
    const courses = await Course.find((content), function(err, courses) {}).catch(err => console.log(err));
    
    // Values retrieved by the query, else set to default values. Used in pagination and sorting of results.
    let sorting = req.query.sorting ? req.query.sorting: 'norwegian_name';
    let order = req.query.order ? req.query.order : '1';
    let page = req.query.page ? req.query.page : 1;
    let pages=parseInt(page);
    let limit = req.query.limit ? req.query.limit : 10;
    let lim=parseInt(limit);


    // Uses mongoose-paginate to paginate results. Plugin in imported in the course.model.js. Response to client is sent in this function. 
    // Takes to arguments. One content object, and one object containing pages, page limit and what to sort by.
    // To go to next page of query results, add &page=<page_number> to the end of the query.
    // Sorts by norwegian name unless sorting is specified in the query in ascending order (order : 1, use -1 for descending).
    // Sorting and order may also be added to the query &sorting=course_code&order=-1.
    // console.log("Content: ", content)
    Course.paginate(content,
        {   page: pages,
            limit: lim,
            sort: {[sorting]:[order]}
        })
        .then(paginated_content => {
            // The content in json() is what is being returned in the HTTP Response. 
            // In this case paginated_content is the entire page containing all #page of objects
            res.status(200).json(paginated_content);
        })
        .catch(error => {
            // In case of error, return status 500 and error message.
          res.status(500).json(error);
        })
});

// This path endpoint is used to retrieve a course by its course_code. 
// This will return a single course object in JSON format as response to a GET request on course_code. 
// Course_code works as a key in the database (is unique for all documents in the collection)
courseRoutes.route('/:course_code').get(async (req, res) => {
    let course_code = req.params.course_code;
    course = await Course.find({course_code : course_code}, (err, course) => {
        res.json(course);
    }).catch(error => res.status(500).json(error));
});


// For updating rows in collection with reviews and rated difficulty. PUT requests to it2810.39.idi.ntnu.no:3001/courses/<COURSE_CODE> will update the course 
// if the request contains a review AND a difficulty. 
courseRoutes.put('/:course_code', (req, res) => {
    // console.log(req.body.difficulty)
    let difficulty = parseInt(req.body.difficulty)
    let review = req.body.review
    // Find the correct course in the DB. Course_code is a primary key, and the search will always return one result.
    let course = Course.find({course_code : req.params.course_code})

    console.log("review: ", review)
    if (req.body.review && 6>difficulty>0) {
        // console.log(req.params.course_code)
        // Find document "course" in db and push the review to the review array on the document. Also update difficulty to new average.
        Course.findOneAndUpdate(course, {"$push" : {"reviews": review, "difficulty" : parseInt(req.body.difficulty)}})
        .then(res.json("Your review was successfully added!"))
        .catch(err => console.log(err))
      }  

  });

  courseRoutes.post('/:course_code', (req, res) => {
    // console.log(req.body.difficulty)
    let difficulty = parseInt(req.body.difficulty)
    let review = req.body.review
    // Find the correct course in the DB. Course_code is a primary key, and the search will always return one result.
    let course = Course.find({course_code : req.params.course_code})

    console.log("review: ", review)
    if (req.body.review && 6>difficulty>0) {
        // console.log(req.params.course_code)
        // Find document "course" in db and push the review to the review array on the document. Also update difficulty to new average.
        Course.findOneAndUpdate(course, {"$push" : {"reviews": review, "difficulty" : parseInt(req.body.difficulty)}})
        .then(res.json("Your review was successfully added!"))
        .catch(err => console.log(err))
      }  

  });



export default courseRoutes;

function containsCode(query) {
  //possible course code prefixes
  const codes = "tma tdt ttm it tfy"
  return codes.includes(query.slice(0,3).toLowerCase())
}


function allValid(query) {
  let letters = /^[A-Za-z\s/\d/]+$/
  return letters.test(query)
}
