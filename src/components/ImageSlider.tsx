'use client'

import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function ImageSlide() {

    const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

    // Store and set current image index
    const [index, setIndex] = useState(0);

    function autoSlide() {
        const isLastSlide = index === images.length - 1;
        isLastSlide ? setIndex(0) : setIndex(index + 1);
    }
    function nextSlide() {
        const isLastSlide = index === images.length - 1;
        isLastSlide ? setIndex(0) : setIndex(index + 1);
    }
    function previousSlide() {
        const isFirstSlide = index === 0;
        isFirstSlide ? setIndex(images.length - 1) : setIndex(index - 1);
    }

    useEffect(() => {
        const interval = setInterval(autoSlide, 3000)
        return () => clearInterval(interval);
    }, [index]);

    return(
       <div>
            <img 
                src={images[index]}
                alt="Hero image"
                width={1500}
                height={1000}
            />
            {/* Position arrow icons left and right on image slider */}
            <div>
                <button onClick={previousSlide}><IoIosArrowBack /></button>
                <button onClick={nextSlide}><IoIosArrowForward /></button>
            </div>
       </div>
    );
}
