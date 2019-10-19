import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Course = new Schema({
    norwegian_name: {
        type: String
    },
    short_name: {
        type: String
    },
    code : {
        type: String
    },
    english_name: {
        type: String
    },
    credit: {
        type: Number
    },
    study_level: {
        type: Number
    },
    taught_in_spring: {
        type: Boolean
    },
    taught_in_autumn: {
        type: Boolean
    },
    taught_from: {
        type: Number
    },
    taught_in_english: {
        type: Boolean
    },
    last_year_taught: {
        type: Number,
    },
    content: {
        type: String
    },
    learning_form: {
        type: String
    },
    learning_goal: {
        type: String
    },
    grades: [{
            semester_code: {
                type: String
            },
            average_grade: {
                type: Number
            },
            passed: {
                type: Boolean
            },
            grades: {
                'a': Number, 'b': Number, 'c': Number, 'd': Number, 'e': Number, 'f': Number
            }
        }],

})