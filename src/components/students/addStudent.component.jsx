import React, { Component } from 'react';
import unknown from '../../images/unkk.png'
import './addStudent.css'

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            departments:["CSE","EEE","PHY","MATH","CHEM"], //TODO: load list of department
            sessions:["2011-12","2012-13","2013-14","2014-15","2015-16","2016-17"],//TODO: calculate sessions
            isResident:false,
            bloodGroups:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
            bucket:{
                name:"",
                registrationNumber:"",
                department:'',
                session:'',
                profilePicUrl:'',
                bloodGroup:'',
                phoneNo:'',
                email:'',
                isResident:'No',
                roomNo:'',
                bodingCardNo:'',
                residentialUpto:''
            }
        }
    }
    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.bucket)
    }
    onChangeName=(e)=>{
        this.state.bucket.name=e.target.value;
    }
    onChangeRegistrationNumber=(e)=>{
        this.state.bucket.registrationNumber=e.target.value;
    }
    onChangeDepartment=(e)=>{
        this.state.bucket.department=e.target.value;
    }
    onChangeSession=(e)=>{
        this.state.bucket.session=e.target.value
    }
    onChangeBloodGroup=(e)=>{
        this.state.bucket.bloodGroup=e.target.value;
    }
    onChangeEmail=(e)=>{
        this.state.bucket.email=e.target.value;
    }
    onChangePhoneNumber=(e)=>{
        this.state.bucket.phoneNo=e.target.value;
    }
    onChangeRoomNumber=(e)=>{
        this.state.bucket.roomNo=e.target.value;
    }
    onChangeBodingCardNumber=(e)=>{
        this.state.bucket.bodingCardNo=e.target.value;
    }
    onChangeResidentialUpto=(e)=>{
        this.state.bucket.residentialUpto=e.target.value;
    }
    onChangeRadio=(choice)=>{
        if(choice==="No"){
            this.state.bucket.isResident="No"
            this.setState({isResident:false})
        }
        else{
            this.state.bucket.isResident="Yes"
            this.setState({isResident:true})
        }
    }

    render() { 
        return ( 
            <div className="wrapper_15">
                <div className='cross_15'><i onClick={this.props.onClose} className="fa fa-times cst_15" aria-hidden="true"></i></div>
                <div className='profile_pic_15'>
                    <img src={unknown} className='profile_pic_15'/>
                </div>
                <form onSubmit={this.onSubmit} className='left_15'>
                    <div>
                        <div className='name_label_15'>
                            Name:
                        </div>
                        <div className='name_input_15'>
                            <input onChange={this.onChangeName} required className='input_15' type='text' placeholder='enter name'/>
                        </div>
                        <div className='reg_no_label_15'>
                            Registration Number:
                        </div>
                        <div className='reg_no_input_15'>
                            <input onChange={this.onChangeRegistrationNumber} required className='input_15' type='text' placeholder='enter registration number'/>
                        </div>
                        <div className='department_label_15'>
                            <div>Department</div>
                            <div>
                                <select onChange={this.onChangeDepartment} className='department_15'>
                                    {this.state.departments.map((item)=>(<option>{item}</option>))}
                                </select>
                            </div>
                            
                        </div>
                        <div className='session_label_15'>
                            <div>Session:</div>
                            <div>
                                <select onChange={this.onChangeSession} className='department_15'>
                                    {this.state.sessions.map((item)=>(<option>{item}</option>))}
                                </select>
                            </div>
                           
                        </div>
                        <div className='session_label_15'>
                            <div>Blood Group:</div>
                            <div>
                                <select onChange={this.onChangeBloodGroup} className='department_15'>
                                    {this.state.bloodGroups.map((item)=>(<option>{item}</option>))}
                                </select>
                            </div>
                           
                        </div>
                        <div className='email_label_15'>
                            Email:
                        </div>
                        <div>
                            <input onChange={this.onChangeEmail} required className='input_15' type='email' placeholder='enter image'/>
                        </div>
                        <div className='phone_label_15'>
                            Phone Number:
                        </div>
                        <div>
                            <input onChange={this.onChangePhoneNumber} className="phone_15 input_15" type="text" placeholder="enter phone"/>
                        </div>
                        <div>
                            IsResidential:
                            <input checked={(this.state.isResident===false)?true:false} className='radio_15' onChange={()=>{this.onChangeRadio("No")}} name='resident' type='radio' className='no_15'/>No
                            <input checked={(this.state.isResident===true)?true:false} className='radio_15' onChange={()=>{this.onChangeRadio("Yes")}} name="resident" type="radio" className="yes_15"/>Yes
                            
                        </div>
                        <div style={(this.state.isResident===false)?{display:'none'}:{display:'block'}}>
                            <div className='room_no_label_15'>
                                Room Number:<br/>
                                <input onChange={this.onChangeRoomNumber} required={(this.state.isResident===true)?true:false} className='input_15 room_no_input_15' type='text' placeholder='enter room no'/>
                            </div>
                            <div className='boding_card_label_15'>
                                Boding Card Number:<br/>
                                <input onChange={this.onChangeBodingCardNumber} required={(this.state.isResident===true)?true:false} className='boding_card_15 input_15' type='number' min={0} placeholder='enter boding card no'/>
                            </div>
                            <div className='residential_upto_15'>
                                Residential Upto:
                                
                                <input onChange={this.onChangeResidentialUpto} required={(this.state.isResident===true)?true:false} type='date' className='date_15' />
                            </div>
                            
                        </div>
                        <input type='submit' value='Add' className='submit_15'/>
                    </div>
                    


                </form>
                
                
            </div>
         );
    }
}
 
export default AddStudent;