import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageCard from "./PageCard";
import pages from "../static/pages";
import { flexbox } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    },
}));

export default function VisitPage () {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <PageCard page={pages[0]} />
            <PageCard page={pages[1]} />
        </div>
    )
}