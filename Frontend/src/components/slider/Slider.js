import React, {useState} from 'react';
import classNames from "classnames";
import BtnSlider from './BtnSlider';
import slides from './sliderImages';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root:{
        margin:'auto',
        width: '90%',
        height: '34.6vw',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },

    slide:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: '0',
        transition: 'opacity ease-in-out 0.4s'
    },

    active:{
        opacity: '1'
    },

    containerDots:{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex'
    },

    dot:{
        width: '1.3vw',
        height: '1.3vw',
        minWidth: '8px',
        minHeight: '8px',
        borderRadius: '50%',
        border: '3px solid #f1f1f1',
        margin: '0 5px',
        background: '#f1f1f1',
        cursor: 'pointer'
      },

      activeDot: {
        background: 'rgb(32, 32, 32)'
      },

      btnContainer:{
        right: '5vw',
        bottom: '4vw',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
      },

      contactBtn:{
        // backgroundColor:'#01027B',
        backgroundColor:'#000154',
        borderRadius: '30px',
        color: 'white',
        padding: '1vw',
        paddingRight: '2vw',
        paddingLeft: '2vw',
        fontSize: '1vw',
        fontWeight: 'bold',
        border: 'none',
        marginRight: '1vw'
      },

      learnMoreBtn:{
        color: 'black',
        fontSize: '1.2vw',
        fontWeight: '900',
        borderBottom: '0.3vw black solid',
        padding: '0.5vw',
        borderBox: 'box-sizing',
        cursor: 'pointer'
      },
}));

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);
    const classes = useStyles();

    function mouseOver(event){
        event.target.style.backgroundColor='#01027B';
    }
  
    function mouseOut(event){
      event.target.style.backgroundColor='#000154';
    }

    const nextSlide = () => {
        if(slideIndex !== slides.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === slides.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(slides.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={classes.root}>
            {slides.map((obj, index) => {
                return (
                    <div
                    key={obj}
                    className={slideIndex === index + 1 ? classNames(classes.slide, classes.active) : classes.slide}
                    >
                        <img 
                        src={slides[index].image} 
                        style={{height:'100%', width:'100%', objectFit: 'cover'}}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className={classes.containerDots}>
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? classNames(classes.dot, classes.activeDot) : classes.dot}
                    ></div>
                ))}
            </div>

            <div className={classes.btnContainer}>
                <button className={classes.contactBtn}
                        onMouseOver={mouseOver}
                        onMouseOut={mouseOut}
                        component={Link} to='/support'>
                        Contact Us
                </button>
                <div className={classes.learnMoreBtn}
                     component={Link} to='/explore'>Learn More</div>
            </div>
        </div>
    )
}