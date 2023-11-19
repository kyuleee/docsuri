import "./SideBar.css";
import {Link} from 'react-router-dom';
import nav1 from '../../asset/img/책.png';
import nav2 from '../../asset/img/작성아이콘.png';

const SideBar = ()=>{
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <div className='icon'>
                            <img src={nav1}/>
                        </div>
                        <p>교과 학습</p>
                    </li>
                    <li>
                        <div className='icon'>
                            <img src={nav2}/>
                        </div>
                        <p>챌린지</p>
                    </li>
                    <li>
                        <div className='icon'>MY</div>
                        <p>마이페이지</p>
                    </li>
                    <li>
                        <div className='icon'>FAQ</div>
                        <p>자주하는 질문</p>
                    </li>
                </ul>
            </nav>
        </>
    );

}
export default SideBar;