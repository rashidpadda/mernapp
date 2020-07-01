const express = require('express');
const multer = require('multer');


const Router = express.Router();

const BlogPost = require('../model/blogpost');
const comments = require('../model/addComment');


const fileUpload=require('express-fileupload');
// const uploadModel =require('../client/modules/upload')
// const addcomment = require('../model/addComment')

Router.use(fileUpload());

Router.post('/upload',(req,res)=>{
    if(req.files==null){
        return res.status(400).json({msg:'No file Upload'});

    }
    const file = req.files.file;

    file.mv(`${__dirname}/../uploads/${file.name}`, err =>{
        if (err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({fileName:file.name, filepath:`/uploads/${file.name}`});
    });
})













// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + file.originalname)
//     }
//   })
  
//   var upload = multer({ storage: storage })













// /*single file upload*/
// Router.post('/upload', upload.single('file'), function(req, res, next) {

//     const file = req.files.file;

//     file.mv(`${__dirname}/../uploads/${file.name}`, err =>{
//         if (err){
//             console.error(err);
//             return res.status(500).send(err);
//         }

//         res.json({fileName:file.name, filepath:`/uploads/${file.name}`});
//     });




//     var fileinfo = req.file;
//     var title = req.body.title;
//     console.log(title);
//     res.send(fileinfo);
//   })
  
//   /*multiple files upload*/
//   Router.post('/uploads', upload.array('file', 5), function(req, res, next) {
//     var fileinfo = req.files;
//     var title = req.body.title;
//     console.log(title);
//     res.send(fileinfo);
//   })
  




Router.get('/blogs',function(req,res){
    // const data ={
    //     username:"rashidpadda",
    //     age:26
    // };

    BlogPost.find({})
    .then((data)=>{
        console.log('Data:', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ', error);
    });

 

   
})

Router.post('/blogs/save',(req,res)=>{
    const data = req.body;
    const newBlogPost = new BlogPost(data);

newBlogPost.save((error)=>{
    if(error){
        res.status(500).json({msg: 'Sorry internal server errors'});
        return;
    }
        // BlogPost 

       return res.json({
            msg:'Your data has been saved ..!'
        });

})
 
})

Router.get('/comments',function(req,res){
    // const data ={
    //     username:"rashidpadda",
    //     age:26
    // };


    comments.find({})
    .then((comment)=>{
        console.log('Add comments:', comment);
        res.json(comment);
    })
    .catch((error)=>{
        console.log('error: ', error);
    });

 

   
})

Router.post('/comments/save',(req,res)=>{
    
    const comment = req.body;
    const newAddcomment = new comments(comment);



    newAddcomment.save((error)=>{
    if(error){
        res.status(500).json({msg: 'Sorry internal  your comment not save server errors'});
        return;
    }
        // BlogPost 

       return res.json({
            msg:'Your comment has been saved ..!'
        });

})
 
})





// Router.get('/upload', function(req, res,next ){
//     res.render('upload-file', {title: 'Upload-file', success:''})
// })

Router.get('/name',function(req,res){
    const data ={
        username:"peterson",
        age:26
        
    }; 
    res.json(data);
})


module.exports = Router;