// base route is /docs

const express = require('express');
const router = express.Router();
const Analytics = require('analytics-node');
const analytics = new Analytics('XKawp9NCehDtOGuG9zaPkcrtCyMVh9kh', { flushAt: 10 })

const db = require('../models');


// index view
router.get('/', async (req,res)=> {
    
    let docLinks = {
        page_spec : "https://segment.com/docs/connections/spec/page/",
        track_spec : "https://segment.com/docs/connections/spec/track/",
        group_spec : "https://segment.com/docs/connections/spec/group/"
    }
    // res.send("Motivate's INDEX Route is ⇪ and 🏃🏻‍♀️");
    try {
        // const foundMotivate = await db.Motivate.find({});
        await res.render('docs/index', 
        context = {
            docLinks : docLinks,
            page_title : "Docs",
            page_category : "Survey | ",
            analytics : analytics
        }
        )
    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check docs controller @ index route ${error}`});
    };
});


// index code view
// DISPLAY CODE AND RUN CALLS FROM BROWSER
router.get('/code', async (req,res)=> {
    
    
    // res.send("Motivate's INDEX Route is ⇪ and 🏃🏻‍♀️");
    try {
        // const foundMotivate = await db.Motivate.find({});
        await res.render('docs/new.ejs', 
        context = {
            page_title : "Code",
            page_category : "Docs | ",
            analytics : analytics
        }
        )
    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check docs controller @ index code route ${error}`});
    };
});

// SHOW USER CONTEXT
router.get('/user-context', async (req,res)=> {
    // res.send("Motivate's INDEX Route is ⇪ and 🏃🏻‍♀️");
    try {
        // const foundMotivate = await db.Motivate.find({});
        res.render('docs/usercontext', context = {
            // motivations : foundMotivate,
            page_title : "User Context",
            page_category : "User | Context",
            analytics : analytics
        }
        )
    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check motivate controller @ user context route ${error}`});
    };
});


// new 
// router.get('/new', (req,res)=> {
//     // res.send("Motivate's NEW Route is ⇪ and 🏃🏻‍♀️")
//     res.render('docs/new.ejs')
// })

// create
// router.post('/', (req,res) => {
//     db.Motivate.create(req.body, (error, createdMotivate) => {
//       if(error) {
//        console.log(error);
//        return res.send({message: `Internal Server Error: check motivate controller @ create route ${error}`});
//        return res.send(error)
//    }  
//     });
//         res.redirect('/motivate');
// });


// show
// router.get('/:id', (req,res) => {
//         // res.send("Motivate's SHOW Route is ⇪ and 🏃🏻‍♀️");
//     db.Motivate.findById(req.params.id, (error, foundMotivate) => {
//         if (error) {
//             console.log(error)
//             // return res.send(`Internal Server Error: check motivate controller @ show route ${error}`);
//         }
//         const context = {motivate : foundMotivate}
//         res.render('motivate/show.ejs', context)
//     });
// });

// edit
// router.get("/:id/edit", (req,res) => {
//     // res.send ("Motivate's edit Route is ⇪ and 🏃🏻‍♀️")
//     db.Motivate.findById(req.params.id, (err, foundMotivate) => {
//         if (err) {
//             console.log(err);
//             return res.send(err);
//         }

//         const context = { motivate : foundMotivate};

//         res.render("motivate/edit.ejs", context)
//     });
// });

// update
// router.put("/:id", (req,res) => {
//     db.Motivate.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true },
//         (err, updatedMotivate) => {
//             if (err) {
//                 console.log(err);
//                 return res.send(err);
//             }
//             res.redirect(`/motivate/${updatedMotivate._id}`);
//         }
//     );
// });

// delete
// router.delete("/:id", (req,res) => {
//     // res.send('delete route is ☝ & running')
//     db.Motivate.findByIdAndDelete(req.params.id, (err, deletedMotivate) => {
//         if (err) {
//             console.log(err);
//             return res.send(err);
//         }
//         res.redirect('/motivate/')
//     })
// })





module.exports = router;