import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

// Imported Stylesheets 
import './assets/stylesheet/header.css'
import './assets/stylesheet/style1.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Imported Components
import CatagoriesCard from './catagories/CatagoriesCard';
import CountryCuisineCard from './cuision/CountryCuisineCard';

// Imported Images Of Countries
import logo from './assets/foodrecipelogo.png'
import Turkish from './assets/turkish.png';
import Thai from './assets/thai.png';
import Russian from './assets/russian.png';
import Indian from './assets/indian.png';
import Greek from './assets/greek.png';
import Kenyan from './assets/Kenyan.png';
import Polish from './assets/polish.png';

const MainContent = ({ searchValue }) => {
    const [navbarColor, setNavbarColor] = useState(false);
    const [show, setShow] = useState(false);
    const [item, setItem] = useState("");
    const [data, saveData] = useState([]);

    const handleScroll = () => {
        if (window.scrollY > 15) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const options = {
        loop: true,
        nav: false,
        items: 4,
        margin: 10,
        dots: true,
        autoplay: true,
        transitionTime: 3,
        showStatus: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    };

    useEffect(() => {
        const categoriesUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        fetch(categoriesUrl)
            .then(response => response.json())
            .then(data => {
                saveData(data.categories);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals);
                setShow(true);
            });
    }, [searchValue]);

    return (
        <>
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
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/NutritionAnalysis' className="nav-link">Nuritions</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/RecipeInn' className="nav-link">Recipe Ingred</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='main'>
                <div className='catagorioes' data-aos="fade-up">
                    <div className='mb-4 ms-5 mt-5'>
                        <h2 className='' style={{ color: '#642605' }}>Categories</h2>
                        <div className='line ms-1'></div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-center catagories-display'>
                        {show ? <CatagoriesCard catagories={data} /> : <p>Not Found</p>}
                    </div>
                </div>
                <div className='catagorioes'>
                    <div className='mb-4 ms-5 mt-5 me-5 d-flex justify-content-between align-items-center'>
                        <div className=''>
                            <h2 className='' style={{ color: '#642605' }}>Country Cuisine</h2>
                            <div className='line ms-1'></div>
                        </div>
                    </div>
                    {/* USe of Owl-Carousel  */}
                    <div className='d-flex flex-wrap justify-content-center catagories-display cuision'>
                        <OwlCarousel className='owl-theme' {...options} >
                            <Link to='/TurkishCuision'><CountryCuisineCard image={Turkish} title='Turkish' /></Link>
                            <Link to='/ThaiCuision'><CountryCuisineCard image={Thai} title='Thai' /></Link>
                            <Link to='/RussianCuision'><CountryCuisineCard image={Russian} title='Russian' /></Link>
                            <Link to='/IndianCuision'><CountryCuisineCard image={Indian} title='Indian' /></Link>
                            <Link to='/GreekCuision'><CountryCuisineCard image={Greek} title='Greek' /></Link>
                            <Link to='/KenyanCuision'><CountryCuisineCard image={Kenyan} title='Kenyan' /></Link>
                            <Link to='/PolishCuision'><CountryCuisineCard image={Polish} title='Polish' /></Link>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;
