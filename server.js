const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
// const bodyParser = require ("body-parser");
// const { stringify } = require('querystring');


const app =express();
 const PORT =process.env.PORT || 8080
const routes = require('./routes/api')


//  rashid1122334455
// const MONGODB_URL='mongodb+srv://rashid1122334455:rashid1122334455@merndb-znojx.mongodb.net/<dbname>?retryWrites=true&w=majority';


 mongoose.connect(process.env.MONGOLAB_GREEN_URI || 'mongodb://127.0.0.1/mern_db',{
     useNewUrlParser: true,
     useUnifiedTopology: true
 })

 
//  for check the mongoose connection
mongoose.connection.on('connected', ()=>{
    console.log("yahoo! mongoose is connected...");
    
})

// data parsing
app.use(express.static('uploads'))
app.use(express.json());
app.use(express.urlencoded({extended:false }));

 




// saving data in our mongo database

// const data={
//     title:'Welcome to MERN Stack development',
//     body:'Hello Here is the full stack developer form Narowal'
// };



// instance of model
// const newBlogPost = new BlogPost(data);

// newBlogPost.save((error)=>{
//     if(error){
//         console.log('ooops! thing is happened');
        
//     }else{
//         console.log("yahoo.! data have been saved ...");
        
//     }
// })




//  http request loger
// every single http request gone from morgan through terminal  
app.use(morgan('tiny'))

app.use('/api',routes);


// 3 step heroku

if(process.env.NODE_ENV ==='production'){

    app.use(express.static('client/build'));
}





app.listen(PORT, console.log(`server is runing on ${PORT}`));