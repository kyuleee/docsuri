import './Progress.css';
import { Link } from 'react-router-dom';

const Progress = (props) => {
    return (
        <li className='progressItem'>
            <div className='leftBox'>
                <div>
                    <Link to='/StudyPage'>
                        <img src={process.env.PUBLIC_URL + '/img/paper.jpg'} alt='paper icon' />
                    </Link>
                </div>
                <div>
                    <Link to='/StudyPage'>
                        <p>{props.title}</p>
                        <p>이동 &gt;</p>
                    </Link>
                </div>
            </div>
            <div>{props.progress}</div>
        </li>

    );
}



export default Progress;