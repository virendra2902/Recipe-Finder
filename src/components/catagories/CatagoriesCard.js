import React from 'react'
import { Link} from "react-router-dom";

//Imported CSS Files
import '../assets/stylesheet/style1.css'
import '../assets/stylesheet/catagoriesfullpage.css'


const Catagoriescard = ({ catagories }) => {
  return (!catagories) ? "" : catagories.map(item => {
    return (
      <Link to={`/Catagory/${item.idCategory}`}   style={{ textDecoration : "none"}}>
        <div className='card catagories-card p-2 m-2' key={item.idCategory}>
        <img src={item.strCategoryThumb}></img>
        <span className='catagory-name'>
          {item.strCategory}
        </span>
      </div></Link>
    )
  })
}

export default Catagoriescard


