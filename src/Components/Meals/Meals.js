import React from "react";
import MealsSumery from "./MealsSum";
import MenuAvailable from "./MenuAvailable";
import MealsForm from "./MealsForm";

function Meals(){
    return <React.Fragment>
        <MealsSumery />
        <MenuAvailable></MenuAvailable>

    </React.Fragment>


}

export default Meals;