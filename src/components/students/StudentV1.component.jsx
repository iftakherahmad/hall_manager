import './studentV1.css'
import unknown from '../../images/unkk.png'

function StudentV1(props) {
    console.log(props)

    return (
        <div className="wrapper_9">
            <div className="imgc_9">
                <img className="img_9" src={(props.student.pictureUrl==="")?unknown:props.student.pictureUrl} alt="picture"/>
            </div>
            <div className="separator_9"></div>
            <div className="nameC_9">
                <h5 className="name_9">{props.student.name}</h5>
            </div>
            <div className="separator_9"></div>
            <div className="nameC_9">
                <h5 className="dept_9">{props.student.department}</h5>
            </div>
            <div className="separator_9"></div>
            <div className="nameC_9">
                <h5 className="session_9">{props.student.session}</h5>
            </div>
            <div className="separator_9"></div>
            <div className="nameC_9">
                <h5 className="registration_9">{props.student.registrationNumber}</h5>
            </div>
            <div className="separator_9"></div>
            <div className="nameC_9">
                <h5 className="bgrp_9">{props.student.bloodGroup}</h5>
            </div>
            <div className="separator_9"></div>

            <div className="btnC_9">
                <button className="btn_9">DETAILS</button>
            </div>

        </div>
    )
}

export default StudentV1;