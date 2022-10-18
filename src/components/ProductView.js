import React, { useState } from 'react';

//icon imports
import next from '../assets/icon-next.svg';
import prev from '../assets/icon-previous.svg';

export default function ProductView() {

    const [slide, setSlide] = useState(1);

    const handleSlide = (dir) => {
        if(dir === 'left') {
            if(slide === 1) {
                setSlide(4);
            } else (
                setSlide(slide - 1)
            )
        } else {
            if(slide === 4) {
                setSlide(1);
            } else (
                setSlide(slide + 1)
            )
        }
    }

    return (
        <div className='relative flex justify-between items-center h-80 truncate'>
            <button onClick={() => {
                handleSlide('prev')
            }} className='rounded-[50%] bg-white w-8 h-8 flex justify-center items-center z-10 mx-4'>
                <img src={prev} alt='next' />
            </button>
            <img className='absolute top-0' src={process.env.PUBLIC_URL + `/images/image-product-${slide}.jpg`} alt='tan and white shoe' />
            <button onClick={() => {
                handleSlide('next')
            }} className='rounded-[50%] bg-white w-8 h-8 flex justify-center items-center z-10 mx-4'>
                <img src={next} alt='next' />
            </button>
        </div>
    )
}