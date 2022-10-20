import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from '../context';

//image imports
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import menu from '../assets/icon-menu.svg';

//component import
import Cart from './Cart';
import Menu from './Menu';

export default function Navbar() {

    const {store, setStore} = useContext(AppContext);

    const [width, setWidth] = useState(window.innerWidth);
    const [cartStatus, setCartStatus] = useState(false);

    useEffect(() => {

    }, [])

    return (
        <nav className='w-screen flex items-center justify-between p-4'>
            {store.menu ? <Menu /> : null}
            <div className='flex items-center justify-around'>
                {/* menu button on mobile */}
                {width < 960 ? <button onClick={() => {
                    setStore({...store, menu: true})
                }}>
                    <img src={menu} alt='menu' />
                </button> : null}
                {/* Brand */}
                <h1 className='font-main font-bold tracking-tight text-2xl px-2 leading-none pb-[.25em]'>sneakers</h1>
                {/* menu links if not mobile */}
                {width >= 960 ? 
                <ul>
                    <li className=''>Collections</li>
                    <li className=''>Men</li>
                    <li className=''>Women</li>
                    <li className=''>About</li>
                    <li className=''>Contact</li>
                </ul> 
                : null}
            </div>

            {/* cart and profile */}
            <div className='flex items-center justify-around w-1/4 relative'>
                <button className='' onClick={() => {
                    setCartStatus(!cartStatus)
                }}>
                    <span className='absolute bg-mainOrange text-white px-[.8em] text-[.5rem] rounded-xl top-[-.5em] md:top-2'>{store.cart.quantity}</span>
                    <img className='text-black' src={cart} alt='cart' />
                </button>

                <img className='w-1/4' src={avatar} alt='avatar' />
            </div>

            <Cart item={null} status={cartStatus} />
        </nav>
    )
}