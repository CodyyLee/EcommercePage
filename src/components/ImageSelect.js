import React from 'react';

export default function ImageSelect({ slide, setSlide}) {
    let paths = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg',]

    return(
        <div className='my-6 hidden lg:block'>
            <div className='flex w-full'>
                {paths.map((el, i) => {
                    return (
                        <button className={slide === i + 1 ? 'w-[100px] mx-4 border-4 border-mainOrange rounded-lg' : 'border-4 border-transparent w-[100px] mx-4 rounded-lg'} onClick={() => {
                            setSlide(i + 1)
                        }} key={i}>
                            <img className={slide === i + 1 ? 'w-full opacity-40' : 'w-full rounded-lg hover:opacity-60'} src={process.env.PUBLIC_URL + `/images/${el}`} alt={`Shoe profile ${i + 1}`} />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}