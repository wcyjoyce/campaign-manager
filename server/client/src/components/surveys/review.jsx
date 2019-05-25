import React from "react";

const Review = ({ onBack }) => {
  return (
    <div className="review">
      <h2>Please Review</h2>
      <div className="field-actions">
        <button className="btn btn-warning" onClick={onBack}>Back</button>
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default Review;
