import React, { useContext } from 'react';
import { AppContext } from '../context';

//close icon import
import close from '../assets/icon-close.svg';

export default function Menu() {
    
    const {store, setStore } = useContext(AppContext);

    return (
        <div className='w-full fixed left-0 top-0 h-screen z-40 bg-opaicBlack'>
            <div className='w-8/12 bg-white h-full'>
                <button className=' m-6' onClick={() => {
                    setStore({...store, menu: false})
                }}>
                    <img src={close} alt='close menu' className='' />
                </button>

                <div className=' ml-6 mt-4'>
                    <ul className='flex flex-col'>
                        <li className='font-bold pb-4'>Collections</li>
                        <li className='font-bold pb-4'>Men</li>
                        <li className='font-bold pb-4'>Women</li>
                        <li className='font-bold pb-4'>About</li>
                        <li className='font-bold pb-4'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
