import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Catalogue(props) {
  return (
    <div className=" px-8 py-10 mt-5 ">
      <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          src={props.link}
        />
        <CardContent className = "bg-slate-300">
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className = "bg-slate-300">
        <Button variant="contained" size="medium" color="success">
          Explore
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default Catalogue;
