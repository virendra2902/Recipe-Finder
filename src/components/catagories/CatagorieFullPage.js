import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MealItem from '../Meal/MealItem';

const CatagorieFullPage = () => {
  const categoryId = useLocation();
  const [data, setdata] = useState([]);
  const [item, setItem] = useState("");
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

        if (response.ok) {
          const data = await response.json();
          setCategoryData(data.categories.filter((element) => element.idCategory === window.location.pathname.split("/")[2]))
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchCategoryData();
  }, [categoryId]);

  useEffect(() => {
    const fetchData = () => {
      const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryData[0].strCategory;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setItem(data.meals)
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
    if (categoryData) fetchData();
  }, [categoryData]);
  return (
    <div>
      {categoryData ? (
        <>
          <div className='container'>
            <Link to='/'   style={{ textDecoration : "none"}}>
              <div className='BackButton-div text-start d-flex' style={{ marginTop: "9%" }}>
                <i className='fa fa-angle-double-left fa-2x mt-1 ms-3 text-white'></i>
                <h4 className='fw-bold mt-1 ms-2 text-white'>Home</h4>
              </div>
            </Link>
            <div className='mt-4'>
              {categoryData.map((element) => <h2 className='' style={{ color: '#642605' }}> <span to="" className="fs-15 fw-5 text-uppercase"> {element.strCategory}</span></h2>)}                     <div className='line ms-1'></div>
            </div>
            {categoryData.map((element) => <div className='card p-2 mt-2' style={{ height: "180px", width: "250px" }} > <img className="details-img" src={element.strCategoryThumb} /> </div>)}
            {categoryData.map((element) => <div className='mt-4 catagory-discription p-2'>
              {element.strCategoryDescription}
            </div>)}
            <div className='mt-4'>
              {categoryData.map((element) => <h2 className='' style={{ color: '#642605' }}>Some Popular Recipes {element.strCategory} </h2>)}
              <div className='line ms-1'></div>
            </div>
            <div className="d-flex flex-wrap justify-content-center ">
              <MealItem data={item} />
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CatagorieFullPage;


