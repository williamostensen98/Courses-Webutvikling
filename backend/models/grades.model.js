import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';

// This file is a representation of the docs in the collection grades. 
// We have used Mongoose, which is a ODM (Object Data Modeling) library for MongoDB. 
// Mongoose manages relationships between data and translates between objects in code and the objects in MongoDB.

const Schema = mongoose.Schema;

let Grade = new Schema({
    course_code : {
        type: String
    },
    semesters : {
        type: Array
    }},

    { collection : 'grades' }
    )

// mongoose-paginate is used to paginate query results. Pagination is imported and activated in this file, but used in routes/grades.js
Grade.plugin(mongoosePaginate);

module.exports = mongoose.model('Grade', Grade);

export default Grade