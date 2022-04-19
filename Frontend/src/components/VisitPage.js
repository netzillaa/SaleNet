import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageCard from "./PageCard";
import pages from "../static/pages";
import { flexbox } from "@mui/system";
import windowPosition from './windowPosition';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        // backgroundImage: 'url(https://img.freepik.com/free-vector/white-background-with-stripe-texture_105940-672.jpg)',
        // backgroundSize: '100%',
    },

    wrapper:{
        display: 'grid',
        justifyContent: 'center',
        width: '90%',
        gridTemplateColumns: 'repeat(auto-fit, minmax(40em, 60em))',
        gridColumnGap: '2vw',
        gridRowGap: '2vw',
    },
    
}));

export default function VisitPage () {
    const classes = useStyles();
    const opened = windowPosition('firstDisplay');

    return(
        <div id="visitPage">
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <div className={classes.root}>
                        <PageCard page={pages[0]} opened={opened}/>
                        {/* <PageCard page={pages[0]} /> */}
                        </div>
                    <div className={classes.root}>
                        <PageCard page={pages[1]} opened={opened}/>
                        {/* <PageCard page={pages[1]} /> */}
                        </div>
                </div>
            </div>

        </div>
    )
}