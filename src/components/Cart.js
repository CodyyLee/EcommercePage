import React from 'react';

export default function Cart({ item, status }) {

    return (
        <div className={status ? 'absolute w-11/12 rounded-lg top-16 z-20 bg-white' : 'hidden'}>
            <div className='w-full border-b p-4 font-bold font-main'>
                <p className='header'>
                    Cart
                </p>
            </div>
            <div className='w-full flex items-center justify-center'>
                {!item ? 
                <p className='p-16 font-main font-semibold text-slate-500'>Your cart is empty.</p>
                :
                <div className=''>
                    <div className=''>
                        <img src={item.image} alt={item.name} />
                    </div>

                    <div className=''>
                        <p className=''>{item.name}</p>
                        <p className=''>{item.cost} x {item.quantity} <span className=''></span></p>
                    </div>

                    <button className=''>Checkout</button>
                </div>
                }
            </div>
        </div>
    )
}