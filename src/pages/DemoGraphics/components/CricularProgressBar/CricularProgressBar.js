import React, { useState } from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CricularProgressBar = (props) => {
    return (
        <CircularProgressbar
            className={props.customclass ? props.customclass : 'w-14 h-14 font-bold'}
            value={props.percent}
            text={`${props.percent}`
            }
            strokeWidth="12"
            styles={
                buildStyles({
                    strokeLinecap: "butt",
                    textSize: "24px",
                    pathColor: "gold",
                    trailColor: '#ccc'
                })
            }
        />
    )
}

export default CricularProgressBar;