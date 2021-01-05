import React, { Component } from 'react';
import Navbar from './navbar/Navbar.component';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Router>
                    <Navbar/>
                </Router>
            </div>
         );
    }
}
 
export default HomePage;