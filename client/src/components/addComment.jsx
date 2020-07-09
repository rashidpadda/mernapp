import React,{Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import FileUpload from "./fileUpload";
// var multer = require('multer');


  

class AddComments extends Component {
    state = { 
        comment:'',
        uploadfile:''
     }

    //  componentDidMount=()=>{
    //     this.addcommentPost();
    //   };
   
      addcommentPost=()=>{
  
        // event.preventDefault()
        const payload = { 
          comment:this.state.comment,
          uploadfile:this.state.uploadfile
          // uploadImage:this.state.uploadImage
        }; 
        
        axios({
          url:'/api/comments/save',
          method:'POST',
          data:payload
        })
        .then(()=>{
          console.log("Data has been sent to the server");
          this.resetUserInputs();    
        })
        .catch(()=>{
          console.log('Internal server Error');
        })

      }
  
      resetUserInputs =() =>{
        this.setState({
          comment:'',
          uploadfile:''
          // uploadImage:''


        });
      };

addCommentToState=(comment)=>{

  // console.log("hello comment" , comment.target.value);
  
  this.setState({
    comment:comment.target.value,
    // uploadImage:comment.target.value
  })

}

addFileToState=(fileName)=>{
  console.log(fileName);
  this.setState({
    uploadfile:fileName

  })
}


    render() { 
        return (  
            <div >
             
              <FileUpload  myfunction={this.addFileToState} />
              <div className="container">
                    <input type="text" name="comment" id="" className="form-control mb-3" onChange={this.addCommentToState} required/>
                    <Link to='/formData'>
                        <button type="button " className="form-control btn btn-success btn-sm "  onClick={this.addcommentPost}>Submit</button>
                    </Link>
                   </div>
             </div>  
         
        );
    }
}
 
export default AddComments;