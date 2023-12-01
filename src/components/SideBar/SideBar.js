import "./SideBar.css";
import { Link } from 'react-router-dom';
import nav1 from '../../asset/img/책.png';
import nav2 from '../../asset/img/작성아이콘.png';

const SideBar = () => {
    return (
        <>
            <nav className="SideBar">
                <ul>
                    <Link to='/StudyPage'>
                        <li>
                            <div className='icon icon1'>
                                <img src={nav1} />
                            </div>
                            <p className="stuMenu">교과 학습</p>
                        </li>
                    </Link>
                    <Link to='/Challenge'> <li>
                        <div className='icon icon2'>
                            <img src={nav2} />
                        </div>
                        <p className="challMenu">챌린지</p>
                    </li></Link>
                    <Link to='/notification'>
                        <li>
                            <div className='icon icon4'><p className="faq">COM</p></div>
                            <p>커뮤니티</p>
                        </li>
                    </Link>
                    <Link to='/sudahark'>
                        <li>
                            <div className='icon icon5'><p className="su">수</p></div>
                            <p>수다학</p>
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    );

}
export default SideBar;