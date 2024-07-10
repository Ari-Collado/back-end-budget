//express is a framework that allows Node.js, to build web applications and APIs. It simplifies the process of creating server-side applications by providing a  set of features and tools. 
//Dependencies  is needed so app runs with no issue
//express needs to be installed then required to be utilized, invoking require allows the function to import the express module
//*Dependency
const express = require('express');

//app variable holds the express function which is the entry for the framwork and is creating new instances aka routes

//*Dependency
//Cors is a middware used with express to handle cross sharing and add the headers to respondes to allow or deny request based on the config below
const cors = require('cors');


// Controller:this is middleman between UI and backend 
//Importing the transaction controller file
const transactionController = require('./controllers/transactionsController'); 
//Configuration:defines how the app will work/behave by setting params
const app = express();

//middleware is kind of like a controler of a tv flipping through channels,it organzies code, reusabilty its the middleman between client and server
//this is parsing info incoming that is sent in the requestbody and it takes the JSON and makes it availble in my routes
app.use(express.json());

//also middleware from previous definiton allow or restricts request
app.use(cors());


//this is for testing so i can see it on the web page
app.get("/", (req, res) => {
    res.send("testing123");
  });


// ROUTES
// Uses the transactionController for all routes under /transactions
app.use("/transactions", transactionController);





//this is the route handler that handles the get request to URL res.send is sending the string hola mundo to display on screen
// app.get("/",(req,res)=>{
//     res.send("Hola Mundo!")
// })



module.exports = app;