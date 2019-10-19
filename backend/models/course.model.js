import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Course = new Schema({
    norwegian_name: {
        type: String
    },
    code : {
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
    

    // grades: [{
    //         semester_code: {
    //             type: String
    //         },
    //         average_grade: {
    //             type: Number
    //         },
    //         passed: {
    //             type: Boolean
    //         },
    //         grades: {
    //             'a': Number, 'b': Number, 'c': Number, 'd': Number, 'e': Number, 'f': Number
    //         }
    //     }],
    },
    { collection : 'grades' }
    )

module.exports = mongoose.model('Course', Course);