import React, { Component } from 'react';
import './searchPanel.css'
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            resindentStates:["RESIDENTIAL","NON RESIDENTIAL","BOTH"],
            departments:["ALL DEPARTMENT","CSE","EEE","PHYSICS","CHEMISTRY","MATH","RME","NE","MICROBIOLOGY","GENETICS","PHARMACY"],
            sessions:["ALL SESSION","2010-11","2011-12","2012-13","2013-14","2014-15","2015-16","2016-17","2017-18","2018-19","2019-20","2020-21","2021-22"],
            bloodGroups:["ALL BLOOD GROUP","O+","O-","A+","A-","B+","B-","AB+","AB-"],
            resindentState:"RESIDENTIAL",
            department:"ALL DEPARTMENT",
            session:"ALL SESSION",
            bloodGroup:"ALL BLOOD GROUP"

         }
    }
    formQuery=()=>{
        return {
            session:this.state.session,
            department:this.state.department,
            bloodGroup:this.state.bloodGroup,
            resindentState:this.state.resindentState
        }
    }
    onClickReset=(e)=>{
        let newState={
            resindentState:"RESIDENTIAL",
            department:"ALL DEPARTMENT",
            session:"ALL SESSION",
            bloodGroup:"ALL BLOOD GROUP"
        }
        this.setState(newState);
        this.props.onChangeFilter(this.formQuery());
    }
    onChangeSession=(e)=>{
        this.state.session=e.target.value;
        this.setState({session:e.target.value})
        this.props.onChangeFilter(this.formQuery());
    }
    onChangeDepartment=(e)=>{
        this.state.department=e.target.value;
        this.setState({department:e.target.value})
        this.props.onChangeFilter(this.formQuery());
    }
    onChangeResident=(e)=>{
        this.state.resindentState=e.target.value;
        this.setState({resindentState:e.target.value})
        this.props.onChangeFilter(this.formQuery());
    }
    onChangeBloodGroup=(e)=>{
        this.state.bloodGroup=e.target.value;
        this.setState({bloodGroup:e.target.value})
        this.props.onChangeFilter(this.formQuery());
    }
    render() { 
        return ( 
            <div className="panel3">
                <div>Filter Students Here:</div>
                <div className="panelCont3">
                    
                    <select className="dropdown3" value={this.state.session} onChange={this.onChangeSession}>
                        {this.state.sessions.map((item)=>{return <option value={item}>{item}</option>})}
                    </select>
                    <select className="dropdown3" value={this.state.department} onChange={this.onChangeDepartment}>
                        {this.state.departments.map((item)=>{
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                    <select className="dropdown3" value={this.state.resindentState} onChange={this.onChangeResident}>
                        {this.state.resindentStates.map((item)=>{
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                    <select className="dropdown3" value={this.state.bloodGroup} onChange={this.onChangeBloodGroup}>
                        {this.state.bloodGroups.map((item)=>{
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                    <button onClick={this.onClickReset} className="btn-primary btn reset-btn3">Reset Filters</button>
                </div>
            </div>
         );
    }
}
 
export default SearchPanel;