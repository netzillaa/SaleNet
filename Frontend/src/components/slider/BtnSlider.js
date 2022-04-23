import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import prevBtn from './icon/leftBtn.png';
import nextBtn from './icon/rightBtn.png';

const useStyles = makeStyles(() => ({
    btn:{
        width: '3vw',
        height: '3vw',
        minWidth: '15px',
        minHeight: '15px',
        borderRadius: '50%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'rgb(255,255,255,0.3)',
        position: 'absolute',
    },

    btnRight:{
        right: '1vw',
    },

    btnLeft:{
        left: '1vw'
    },

    iconImg:{
        width: '3vw',
        height: '3vw',
        minWidth: '15px',
        minHeight: '15px',
    }
}));

export default function BtnSlider({ direction, moveSlide }) {
  
    const classes = useStyles();

    function mouseOver(event){
        event.target.style.backgroundColor='rgb(255,255,255,0.5)';
        event.target.style.borderRadius='50%';
    }
  
    function mouseOut(event){
    event.target.style.backgroundColor='rgb(255,255,255,0.3)';
      event.target.style.borderRadius='50%';
    }
  
    return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? classNames(classes.btn, classes.btnRight) : classNames(classes.btn, classes.btnLeft)}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <img src={direction === "next" ? nextBtn : prevBtn} className={classes.iconImg}/>
    </button>
  );
}