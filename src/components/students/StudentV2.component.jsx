
import unknown from '../../images/unkk.png';
import './studentV2.css'

let process_name=(name,lim=15)=>{
    if(name.length>lim){
        name=name.substr(name,lim)
        name+="..."
    }
    return name;
}


function StudentV2(props) {
    
    
    return (
        <div className="wrapper_10">
            <div className="imgC_10">
                <img className="img_10" src={(props.student.pictureUrl==="")?unknown:props.student.pictureUrl}/>
            </div>
            <div className='seperator_10'></div>
            <div className="cont_10">
                <div className="name_10">{process_name(props.student.name,20)}</div>
                <div className="info_10">
                    <div className="dept_10">
                        {process_name(props.student.department,12)}
                    </div>
                    <div className='session_10'>{props.student.session}</div>
                    <div className="details_10">
                        <button className="btn_10">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentV2;