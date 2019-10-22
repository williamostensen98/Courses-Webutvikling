import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';


// This file is a representation of the docs in the collection courses. 
// We have used Mongoose, which is a ODM (Object Data Modeling) library for MongoDB. 
// Mongoose manages relationships between data and translates between objects in code and the objects in MongoDB.

const Schema = mongoose.Schema;

let Course = new Schema({
    norwegian_name: {
        type: String
    },
    course_code : {
        type: String
    },
    credit: {
        type: Number
    },
    taught_in_spring: {
        type: Boolean
    },
    taught_in_autumn: {
        type: Boolean
    },
    content: {
        type: String
    },
    learning_goal: {
        type: String
    },
    reviews: {
        type: Array
    },
    difficulty: {
        type: Array
    }
    },

    // Specifying the name of the collection in MongoDB
    { collection : 'courses'}
)

// mongoose-paginate is used to paginate query results. Pagination is imported and activated in this file, but used in routes/course.js
Course.plugin(mongoosePaginate);


module.exports = mongoose.model('Course', Course);

export default Course;