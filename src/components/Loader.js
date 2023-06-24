import React from 'react'

//Image Import
import LoaderImage from './assets/cooking_loader.gif'

const Loader = () => {
  return (
    <div>
      <div className='container-flex d-flex align-items-center justify-content-center' style={{ marginTop: "10%" }}>
        <img src={LoaderImage} alt='Loader'></img>
      </div>
    </div>
  )
}

export default Loader
