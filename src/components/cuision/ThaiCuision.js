import React, { useState, useEffect } from 'react';
import MealItem from '../Meal/MealItem';
import { Link } from 'react-router-dom';

const ThaiCuision = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai";
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
        <Link to='/'   style={{ textDecoration : "none"}}> <div className='BackButton-div text-start d-flex ' style={{ marginTop: "9%" }}>
          <i className='	fa fa-angle-double-left fa-2x mt-1 ms-3 text-white'></i>
          <h4 className='fw-bold mt-1 ms-2 text-white'>Home</h4>
        </div>
        </Link>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Thai Cuisine's</h2>
          <div className='line ms-1'></div>
        </div>
        <div className='mt-4 catagory-discription p-2'>
          Thai curries are a highlight of the cuisine. They come in various colors and flavors, such as green curry, red curry, yellow curry, and Massaman curry. These curries are made with a paste of fresh herbs, spices, and coconut milk, and are often cooked with meat, seafood, or vegetables.<br />
          Thai cuisine features a range of aromatic spices and herbs that contribute to its distinctive flavors. Some commonly used spices and herbs include lemongrass, Thai basil, galangal, kaffir lime leaves, coriander, and chili peppers. These ingredients lend depth and complexity to Thai dishes.<br />
          Thailand is renowned for its vibrant street food culture. From bustling night markets to roadside stalls, street vendors offer an array of delicious and affordable dishes. Popular street food includes Pad Thai (stir-fried rice noodles), Som Tum (green papaya salad), Satay (grilled skewers), and Mango Sticky Rice.
        </div>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Some Popular Recipes Thai Cuisions's </h2>
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
