// base route is /user

const express = require('express');
const router = express.Router();
const Analytics = require('analytics-node');
const analytics = new Analytics('XKawp9NCehDtOGuG9zaPkcrtCyMVh9kh', { flushAt: 1 })

const db = require('../models');

// index view
router.get('/', async (req,res) => {
    // res.send("User's Index Route is ⇪ and 🏃🏻‍♀️")
    try {
        const foundUsers = await db.User.findById({})
        const context= {
            users: foundUsers,
            page_title : "USERS About",
            pageCategory : "GET ALL",
            analytics : analytics
        }
        res.render("user/index", context);

    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check user controller @ index route`})
    }
});

// index view
router.get('/about', async (req,res)=> {
    // res.send("Motivate's INDEX Route is ⇪ and 🏃🏻‍♀️");
    try {
        // const foundMotivate = await db.Motivate.find({});
        res.render('user/index', context = {
            page_title : "USERS About",
            pageCategory : "SHOW ALL",
            analytics : analytics
        }
        )
    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check user controller @ index 'about' route ${error}`});
    };
});



module.exports = router;