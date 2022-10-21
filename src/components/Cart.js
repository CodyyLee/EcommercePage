import React, {useContext} from 'react';
import { AppContext } from '../context';

//delete icon
import deleteIcon from '../assets/icon-delete.svg';

export default function Cart({ status }) {

    const {store, setStore} = useContext(AppContext);

    return (
        <div className={status ? 'absolute w-11/12 rounded-lg top-16 z-20 bg-white flex flex-col items-center md:w-6/12 md:right-5 md:shadow-lg md:max-w-[384px] lg:top-20 lg:right-32' : 'hidden'}>
            <div className='w-full border-b p-4 font-bold font-main'>
                <p className='header'>
                    Cart
                </p>
            </div>

                <div className='w-10/12 flex items-center justify-center'>
                    {!store.cart.name ? 
                    <p className='p-16 font-main font-semibold text-slate-500'>Your cart is empty.</p>
                    :
                    <div className='flex my-4 justify-between items-center w-full'>
                        <div className='w-10'>
                            <img className='rounded-[5px]' src={store.cart.image} alt={store.cart.name} />
                        </div>

                        <div className='w-8/12'>
                            <p className='w-full w-11/12 text-slate-500 text-ellipsis whitespace-nowrap overflow-hidden'>{store.cart.name}</p>
                            <p className='text-slate-500'>{`$${store.cart.cost}.00 x ${store.cart.quantity} `}<span className='font-bold text-black'>{`$${store.cart.cost*store.cart.quantity}.00`}</span></p>
                        </div>

                        <div className=''>
                            <button className='' onClick={() => {
                                setStore({...store, cart: {}})
                            }}>
                                <img className='' src={deleteIcon} alt='remove item' />
                            </button>
                        </div>
                    </div>
                    }
                </div>
                
                {store.cart.name ? 
                <button className='w-10/12 bg-mainOrange text-white py-4 rounded-lg my-4 mb-8'>Checkout</button>
                : null}
        </div>
    )
}