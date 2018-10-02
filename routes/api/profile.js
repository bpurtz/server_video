const express = require('express');
const router = express.Router();

//can use .post or other requests
//do not have to use /routes/api/test because we have already included that in server.js
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

//need to export for the server.js file to pick up
module.exports = router;