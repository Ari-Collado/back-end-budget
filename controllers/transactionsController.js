// imports the express module, which is called by require invoking "express"
const express = require("express");

//creating a new router(this gets/deletes/create the data) object to handle request for specific paths
const router = express.Router();

// Imports the transactions array aka dummy data to utilize via testing w/postman
let transactions = require('../models/transaction'); 

//CREATE NEW TRANSACTION
// Defining a POST route to create  new transactions: req is request and it has the info of incoming request from client, res is response and send response back to client
router.post("/", (req, res) => {

// Create a new transaction  by combining a new ID and the request body
const newTransaction = {
    //this adds  a new ID depending the the current data/array  length
      id: transactions.length + 1, 
      // using the spread operator it will take all the properties aka name,id, note and "spreads" it into a new transaction property resulting in a new object.
      ...req.body 
    };
  
    //the new transaction/object from above/spread is added to the end of transactions array
    transactions.push(newTransaction);
  
    // then finally  a response is sent  to the client with the  transaction
    res.status(201).send(newTransaction);
  });
  
  // GET ALL TRANSACTIONS
  //Same as previous/above explination this time it will display all testing data
router.get("/", (req, res) => {
    res.status(200).send(transactions);
  });

//this will show a single transaction
//router.get is listening for the request id is a param
router.get("/:id", (req, res) => {
  //this is taking the id param from the url request
  const { id } = req.params;
  //.find is looking through the array to find the specified id the +id converts from string to number
  const transaction = transactions.find(el => el.id === +id);
  //this is checking if the id was found
  if (transaction) {
    //if found then status code 200 is sent which is in the clear
    res.status(200).send(transaction);
  } else {
    res.status(404).json({error: `Transaction with id: ${id} not found!`});
  }
});

// UPDATE SINGLE TRANSACTION
//once again just defining router
router.put("/:id", (req, res) => {
  //{id} is destructured from req.parms
  const { id } = req.params;
  //since data is array can use .find method to single out the id wanted to update and once again +id is being read as a number
  const transactionToUpdateIndex = transactions.findIndex(transaction => transaction.id === +id);
//if id is found
  if (transactionToUpdateIndex !== -1) {
    //update the current info with new info
    transactions[transactionToUpdateIndex] = { id: +id, ...req.body };
    //send back back 200 to signal all is well and change went through
    res.status(200).json(transactions[transactionToUpdateIndex]);
    //if id is not found 
  } else {
    // then display the message below
    res.status(404).send({error: `Transaction with id: ${id} not found!`});
  }

  // DELETE SINGLE TRANSACTION
  //once again this is route to delete
router.delete("/:id", (req, res) => {
  //take id from url 
  const { id } = req.params;
  //array method to find specified id# and makes it a number
  const transactionToDeleteIndex = transactions.findIndex(transaction => transaction.id === +id);
//if id is found 
  if (transactionToDeleteIndex !== -1) {
    //then splice will remove it
    transactions.splice(transactionToDeleteIndex, 1);
    //after deletion page goes bac to transactions
    res.redirect("/transactions");
    //if id is not found
  } else {
    //send status code 
    res.status(404).send({ error: `Transaction with id: ${id} not found!` });
  }
});




});


  //this allows other files to utilize router  
  module.exports = router;

