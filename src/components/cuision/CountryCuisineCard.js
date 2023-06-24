import React from 'react'

//Imported CSS Files
import '../assets/stylesheet/style1.css'

const CountryCuisineCard = (props) => {
    return (
        <div>
            <div className='card country-card p-2 m-2'>
                <img src={props.image}></img>
                <span className='country-name'>
                    {props.name}
                </span>
            </div>
        </div>
    )
}

export default CountryCuisineCard
