import React from "react";
import "./Card.scss";

import { Button } from "@mui/material";
const Cards = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <img src={props.img} alt="" />
        <div className="card__description">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <div className="price__book">
            <span>$25,253</span>
            <Button variant="contained" id="btn__book">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
