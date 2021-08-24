/* External Modules */
const express = require('express');
const methodOverride = require('method-override');
const Analytics = require('analytics-node');
const analytics = new Analytics('XKawp9NCehDtOGuG9zaPkcrtCyMVh9kh', { flushAt: 1 })


/* Internal Modules */
// const db = require('./models');
const controllers = require("./controllers");
// const Motivate = require('.')

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = 4000;
app.set('view engine', 'ejs');


/* middleware */
// accent body data
app.use(express.urlencoded({ extended: true }));
// overrides incoming post to DELETE/PUT
app.use(methodOverride('_method'));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
//     let req = { query, cookies, url, path, ip, host}

//     // populate campaign object with any utm params
//   const campaign = {}
//   if (query.utm_content) campaign.content = query.utm_content
//   if (query.utm_campaign) campaign.name = query.utm_campaign
//   if (query.utm_medium) campaign.medium = query.utm_medium
//   if (query.utm_source) campaign.source = query.utm_source
//   if (query.utm_term) campaign.keyword = query.utm_term

//   // grab userId if present
//   let userId = null
//   if (cookies.ajs_user_id) userId = cookies.ajs_user_id

//   // if no anonymousId, send a randomly generated one
//   // otherwise grab existing to include in call to segment
//   let anonymousId
//   if (cookies.ajs_anonymous_id) {
//     anonymousId = cookies.ajs_anonymous_id
//   } else {
//     anonymousId = = uuid.v4()
//     res.cookie('ajs_anonymous_id', anonymousId )
//   }

//   const referrer = req.get('Referrer')
//   const userAgent = req.get('User-Agent')

//   const properties = {
//     query: stringify(query),
//     referrer,
//     path,
//     host,
//     url
//     /* ++ any custom props (eg. title) */
//   }

//   const context = {
//     campaign,
//     userAgent,
//     ip
//   }

//   // send a page call to segment
//   analytics.page(
//     anonymousId, // either random (matching cookie) or from client
//     userId, // might be null
//     properties,
//     context
//   )
    
  // proceed!
    next();
})

/* Routes */
app.get('/', (req, res) => {
    // render("file", context)
    // console.log('hi')
    // res.send('MINIFI SERVER IS OFFICIALLY CONNECTED!')
    res.render('index',
    context = {
        // Motivate : db.Motivate
        page_category : "Minifi | ",
        page_title : "Home",
        analytics : analytics
    }
    );
    // res.render('index', { user: req.session.currentUser } );
});


// view routes

//auth route (in user)
// app {this server.js} use{uses} ('/', {this path}  controllers.authCtrl); {to get to the authCtrl file}
// app.use('/', controllers.authCtrl);

// context={
//     analtyics : analytics 
// }

// motivate Routes
app.use('/motivate', controllers.motivate);

// chi Routes
app.use('/chi', controllers.chi);

// user Routes
app.use('/user', controllers.user);

// user Routes
app.use('/docs', controllers.docs);


/* Server Listener */
app.listen(PORT, () => {
    console.log(`Server is live and listening at http://localhost:${PORT}  http://localhost:${PORT}/docs  https://lizkane222.github.io/Minifi.github.io/ `);
  });
  


