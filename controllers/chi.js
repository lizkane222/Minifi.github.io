// base route is /user

const express = require('express');
const router = express.Router();
const Analytics = require('analytics-node');
const analytics = new Analytics('XKawp9NCehDtOGuG9zaPkcrtCyMVh9kh', { flushAt: 10 })

const db = require('../models');

// index view
// router.get('/', async (req,res) => {
//     // res.send("Chi's Index Route is ⇪ and 🏃🏻‍♀️")
//     try {
//         const
//     } catch (error) {
//         console.log(error)

//     }
// })
// base route is /motivate

// index view
router.get('/', async (req,res)=> {
    // const analytics = req.analytics
    // res.send("Motivate's INDEX Route is ⇪ and 🏃🏻‍♀️");
    try {
        // const foundChi =  db.Chi.find({});
        await res.render('chi/index', context = {
            // chis : foundChi,
            page_category : "Mi - Chi | ",
            page_title : "Profile",
            analytics : analytics
        },
//         // WILL CALHOUN
 
        )
    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check motivate controller @ index route ${error}`});
    };
});



module.exports = router;