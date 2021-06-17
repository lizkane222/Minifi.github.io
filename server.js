/* External Modules */
const express = require('express');
const methodOverride = require('method-override');

/* Internal Modules */
const db = require('./models');
const controllers = require("./controllers");
// const Motivate = require('.')

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = 3000;
app.set('view engine', 'ejs');


/* middleware */
// accent body data
app.use(express.urlencoded({ extended: true }));
// overrides incoming post to DELETE/PUT
app.use(methodOverride('_method'));
// 
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.originalUrl}`);
//     next();
// })

/* Routes */
app.get('/', (req, res) => {
    // render("file", context)
    // console.log('hi')
    // res.send('MINIFI SERVER IS OFFICIALLY CONNECTED!')
    res.render('index',
    // context = {
    //     Motivate : db.Motivate
    // }
    );
    // res.render('index', { user: req.session.currentUser } );
});


// view routes

//auth route (in user)
// app {this server.js} use{uses} ('/', {this path}  controllers.authCtrl); {to get to the authCtrl file}
// app.use('/', controllers.authCtrl);


// motivate Routes
app.use('/motivate', controllers.motivate)

// chi Routes
app.use('/chi', controllers.chi);

// user Routes
app.use('/user', controllers.user);


/* Server Listener */
app.listen(PORT, () => {
    console.log(`Server is live and listening at http://localhost:${PORT} https://lizkane222.github.io/Minifi.github.io/`);
  });
  


