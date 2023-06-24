import React from "react";
import { Link} from "react-router-dom";

//Imported Components
import '../assets/stylesheet/style1.css'

const MealItem = ({ data }) => {
    return (
        <>
            {
                (!data) ? "Not Found" : data.map(item => {
                    return (
                        <Link to={`/Recipe/${item.idMeal}`}   style={{ textDecoration : "none"}}>
                            <div className='card meal-card p-2 m-3' key={item.idMeal}>
                                <img className="meal-img img-fluid card-img-top" src={item.strMealThumb} alt="" />
                                <span className='meal-name p-1'>
                                    {item.strMeal}
                                </span>
                            </div>
                        </Link>
                    )
                })
            }

        </>
    )
}
export default MealItem;