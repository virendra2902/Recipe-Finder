import React, { useEffect, useState } from 'react';

//Imported CSS Files
import '../assets/stylesheet/recipeingcard.css';

//Imported Components
import Loader from '../Loader';


const RecipeIngrentCard = ({ data }) => {
  const [id, setId] = useState(null);
  const [getid, setGetId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const url = `https://forkify-api.herokuapp.com/api/get?rId=${getid}`;
        const response = await fetch(url);
        const responseData = await response.json();
        setId(responseData.recipe);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (getid !== '') {
      fetchRecipe();
    }
  }, [getid]);

  const handleClick = (elem) => {
    setGetId(elem);
  };

  return (
    <>
      {!data ? (
        'Not Found'
      ) : (
        data.map((item) => (
          <div className="card meal-ing-card p-2 m-3" key={item.recipe_id}>
            <img className="meal-ing-img img-fluid" src={item.image_url} alt="" />
            <span className="p-1">{item.title}</span>
            <button
              className="btn"
              style={{ background: '#E55807', borderRadius: '0px' }}
              onClick={() => handleClick(item.recipe_id)}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              View Recipe Ing:-
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Meal All Ing. :-
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                {isLoading ? (
                  <Loader />
                ) : (
                  <div>
                    {id && (
                      <div>
                        <h6 className="mb-3" style={{ color: "#890200" }}>{id.title}</h6>
                        <img src={id.image_url} style={{ height: '150px' }} alt="" />
                        <br />
                        <div>
                          <div>
                            <section>
                              <div className="">
                                <div className=" col-md-12 my-3">
                                  <div className="ingredients my-5">
                                    <h6 className="fs-16 text-black mb-4">Ingredients</h6>
                                    <ul className="grid">
                                      {id &&
                                        id.ingredients.map((ingredient, index) => (
                                          <li key={index} className="flex align-center">
                                            <span className="li-dot">{index + 1}</span>
                                            <span className="text-black fs-15">{ingredient}</span>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default RecipeIngrentCard;
