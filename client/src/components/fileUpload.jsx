import React,{Component} from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';


// onChangeHandler=event=>{

//   console.log(event.target.files[0])

// }
class FileUpload extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        percentCompleted: 0
      

      }
  }
  onChangeHandler=event=>{
    // console.log(event.target.files[0]);
    this.setState({   
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

// uploadFileProgressBar=({target:{files}})=>{
//   console.log(files[0])
//   let data= new FormData();
//   data.append('file',files[0]);
// }


  onClickHandler = (event) => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post("/api/upload", data, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent)
        let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);

        this.setState({
          percentCompleted:percentCompleted
        }, ()=>{
          setTimeout(()=>{
            this.setState({uploadPercentage:percentCompleted})

          },1000);
        })
      
      }
     })

.then(res => { // then print response status
    console.log('Data', res.data)
    this.props.myfunction(res.data.filepath);
    // alert("upload File is " + res.data.fileName );
 })
}
  render() { 

    const percentage =this.state.percentCompleted;
    return (   
        <div className="form-group files container">      
        
            <h2 className="text-center mb-3 mt-5">upload your file</h2>
            {percentage>0 && <ProgressBar now={percentage} label={`${percentage}%`} />}
            <input type="file" name="file"  onChange={this.onChangeHandler}/> 
            <button type="button" className="btn btn-secondary btn-sm"  onClick={this.onClickHandler}>upload</button> 
            <button className="ml-5 btn btn-primary btn-sm">Total Images  {this.props.imagesTotalCount}</button>        
        </div>


);
};
}

 
export default FileUpload;