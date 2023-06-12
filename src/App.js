import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Reacipe from './components/Meal/Reacipe';
import CatagorieFullPage from './components/catagories/CatagorieFullPage';
import MainContent from './components/MainContent';
import TurkishCuision from './components/cuision/TurkishCuision';
import IndianCuision from './components/cuision/IndianCuision';
import ThaiCuision from './components/cuision/ThaiCuision';
import RussianCuision from './components/cuision/RussianCuision';
import GreekCuision from './components/cuision/GreekCuision';
import KenyanCuision from './components/cuision/KenyanCuision';
import PolishCuision from './components/cuision/PolishCuision';
import Footer from './components/Footer';
import RecipeInn from './components/recipeingrents/RecipeInn';
import NutritionAnalysis from './components/Nutrition/NutritionAnalysis';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route exact path="/Recipe/:recipeId"  element={<Reacipe/>} />
        <Route exact path="/Catagory/:CatagoryId" element={<CatagorieFullPage/>} />
        <Route exact path="/TurkishCuision" element={<TurkishCuision/>} />
        <Route exact path="/IndianCuision" element={<IndianCuision/>} />
        <Route exact path="/ThaiCuision" element={<ThaiCuision/>} />
        <Route exact path="/RussianCuision" element={<RussianCuision/>} />
        <Route exact path="/GreekCuision" element={<GreekCuision/>} />
        <Route exact path="/KenyanCuision" element={<KenyanCuision/>} />
        <Route exact path="/PolishCuision" element={<PolishCuision/>} />
        <Route exact path="/RecipeInn" element={<RecipeInn/>} />
        <Route exact path="/NutritionAnalysis" element={<NutritionAnalysis/>} />
      </Routes>
      <MainContent />
      <Footer />
    </>
  );
}

export default App;


