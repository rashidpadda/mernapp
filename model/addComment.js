const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const addCommentSchema = new Schema({
   
    comment: String,
    uploadfile:String
  

  

});

// model

const comments = mongoose.model('comments', addCommentSchema);

module.exports = comments;