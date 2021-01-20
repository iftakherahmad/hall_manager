import React, { Component } from 'react';
import './signup.css';
import {Link} from 'react-router-dom'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            credentials:{
                registration_number:"",
                password:"",
                name:"",
                picture:"",
                isResident:"No",
                bodingCardNo:"",
                phone:"",
                email:"",
            },
            confirmPassword:""

        }
    }
    onChangePhone=(e)=>{
        this.state.credentials.phone=e.target.value;
    }

    onChangeName=(e)=>{
        this.state.credentials.name=e.target.value;
    }
    onChangeEmail=(e)=>{
        this.state.credentials.email=e.target.value;
    }
    onChangeRegistrationNo=(e)=>{
        this.state.credentials.registration_number=e.target.value;
    }
    onChangePassword=(e)=>{
        this.state.credentials.password=e.target.value;
    }
    onChangeConfirmPassword=(e)=>{
        this.state.confirmPassword=e.target.value;
    }
    onChangeRadio=(e)=>{
        let credential_clone=JSON.parse(JSON.stringify(this.state.credentials));
        credential_clone.isResident=e.target.value;
        this.setState({credentials:credential_clone});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    onChangeBodingNo=(e)=>{
        this.state.credentials.bodingCardNo=e.target.value;
    }
    render() { 
        return ( 
            <div>
                <div className="back-ground">
                <marquee behavior='alternate' className='mark11'>Welcome to Amar Ekushey Hall, University of Dhaka</marquee>
                </div>
                <div className="container-div">
                    <div className="form-container"> 
                        <form onSubmit={this.onSubmit}>
                            <input required type='text' onChange={this.onChangeRegistrationNo} className='input' placeholder="Registration Number"/>
                            <br/>
                            <input required type='text' onChange={this.onChangeName} className='input' placeholder="Name"/>
                            <br/>
                            <input required type='phone' onChange={this.onChangePhone} className='input' placeholder="Phone Number"/>
                            <br/>
                            <input type='email' onChange={this.onChangeEmail} className='input' placeholder="Email"/>
                            <br/>
                            <input required type='password' onChange={this.onChangePassword} className='input' placeholder="Password"/>
                            <br/>
                            <input required type='password' onChange={this.onChangeConfirmPassword} className='input' placeholder="Confirm Password"/>
                            <br/>
                            <pre className='label'>
                            <label className='label'>{'Is Residential?'} </label>{'  '}
                            <input type="radio" name='resident' value="Yes" onChange={this.onChangeRadio}/>Yes   <input name='resident' type="radio" value="No" checked={(this.state.credentials.isResident==="No")?true:false} onChange={this.onChangeRadio}/>No         </pre>
                            <input required={(this.state.credentials.isResident==="Yes")?true:false} style={{display:(this.state.credentials.isResident==="Yes")?"inline":"none"}} type='number' className='input' onChange={this.onChangeBodingNo} placeholder="Boding Card No"/>
                            <br/>
                            <input type='submit' value="Sign Up" className='submit'/>
                            <br/>
                
                        </form>
                    </div>

                </div>
            </div> 
        );
    }
}
 
export default Signup;