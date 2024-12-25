import React from "react";
import ReviewItem from "./ReviewItem";
import ReviewPost from "./ReviewPost";

function ReviewContainer() {
  return (
    <div className="review mt-4 ">
      <h3>Reviews </h3>
      <ReviewPost />
      <div className="row">
        <div className="col-12">
          <ReviewItem />
        </div>
        <div className="col-12">
          <ReviewItem />
        </div>
        <div className="col-12">
          <ReviewItem />
        </div>
        <div className="col-12">
          <ReviewItem />
        </div>
      </div>
    </div>
  );
}

export default ReviewContainer;
