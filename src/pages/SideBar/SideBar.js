import "./SideBar.css";
import {Link} from 'react-router-dom';
import nav1 from '../../asset/img/책.png';
import nav2 from '../../asset/img/작성아이콘.png';

const SideBar = ()=>{
    return(
        <>
            <nav className="SideBar">
                <ul>
                    <li>
                        <div className='icon icon1'>
                            <img src={nav1}/>
                        </div>
                        <p>교과 학습</p>
                    </li>
                    <Link to='/Challenge'> <li>
                        <div className='icon icon2'>
                            <img src={nav2}/>
                        </div>
                        <p>챌린지</p>
                    </li></Link>
                    <li>
                        <div className='icon icon4'><p className="faq">FAQ</p></div>
                        <p>자주하는 질문</p>
                    </li>
                    <li>
                        <div className='icon icon5'><p className="su">수</p></div>
                        <p>수다학</p>
                    </li>
                </ul>
            </nav>
        </>
    );

}
export default SideBar;