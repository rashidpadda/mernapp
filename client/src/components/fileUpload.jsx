import React,{Component} from 'react';
import axios from 'axios';


// onChangeHandler=event=>{

//   console.log(event.target.files[0])

// }
class FileUpload extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
  
      
  }
  onChangeHandler=event=>{
    // console.log(event.target.files[0]);
    this.setState({
      
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  onClickHandler = (event) => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post("/api/upload", data, { 
      // receive two    parameter endpoint url ,form data

  })
.then(res => { // then print response status
    console.log('Data', res.data)
   
    
    this.props.myfunction(res.data.filepath)

 })
}

  render() { 
    return (   <div className="container">
    <div className="row">
      <div className="offset-md-3 col-md-8">
        
        
        <div className="form-group files">
            <h2 className="text-center mb-3">upload your file</h2>
            <input type="file" name="file" className="form-control" onChange={this.onChangeHandler} />
            {/* {console.log(onChangeHandler)} */}
            <button type="button" className="btn btn-secondary"  onClick={this.onClickHandler}>upload</button>
        </div>
    
     
      
     </div>
  </div>
  </div>

);
};
}

 
export default FileUpload;
