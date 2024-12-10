/* External Modules */
const express = require('express');
// const cookieParser = require('cookie-parser'); // in order to read cookie sent from client
const methodOverride = require('method-override');
const Analytics = require('analytics-node');
analytics = new Analytics('XKawp9NCehDtOGuG9zaPkcrtCyMVh9kh', { flushAt: 3,  flushInterval: 10000,
    enable: false })


/* Internal Modules */
// const db = require('./models');
const controllers = require("./controllers");
// const Motivate = require('.')

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = 4020;
app.set('view engine', 'ejs');



// app.get('/', (req,res)=>{

//     // read cookies
//     console.log(req.cookies) 

//     let options = {
//         maxAge: 1000 * 60 * 15, // would expire after 15 minutes
//         httpOnly: true, // The cookie only accessible by the web server
//         signed: true // Indicates if the cookie should be signed
//     }

//     // Set cookie
//     res.cookie('cookieName', 'cookieValue', options) // options is optional
//     res.send('')

// })


// const triggerAllEvents = () => {




// analytics.identify({
//     traits: {
//     name: 'Cynthia Silva',
//     position: 'test',
//     company: { name: 'Kevs Stores 2' },
//     },
//     anonymousId:"345678okjg87ytgbnku"
// });
// analytics.identify({
//     traits: {
//     email: 'cynthiasilva@profitfy.me',
//     name: 'Cynthia Silva',
//     position: 'test',
//     company: { name: 'Kevs Stores 2' },
//     },
//     anonymousId:"345678okjg87ytgbnku"
// });
// analytics.identify({
//     userId: '89iu789i-drtyg6',
//     traits: {
//     email: 'cynthiasilva@profitfy.me',
//     name: 'Cynthia Silva',
//     position: 'test',
//     phone: '5511979506004',
//     company: { name: 'Kevs Stores 2' },
//     },
//     anonymousId:"345678okjg87ytgbnku"
// });
// analytics.track({
//     properties: {
//       cart_id: "cart1234",
//       product_id: "product123456",
//       sku : "G-32",
//       category : "Games",
//       name: "Monopoly : 3rd Edition",
//       brand: "Hasbro",
//       variant: "200 pieces",
//       price: 18.99,
//       quantity: 1,
//       coupon: "MAYDEALS",
//       position: 3
//     },
//     context:{
//         traits: {
//             email: "cynthiasilva@profitfy.me",
//             phone: "5511979506004",
//             gender: "f",
//             name: "Cynthia Silva",
//             address: {
//                 city: "East Greenwich",
//                 state: "RI",
//                 postalCode: "02818",
//                 country: "USA"
//             }
//         }
//     },
//     anonymousId:"345678okjg87ytgbnku",
//     event: "Product Viewed",
//     type: "track",
//     userId: "89iu789i-drtyg6"
//     }
// );
// analytics.track({
//     properties: {
//       cart_id: "cart1234",
//       product_id: "product123456",
//       sku : "G-32",
//       category : "Games",
//       name: "Monopoly : 3rd Edition",
//       brand: "Hasbro",
//       variant: "200 pieces",
//       price: 18.99,
//       quantity: 1,
//       coupon: "MAYDEALS",
//       position: 3
//     },
//     context:{
//         traits: {
//             email: "cynthiasilva@profitfy.me",
//             phone: "5511979506004",
//             gender: "f",
//             name: "Cynthia Silva",
//             address: {
//                 city: "East Greenwich",
//                 state: "RI",
//                 postalCode: "02818",
//                 country: "USA"
//             }
//         }
//     },
//     event: "Product Added",
//     type: "track",
//     anonymousId:"345678okjg87ytgbnku",
//     userId: "89iu789i-drtyg6"
//     }
// );
// analytics.track({
//     properties: {
//       cart_id: "cart1234",
//       product_id: "product123456",
//       sku : "G-32",
//       category : "Games",
//       name: "Monopoly : 3rd Edition",
//       brand: "Hasbro",
//       variant: "200 pieces",
//       price: 18.99,
//       quantity: 1,
//       coupon: "MAYDEALS",
//       position: 3
//     },
//     context:{
//         traits: {
//             email: "cynthiasilva@profitfy.me",
//             phone: "5511979506004",
//             gender: "f",
//             name: "Cynthia Silva",
//             address: {
//                 city: "East Greenwich",
//                 state: "RI",
//                 postalCode: "02818",
//                 country: "USA"
//             }
//         }
//     },
//     event: "Product Removed",
//     type: "track",
//     userId: "89iu789i-drtyg6",
//     anonymousId:"345678okjg87ytgbnku"
//     }
// );

    
// analytics.group({
//     groupId: 'store-y78ijhg',
//     userId: '89iu789i-drtyg6',
//     email: 'cynthiasilva@profitfy.me',
//     traits: {
//         email: 'cynthiasilva@profitfy.me',
//         website: 'https://www.example.com',
//         name: 'Example Inc.',
//     },
//     userId: '89iu789i-drtyg6',
//     anonymousId:"345678okjg87ytgbnku"
// });

// }
// triggerAllEvents()

/* middleware */
// accent body data
app.use(express.urlencoded({ extended: true }));
// overrides incoming post to DELETE/PUT
app.use(methodOverride('_method'));

// app.use(express.session({
//     secret: analytics,
//     cookie: { domain:'http://localhost:4000/'},
// }));

<<<<<<< HEAD
//app.use((req, res, next) => {
//    console.log(`${req.method} ${req.originalUrl}`);
=======
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
>>>>>>> origin/master
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
<<<<<<< HEAD
   // next();
//})
=======
    next();
})
>>>>>>> origin/master
const context = {
    // Motivate : db.Motivate
    page_category : "Minifi | ",
    page_title : "Home",
    analytics : analytics
}
/* Routes */
app.get('/',async (req, res) => {
    // render("file", context)
    // console.log('hi')
    // res.send('MINIFI SERVER IS OFFICIALLY CONNECTED!')
    try {
        // const foundChi =  db.Chi.find({});
        await res.render('index',
        context = context
    )}
    catch (error) {
        console.log(error)
        return res.send({message: `Internal Server Error: check server.js file ${error}`});
    };
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
  


