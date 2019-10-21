import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';

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
    { collection : 'courses' }
    )

    Course.plugin(mongoosePaginate);


module.exports = mongoose.model('Course', Course);

export default Course;