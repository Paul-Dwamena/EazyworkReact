import React, { Component } from 'react';
import axios from 'axios'
import './styles.css'
import { notifyError,notifySuccess } from './Notification';
import { Spinner } from './Spinner';

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null],
            loading:false,
            image:[null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    
    }


    handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
      };
    

    async uploadFiles(e) {
        e.preventDefault()
        this.setState({loading:true})
        try {
            let m=this.state.file
            let form_data = new FormData();
            form_data.append('file', this.state.file);
         const response = await axios.post(
           `http://127.0.0.1:8000/api/v1/auth/upload_image/`,form_data,{
            headers: {
              'content-type': 'multipart/form-data'
            }
        })
           this.setState({loading:false})
         notifySuccess('Images uploaded successfully')
       } catch (error) {
        this.setState({loading:false})
         notifyError('There was an error');
       }

    }

  

    render() {
        return (
            <div>
                <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (       
                        <img src={url} alt="..."  />        
                    ))}
                </div>

                <div className="form-group">
              
                <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.uploadMultipleFiles} multiple required/>
                    {/* <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button> */}
                </div>
               
               
            </form >

<div className="form-group" >
<button className="btn btn-default verify-btn" onClick={this.uploadFiles}>{this.state.loading ? <Spinner />: null} Upload Images</button>


</div>

            </div>
            

            
        )
    }
}