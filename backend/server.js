import express from 'express'
import 'dotenv/config';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import courseRoutes from "./routes/course"
import gradeRoutes from "./routes/grades"
// Babel is added as a dependency in package.json and used to type modern .js syntax and then transpiled. 
// import express from 'express' is equal to const express = require('express')


const API_PORT = process.env.PORT; // Listening for incoming HTTP requests on port 3001
const app = express(); // Creating an express-object

// When calling app.use(), we add another "filter" for all requests to go through. E.g., app.use(bodyParser.json()) parses incoming requests to JSON-format.
// The bodyparser makes incoming request body data to form the data to be available the way we want to.
app.use(bodyParser.json());
app.use(cors());
// Cross-Origin Resource Sharing (CORS). Used to specify what type of requests is allowed, who may send requests and what header-types. 
// CORS works by adding new HTTP headers that let servers describe which origins are permitted to read information from a web browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // * indicates that anyone can connect. Can be changed to specific IPs.
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Which headers we allow
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST'); // Defining all type of requests we want to accept. We only allow GET and PUT. 
  next();
});

// All requests to adress.com/courses is handled by the logic inside courseRoutes, which is imported from /routes/course.
app.use('/courses', courseRoutes)
// Same goes for adress.com/courses/:course_code/grades. The reason for this not being handled inside courseRoutes is that our DB have to separate collections
// One collection for all the courses, and one collection for all the grades for all semesters for all courses. Due to huge amount of data we decided to not embed the grades
// collection within the courses collection, as this would make the data less transparent and make the JSON for just one course object very long.
app.use('/courses/:course_code/grades', gradeRoutes)



// Listening for requests on port API_PORT, and logging to console when backend-server is running.
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

// Adress to MongoDB. On format: mongodb://<username>:<pwd>@<IP>/<DNS>:<port>/<database>
const dbRoute = process.env.DB_ROUTE;

// Connecting to the MongoDB by using mongoose's connect function.
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// Connection is our active connection to the MongoDB
const connection = mongoose.connection;

// Once the connection is established, print message to console.
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Handle all 404 errors (not found). Response is sent to all invalid requests.
app.use((req,res,next) => {
    res.status(404).send("404 file not found. The information you are looking for is not here! Try a different path")
  })

// Handles all requests resulting in a 500 response
app.use((err,req,res,next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname,'../public/500.html'))
  })

