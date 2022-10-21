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
    const [cartStatus, setCartStatus] = useState(false);

    return (
        <nav className='w-screen flex items-center justify-between p-4 lg:border-b lg:w-10/12 lg:mx-auto'>
            {store.menu ? <Menu /> : null}
            <div className='flex items-center justify-around'>
                {/* menu button on mobile */}
                <button className='lg:hidden' onClick={() => {
                    setStore({...store, menu: true})
                }}>
                    <img src={menu} alt='menu' />
                </button>
                {/* Brand */}
                <h1 className='font-main font-bold tracking-tight text-2xl px-2 leading-none pb-[.25em] lg:mr-6'>sneakers</h1>
                {/* menu links if not mobile */}
                <ul className='hidden lg:flex'>
                    <li className='hover:underline underline-offset-[2.4em]'><a className='px-4 py-4 decoration-mainOrange' href='#'>Collections</a></li>
                    <li className='hover:underline underline-offset-[2.4em]'><a className='px-4 py-4 decoration-mainOrange' href='#'>Men</a></li>
                    <li className='hover:underline underline-offset-[2.4em]'><a className='px-4 py-4 decoration-mainOrange' href='#'>Women</a></li>
                    <li className='hover:underline underline-offset-[2.4em]'><a className='px-4 py-4 decoration-mainOrange' href='#'>About</a></li>
                    <li className='hover:underline underline-offset-[2.4em]'><a className='px-4 py-4 decoration-mainOrange' href='#'>Contact</a></li>
                </ul>
            </div>

            {/* cart and profile */}
            <div className='flex items-center justify-around w-1/4 relative lg:w-40'>
                <button className='' onClick={() => {
                    setCartStatus(!cartStatus)
                }}>
                    <span className='absolute bg-mainOrange text-white px-[.8em] text-[.5rem] rounded-xl top-[-.5em] md:top-2 lg:top-3'>{store.cart.quantity}</span>
                    <img className='text-black' src={cart} alt='cart' />
                </button>

                <img className='w-1/4 lg:w-14 border-2 border-transparent hover:border-2 hover:border-mainOrange hover:cursor-pointer rounded-[50%]' src={avatar} alt='avatar' />
            </div>

            <Cart item={null} status={cartStatus} />
        </nav>
    )
}