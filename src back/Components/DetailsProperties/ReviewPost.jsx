import React from 'react'
import { TextArea } from '../Ui/Fields'

function ReviewPost() {
    return (
        <div className="review-post mb-4">
            <TextArea placeholder={"Add your review..."} row={6} />
            <button className="btn btn-primary2  d-block ms-auto">Add Review</button>
        </div>
    )
}

export default ReviewPost