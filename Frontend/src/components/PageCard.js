import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const cardStyle = {
    width: "30vw",
    height: '13vw'
};

export default function PageCard({page}) {
  return (
    <Card style={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="85vw"
          image={page.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {page.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {page.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
}