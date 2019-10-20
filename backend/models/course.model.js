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
    }},
    { collection : 'courses' }
    )

module.exports = mongoose.model('Course', Course);