import React from 'react';
import logo from './logo.svg';
import NoteTaker from './components/NoteTaker';

import {
    BrowserRouter as Router,
} from "react-router-dom";

function App() {
    return (

        <Router>
            <div className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap">
                    <img src={logo} width="36" alt="Note Me Down" /></a>
                <div className="logo">     </div>
            </div>


            <div className="container">
                <form>
                    <NoteTaker />
                </form>
            </div>
        </Router>

    );
}

export default App;
