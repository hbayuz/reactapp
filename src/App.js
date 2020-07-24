import React from 'react';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
// import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';

// import BootstrapComp from './Component/Class/BootstrapComp';
// import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import './App.css';
// import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mahasiswa" component={ListComp} />
        <Route exact path="/mahasiswa/tambah" component={TambahComp} />
        <Route exact path="/mahasiswa/edit" component={EditComp} />


        {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
