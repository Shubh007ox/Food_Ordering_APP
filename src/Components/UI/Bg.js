import React from "react";
import classes from "./Bg.module.css"
import Burger from '../../Image/Burger.jpg';

function Bg(){
    return (
    <div>
        <img src={Burger} alt="Pick your grab!!" />
    </div>
    )
}

export default Bg;