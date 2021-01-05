import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from '../../images/du-logo.png';
import './navbar.css'
import 'font-awesome/css/font-awesome.min.css'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './Navbar.elements';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loggedIn:false,
           
        }
    }
    render() { 
        return ( 
        <>
            <Nav>
              <NavLink to='/'>
                <img className="logo" src={logo} alt='logo' />
              </NavLink>
              <Bars />
              <NavMenu>
                <NavLink to='/home' activeStyle>
                  Home
                </NavLink>
                <NavLink to='/notices' activeStyle>
                  Notices
                </NavLink>
                <NavLink to='/events' activeStyle>
                  Events
                </NavLink>
                <div>
                  <div className='custom-btn1'>Facilities
                  <i className="icn-cm fa fa-caret-down"/>
                  </div>
                  <div className='dropdown-content'>
                    <div className="aligner"></div>
                    <div className="drop-btn1">
                      <NavLink to='/dyning'>Dyning</NavLink>
                    </div>
                    <div className='separator'></div>
                    <div className="drop-btn1">
                      <NavLink to='/library'>Library</NavLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='custom-btn1'>
                    Personnels
                    <i className="icn-cm fa fa-caret-down"/>
                  </div> 
                  <div className='dropdown-content'>
                    <div className="aligner"></div>
                    <div className="drop-btn1">
                      <NavLink to='/students'>Students</NavLink>
                    </div>
                    <div className='separator'></div>
                    <div className="drop-btn1">
                      <NavLink to='/stuffs'>Stuffs</NavLink>
                    </div>
                    <div className='separator'></div>
                    <div className="drop-btn1">
                      <NavLink to='/house-tutors'>House Tutors</NavLink>
                    </div>
                    <div className='separator'></div>
                    <div className="drop-btn1">
                      <NavLink to='/hall-songsod'>DUCSU Members</NavLink>
                    </div>
                  </div>
                </div>
                
              </NavMenu>
              <NavBtn>
               { (!this.state.loggedIn)?<NavBtnLink to='/signin'>Sign In</NavBtnLink>:"short profile"}
              </NavBtn>
            </Nav>
        </>
        
        );
    }
}
 
export default Navbar;