// base route is /user

const express = require('express');
const router = express.Router();

const db = require('../models');

// index view
router.get('/', (req,res) => {
    res.send("User's Index Route is ⇪ and 🏃🏻‍♀️")
})

// router.get('/', async function(req,res) => {
//     try{
//         const foundUsers = await db.User.find({});
//         const context = {
//             Users : foundUsers,
//         }
//         res.render('user/index')
//     }
// })



module.exports = router;