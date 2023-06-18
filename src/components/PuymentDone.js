import React from "react";
import "./style/PuymentDone.css";
function PuymentDone() {
  return (
    <div className="puyment-done">
      <div className="puyment-done-container">
        <h1 className="puyment-done-massage">Payment Done!</h1>
        <p className="puyment-done-p">
          Your payment has been successfully processed.
        </p>
      </div>
    </div>
  );
}

export default PuymentDone;
