import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";

const App = () => {

    const dispatch = useDispatch();



    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart}/>
            </div>
        </div>
    )
}

export default App;
