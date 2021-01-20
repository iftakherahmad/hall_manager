
import unknown from '../../images/unkk.png';
import './studentV2.css'

function StudentV2(props) {
    

    return (
        <div className="wrapper_10">
            <div className="imgC_10">
                <img className="img_10" src={(props.student.pictureUrl==="")?unknown:props.student.pictureUrl}/>
            </div>
            <div className='seperator_10'></div>
        </div>
    )
}

export default StudentV2;