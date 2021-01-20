import React, { Component } from 'react';
import './login.css';
import {Link} from 'react-router-dom'
import unknown from '../../images/unknown.svg'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            credentials:{
                registration_number:"",
                password:""
            }
        }
    }
    onChangeRegistrationNo=(e)=>{
        this.state.credentials.registration_number=e.target.value;
    }
    onChangePassword=(e)=>{
        this.state.credentials.password=e.target.value;
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() { 
        return ( 
            <div>
                <div className="back-groundL">
                <marquee behavior='alternate' className='mark11L'>Welcome to Amar Ekushey Hall, University of Dhaka</marquee>
                </div>
                <div className="container-divL">
        
                    <div className="rounded-picL"><img src={unknown}/></div>
                    <div className="form-containerL"> 
                        <form onSubmit={this.onSubmit}>
                            <label className='labelL'> Registration Number:</label>
                            <br/>
                            <input required type='text' onChange={this.onChangeRegistrationNo} className='inputL' placeholder="enter registration number"/>
                            <br/>
                            <label className="labelL">Password:</label>
                            <br/>
                            <input required type='password' onChange={this.onChangePassword} className='inputL' placeholder="enter password"/>
                            <br/>
                            <input type='submit' value="Login" className='submitL'/>
                            <br/>
                            <div className="reggL">Don't have any account?<br></br> Register <Link to='/signup'>here.</Link></div>
                        </form>
                    </div>

                </div>
            </div> 
        );
    }
}
 
export default Login;