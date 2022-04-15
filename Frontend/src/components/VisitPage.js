import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageCard from "./PageCard";
import pages from "../static/pages";
import { flexbox } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        // backgroundImage: 'url(https://img.freepik.com/free-vector/white-background-with-stripe-texture_105940-672.jpg)',
        // backgroundSize: '100%',
    },

    wrapper:{
        display: 'grid',
        justifyContent: 'center',
        width: '90%',
        gridTemplateColumns: 'repeat(auto-fit, minmax(5em, 52em))',
        gridColumnGap: '2vw',
    },
    
}));

export default function VisitPage () {
    const classes = useStyles();

    return(
        <>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <PageCard page={pages[0]} />
                    <PageCard page={pages[1]} />
                </div>
            </div>

        </>
    )
}