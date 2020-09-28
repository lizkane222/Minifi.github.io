// base route is /motivate

const express = require('express');
const router = express.Router();

const db = require('../models');

// index view
router.get('/', (req,res) => {
    res.send("Motivate's Index Route is ⇪ and 🏃🏻‍♀️")
})




module.exports = router;