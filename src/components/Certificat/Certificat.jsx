import React from "react";
import './Certificat.css';
import { CERTIFICATES } from "../../utils/data";
import Slider from "react-slick";
import { useRef } from 'react';
import CertificatCard from "./CertificatCard/CertificatCard";

const Certificat = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="certificat-container" id="work">
            <h5>Certificates</h5>
            <div className="certificat-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span class="material-symbols-outlined"><i class='bx bx-chevrons-right'></i></span>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <span class="material-symbols-outlined"><i class='bx bx-chevrons-left' ></i></span>
                </div>


                <Slider ref={sliderRef} {...settings}>
                    {CERTIFICATES.map((item) => (
                        <CertificatCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Certificat;