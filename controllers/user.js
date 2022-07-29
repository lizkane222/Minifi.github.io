// base route is /user

const express = require('express');
const router = express.Router();
const Analytics = require('analytics-node');
// const analytics = new Analytics('XKawp9NCehDtOGuG9zaPkcrtCyMVh9kh', { flushAt: 10 })

const db = require('../models');



// index view
router.get('/', async (req,res) => {
    console.log("ANALYTICS : -----",analytics)
    console.log("ANALYTICS : -----",analytics.writeKey," -- : -- ", analytics.host)
    console.log("HEADERS : -----",analytics.axiosInstance.defaults.headers)
    // console.log(typeOf(analytics))

    // console.log("HEADERES : -----",analytics.defaults.headers)
    // res.send("User's Index Route is ⇪ and 🏃🏻‍♀️")
    // let userIdid = analytics.user().id

    try {
        // const foundUsers = await db.User.findById({})
        // analytics.track("TESTING USER TRACK")
        const context= {
            // users: foundUsers,
            page_title : "USERS",
            page_category : "GET ALL | ",
            analytics : analytics,
        }
        res.render("user/index", context);

    } catch (error) {
        // console.log(error)
        return res.send(error, true, {message: `Internal Server Error: check user controller @ index route`})
    }
});

// index view
router.get('/about', async (req,res)=> {
    // res.send("Motivate's INDEX Route is ⇪ and 🏃🏻‍♀️");
    try {
        // const foundMotivate = await db.Motivate.find({});
        res.render('user/index', context = {
            page_title : "USERS About",
            page_category : "SHOW | ",
            analytics : analytics,
        }
        )
    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check user controller @ index 'about' route ${error}`});
    };
});



module.exports = router;