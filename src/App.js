import { useState } from 'react';

//component imports
import Details from "./components/Details";
import Lightbox from './components/Lightbox';
import Navbar from "./components/Navbar";
import ProductView from "./components/ProductView";

//context import
import { AppContext } from './context';

function App() {

  const [store, setStore] = useState({
    cart: {},
    count: 0,
    menu: false,
    lightbox: true,
    slide: 1
  })

  return (
    <AppContext.Provider value={{store, setStore}}>
      <div className="mb-20 lg:flex lg:flex-col lg:justify-between lg:h-screen lg:items-center">
        {store.lightbox ? <Lightbox /> : null}
        <Navbar />
        <div className='md:mt-10 lg:flex lg:justify-center lg:items-center lg:grow lg:mt-[-2.4em]'>
          <ProductView />
          <Details />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
