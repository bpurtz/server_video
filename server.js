const path = require('path');
const url = require('url');
const express = require("express");
const util = require('util');
const fs = require('fs');
const mongo = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const http = require('http');

//get the routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(()=>console.log('mongodb connected'))
  .catch((err)=>console.log(err));

app.get('*', (req, res) => {
	var q = url.parse(req.url, true);
  var filename = q.query.name;
	res.write('' + filename);
	res.write(req.get('host'));
	res.write('hello');
	res.end();
}); 

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
