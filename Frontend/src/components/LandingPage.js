import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import VisitPage from "./pageCard/VisitPage";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link as Scroll } from 'react-scroll';
import Slider from "./slider/Slider";
import Header2 from "../.././src/components/Header2";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '5vw',
        paddingTop: '4vw',
    },

    wrapper: {
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(5em, 60em))',
        width: '90%',
        boxShadow: '-2px 4px 7px 0 grey',
        padding: '3vw',
        backgroundColor: 'white',
        borderRadius: '3vw',
        boxSizing: 'border-box',
        borderLeft: '3vw #FFDA00 solid'
    },

    word: {
        fontWeight: 'bold',
        fontSize: '1.5vw',
        marginBottom: '2vw',
        marginTop: '1vw'
    },

    salenet: {
        fontFamily: 'Tahoma, sans-serif',
        fontWeight: 'bolder',
        fontSize: '3vw',
        color: '#01027B'
    },

    pageImage: {
        width: 'auto',
        height: '22vw',
        minHeight: '200px',
        backgroundImage: 'url(https://i.pinimg.com/originals/99/1f/9e/991f9e7a79a5fc945310b8c54f0fb9d2.gif)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },

    startButton: {
        fontWeight: '900',
        fontSize: '1vw',
        marginBottom: '3vw',
        backgroundColor: '#FF8000',
        borderRadius: '30px',
        color: 'white',
        padding: '1vw',
        paddingRight: '2vw',
        paddingLeft: '2vw',
        fontSize: '1vw',
        fontWeight: 'bold',
        border: 'none',
    },

    addOn: {
        fontSize: '2.5vw',
        fontWeight: 'bolder',
        backgroundColor: 'rgb(255,255,255,0.2)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Courier New, monospace',
    }
}));

document.body.style.backgroundColor = '#ECECEC';

export default function LandingPage() {

    const classes = useStyles();

    function mouseOver(event) {
        event.target.style.backgroundColor = '#FFB000';
    }

    function mouseOut(event) {
        event.target.style.backgroundColor = '#FF8000';
    }

    return (
        <>
            <Header2 />
            <div style={{ paddingTop: '4vw' }} id='firstDisplay'>
                <Slider />
                <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <div>
                            <div className={classes.salenet}>
                                SaleNet &nbsp;
                                <span style={{ fontSize: '2vw' }}>POS System</span>
                            </div>
                            <div style={{ fontSize: '2vw', fontWeight: 'bold' }}>
                                Manage Your Business in the <span style={{ fontFamily: 'Courier New, monospace' }}>Easiest</span> Way
                            </div>

                            <p className={classes.word}>Grow More Efficienctly</p>

                            <Button className={classes.startButton}
                                onMouseOver={mouseOver}
                                onMouseOut={mouseOut}>Get Started</Button>
                        </div>
                        <div>
                            <div className={classes.pageImage}></div>
                        </div>

                    </div>
                </div>

                <div style={{ textAlign: 'center', paddingBottom: '8vw' }}>
                    <Scroll to="visitPage" smooth={true}>
                        <KeyboardArrowDownOutlinedIcon style={{ fontSize: '5vw', color: '#FF8000', cursor: 'pointer' }} />
                    </Scroll>
                </div>
                <VisitPage />
            </div>
        </>
    )
}   
