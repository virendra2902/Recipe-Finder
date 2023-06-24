import React from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Imported CSS Files
import '../assets/stylesheet/header.css'
import '../assets/stylesheet/style1.css'
import 'aos/dist/aos.css';

// Imported Images
import logo from '../assets/foodrecipelogo.png'

//Imported Components
import RecipeIngrentCard from './RecipeIngrentCard';



const RecipeInn = () => {
    const [navbarColor, setNavbarColor] = useState(false);
    const [searchIng, setSearchIng] = useState();
    const [showIng, setShowIng] = useState(false);
    const [itemIng, setItemIng] = useState("");
    const [Ingurl, setIngUrl] = useState("https://forkify-api.herokuapp.com/api/search?q=chicken");


    useEffect(() => {
        AOS.init();
    }, [])

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

    useEffect(() => {
        const topButton = document.querySelector('.topButton');

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        const handleScrollButton = () => {
            if (window.pageYOffset === 0) {
                topButton.disabled = true;
            } else {
                topButton.disabled = false;
            }
        };

        topButton.addEventListener('click', scrollToTop);
        window.addEventListener('scroll', handleScrollButton);

        return () => {
            topButton.removeEventListener('click', scrollToTop);
            window.removeEventListener('scroll', handleScrollButton);
        };
    }, []);

    useEffect(() => {
        fetch(Ingurl).then(res => res.json()).then(data => {
            setItemIng(data.recipes);
            setShowIng(true);
        })
    }, [Ingurl])

    const searchRecipeIng = (e) => {
        setIngUrl(`https://forkify-api.herokuapp.com/api/search?q=${searchIng}`)
    }

    return (
        <div>
            <div>
                <div className='header2'>
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
                                        <Link to='/RecipeInn' className="nav-link"></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="searchBox" data-aos="zoom-in">
                        <input
                            className="searchInput text-black"
                            type="text"
                            name=""
                            placeholder="Search Recipe for Inggrents"
                            value={searchIng}
                            onChange={(e) => setSearchIng(e.target.value)}
                            onKeyPress={searchRecipeIng}
                        />
                        <button className="searchButton search-bar">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <div className="top">
                        <button className="topButton">
                            <i className="fa fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
                <div className="main">
                    <div className="d-flex flex-wrap justify-content-center" >
                        <RecipeIngrentCard data={itemIng} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeInn
