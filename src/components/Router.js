import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Navigation from './Navigation';

class Router extends Component {
    state = {  }
    render() { 
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header/>
                        <Navigation/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default Router;