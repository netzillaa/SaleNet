import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

export default function Depositsss() {
  return (
    <React.Fragment>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        image="images/milk.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          Lizard
        </Typography>
        {/* <Typography variant="body2" color="text.secondary" > */}
          <p style={{fontSize: "11px"}}> Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica </p>
        {/* </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}