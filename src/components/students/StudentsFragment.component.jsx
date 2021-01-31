import React, { Component } from 'react';
import AddStudent from './addStudent.component';
import SearchPanel from './SearchPanel.component'
import StudentList from './StudentList.component';

class StudentFragment extends Component {
    constructor(props) {
        super(props);
        this.state = { //TODO: load student info
            students:[{registrationNumber:"2016-914-412",name:"Md. Iftakher Ahmad",department:"CSE",session:"2016-17",isResident:"Yes",pictureUrl:"",bloodGroup:"B+"}],
            addAStudent:true,
        }
    }
    onCloseStudentAdding=()=>{
        this.setState({addAStudent:false})
    }
    onChangeFilter=(query)=>{
        console.log(query)
    }
    render() { 
        return ( 
            <div>
                <div className="search_panel2">
                    <SearchPanel onChangeFilter={this.onChangeFilter}/>
                    <StudentList students={this.state.students}/>
                    {(this.state.addAStudent===true)?<AddStudent onClose={this.onCloseStudentAdding}/>:""}
                </div>
            </div>
         );
    }
}
 
export default StudentFragment;