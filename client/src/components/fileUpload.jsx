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
    return (   
        <div className="form-group files container">
            <h2 className="text-center mb-3 mt-5">upload your file</h2>
            <input type="file" name="file"  onChange={this.onChangeHandler} />
            {/* {console.log(onChangeHandler)} */}
            <button type="button" className="btn btn-secondary btn-sm"  onClick={this.onClickHandler}>upload</button>
        </div>


);
};
}

 
export default FileUpload;