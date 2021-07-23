import React,{useState} from 'react'
import ImageUploading from 'react-images-uploading';
import axios from 'axios';
import './styles.css'
import { notifyError,notifySuccess } from './Notification';
import { Spinner } from './Spinner';

const ImageUpload=()=> {
    let [images, setImages] = React.useState([]);
    const maxNumber = 2;
    const [loading,setLoading]=useState(false)
    
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      
      setImages(imageList);
    };


    const uploadimages = async() =>
    {
        try {
            setLoading(true)
            
            for(var a = 0; a<images.length; a++) {
            const fd = new FormData();
              fd.append('image', images[a]['file']);            
            const response=await axios.post(`http://127.0.0.1:8000/api/v1/auth/upload_image/`,fd
            )
            setLoading(false)
            notifySuccess('Images uploaded successfully')
 
           
          } }catch (error) {
              setLoading(false)
              notifyError('Error on the server')
            
            
          }
        }
    
            
            
         
    
         
        
    
    return (
        <div className="App">
     
        
      
        <div>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <div className="">
              <span style={{textAlign:"center",fontSize:"60px"}}><i class="fa fa-cloud-upload" aria-hidden="true"  onClick={onImageUpload} ></i></span>

               
                
            
              </div>
              <div className="row">
              {imageList.map((image, index) => (
                 
                   
                    <div key={index} className="col-md-6 col-sm-6">
                    <div class="con">
                    <img src={image['data_url']} width="150px" />
                    <i class="fas fa-trash" onClick={() => onImageRemove(index)}></i>
   
                    </div>
                
                  
                </div>
                    
                    
            
              ))}
            </div>
            </div>
          )}
        </ImageUploading>
        </div>
        <button className="btn verify-btn" onClick={() => uploadimages()} style={{marginTop:"30px"}}> {loading ? <Spinner />: null}Submit Image</button>
      </div>
    );
       
    
}

export default ImageUpload
