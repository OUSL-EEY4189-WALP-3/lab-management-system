'use client'

import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function ImageSlide() {
    const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex(index === images.length - 1 ? 0 : index + 1);
    const previousSlide = () => setIndex(index === 0 ? images.length - 1 : index - 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index === images.length - 1 ? 0 : index + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="slider-container">
            <img
                src={images[index]}
                alt={`Slide ${index + 1}`}
                className="slider-image"
            />
            <button className="slider-btn left" onClick={previousSlide}>
                <IoIosArrowBack size={30} />
            </button>
            <button className="slider-btn right" onClick={nextSlide}>
                <IoIosArrowForward size={30} />
            </button>
        </div>
    );
}
