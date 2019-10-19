import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import Data from 'data'
// Babel er brukt og lagt til som en dependency slik at vi kan importere med vanlig .js syntaks i stedet for require()

const API_PORT = 3001;
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


const dbRoute =
  'mongodb://admin:admin@it2810-39.idi.ntnu.no:27017/admin';

mongoose.connect(dbRoute, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



// let db = mongoose.connection;
// db.once('open', () => console.log('connected to the database'));
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// router.get('/getData', (req, res) => {
//     Data.find((err, data) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true, data: data });
//     });
//   });

// router.post('/updateData', (req, res) => {
//     const { id, update } = req.body;
//     Data.findByIdAndUpdate(id, update, (err) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     });
//   });

// router.delete('/deleteData', (req, res) => {
//     const { id } = req.body;
//     Data.findByIdAndRemove(id, (err) => {
//       if (err) return res.send(err);
//       return res.json({ success: true });
//     });
//   });

// router.post('/putData', (req, res) => {
//     let data = new Data();
  
//     const { id, message } = req.body;
  
//     if ((!id && id !== 0) || !message) {
//       return res.json({
//         success: false,
//         error: 'INVALID INPUTS',
//       });
//     }
//     data.message = message;
//     data.id = id;
//     data.save((err) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     });
//   });

// app.use('/api', router);


app.use((req, res, next) => {
    console.log('Time: %d', Date.now())
    next()
  })

// fetch('https://grades.no/api/courses/tdt4145/grades')
//     .then(res => res.json())
//     .then(res => console.log(res))
app.use("/test", (req, res) => {
    console.log(req.body);
    res.status(200) .json("Dette er en  respons").send();
})




app.use("/grades/courses", (req, res) => {
    console.log(req.body)
    res.status(200).json("Grades er bestått").send();
})

//  URL: https://grades.no/api/courses/tdt4145/grades