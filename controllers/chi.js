// base route is /user

const express = require('express');
const router = express.Router();

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
    // res.send("Motivate's INDEX Route is ⇪ and 🏃🏻‍♀️");
    try {
        const foundChi =  db.Chi.find({});
        await res.render('chi/index', context = {
            chis : foundChi,
            page_title : "Mi - Chi : Profile"
        }
        )
    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check motivate controller @ index route ${error}`});
    };
});




module.exports = router;