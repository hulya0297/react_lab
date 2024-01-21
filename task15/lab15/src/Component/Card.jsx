import React from "react";
import  './card.css'
import Button from "./Button";


function Card(props) {
  return (
    
    <div className="section_main">
      <div className="card">
      <div className="card_body">
        <h3 className="card-title">{props.title}</h3>
        <p className="price">{props.price}</p>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <Button/>
    </div>
    
    </div>
    
  );
}

export default Card;
