import React from "react";
import classes from "./MenuAva.module.css";
import Card from "../UI/Card";
import MealList from "./MealList";
const OurSpeciality = [
  {
    id: "m1",
    name: "The Indulgence Burger",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "The X Burger",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "The Douche Buerger",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function MenuAvailable() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {OurSpeciality.map((meal) => 
            <MealList key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
          )}
        </ul>
      </Card>
    </section>
  );
}

export default MenuAvailable;
