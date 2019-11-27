// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening() { 
    console.log('server running');
    console.log(`running on local host: ${port}`);
}

/*Get & Post Roustes*/
app.get('/all', (req, res)=>{
    console.log('Updating UI');
    console.log(projectData);
    res.send(projectData);
})

app.post('/addInfo', (req, res)=>{ 
    console.log('POST request recieved! Adding data to local server ');
    console.log(req.body);
    console.log('---END OF req.body---');
    newInfo = {
        city: req.body.city,
        temp: req.body.temp,
        date: req.body.date,
        response: req.body.response
    }
    
    projectData.push(newInfo);
    //res.send(projectData);
})