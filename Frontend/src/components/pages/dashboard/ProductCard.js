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

export default function ProductCard({ addProductToCart, calcTotalPrice, ...props }) {

  const addProductAndGetTotalPrice = (...props) => {
    addProductToCart(...props)
    calcTotalPrice()
  };

  return (
    <React.Fragment>
      <Grid style={{ padding: 10 }}>
        <Card sx={{ maxWidth: 400, minWidth: 300 }}>
          <CardActionArea onClick={() => addProductAndGetTotalPrice({ ...props })}>
            <Card sx={{ maxHeight: 250 }}>
              <CardMedia
                component="img"
                height="250"
                image={props.productImage}
                alt="Product Image"
              />
            </Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {props.productName}
                <br></br>
                {props.productCategory}
              </Typography>
              <p>RM {props.productPrice}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid >
    </React.Fragment>
  );
}