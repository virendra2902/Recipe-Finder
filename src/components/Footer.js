import React from 'react'
import './assets/stylesheet/footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
       <>
        <footer className="text-center text-black mt-5" id='footer' data-aos="zoom-in" data-aos-duration="1000">
            <div className="container p-4"></div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);" , fontSize : "19px" }}>
                © 2023 Copyright :
                <a className="text-black" href="https://google.com" style={{textDecoration : "none" , color :"black"}}>Patil Virendra</a>
            </div>
        </footer>
       </>
    )
}

export default Footer
