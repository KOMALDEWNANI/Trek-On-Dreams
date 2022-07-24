import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function BookingCard() {
  return (
    <div className=" px-8 py-10 mt-5 ">
      <Card  style={{ maxWidth: 400, marginLeft:800, marginTop: -200 }}>
      <CardActionArea >
        <CardContent className = "bg-slate-300">
          <Typography gutterBottom variant="h5" component="div">
            <h1 class="italic bold text-4xl">Price/person</h1>
            <h3 class="non-italic">Includes</h3>
            <p class="text-base">Travel / Food / Trekking / Instructor / Accomodation / GST </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className = "bg-slate-300">
        <Button style={{marginTop:-20}} variant="contained" size="medium" >
          Book Now
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default BookingCard;
