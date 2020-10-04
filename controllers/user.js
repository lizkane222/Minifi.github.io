// base route is /user

const express = require('express');
const router = express.Router();

const db = require('../models');

// index view
router.get('/', async (req,res) => {
    // res.send("User's Index Route is ⇪ and 🏃🏻‍♀️")
    try {
        const foundUsers = await db.User.findById({})
        const context= {
            users: foundUsers
        }
        res.render("user/index", context);

    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check user controller @ index route`})
    }
});




module.exports = router;