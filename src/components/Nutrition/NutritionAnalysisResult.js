import React, { useState } from 'react';
import { useEffect } from 'react';

//Imported CSS File
import '../assets/stylesheet/nutritionanalysisresult.css';

// Imported Componenets
import Loader from '../Loader';

const NutritionAnalysisResult = () => {
  const [ingredients, setIngredients] = useState('');
  const [nutritionData, setNutritionData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ingredientList, setIngredientList] = useState([]);

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  const fetchNutritionData = async () => {
    try {
      const apiId = 'faea4a21'; // Replace with your API ID
      const apiKey = 'b4776e1442b8bde3305b57a7f76c14fe'; // Replace with your API key

      const ingredientArray = ingredients.split('\n').map((ingredient) => ingredient.trim());
      setIngredientList(ingredientArray);

      const analyzedIngredients = await Promise.all(
        ingredientArray.map(async (ingredient) => {
          const apiUrl = `https://api.edamam.com/api/nutrition-data?app_id=${apiId}&app_key=${apiKey}&ingr=${encodeURIComponent(
            ingredient
          )}`;

          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Request failed with status code ' + response.status);
          }

          const data = await response.json();
          return data;
        })
      );

      setNutritionData(analyzedIngredients);
      setError(null);

    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  const handleNewRecipeAnalyze = () => {
    setIngredients('');
  };

  return (
    <div>
      {isLoading ? (
        <Loader/>
      ) : (
        <div className='container text-center card mt-5 p-2 justify-content-center main-nutrition-card'>
          <h6 className='mt-4'>
            Enter an ingredient list for what you are cooking, like{' '}
            <span className='' style={{ color: 'coral' }}>
              "1 cup rice, 10 oz chickpeas"
            </span>
            , etc.
            <br />
            Enter each ingredient on a new line.
          </h6>

          <div className='d-flex nutrition-content'>
            <div className='w-100 p-3 p-md-5 input-and-table'>
              <div className='nutrition-input-result mt-5'>
                <label htmlFor='exampleFormControlTextarea1' className='form-label mb-5' style={{ fontSize: '23px' }}>
                  Enter Ingredient
                </label>
                <textarea
                  className='form-control input-textarea'
                  id='exampleFormControlTextarea1'
                  rows='12'
                  value={ingredients}
                  onChange={handleInputChange}
                ></textarea>
                <div className='ms-4 mt-3 me-4 mb-5 d-flex justify-content-between'>
                  <button
                    className='btn btn-primary submit-btn m-1'
                    type='button'
                    style={{ backgroundColor: '#E57C23' }}
                    onClick={fetchNutritionData}
                  >
                    Analyze
                  </button>
                  <button className='btn btn-primary submit-btn m-1' type='button' style={{ backgroundColor: '#E57C23' }} onClick={handleNewRecipeAnalyze}>
                    New Recipe Analyze
                  </button>
                </div>
              </div>
              <div className='col-md-12 table-content'>
                <div className='table-responsive'>
                  <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th scope='col'>Qty</th>
                        <th scope='col'>Unit</th>
                        <th scope='col'>Food</th>
                        <th scope='col'>Calories</th>
                        <th scope='col'>Protein</th>
                        <th scope='col'>Fat</th>
                        <th scope='col'>Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredientList.map((ingredient, index) => (
                        <tr key={index}>
                          <td>{nutritionData[index]?.ingredients[0].parsed[0].quantity}</td>
                          <td>{nutritionData[index]?.ingredients[0].parsed[0].measure}</td>
                          <td>{nutritionData[index]?.ingredients[0].parsed[0].food}</td>
                          <td>{nutritionData[index]?.ingredients[0].parsed[0].nutrients.ENERC_KCAL.quantity.toFixed(2)}</td>
                          <td>{nutritionData[index]?.ingredients[0].parsed[0].nutrients.PROCNT.quantity.toFixed(2)}</td>
                          <td>{nutritionData[index]?.ingredients[0].parsed[0].nutrients.FAT.quantity.toFixed(2)}</td>
                          <td>{nutritionData[index]?.ingredients[0].parsed[0].weight.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionAnalysisResult;


