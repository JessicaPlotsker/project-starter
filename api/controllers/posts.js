const express = require('express');
const router = express.Router();
const db = require('../models');
const { Post } = db;
import {getTitle, getData} from 'api/dbFunctions.js';
// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  res.send("Welcome to AniLib, please type in an anime or manga title to begin")
});

router.get("/title:input", (req, res) => {
  const input = req.params.input;


  //if title doesnt exists send back 404 and message
  if(!getTitle(input)) {
    res.status(404).send("title not found")
  }
  else {
    //if title exists, send back data
    // res.send("This is the zipcode route handler")
    res.json({
      message: JSON.stringify(getData(input))
    })
  }
})

module.exports = router;