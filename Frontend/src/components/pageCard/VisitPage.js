import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageCard from "./PageCard";
import pages from "../../static/pages";
import windowPosition from '../windowPosition';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
    },

    wrapper:{
        display: 'grid',
        justifyContent: 'center',
        width: '90%',
        gridTemplateColumns: 'repeat(auto-fit, minmax(30em, 30vw))',
        gridColumnGap: '2vw',
        gridRowGap: '2vw',
    },

    bgDesign:{
        // --tw-bg-opacity: 1;
        backgroundColor: 'rgba(255,205,0,var(--tw-bg-opacity))'
    }
    
}));

export default function VisitPage () {
    const classes = useStyles();
    const opened = windowPosition('firstDisplay');

    return(
        <div id="visitPage" className={classes.root} style={{margin:'auto'}}>
            <div className={classes.root} style={{width:'90%'}}>
                <div className={classes.wrapper}>
                    <div className={classes.root}>
                        <PageCard page={pages[0]} opened={opened}/>
                    </div>
                    <div className={classes.root}>
                        <PageCard page={pages[1]} opened={opened}/>
                    </div>
                </div>
            </div>

        </div>
    )
}