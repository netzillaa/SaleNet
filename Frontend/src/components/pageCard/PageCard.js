import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardActionArea, CardActions } from '@mui/material';
import Collapse from '@mui/material/Collapse';

const useStyles = makeStyles((theme) => ({
    cardTitle:{
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '10rem',
    },
}));

export default function PageCard({page, opened}) {
// export default function PageCard({page}) {

    const classes = useStyles();

    return (
        <Collapse in={opened} { ... (opened ? {timeout:1000} : {})}>
            <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                height="auto"
                image={page.imageUrl}
                />
                <CardContent>
                <Typography style={{fontWeight: 'bold', fontSize: '2vw', fontFamily: 'Nunito'}}>
                    {page.title}
                </Typography>
                <Typography color="text.secondary" style={{color: 'black', fontSize: '1vw', fontFamily: 'Nunito'}}>
                    {page.desc}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" style={{fontSize: '1.2vw'}}>
                View
                </Button>
            </CardActions>
            </Card>
        </Collapse>
    );
}