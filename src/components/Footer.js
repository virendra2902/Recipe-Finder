import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';

// Imported CSS Files
import './assets/stylesheet/footer.css'
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <footer className="text-center text-black mt-5" id='footer' data-aos="zoom-in">
                <div className="container p-4"></div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2);", fontSize: "19px" }}>
                    © 2023 Copyright :
                    <a className="text-black" href="https://github.com/virendra2902" style={{ textDecoration: "none", color: "black" }}>Patil Virendra</a>
                </div>
            </footer>
        </>
    )
}

export default Footer
