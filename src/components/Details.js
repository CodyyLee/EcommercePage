import React, {useContext} from 'react';

//context import
import { AppContext } from '../context';

//component import
import Counter from './Counter';
import CartIcon from './CartIcon';

export default function Details() {

    const {store, setStore} = useContext(AppContext);

    return (
        <div className='w-full p-4 md:w-8/12 md:m-auto md:px-0'>
            <div className=''>
                <p className='text-mainOrange tracking-widest uppercase text-[.7rem] opacity-80 font-bold'>Sneaker Company</p>
                <p className='py-4 text-3xl font-semibold'>Fall Limited Edition Sneakers</p>
                <p className='text-slate-500 text-md'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>

            <div className='flex w-full justify-between py-4'>
                <div className='flex'>
                    <p className='pr-4 text-xl font-bold'>$125.00</p>
                    <p className='px-2 rounded flex justify-center items-center bg-paleOrange font-bold text-mainOrange'>50%</p>
                </div>

                <div className=''>
                    <p className='opacity-40 line-through'>$250.00</p>
                </div>
            </div>

            <div className='w-full'>
                <Counter />
                <button className='flex justify-center items-center w-full bg-mainOrange rounded-md p-4 my-4 text-white font-semibold' 
                onClick={() => {
                    if(store.count > 0) {
                        if(store.cart.name) {
                            setStore({...store, cart: {...store.cart, quantity: store.cart.quantity + store.count}})
                        } else {
                            setStore({...store, cart: {
                                name: 'Autumn Limited Edition Sneakers',
                                image: `${process.env.PUBLIC_URL}` + '/images/image-product-1.jpg',
                                cost: 125,
                                quantity: store.count
                            }})
                        }
                    }
                }}>
                    <CartIcon color='#fff' classes={'mr-4'}/>
                    Add to cart
                </button>
            </div>
        </div>
    )
}