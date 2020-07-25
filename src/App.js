import React, { useState } from 'react';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
// import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffect from './Component/Hooks/Functional/HooksUseEffect';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
import HooksReducer from './Component/Hooks/Functional/HooksReducer';

const App = () => {

  const[value, setValue] = useState(0)

  return (
    <BrowserRouter>
      <CartContext.Provider value = {{value, setValue}}>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffect" component={HooksUseEffect} />
          <Route exact path="/produk" component={ProductComp} />
          <Route exact path="/reducer" component={HooksReducer} />

          {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>

  );
}

export default App;
