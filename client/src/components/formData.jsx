import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './style.css';




class formData extends Component {
  state = { 
    title:'',
    body:'',
    posts:[],
    comments:[],
    // uploadImage:''
   };

  componentDidMount=()=>{
     this.getBlogPost();
     this.getcomments();
   };

   getBlogPost=()=>{
     axios.get('/api/blogs')
     .then((response)=>{
       const data = response.data;
       this.setState({posts:data});
       console.log("data has been recevied..!");
     })
     .catch(()=>{
       alert('Error retriving details');
     });       
   }

   getcomments=()=>{
    axios.get('/api/comments')
    .then((res)=>{

      const data= res.data;
      this.setState({comments:data});
      // console.log('get Comment Function', comments);
  
    })
    .catch(()=>{
console.log('comments not recived');

    })

   }




//  handleChange=(event)=>{

//   const target = event.target;
//   const name = target.name;
//   const value = target.value;


// through object destrcuting

handleChange=({target})=>{
  const {name, value}= target;
  this.setState({
    [name]:value
  });

 };
submit=(event)=>{
  event.preventDefault();
 const payload={ 
    title:this.state.title,
  body:this.state.body
 }; 

// http request 

axios({
  url:'/api/blogs/save',
  method:'POST',
  data:payload
})

.then(()=>{
  console.log("Data has been sent to the server");
  this.resetUserInputs();
  this.getBlogPost();
  
})
.catch(()=>{
  console.log('Internal server Error');
  
})

}

resetUserInputs =() =>{
  this.setState({
    title:'',
    body: ''
  });
};


displayBlogPost = (posts) =>{
  if(!posts.length) return null;
  return posts.map((post, index)=>(
    <div key={index} className="blog-post_display">
      <h3>{post.title}</h3>
      <p>{post.body}</p>

    </div>

  ))
  

};


displayCommentPost = (comments) =>{
  if(!comments.length) return null;
  console.log(comments);
  return comments.map((comment, index)=>(
   
    <div key={index} className="comment-post_display">

      <h3>{comment.comment}</h3>
  {/* <img alt="uploaded pic" src={require(`../../../${comment.uploadfile}`)}></img> */}
  <img src={comment.uploadfile} style={{width:100, height:100}} alt="upload"/>
   {/* <img src={require(`../../../${comment.uploadfile}`)} alt="uploaded "/> */}

   {/* <img src={require(`../../..//uploads ${comment.uploadfile}`)} */}
      <div>
  </div>
    

    </div>

  ))
  

};


  render() { 
    // console.log('state: ', this.state);
    


    return (  
    <div className="app">
    <h1>Welcome to MERN stack Development</h1>
   <form onSubmit={this.submit}  >
   <div className="form-input">
     <input
     type="text"
     name="title"
     placeholder="Enter title"
     value={this.state.title}
     onChange={this.handleChange}
     >
     </input>
   </div>
   <div className="form-input">
     <textarea
     placeholder="Body"
     name="body"
     cols="30"
     rows="10"
     value={this.state.body}
     onChange={this.handleChange}
     >


     </textarea> 
   </div>
   <button>Submit</button>
   
 </form>
<div className="blog=">
{this.displayBlogPost(this.state.posts)}
</div> 



<Link to='/addcomment'>
<a name="submit" id="" className="btn btn-primary" href="/" role="button">Add Comment</a>
</Link>
{/* <img src={} alt=""/>
< */}
{/* <uploads /> */}

<h1 className="text-center">Here are my Comments</h1>
<div  className="comment-post_display">
{this.displayCommentPost(this.state.comments)}
    {/* {this.displayCommentPost(this.state.comments)} */}
{/* {this.displayCommentPost(this.state.uploadImage)} */}
   
    </div>

 </div>
 );
};
  }

 

export default formData;