import React from "react";
import "./Card.scss";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import varius from "../../Assets/Images/varius.png";
import euTempure from "../../Assets/Images/eu-tempus.png";
import blandit from "../../Assets/Images/blandit.png";
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

      {/* <Card sx={{ maxWidth: 345, padding: 2.3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="294"
            image={varius}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </div>
  );
};

export default Cards;
