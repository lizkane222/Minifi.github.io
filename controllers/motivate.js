// base route is /motivate

const express = require('express');
const router = express.Router();

const db = require('../models');


// index view
router.get('/', async (req,res)=> {
    // res.send("Motivate's INDEX Route is ⇪ and 🏃🏻‍♀️");
    try {
        const foundMotivate = await db.Motivate.find({});
        res.render('motivate/index', context = {
            motivations : foundMotivate,
            page_title : "Motivate List"
        }
        )
    } catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check motivate controller @ index route ${error}`});
    };
});

// new 
router.get('/new', (req,res)=> {
    // res.send("Motivate's NEW Route is ⇪ and 🏃🏻‍♀️")
    res.render('motivate/new.ejs',
        context = {
            page_title : "New Motivate"
        }
    )
})

// create
router.post('/', (req,res) => {
    db.Motivate.create(req.body, (error, createdMotivate) => {
      if(error) {
       console.log(error);
       return res.send({message: `Internal Server Error: check motivate controller @ create route ${error}`});
       return res.send(error)
   }  
    });
        res.redirect('/motivate');
});


// show
router.get('/:id', (req,res) => {
        // res.send("Motivate's SHOW Route is ⇪ and 🏃🏻‍♀️");
    db.Motivate.findById(req.params.id, (error, foundMotivate) => {
        if (error) {
            console.log(error)
            // return res.send(`Internal Server Error: check motivate controller @ show route ${error}`);
        }
        const context = {
            motivate : foundMotivate,
            page_title : "Show Motivate"
        }
        res.render('motivate/show.ejs', context)
    });
});

// edit
router.get("/:id/edit", (req,res) => {
    // res.send ("Motivate's edit Route is ⇪ and 🏃🏻‍♀️")
    db.Motivate.findById(req.params.id, (err, foundMotivate) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        const context = { 
            motivate : foundMotivate, 
            page_title : "Edit Motivate"
        };

        res.render("motivate/edit.ejs", context)
    });
});

// update
router.put("/:id", (req,res) => {
    db.Motivate.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedMotivate) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            res.redirect(`/motivate/${updatedMotivate._id}`);
        }
    );
});

// delete
router.delete("/:id", (req,res) => {
    // res.send('delete route is ☝ & running')
    db.Motivate.findByIdAndDelete(req.params.id, (err, deletedMotivate) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }
        res.redirect('/motivate/')
    })
})





module.exports = router;
