import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Imported Components
import MealItem from '../Meal/MealItem';


const GreekCuision = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Greek";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setItem(data.meals)
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  return (
    <div>
      <div className='container pt-5'>
        <Link to='/'   style={{ textDecoration : "none"}}> 
        <div className='BackButton-div text-start d-flex ' style={{ marginTop: "9%" }}>
          <i className='	fa fa-angle-double-left fa-2x mt-1 ms-3 text-white'></i>
          <h4 className='fw-bold mt-1 ms-2 text-white'>Home</h4>
        </div>
        </Link>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Greek Cuisine's</h2>
          <div className='line ms-1'></div>
        </div>
        <div className='mt-4 catagory-discription p-2'>
          Souvlaki and gyro are famous Greek street foods. Souvlaki refers to skewered and grilled pieces of meat, commonly pork or chicken, served with pita bread, tzatziki sauce, and garnishes. Gyro consists of thinly sliced meat (traditionally pork or chicken) wrapped in pita bread with various toppings and sauces.<br />\
          Spanakopita and tyropita are savory pastries that are popular in Greek cuisine. Spanakopita is made with layers of phyllo dough filled with spinach, feta cheese, herbs, and onions. Tyropita, on the other hand, is filled with a mixture of cheeses, such as feta and ricotta.<br />
          Baklava is a sweet pastry made with layers of phyllo dough, nuts (usually walnuts or pistachios), and honey syrup. It is a popular dessert in Greek cuisine and is known for its rich, sweet, and flaky texture.
        </div>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Some Popular Recipes Greek Cuisions's </h2>
          <div className='line ms-1'></div>
        </div>
        <div className="d-flex flex-wrap justify-content-center ">
          <MealItem data={item} />
        </div>

      </div>
    </div>
  )
}

export default GreekCuision
