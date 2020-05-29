import React, { Component } from 'react'
import './App.css';
import Navbar from './layout/Navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom";

import kapasok from "./dashboard/kapasok";
import osszeskapas from "./dashboard/osszeskapas";
import sajatkapasok from "./dashboard/sajatkapasok";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div >
                <Navbar/>
                <Switch>
                    <Route exact path="/dashboard/osszeskapas" component={osszeskapas}/>
                    <Route exact path="/dashboard/sajatkapasok" component={sajatkapasok}/>
                    <Route exact path="/" component={kapasok}/>

                </Switch>

                </div>
            </BrowserRouter>
        );
    }
}




export default App;


