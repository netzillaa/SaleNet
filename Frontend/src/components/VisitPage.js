import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PageCard from './PageCard';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh',
    }
}));

export default function VisitPage(){
    const classes = useStyles();

    return (
        <div ClassName={classes.root}>
            {/* <PageCard place={} /> */}
        </div>
    )
}