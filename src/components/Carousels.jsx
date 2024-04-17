import React, { useState, useEffect } from 'react';
import data from '../data'
import '../index.css';
import '../styling/carousels.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCircleDot } from "react-icons/fa6";

function CarouselAutomatic({arrayOfImages}){
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === arrayOfImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [arrayOfImages.length, 2000]);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {arrayOfImages.map((image, index) => (
          <img key={index} src={image.url} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

function CarouselManipulative({arrayOfImages}){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function goLeft(){
        setCurrentImageIndex(prevIndex => {
            return prevIndex === 0 ? arrayOfImages.length-1 : prevIndex - 1 
        })
    }

    function goRight(){
        setCurrentImageIndex(prevIndex => {
            return prevIndex === arrayOfImages.length - 1  ? 0 : prevIndex + 1
        })
    }

    return (
      <div className="carousel">
        <button onClick={goLeft} className='button-before'><IoIosArrowBack /></button>
        <div className="carousel-inner" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {arrayOfImages.map((image, index) => (
            <img key={index} src={image.url} alt={`Image ${index + 1}`} />
          ))}
        </div>
        <button onClick={goRight} className='button-forward'><IoIosArrowForward /></button>
      </div>
    );
  };

export default function Carousels(){
    return (
        <div className='page-element page-carousels'>
            <h1>Carousels</h1>
            <p> Experience the allure of carousel websites—a dynamic fusion of storytelling and functionality. 
                Explore curated collections and captivating narratives through seamless sliders, 
                offering an engaging journey into our world of products, services, and information. </p>
                <div className='container-all-carousels'>
                    <div className='carousel-automatic'>
                        <CarouselAutomatic arrayOfImages={data.carouselImages}/>
                        <h3>Show your products without interaction of the user</h3>
                    </div>
                    <div className='carousel-manipulation'>
                        <h3>Allow the interaction and posibility of movement</h3>
                        <CarouselManipulative arrayOfImages={data.carouselImages}/>
                    </div>
                </div>
        </div>
    )
}