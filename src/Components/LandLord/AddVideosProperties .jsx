import React, { useState } from 'react';
import iconVideo from '../../assets/imgs/mingcute_video-line.svg';
import LightGallery from "lightgallery/react";


// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";
const AddVideosProperties = () => {
  const [videos, setVideos] = useState([]);
  const [additionalDivVisible, setAdditionalDivVisible] = useState(true);
  const handleVideoChange = (e) => {
    const fileList = e.target.files;
    const newVideos = [];

    for (let i = 0; i < fileList.length; i++) {
      const videoUrl = URL.createObjectURL(fileList[i]);
      newVideos.push(videoUrl);
    }

    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
    setAdditionalDivVisible(false);
  };


  return (
    <section className="addImgsProperties mb-4">
      <h3 className='mb-3'>Videos</h3>
      <div className="row">
        <div className={`col-lg-3 ${additionalDivVisible ? '' : 'order-last'}`} >
          <input type="file" id='addVideo' onChange={handleVideoChange} multiple accept="video/*" />
          <label htmlFor="addVideo" className='addImgs d-flex justify-content-center align-items-center flex-column mb-lg-0 mb-3'>
            <img src={iconVideo} alt="" className='mb-1' />
            <span>Add Video </span>
          </label>
        </div>
        {additionalDivVisible && (
          <div className="col-lg-3"  >
            <div className="border-img mb-3"></div>
          </div>
        )}
        {videos.map((video, index) => (
          <LightGallery plugins={[lgThumbnail, lgVideo]} elementClassNames="col-lg-3"  >
            <div className="border-img mb-3" key={index} data-video={`{"source": [{"src": "${video}", "type": "video/mp4"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}`}>
              <video>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </LightGallery>
        ))}

      </div>
    </section>

  );
}

export default AddVideosProperties;
