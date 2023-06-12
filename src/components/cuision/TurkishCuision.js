import React, { useState, useEffect } from 'react';
import MealItem from '../Meal/MealItem';
import { Link } from 'react-router-dom';

const TurkishCuision = () => {
    const [data, setdata] = useState([]);
    const [item, setItem] = useState("");
    useEffect(() => {
          const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
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
            <Link to='/'   style={{ textDecoration : "none"}}> <div className='BackButton-div text-start d-flex ' style={{marginTop : "9%"}}>
                <i className='	fa fa-angle-double-left fa-2x mt-1 ms-3 text-white'></i>
                <h4 className='fw-bold mt-1 ms-2 text-white'>Home</h4>
            </div>
            </Link>
            <div className='mt-4'>
                <h2 className='' style={{ color: "#642605" }}>Turkish Cuisine's</h2>
                <div className='line ms-1'></div>
            </div>
            <div className='mt-4 catagory-discription p-2'>
            Turkish cuisine has been shaped by a variety of influences throughout history. The culinary traditions of the Ottoman Empire, which spanned several centuries, have had a significant impact. Additionally, Turkish cuisine has been influenced by the cuisines of neighboring countries and regions, such as Greece, the Middle East, the Balkans, and Central Asia.<br/>
            Turkish cuisine places a strong emphasis on fresh and seasonal ingredients. Fruits, vegetables, and herbs are often sourced locally and used in abundance. This focus on fresh ingredients contributes to the vibrant flavors and colorful presentation of Turkish dishes.
            </div>
            <div className='mt-4'>
                <h2 className='' style={{ color: "#642605" }}>Some Popular Recipes Turkish Cuisions's </h2>
                <div className='line ms-1'></div>
            </div>
            <div className="d-flex flex-wrap justify-content-center ">
              <MealItem data={item} />
            </div>
            
        </div>
    </div>
  )
}

export default TurkishCuision
