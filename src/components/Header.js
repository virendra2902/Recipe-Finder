import React, { useEffect, useState } from 'react';
import AOS from 'aos';

// Imported Css Files
import './assets/stylesheet/header.css';
import './assets/stylesheet/style1.css';
import 'aos/dist/aos.css';

// Imported Components
import Loader from './Loader';
import MealItem from './Meal/MealItem';

// Imported Images
import logo from './assets/foodrecipelogo.png';


const Header = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [item, setItem] = useState('');
  const [data, saveData] = useState([]);
  const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      .then((response) => response.json())
      .then((data) => {
        saveData(data.categories);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [search]);

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
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const searchRecipe = (evt) => {
    if (evt.key === 'Enter') {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <div>
      <div className="header">
        <nav className={`navbar navbar-light navbar-expand-lg ${navbarColor ? 'bg-white shadow bg-body' : ''} fixed-top`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" style={{ width: '250px' }} id="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            </div>
          </div>
        </nav>
        <div className="searchBox" data-aos="zoom-in">
          <input
            className="searchInput text-black"
            type="text"
            name=""
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
          <button className="searchButton search-bar" onClick={searchRecipe}>
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
        {isLoading ? (
          <Loader />
        ) : (
          <div className="d-flex flex-wrap justify-content-center" data-aos="fade-up" data-aos-duration="3000">
            {
              show ? <MealItem data={item} /> : 'Not Found'
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
