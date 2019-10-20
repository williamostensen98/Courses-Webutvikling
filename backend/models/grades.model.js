import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';

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
    Grade.plugin(mongoosePaginate);

module.exports = mongoose.model('Grade', Grade);

export default Grade