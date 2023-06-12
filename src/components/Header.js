import React from 'react'
import './assets/stylesheet/header.css'
import { useEffect, useState } from 'react'
import MealItem from "./Meal/MealItem";
import './assets/stylesheet/header.css'
import './assets/stylesheet/style1.css'
import logo from './assets/foodrecipelogo.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
 
    const [navbarColor, setNavbarColor] = useState(false);
    const [search, setSearch] = useState();
    const [show, setShow] = useState(false);
    const [item, setItem] = useState("");
    const [data, saveData] = useState([]);
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
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
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                saveData(data.categories);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [search]);


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
      

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setItem(data.meals);
            setShow(true);
        })
    }, [url])

    const searchRecipe = (evt) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    return (
        <>
            <div className='header'>
                <nav className={`navbar navbar-light navbar-expand-lg ${navbarColor ? 'bg-white shadow bg-body' : ''} fixed-top`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" ><img src={logo} alt='' style={{ width: "250px" }} id='logo' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <Link to='/'  className="nav-link  active" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Nuritions</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/RecipeInn'  className="nav-link">Recipe Ingred</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav> 
                <div className="searchBox"  data-aos="zoom-in">
                    <input
                        className="searchInput text-black"
                        type="text"
                        name=""
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={searchRecipe}
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
                <div className="d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                    {
                        show ? <MealItem data={item} /> : "Not Found"

                    }
                </div>
                
            </div>
        </>
    )
}

export default Header