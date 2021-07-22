import express from 'express';
import router from './routes/routesTest.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import https from 'https';

dotenv.config()

const app = express();
app.use(cors());
let pages = 1;
let rawData = []
for(let i=1; i<= 2; i++){
    await https.get(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=${i}`, (resp) => {
        let data = '';
      
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          rawData.push(JSON.parse(data).data);
          console.log("yest")
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
}

console.log("Raw Data", rawData)
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use('/test', router)

app.listen(PORT, () => console.log("App is started and running on port 5000"))