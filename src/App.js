import { useState } from 'react';

import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductView from "./components/ProductView";

//context import
import { AppContext } from './context';

function App() {

  const [store, setStore] = useState({
    cart: {},
    count: 0,
    menu: false
  })

  return (
    <AppContext.Provider value={{store, setStore}}>
      <div className="mb-20">
        <Navbar />
        <div className='mt-10'>
          <ProductView />
          <Details />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
