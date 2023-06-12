import React from 'react'
import '../assets/stylesheet/style1.css'
import '../catagories/stylesheet/catagoriesfullpage.css'
import { Link} from "react-router-dom";

const Catagoriescard = ({ catagories }) => {
 
  console.log(catagories)
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


