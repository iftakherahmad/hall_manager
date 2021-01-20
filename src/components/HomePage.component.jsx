import React, { Component } from 'react';
import Navbar from './navbar/Navbar.component';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Login from './accounts/login.component'
import Signup from './accounts/signup.component';
import StudentList from './students/StudentList.component';
import StudentFragment from './students/StudentsFragment.component';
import './home.css'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Router>
                    <div className='home5'><Navbar/></div>
                    <div className='fragment5'>
                        <Route path="/signin" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path='/students' component={StudentFragment}/>
                    </div>
                    
                </Router>
            </div>
         );
    }
}
 
export default HomePage;