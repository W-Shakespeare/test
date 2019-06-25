import React from "react";
import dash from "../img/dash.jpg";

function HotdogsDescription({ itemDescription, itemName }) {
  return (
    <div className="hotdogs-description">
      <div className="hotdogs-description-div">
        <div className="hotdogs-description-div-title">
          <div className="hotdogs-description-div-title-img">
            <img src={dash} />
          </div>
          <p class="title">{itemName}</p>
        </div>
        <div class="hotdogs-description-div-text">
          <p class="text">{itemDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default HotdogsDescription;
