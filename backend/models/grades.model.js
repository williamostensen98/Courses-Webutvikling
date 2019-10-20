import mongoose from "mongoose";
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

module.exports = mongoose.model('Grade', Grade);