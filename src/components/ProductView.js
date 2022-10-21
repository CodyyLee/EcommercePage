import React, { useState } from 'react';

//icon imports
import next from '../assets/icon-next.svg';
import prev from '../assets/icon-previous.svg';
import ImageSelect from './ImageSelect';

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
        <div className='relative flex justify-between items-center h-80 truncate lg:w-6/12 lg:h-full lg:flex-col lg:justify-center'>
            <button onClick={() => {
                handleSlide('left')
            }} className='rounded-[50%] bg-white w-8 h-8 flex justify-center items-center z-10 mx-4 md:w-10 md:h-10 lg:hidden'>
                <img src={prev} alt='next' className='md:w-6/12'/>
            </button>
            <img className='absolute top-0 md:w-8/12 md:ml-[16.5%] lg:w-auto lg:m-0 lg:h-3/6 lg:rounded-xl lg:relative' src={process.env.PUBLIC_URL + `/images/image-product-${slide}.jpg`} alt='tan and white shoe' />
            <button onClick={() => {
                handleSlide('right')
            }} className='rounded-[50%] bg-white w-8 h-8 flex justify-center items-center z-10 mx-4 md:w-10 md:h-10 lg:hidden'>
                <img src={next} alt='next' className='md:w-6/12'/>
            </button>
            <div className='sm:hidden lg:flex mx-auto'>
                <ImageSelect slide={slide} setSlide={setSlide} />
            </div>
        </div>
    )
}