import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Title from './Title';
import { CardActionArea } from '@mui/material';


function preventDefault(event) {
  event.preventDefault();
}

export default function ProductCard(product) {

  let badgeText
  if (product.available === 0) {
    badgeText = "SOLD OUT"
  }

  return (
    <React.Fragment> 
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Card sx={{ maxHeight: 250 }}>
              <CardMedia
                component="img"
                height="250"
                image={`images/${product.coverimg}`}
                alt="green iguana"
              />
            </Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.title}
              </Typography>
              <p>{product.price} RM </p>
            </CardContent>
          </CardActionArea>
        </Card>
    </React.Fragment>
  );
}