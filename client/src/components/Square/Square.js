import React from "react";
import "./Square.css";

const Square = props =>
    <div className="col-md-3">
        <button className="image" onClick={props.onClick} >
            <img src={"./images/" + props.image} />
        </button>
    </div>

export default Square;

