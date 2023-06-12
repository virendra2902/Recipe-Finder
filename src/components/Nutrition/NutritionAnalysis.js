import React from 'react'
import '../assets/stylesheet/header.css'
import logo from '../assets/foodrecipelogo.png'
import '../assets/stylesheet/style1.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import NutritionAnalysisResult from './NutritionAnalysisResult';

const NutritionAnalysis = () => {
    const [navbarColor, setNavbarColor] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 15) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScroll);
    }, []);
    document.addEventListener('DOMContentLoaded', () => {
        const topButton = document.querySelector('.topButton');
        const topDiv = document.querySelector('.top');
      
        topButton.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        });
      
        window.addEventListener('scroll', () => {
          if (window.pageYOffset === 0) {
            topButton.disabled = true;
          } else {
            topButton.disabled = false;
          }
        });
      });
      
    return (
        <div>
            <nav className={`navbar navbar-light navbar-expand-lg ${navbarColor ? 'bg-white shadow bg-body' : ''} fixed-top`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" ><img src={logo} alt='' style={{ width: "250px" }} id='logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <Link to='/'  className="nav-link  active" >Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/NutritionAnalysis' className="nav-link"></Link>
                            </li>
                                <li className="nav-item">
                                    <Link to='/RecipeInn'  className="nav-link"></Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="top">
                <button className="topButton">
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
            <div className='Content-div justify-content-center d-flex align-items-center p-3'>
                <div className='sub-content-div p-3 justify-content-center d-flex align-items-center text-center'>
                    <h1 className='fw-bold' style={{fontSize : "50px"}}>Nutrition Analysis</h1>
                </div>
            </div>
            <div className="">
                <NutritionAnalysisResult/>
            </div>
        </div>
    )
}

export default NutritionAnalysis
