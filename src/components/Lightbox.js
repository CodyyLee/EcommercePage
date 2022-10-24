import React, {useContext} from 'react';
import { AppContext } from '../context';
import ImageSelect from './ImageSelect';

//icon imports
import CloseIcon from './CloseIcon';
import NextIcon from './NextIcon';
import PrevIcon from './PrevIcon';

export default function Lightbox() {

    const {store, setStore} = useContext(AppContext);

    return (
        <div className='fixed flex justify-center items-center z-40 w-screen h-screen'>
            {/* backdrop */}
            <div className='absolute w-full h-full top-0 bg-opaicBlack'></div>

            {/* content container */}
            <div className='w-[30%] z-50 flex flex-col items-center justify-between'>
                <div className='pt-8 relative flex justify-between items-center'>
                    {/* close icon */}
                    <CloseIcon classes={'cursor-pointer absolute top-0 right-0 fill-white hover:fill-mainOrange'} />

                    {/* prev button */}
                    <button onClick={() => {
                        if(store.slide === 1) {
                            setStore({...store, slide: 4})
                        } else {
                            setStore({...store, slide: store.slide - 1})
                        }
                    }} className='absolute pr-[.2em] top-[50%] left-[-25px] w-[50px] h-[50px] bg-white flex items-center justify-center rounded-[50%]'>
                        <PrevIcon classes={'fill-white stroke-black hover:stroke-mainOrange'} />
                    </button>

                    {/* image */}
                    <div className=''>
                        <img src={process.env.PUBLIC_URL + `images/image-product-${store.slide}.jpg`} alt={`Product ${store.slide}`} className='rounded-2xl' />
                    </div>

                    {/* next button */}
                    <button onClick={() => {
                        if(store.slide === 4) {
                            setStore({...store, slide: 1})
                        } else {
                            setStore({...store, slide: store.slide + 1})
                        }
                    }}  className='absolute pl-[.2em] top-[50%] right-[-25px] w-[50px] h-[50px] bg-white flex items-center justify-center rounded-[50%]'>
                        <NextIcon classes={'fill-white stroke-black hover:stroke-mainOrange'} />
                    </button>
                </div>
                
                <div className=''>
                    {/* other images */}
                    <ImageSelect type='lightbox' />
                </div>
            </div>
        </div>
    )
}