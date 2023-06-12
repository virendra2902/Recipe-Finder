import React, { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/stylesheet/card.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


var id = "";
const Recipe = () => {
    const [item, setItem] = useState(null);
    const { recipeId } = useParams();
    const playerRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    useEffect(() => {
        AOS.init();
      }, [])

    useEffect(() => {
        if (recipeId) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.meals && data.meals.length > 0) {
                        setItem(data.meals[0]);
                    } else {
                        console.error('No meal data found');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [recipeId]);

    if (item) {
        const strYoutube = item.strYoutube;
        const str = strYoutube.split("=");
        id = str[str.length - 1];
    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const toggleFullscreen = () => {
        if (playerRef.current) {
            if (!isFullscreen) {
                if (playerRef.current.requestFullscreen) {
                    playerRef.current.requestFullscreen();
                } else if (playerRef.current.mozRequestFullScreen) {
                    playerRef.current.mozRequestFullScreen();
                } else if (playerRef.current.webkitRequestFullscreen) {
                    playerRef.current.webkitRequestFullscreen();
                } else if (playerRef.current.msRequestFullscreen) {
                    playerRef.current.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }
    };

    const handleFullscreenChange = () => {
        setIsFullscreen(!!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement));
    };


    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <div className="content"  data-aos="fade-down" data-aos-duration="3000">
            {item ? (
                <div className="section-wrapper">
                    <div className="container  main-meal-div">
                        <Link to='/' style={{ textDecoration: "none" }}>
                            <div className='BackButton-div text-start d-flex' style={{ marginTop: "12%" }}>
                                <i className='	fa fa-angle-double-left fa-2x mt-1 ms-3 text-white'></i>
                                <h4 className='fw-bold mt-1 ms-2 text-white'>Home</h4>
                            </div>
                        </Link>
                        <div className="sc-title">Meal Details</div>
                        <section className="sc-details bg-light">
                            <div className="details-head grid">
                                <div className=''>
                                    <div className='d-flex img-and-content-div'>
                                    <div className='w-25 img-div'>
                                        <div className="details-img">
                                            <img src={item.strMealThumb} alt="" className="img-fliud" style={{ width: "300px" }} id='img-meal' />
                                        </div>
                                    </div>

                                    <div className='ms-5 meal-content-div'>
                                        <div className="details-intro">
                                            <h3 className="title text-orange">{item.strMeal}</h3>
                                            <div className="">
                                                <div className="category flex align-center">
                                                    <span className="text-uppercase fw-8 ls-1 my-1">
                                                        category: &nbsp;
                                                    </span>
                                                    <span className="text-uppercase ls-2">
                                                        {item.strCategory}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="tags flex align-start flex-wrap">
                                                <h6 className="fs-16">Tags:</h6>
                                                <ul className="flex align-center flex-wrap">
                                                    {item.strTags &&
                                                        item.strTags.split(',').map((tag, idx) => (
                                                            <li key={idx} className="fs-14">
                                                                {tag.trim()}
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div>
                                        <div>
                                            <section>
                                                <div className="">
                                                    <div className="row">
                                                        <div className="mx-auto col-md-10 my-3">
                                                            <div className="ingredients my-5 px-3 py-3">
                                                                <h6 className="fs-16 text-black mb-4">Ingredients</h6>
                                                                <ul className="grid">
                                                                    {Array(20)
                                                                        .fill()
                                                                        .map((_, i) => {
                                                                            const ingredient = item && item[`strIngredient${i + 1}`];
                                                                            const measure = item && item[`strMeasure${i + 1}`];

                                                                            if (!ingredient || !measure) return null;

                                                                            return (
                                                                                <li key={i} className="flex align-center">
                                                                                    <span className="li-dot">{i + 1}</span>
                                                                                    <span className="text-capitalize text-black fs-15">
                                                                                        {measure} :- {ingredient}
                                                                                    </span>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                    <div className="details-body">
                                        <div className="instructions my-4">
                                            <h6 className="fs-16">Instructions:</h6>
                                            <ul className="grid">
                                                {item.strInstructions &&
                                                    item.strInstructions
                                                        .split('\r\n')
                                                        .map((instruction, idx) => {
                                                            if (!instruction) return null;
                                                            return (
                                                                <li key={idx} className="fs-14 "><i className='fa fa-arrow-circle-o-right me-3' style={{color : "coral" , fontSize : "23px"}}></i>
                                                                    {/* <AiOutlineCheckSquare size={18} className="text-orange li-icon" /> */}
                                                                    <span className="li-text fs-16 fw-5 op-09">
                                                                        {instruction}
                                                                    </span>
                                                                </li>
                                                            );
                                                        })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={togglePopup} className='videobtn mb-2'>Open Video</button>
                                        {showPopup && (
                                            <div className="popup-overlay">
                                                <div className="popup-content">
                                                    <div className="video-wrapper">
                                                        <iframe
                                                            ref={playerRef}
                                                            width="100%"
                                                            height="515"
                                                            title="recipeVideo"
                                                            src={`https://www.youtube.com/embed/${id}`}
                                                        ></iframe>
                                                    </div>
                                                    <button onClick={toggleFullscreen} className='videobtn m-2'>
                                                        {isFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}
                                                    </button>
                                                    <button onClick={togglePopup} className='videobtn m-2'>Close Video</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Recipe;
