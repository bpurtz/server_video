const path = require('path');
const express = require("express");
const util = require('util');
const fs = require('fs');
const mongo = require('mongodb').MongoClient;
const http = require('http');

const app = express();

app.get('/', (req, res) => res.send('hello')); 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))