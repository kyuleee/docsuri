import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Header.css';
const Header = () => {
    // 서브메뉴 나오게하기
    const [subNavVisible, setSubNavVisible] = useState(false);
  
    const toggleSubNav = () => {
      setSubNavVisible(!subNavVisible);
    };
  
    
    return ( 
        <div className="Header">
            <div className="headerCont">
                <Link to='/'><div className="logo"></div></Link>
                <div>
                    <div className="loginIcon"></div>
                    <div className="menuBar" onClick={toggleSubNav}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            <div className={`subNav ${subNavVisible ? 'visible' : ''}`}>
                <div className="subMenu">
                    <h2>MENU</h2>
                    <div className="close" onClick={toggleSubNav}></div>
                </div>
                <div className="subLink">
                    <div><Link to='/StudyPage'>교과학습</Link></div>
                    <div><Link to='/Challenge'>챌린지</Link></div>
                    <div><Link to='notification'>게시판</Link></div>
                    <div>수다학</div>
                </div>
                <div className="login">
                    <Link to='/login'>
                        <p>로그인</p>
                        <p>|</p>
                        <p>회원가입</p>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Header ;