import React, { useState, useEffect } from 'react';
import MealItem from '../Meal/MealItem';
import { Link } from 'react-router-dom';

const RussianCuision = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Russian";
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
      <div className='container'>
        <Link to='/'> <div className='BackButton-div text-start d-flex ' style={{ marginTop: "9%" }}>
          <i className='	fa fa-angle-double-left fa-2x mt-1 ms-3 text-white'></i>
          <h4 className='fw-bold mt-1 ms-2 text-white'>Home</h4>
        </div>
        </Link>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Russian Cuisine's</h2>
          <div className='line ms-1'></div>
        </div>
        <div className='mt-4 catagory-discription p-2'>
          Blini, thin pancakes made from buckwheat or wheat flour, are a popular Russian dish. They can be served with various fillings, such as sour cream, butter, caviar, smoked salmon, or jam. Blini are commonly enjoyed during Maslenitsa, a traditional Russian holiday celebrating the end of winter.<br />
          Pickled and preserved foods have a long history in Russian cuisine, as they were essential for preserving food during long winters. Pickled cucumbers, sauerkraut, and marinated mushrooms are commonly enjoyed. Additionally, salted and cured fish, like salted herring, are popular in coastal regions.<br />
          Caviar holds a special place in Russian cuisine and is considered a delicacy. Sturgeon caviar, particularly beluga and ossetra, is highly regarded. It is often served on blini, as a garnish, or used as an ingredient in various dishes.
        </div>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Some Popular Recipes Russian Cuisions's </h2>
          <div className='line ms-1'></div>
        </div>
        <div className="d-flex flex-wrap justify-content-center ">
          <MealItem data={item} />
        </div>

      </div>
    </div>
  )
}

export default RussianCuision
