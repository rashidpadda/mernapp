const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1/mern_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var conn=mongoose.Collection;




const uploadSchema = new mongoose.Schema({
   
    imagename:String,

  

});

// model

const uploadModel = mongoose.model('upload_files', uploadSchema);

module.exports = uploadModel;