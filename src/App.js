import React, { useState, createContext, useReducer, Fragment } from 'react';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './Component/Fungsional/AboutComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffect from './Component/Hooks/Functional/HooksUseEffect';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
import HooksReducer from './Component/Hooks/Functional/HooksReducer';
import Tagihan from './Component/Hooks/Functional/Tagihan';

//Login
import MenuComp from './Component/MenuComp';
import LoginComp from './Component/LoginComp';
import HomeComp from './Component/HomeComp';
import RegisterComp from './Component/RegisterComp';
import DetailComp from './Component/Fungsional/DetailComp';

// import DetailComp from './Component/Fungsional/DetailComp';

//Auth Context
export const AuthContext = createContext()

//Tagihan
export const keranjangContext = createContext()

//inisiasi state
const mulaiState = {
  isAuthenticated: false,
  user: null,
  token: null
}

//State harga
const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000
}

//reducer api
const reducerapi = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state

  }
}

//Reducer harga
const reducer = (state, action) => {
  switch (action.type) {
    case 'tambah': return {
      ...state,
      jumlah: state.jumlah + 1,
      hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
    }
    case 'kurang': return {
      ...state,
      jumlah: state.jumlah - 1,
      hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
    }
    default:
      return state
  }
}


function App() {

  const [state, dispatch] = useReducer(reducerapi, mulaiState)

  const [value, setValue] = useState(0)

  const [count, dispatch2] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      {/* <CartContext.Provider value={{ value, setValue }}> */}
      {/* <NavbarComp /> */}
      {/* <keranjangContext.Provider value={{ keranjangState: count, keranjangDispatch: dispatch }}> */}

      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <MenuComp />
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/homepage"
              }}
            />
          }

          <Route exact path="/" component={LoginComp} />
          <Route exact path="/homepage" component={HomeComp} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/detail/:id" component={DetailComp} />
        </AuthContext.Provider>
        
        <Route exact path="/mahasiswa" component={ListComp} />
        <Route exact path="/mahasiswa/tambah" component={TambahComp} />
        <Route exact path="/mahasiswa/edit" component={EditComp} />
        <Route exact path="/kelas" component={KelasComp} />
        <Route exact path="/hooks" component={HooksComp} />
        <Route exact path="/useeffect" component={HooksUseEffect} />
        <Route exact path="/produk" component={ProductComp} />
        <Route exact path="/reducer" component={HooksReducer} />
        <Route exact path="/tagihan" component={Tagihan} />

        
      </Switch>
      {/* </keranjangContext.Provider> */}
      {/* </CartContext.Provider> */}

    </BrowserRouter>

  );
}

export default App;
