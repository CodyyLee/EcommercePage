import React, { useContext} from 'react';
import { AppContext } from '../context';

//icon imports
import min from '../assets/icon-minus.svg';
import plus from '../assets/icon-plus.svg';

export default function Counter() {

    const { store, setStore } = useContext(AppContext);

    return (
        <div className='flex w-full justify-between bg-slate-100 rounded-md p-4 my-2 lg:w-4/12 lg:mr-4 items-center lg:h-10 lg:py-8'>
            <button onClick={() => {
                if(store.count !== 0) {
                    setStore({...store, count: store.count - 1})
                }
            }} className=''>
                <img src={min} alt='' className='' />
            </button>

            <p className='font-semibold'>{store.count}</p>

            <button onClick={() => {
                setStore({...store, count: store.count + 1})
            }} className=''>
                <img src={plus} alt='' className='' />
            </button>
        </div>
    )
}