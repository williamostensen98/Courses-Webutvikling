import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import Data from 'data'
import courseRoutes from "./routes/course"
import gradeRoutes from "./routes/grades"
import Course from './models/course.model'
// Babel is added as a dependency in package.json and used to type modern .js syntax and then transpiled. 
// import express from 'express' is equal to const express = require('express')


const API_PORT = 3001; // Listening for incoming HTTP requests on port 3001
const app = express(); // Creating an express-object

// When calling app.use(), we add another "filter" for all requests to go through. E.g., app.use()bodyParser.json()) parses incoming requests to JSON-format.
app.use(bodyParser.json());
app.use(cors());
app.use('/courses', courseRoutes)
app.use('/grades', gradeRoutes)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

// Adress to MongoDB. On format: mongodb://<username>:<pwd>@<IP>/<DNS>:<port>/<database>
const dbRoute = 'mongodb://victojo:admin@it2810-39.idi.ntnu.no:27017/grades';

// Connecting to the MongoDB by using mongoose
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
// Connection is our active connection to the MongoDB
const connection = mongoose.connection;

// Once the connection is established, execute the content of function
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// app.use("/", (req, res) => {
//     console.log(req.body);
//     res.status(200).json("Welcome to Grades!").send();
// })


// Handle all 404 errors (not found)
app.use((req,res,next) => {
    res.status(404).send("The information you are looking for is not here!")
  })

// Handles all requests resulting in a 500 response
app.use((err,req,res,next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname,'../public/500.html'))
  })

//  URL: https://grades.no/api/courses/tdt4145/grades
