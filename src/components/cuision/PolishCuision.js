import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Imported Components
import MealItem from '../Meal/MealItem';

const ThaiCuision = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Polish";
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
        <Link to='/'   style={{ textDecoration : "none"}}> <div className='BackButton-div text-start d-flex ' style={{ marginTop: "9%" }}>
          <i className='	fa fa-angle-double-left fa-2x mt-1 ms-3 text-white'></i>
          <h4 className='fw-bold mt-1 ms-2 text-white'>Home</h4>
        </div>
        </Link>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Polish Cuisine's</h2>
          <div className='line ms-1'></div>
        </div>
        <div className='mt-4 catagory-discription p-2'>
          Potatoes, grains (such as wheat, rye, and barley), and bread are staple foods in Polish cuisine. Pierogi, a type of dumpling, are a beloved Polish dish and can be filled with various ingredients, including potatoes, cheese, meat, mushrooms, and fruits for sweet variations.<br />
          Meat holds a prominent place in Polish cuisine. Pork is the most commonly consumed meat, followed by beef, chicken, and game meats. Traditional Polish meat dishes include bigos (hunter's stew), kotlet schabowy (breaded pork cutlet), kielbasa (sausage), and gołąbki (stuffed cabbage rolls).<br />
          Dairy products are widely used in Polish cuisine. Butter, sour cream, and various types of cheese, such as Oscypek (smoked sheep's cheese) and Twaróg (cottage cheese), are common ingredients in many Polish dishes. They add richness and flavor to the cuisine.
        </div>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Some Popular Recipes Polish Cuisions's </h2>
          <div className='line ms-1'></div>
        </div>
        <div className="d-flex flex-wrap justify-content-center ">
          <MealItem data={item} />
        </div>

      </div>
    </div>
  )
}

export default ThaiCuision
