import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import { addToCart } from './Cart'


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
      <Grid style={{ padding: 10 }}>
        <Card sx={{ maxWidth: 400, minWidth: 300 }}>
          <CardActionArea onClick={() => addToCart(product._id)}  >
            <Card sx={{ maxHeight: 250 }}>
              <CardMedia
                component="img"
                height="250"
                //we will change img later DONT FORGET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                image={`images/${product.coverimg}`}
                alt="green iguana"
              />
            </Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.productName}
                {product.productCategory}
              </Typography>
              <p>RM {product.productPrice}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid >
    </React.Fragment>
  );
}