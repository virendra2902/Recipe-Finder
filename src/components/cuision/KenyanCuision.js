import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Imported Components
import MealItem from '../Meal/MealItem';

const KenyanCuision = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Kenyan";
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
      <div className='container pt-5' >
        <Link to='/'   style={{ textDecoration : "none"}}> <div className='BackButton-div text-start d-flex ' style={{ marginTop: "9%" }}>
          <i className='	fa fa-angle-double-left fa-2x mt-1 ms-3 text-white'></i>
          <h4 className='fw-bold mt-1 ms-2 text-white'>Home</h4>
        </div>
        </Link>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Kenyan Cuisine's</h2>
          <div className='line ms-1'></div>
        </div>
        <div className='mt-4 catagory-discription p-2'>
          Ugali, a thick maize meal porridge, is the most common staple food in Kenya. It is typically served with sukuma wiki (collard greens), nyama choma (grilled meat), or other dishes. Rice, chapati (Indian-style flatbread), and matoke (plantains) are also popular staple foods in different regions of the country. <br />
          Kenya's favorable climate allows for the cultivation of a wide variety of fruits. Mangoes, bananas, pineapples, passion fruit, avocados, and papayas are some of the delicious and abundant fruits found in Kenyan cuisine. They are enjoyed fresh or used in juices, smoothies, and desserts.
        </div>
        <div className='mt-4'>
          <h2 className='' style={{ color: "#642605" }}>Some Popular Recipes Kenyan Cuisions's</h2>
          <div className='line ms-1'></div>
        </div>
        <div className="d-flex flex-wrap justify-content-center ">
          <MealItem data={item} />
        </div>

      </div>
    </div>
  )
}

export default KenyanCuision


