import React, { useState, useEffect } from 'react';
import MealItem from '../Meal/MealItem';
import { Link } from 'react-router-dom';

const TurkishCuision = () => {
    const [item, setItem] = useState("");
    useEffect(() => {
          const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
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
                <h2 className='' style={{ color: "#642605" }}>Indian Cuisine's</h2>
                <div className='line ms-1'></div>
            </div>
            <div className='mt-4 catagory-discription p-2'>
                Indian cuisine is incredibly diverse, with each region having its own distinct culinary traditions, flavors, and cooking techniques. North Indian cuisine, known for its rich and hearty dishes, differs from the spicy and flavorful South Indian cuisine. The cuisine of the coastal regions showcases a variety of seafood, while the cuisine of the desert regions incorporates unique ingredients and cooking methods.<br/>
                Indian cuisine is famous for its vibrant and aromatic flavors, largely achieved through the use of a wide array of spices. Common spices include cumin, coriander, turmeric, cardamom, cloves, cinnamon, and chili peppers. These spices are skillfully blended to create the rich and complex flavors that define Indian dishes.
            </div>
            <div className='mt-4'>
                <h2 className='' style={{ color: "#642605" }}>Some Popular Recipes Indian Cuisions's </h2>
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
