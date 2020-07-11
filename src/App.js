import React from 'react';
import logo from './logo.svg';
import NoteTaker from './components/NoteTaker';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (

        <Router>
            <div class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <a class="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap"><img src={logo} width="36" /></a>
                <div className="logo">     </div>
            </div>


            <div class="container">
                <form>
                    <NoteTaker />
                </form>
            </div>
        </Router>

    );
}

export default App;
