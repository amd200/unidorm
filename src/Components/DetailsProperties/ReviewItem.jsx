import React, { useState } from "react";
import img from "../../assets/imgs/Image.jpg";
import { Rating } from "react-simple-star-rating";

function ReviewItem() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="review-item border-bottom mb-4">
      <div className="d-flex align-items-start justify-content-between">
        <div className="review-destails d-flex align-items-center">
          <img src={img} alt="" className="me-3" />
          <div className="mt-2">
            <span className="rate-name d-block ">Kristin Watson</span>
            <Rating
              fillColor="#ff8a00"
              style={{ position: "relative", bottom: "8px" }}
              onClick={handleRating}
              size={19}
              readonly={true}
              initialValue={5}
            />
          </div>
        </div>
        <span className="time">5 days ago</span>
      </div>
      <p className="reate-description">
        Duis at ullamcorper nulla, eu dictum eros.
      </p>
    </div>
  );
}

export default ReviewItem;
