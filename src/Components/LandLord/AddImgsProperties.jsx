import React, { useState } from 'react';
import iconImg from '../../assets/imgs/img.svg';
import iconCamera from '../../assets/imgs/Category-Camera.svg';

function AddImgsProperties() {
  const [images, setImages] = useState([]);
  const [additionalDivVisible, setAdditionalDivVisible] = useState(true);
  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const newImages = [];
    for (let i = 0; i < fileList.length; i++) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageDataUrl = event.target.result;
        newImages.push(imageDataUrl);
        if (i === fileList.length - 1) {
          setImages([...images, ...newImages]);
          setAdditionalDivVisible(false);
        }
      };
      reader.readAsDataURL(fileList[i]);
    }
  };

  return (
    <section className="addImgsProperties mb-4">
      <h3 className='mb-3'>Images</h3>
      <div className="row">
        <div className={`col-lg-3 ${additionalDivVisible ? '' : 'order-last'} `}>
          <input type="file" id='addImg' onChange={handleImageChange} multiple accept="image/*" />
          <label htmlFor="addImg" className='addImgs d-flex justify-content-center align-items-center flex-column mb-lg-0 mb-3'>
            <img src={iconImg} alt="" className='mb-1' />
            <span>Add Thumbnail to property <img src={iconCamera} className='ms-1' width={18} height={18} alt="" /></span>
          </label>
        </div>
        {additionalDivVisible && (
          <div className="col-lg-3">
            <div className="border-img mb-3">
            </div>
          </div>
        )}
        {images.map((image, index) => (
          <div className="col-lg-3">
            <div className="border-img mb-3">
              <img key={index} src={image} alt={`Thumbnail ${index}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AddImgsProperties;
